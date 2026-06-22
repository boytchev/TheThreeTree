
/*
 * The Three Tree - Main script
 */



// imports from Three.js

import * as THREE from 'three';
import { positionGeometry, positionWorld } from 'three/tsl';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from 'three/addons/libs/stats.module.js';

// imports from D3 (stored locally)

import { tree as d3tree, hierarchy, packEnclose, packSiblings } from './vendor/d3-hierarchy.js';

// imports from other TTT modules

import { tree } from "./data/data.js";
import { createBulbInstances } from "./bulbs.js";
import { Label, labelMaterialDimmed, labelMaterialNormal, labelMaterialSelected, labels } from "./labels.js";
import { instanceWorldPositionNode, stripes, sway, SWAY_ENABLED } from "./tsl.js";



const SHOW_STATS = false;

const CIRCLE_PACKING = true; // supported
const CHIMNEY_PACKING = !CIRCLE_PACKING; // not supported


var urlParams = new URLSearchParams( document.location.search );
var filterName = urlParams.get( 'show' );
var cameraPos = urlParams.get( 'camera' );
var targetPos = urlParams.get( 'target' );

try {

	if ( cameraPos ) cameraPos = cameraPos.split( ',' ).map( e => Number( e ) );
	if ( targetPos ) targetPos = targetPos.split( ',' ).map( e => Number( e ) );

	if ( cameraPos.length != 3 || isNaN( Math.max( ...cameraPos ) ) ) cameraPos = null;
	if ( targetPos.length != 3 || isNaN( Math.max( ...targetPos ) ) ) targetPos = null;

} catch {

	cameraPos = null;
	targetPos = null;

}

console.log( cameraPos, targetPos );

/*
 * Scene setup
 */

var loadingElem = document.getElementById( 'loading' );

var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );

document.body.appendChild( renderer.domElement );
document.body.style.overflow = 'hidden';
document.body.style.margin = '0';

var scene = new THREE.Scene();
scene.background = new THREE.Color( 'gainsboro' );

var camera = new THREE.PerspectiveCamera( 30, innerWidth/innerHeight, 0.1, 5000 );
if ( cameraPos )
	camera.position.set( ...cameraPos );
else
	camera.position.set( 0, 180, 600 );

scene.add( camera );

var light = new THREE.DirectionalLight( 'white', 0 );
light.position.set( 0, 140, 0 );
scene.add( light );

var cameraLightTarget = new THREE.Object3D();
scene.add( cameraLightTarget );

var cameraLight = new THREE.DirectionalLight( 'white', 1 );
cameraLight.target = cameraLightTarget;
scene.add( cameraLight );

var controls = new OrbitControls( camera, renderer.domElement );
controls.zoomSpeed = 10;
controls.enableDamping = true;
if ( targetPos )
	controls.target.set( ...targetPos );
else
	controls.target.set( 0, 180, 50 );

// automatic reactivation of rendering

var endTimer = performance.now();

function reanimate( period = 500 ) {

	endTimer = performance.now() + period;
	renderer.setAnimationLoop( animationLoop );

}

controls.addEventListener( 'change', () => {

	//console.log('camera',...camera.position,'\ntarget',...controls.target);

	labels.update( camera.position );

	reanimate( );

} );

controls.cursorStyle = 'grab';

window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth/innerHeight;
	camera.updateProjectionMatrix( );
	renderer.setSize( innerWidth, innerHeight );

	reanimate( );

} );

var stats = new Stats();
if ( SHOW_STATS ) document.body.appendChild( stats.dom );



// for debug purposes - measuring performance in the console

var timer = performance.now();

function showTimer( msg ) {

	console.log( msg, Math.round( performance.now()-timer ), 'ms' );

	timer = performance.now();

}



/*
 * Materials of bulbs and links
 */

var nodeMaterial = new THREE.MeshPhysicalNodeMaterial( {
	roughnessNode: 0.5,
	metalnessNode: 0.2,
	clearcoatNode: 1,
	clearcoatRoughnessNode: 0.2,
	metalnessNode: stripes(),
} );

var linkMaterial = new THREE.MeshPhysicalNodeMaterial( {
	roughnessNode: 0.5,
	metalnessNode: 0.2,
	clearcoatNode: 1,
	clearcoatRoughnessNode: 0.2,
	vertexColors: true,
} );

if ( SWAY_ENABLED ) {

	nodeMaterial.positionNode = sway( positionWorld, instanceWorldPositionNode.add( positionGeometry ) );
	linkMaterial.positionNode = sway( positionWorld, positionWorld );

}



/*
 * Step 1: preparation of data
 */

var flatTree = [];

// generate flat tree and initialize nodes

function prepare( node ) {

	flatTree.push( node );

	node.radius = 0;
	node.level = 1;
	node.name = node.entity?.name||node.entity;

	if ( filterName ) {

		node.color = new THREE.Color( 'white' ).multiplyScalar( 3 );
		node.labelColor = labelMaterialDimmed;

		if ( node.name.toUpperCase().indexOf( ( filterName+'' ).toUpperCase() )>=0 ) {

			node.color = new THREE.Color( 'crimson' ).multiplyScalar( 3 );
			node.labelColor = labelMaterialSelected;

		}

	} else {

		node.color = new THREE.Color( ).set( 3*Math.random(), 3*Math.random(), 3*Math.random() );
		node.labelColor = labelMaterialNormal;

	}



	node.position = new THREE.Vector3( 0, 0, 0 );
	node.isEntity = Object.hasOwn( node.entity, 'type' );

	node.isTopBulb = false;
	node.isMidBulb = false;
	node.bulbIndex = null;

	if ( node.isEntity ) {

		if ( node.children.length == 0 )
			node.isTopBulb = true;
		else
			node.isMidBulb = false;

	}

	node.children.forEach( e => prepare( e ) );

}

prepare( tree );



// fix all objects with missing materials

function fixMaterials( node, material ) {

	if ( node.material == null ) node.material = material;

	node.children.forEach( e => fixMaterials( e, node.material ) );

}

fixMaterials( tree, nodeMaterial );

showTimer( '1. Preparing' );



/*
 * Step 2: Circle packing / AI assisted
 */

function circlePacking( d3node ) {

	const PADDING = 1.5;

	var root = hierarchy( d3node );

	// Bottom-Up Pass: Compute tight child positions and local enclosures

	root.eachAfter( d3node => {

		if ( !d3node.children ) {

			d3node.r = 1 + PADDING; // leaf radius 1

		} else {

			d3node.children.sort( ( a, b ) => b.r - a.r );
			packSiblings( d3node.children );

			var enclosure = packEnclose( d3node.children );
			d3node.r = enclosure.r + PADDING;

			// center child nodes within parent

			d3node.children.forEach( child => {

				child.x -= enclosure.x;
				child.y -= enclosure.y;

			} );

		}

	} );

	// Top-Down Pass: Convert relative local coordinates into global 3D space positions

	root.x = 0;
	root.y = 0;

	root.eachBefore( d3node => {

		if ( d3node.parent ) {

			d3node.x += d3node.parent.x;
			d3node.y += d3node.parent.y;

		}

	} );

	root.descendants().forEach( d3node => {

		var node = d3node.data;

		node.position.x = d3node.x;
		node.position.z = d3node.y;
		node.level = d3node.height+1;
		node.elevation = d3node.depth;
		node.radius = d3node.r;

	} );

}



/*
 * Chimney packing / AI assisted
 */

function chimneyPacking( node ) {

	var treeLayout = d3tree().size([ 2*Math.PI, 100 ]); // [width, height]

	var root = hierarchy( node );
	treeLayout( root );

	var r = 300;

	root.descendants().forEach( e=> {

		var parent = e.data.group.parent;
		scene.attach( e.data.group );
		e.data.group.position.set( r*Math.sin( e.x ), e.y, r*Math.cos( e.x ) );
		parent.attach( e.data.group );

	} );

}



if ( CIRCLE_PACKING ) circlePacking( tree );
if ( CHIMNEY_PACKING ) chimneyPacking( tree );

showTimer( '2. Packing' );



/*
 * Step 3: Creating bulbs
 */

// count bulbs

var bulbCounts = [];

flatTree.forEach( node => {

	if ( node.isEntity ) {

		var index = node.children.length>0 ? index = node.level : 1;

		bulbCounts[ index ] = bulbCounts[ index ]||0;

		node.bulbIndex = bulbCounts[ index ]++;

	}

} );

// create instances of color bulbs

var bulbs = createBulbInstances( bulbCounts, nodeMaterial );

flatTree.forEach( node => {

	if ( node.isEntity ) {

		bulbs[ node.level ].setColorAt( node.bulbIndex, node.color );
		bulbs[ node.level ].instanceColor.needsUpdate = true;

	}

} );

// calculate bulbs positions


var mat = new THREE.Matrix4();

function calculateBulbPositions( node, baseY ) {

	node.position.y = baseY;

	if ( node.isEntity ) {

		mat.setPosition( node.position );
		bulbs[ node.level ].setMatrixAt( node.bulbIndex, mat );

	}

	node.children.forEach( e => calculateBulbPositions( e, baseY+( node.level**0.5-1 )*4+e.position.manhattanDistanceTo( node.position )**0.35+( node.level+node.children.length )*( 1+Math.random() )+8*Math.random() ) );

}

calculateBulbPositions( tree, 0 );

// add instances to scene

bulbs.forEach( e => {

	if ( e ) scene.add( e );

} );

showTimer( '3. Bulbing' );



/*
 * Step 4: Creating links
 */

function linking( node=tree ) {

	if ( node.level<2 ) return;

	var n = node.children.length;

	// position of parent end of a link (bottom end)

	var posA = node.position.clone();
	if ( node.isEntity ) posA.y += node.level*13.4/8;

	for ( var i=0; i<n; i++ ) {

		linking( node.children[ i ]);

		// position of child end of a link (top end)

		var posB = node.children[ i ].position.clone();
		if ( node.children[ i ].isEntity ) posB.y -= node.children[ i ].level*13.4/8;

		// smooth curve from parent to child

		if ( node.radius<1000 || node.isBulb ) {

			var curve = new THREE.CubicBezierCurve3(
				new THREE.Vector3( posA.x, posA.y, posA.z ),
				new THREE.Vector3( posA.x, ( posA.y+posB.y )/2, posA.z ),
				new THREE.Vector3( posB.x, ( posA.y+posB.y )/2, posB.z ),
				new THREE.Vector3( posB.x, posB.y, posB.z ),
			);


		} else {

			// this section is currently unused, because of node.radius<1000

			var curve = new THREE.CubicBezierCurve3(
				new THREE.Vector3( ( posB.x+posB.x )/2, posA.y, ( posB.z+posB.z )/2 ),
				new THREE.Vector3( ( posB.x+posB.x )/2, ( posA.y+posB.y )/2, ( posB.z+posB.z )/2 ),
				new THREE.Vector3( posB.x, ( posA.y+posB.y )/2, posB.z ),
				new THREE.Vector3( posB.x, posB.y, posB.z ),
			);

		}

		// create tube geometry along the curve

		var geometry = new THREE.TubeGeometry( curve, 50, 0.1, 10, false );

		// ensure smooth transition from parent radius and color
		// to child radius and color

		var pos2 = geometry.getAttribute( 'position' ),
			nor2 = geometry.getAttribute( 'normal' ),
			uv2 = geometry.getAttribute( 'uv' );

		geometry.setAttribute( 'color', pos2.clone() );

		var col2 = geometry.getAttribute( 'color' );

		// radii at both ends

		var fromRad = 0.1*node.level,
			toRad = 0.1*node.children[ i ].level;

		// colors at both ends

		var fromCol = node.color;
		var toCol = node.children[ i ].color;

		// set radius and color transition

		for ( var j=0; j<pos2.count; j++ ) {

			var k = THREE.MathUtils.mapLinear( uv2.getX( j ), 1, 0, toRad-0.1, fromRad-0.1 );
			var x = pos2.getX( j )+k*nor2.getX( j ),
				y = pos2.getY( j )+k*nor2.getY( j ),
				z = pos2.getZ( j )+k*nor2.getZ( j );
			uv2.setXY( j, uv2.getY( j ), uv2.getX( j ) );
			pos2.setXYZ( j, x, y, z );

			var col = new THREE.Color().lerpColors( fromCol, toCol, THREE.MathUtils.clamp( THREE.MathUtils.mapLinear( uv2.getY( j ), 0, 1, 0-1/2, 1+1/2 ), 0, 1 ) );
			col2.setXYZ( j, ...col );

		}

		// finally the mesh can be create

		var mesh = new THREE.Mesh( geometry, linkMaterial );
		mesh.frustumCulled = false;
		mesh.autoUpdateMatrix = false;

		scene.add( mesh );

	}

}

linking( tree );

showTimer( '4. Linking' );



/*
 * Step 5: Creating labels - this is distributed across many frames
 * until all labels are created, each frame creates as many labels, ^..^
 * as the FPS stays around 30 fps. Report that the step is completed
 * when 10% of the labels are created.
 */

var lastTime;
var ready = false;

function* labeling() {

	"use strict";


	flatTree.sort( ( a, b )=>b.level-a.level );

	lastTime = performance.now();

	for ( var i=0; i<flatTree.length; i++ ) {

		var node = flatTree[ i ];

		node.label = new Label( node.name, node.isEntity?4+3.5*node.level:3, node.labelColor );

		node.label.position.copy( node.position );
		scene.add( node.label );

		if ( i == Math.round( flatTree.length*0.1 ) ) showTimer( '5. Labeling' );

		var newTime = performance.now();
		if ( newTime-lastTime > 1000/30 ) {

			reanimate( );
			lastTime = newTime;
			yield;

		}

	}

	reanimate( );

	labels.update( camera.position );

	showTimer( '6. Ready' );
	ready = true;

}

var labeler = labeling();



/*
 * Main loop
 */

reanimate( 10000 );

renderer.setAnimationLoop( animationLoop );

var frameNo = 0;

function animationLoop( /*time*/ ) {

	try {

		frameNo++;

		// at frame 10 activate fading of main page "loading"

		if ( frameNo == 10 ) {

			loadingElem.style.opacity = '0';
			setTimeout( () => {

				loadingElem.style.display = 'none';

			}, 2000 ); // 2 s duration of fade (see CSS #loading)

		}

		// next batch of label creation

		labeler.next();

		// keep a light at the camera

		cameraLightTarget.position.copy( controls.target );
		cameraLight.position.copy( camera.position );

		// trditional updates

		controls.update( );
		stats.update( );

		// finally some rendering

		renderer.render( scene, camera );

		// if all labels are created and no user interaction
		// is recorded (usually for 5s), then disable rendering loop

		if ( ready && performance.now()>endTimer && !SWAY_ENABLED )
			renderer.setAnimationLoop( null );

	} catch ( err ) {

		  renderer.setAnimationLoop( null );
		  throw ( err );

	}

}



/*
 * That's all for now. Thanks for reading till the end of the module.
 * In case you just scrolled or paged down, you may have missed the cat.
 *
 */
