

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';


import {/*classes, */rootClass, nodes} from "./hierarchy.js";


var renderer, cssRenderer, scene, camera, light, controls;

var VSCALE = 3;
var CAMERA_POS = new THREE.Vector3( 120, 20, 10 );


function init( )
{
	// setting up the scene

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( innerWidth, innerHeight );
	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.top = '0px';
//	renderer.setAnimationLoop( animationLoop );
	document.body.appendChild( renderer.domElement );

	cssRenderer = new CSS3DRenderer();
	cssRenderer.setSize( innerWidth, innerHeight );
	cssRenderer.domElement.style.position = 'absolute';
	cssRenderer.domElement.style.top = '0px';
	document.body.appendChild( cssRenderer.domElement );
	
				
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 'white' );

	camera = new THREE.PerspectiveCamera( 60, innerWidth/innerHeight );
	camera.position.copy( CAMERA_POS );

	light = new THREE.DirectionalLight( 'white', 1.5 );
	light.decay = 0;
	scene.add( light );

	var ambientLight = new THREE.AmbientLight( 'white', 2 );
	scene.add( ambientLight );

	controls = new OrbitControls( camera, cssRenderer.domElement );
	//controls.enableDamping = true;*
	controls.target.set( CAMERA_POS.x, CAMERA_POS.y, 0 );
	controls.addEventListener( 'change', animationLoop );
	controls.zoomSpeed = 4;

	// manage window resizes

	window.addEventListener( "resize", onResize );

	function onResize( /*event*/ ) {

		camera.aspect = innerWidth/innerHeight;

		camera.updateProjectionMatrix( );

		renderer.setSize( innerWidth, innerHeight );
		cssRenderer.setSize( innerWidth, innerHeight );

	}

	onResize( );

} // init


init( );


function animationLoop( /*t*/ ) {

//	controls.update( );
	renderer.render( scene, camera );
	cssRenderer.render( scene, camera );

} // animationLoop



// find a node (incl. zones) by its properties

function findNode( nodeName, isCore, parentName=null )
{
	var foundNodes = nodes.filter( x=>x.name==nodeName && x.isCore==isCore && (parentName==null || parentName==x.parent.name) );
	if( foundNodes.length==0 )
	{
		console.error(`Node ${nodeName} is not found` );
		return null;
	}
	if( foundNodes.length>1 )
	{
		console.error(`Node ${nodeName} is not unique` );
		console.error(foundNodes );
		return null;
	}
	return foundNodes[0];
} // findNode



// shift node to the righy jumping over n siblings

function shiftNode( nodeName, isCore, n, parentName=null )
{
	var node = findNode( nodeName, isCore, parentName );
	if( node==null ) return;

	var i = node.parent.children.indexOf( node );
	if( i<0 )
	{
		console.error(`Node ${nodeName} is not found in its parent's children` );
		return;
	}
	
	node.parent.children.splice( i, 1 );
	node.parent.children.splice( i+n, 0, node );
}



// shift graphically a range of nodes

function moveNodes( nodeName1, nodeName2, isCore, n )
{
	var node1 = findNode( nodeName1, isCore );
	if( node1==null ) return;

	var node2 = findNode( nodeName2, isCore );
	if( node2==null ) return;

	if( node1.y!=node2.y )
	{
		console.error(`Nodes ${nodeName1} and ${nodeName2} are at different levels` );
		return;
	}
	
	var i1 = levels[node1.y].indexOf( node1 );
	if( i1<0 )
	{
		console.error(`Node ${nodeName1} is not found in its parent's children` );
		return;
	}

	var i2 = levels[node2.y].indexOf( node2 );
	if( i2<0 )
	{
		console.error(`Node ${nodeName2} is not found in its parent's children` );
		return;
	}
	
	for( var i=i1; i<=i2; i++ )
		levels[node1.y][i].x += n;
} // moveNodes



// shift graphically a range of nodes and their subtrees

function moveNodesRecursive( nodeName1, nodeName2, isCore, n, parentName=null )
{
	var node1 = findNode( nodeName1, isCore, parentName );
	if( node1==null ) return;

	var node2 = findNode( nodeName2, isCore, parentName );
	if( node2==null ) return;

	if( node1.y!=node2.y )
	{
		console.error(`Nodes ${nodeName1} and ${nodeName2} are at different levels` );
		return;
	}
	
	var i1 = levels[node1.y].indexOf( node1 );
	if( i1<0 )
	{
		console.error(`Node ${nodeName1} is not found in its parent's children` );
		return;
	}

	var i2 = levels[node2.y].indexOf( node2 );
	if( i2<0 )
	{
		console.error(`Node ${nodeName2} is not found in its parent's children` );
		return;
	}
	
	function move(node,n)
	{
		node.x += n;
		for( var c of node.children) move(c,n);
	}
	
	for( var i=i1; i<=i2; i++ )
		move(levels[node1.y][i],n);
} // moveNodesRecursive



// reorder nodes

function shiftNodes()
{
	shiftNode( 'textures', false, 2 );
	shiftNode( 'lights', false, 2 );
	shiftNode( 'TSLEncoder', false, 1 );
	shiftNode( 'Transpiler', false, -1 );
	shiftNode( 'ConvexHull.js', false, 2 );
	shiftNode( 'webgl', true, 1 );
	shiftNode( 'webxr', true, -3 );

	shiftNode( 'lights', true, 1 );
	shiftNode( 'core', true, 1, 'extras' );
	shiftNode( 'nodes', true, -5, 'common' );
	shiftNode( 'extras', true, 1, 'common' );
	shiftNode( 'Backend', true, -2 );
	shiftNode( 'Pipeline', true, 2 );
	shiftNode( 'ChainMap', true, -1 );
	shiftNode( 'Texture', true, -1 );
	shiftNode( 'RenderTarget', true, -1 );
	shiftNode( 'Controls', true, -2 );
	shiftNode( 'SpriteMaterial', true, 1 );
	shiftNode( 'UniformsGroup', true, -1, 'EventDispatcher' );
} // shiftNodes


//shiftNodes();



// build 2D tree

var levels = [];
var points = {false:[], true:[]};

function calcLevels( node, level )
{
	if( levels[level] === undefined ) levels[level] = [];
	
	node.x = levels[level].length;
	node.y = level;
	
	levels[level].push( node );

	for( var i=0; i<node.children.length; i++ )
		calcLevels(node.children[i], level+1 );
} // calcLevels

calcLevels( rootClass, 0 );



// expand tree

function expandTree( node )
{
	var n = node.children.length;
	
	if( n == 0 ) return; // nothing to do
	
	var min = node.children[0].x;
	var max = node.children[n-1].x;
	var mid = (min+max)/2;
	
	var dx, level;
	
	if( node.x > mid )
	{
		// shift to the right all children and all nodes after them on the same level 
		dx = node.x-mid;
		level = node.y+1;
		for( let subnode of levels[level] )
			if( subnode.x >= min )
				subnode.x += dx;
	}
	else
	if( node.x < mid )
	{
		// shift to the right this node and all nodes after it on the same level 
		dx = mid-node.x;
		level = node.y;
		min = node.x;
		for( let subnode of levels[level] )
			if( subnode.x >= min )
				subnode.x += dx;
	}
	
	for( var i=0; i<node.children.length; i++ )
		expandTree(node.children[i]);
} // expandTree

expandTree( rootClass );



// shrink tree (reduce gaps between some children)

function shrinkTree( node )
{
	var n = node.children.length;
	
	if( n == 0 ) return; // nothing to do
	
	for( var i=0; i<n; i++ )
		shrinkTree(node.children[i]);

	for( i=n-1; i>0; i-- )
		if( node.children[i].parent == node.children[i-1].parent )
			if( node.children[i-1].children.length==0 )
				node.children[i-1].x = node.children[i].x-1; 
} // shrinkTree

shrinkTree( rootClass );



function centerParents( node )
{
	if( node.children.length==0 ) return;
	
	for( var i=0; i<node.children.length; i++ )
		centerParents( node.children[i] );

	var minChildX = node.children[0].x;
	var maxChildX = node.children[node.children.length-1].x;
	var newX = (minChildX+maxChildX)/2;
	
	// now check whether this newX is available
	i = levels[node.y].indexOf(node);
	if( i<0 ) console.error( 'Cannot center node ${node.info}, not found in its level' );
	
	var min = -1E5;
	var max = 1E5;
	if( i>0 ) min = levels[node.y][i-1].x+1;
	if( i<levels[node.y].length-1 ) max = levels[node.y][i+1].x-1;
	
	newX = THREE.MathUtils.clamp( newX, min, max );
	
	node.x = newX;

} // centerParents

centerParents( rootClass );


// reposition nodes (keeping the same order)
function repositionNodes()
{
	moveNodesRecursive( 'UniformGroup', 'NodeVar', true, -2 );
	moveNodesRecursive( 'ShapePath', 'Curve', true, -2 );
	moveNodes( 'Box2', 'Box3', true, 5 );
	moveNodes( 'EffectComposer', 'EffectComposer', false, 2 );
	moveNodes( 'postprocessing', 'postprocessing', false, 1 );
	moveNodesRecursive( 'renderers', 'renderers', true, -2 );
	moveNodesRecursive( 'MeshStandardMaterial', 'LineBasicMaterial', true, -6 );
	moveNodesRecursive( 'core', 'core', true, -2, '' );
} // repositionNodes

//repositionNodes();


// calc span -- for debug purposes
var minX = Infinity;
var maxX = -Infinity;
function calcSpan( node )
{
	minX = Math.min( minX, node.x );
	maxX = Math.max( maxX, node.x );
	for( var i=0; i<node.children.length; i++ )
		calcSpan( node.children[i] );

}

calcSpan( rootClass/*.children[0]*/ );

console.log('Span',maxX-minX,`(${ ((maxX-minX)/9.03).toFixed(1)}%)`,' <- 293.5 (32.5%) <- 903');

/*
function toPolar( node )
{
	VSCALE = 1;
	
	var r = 10*node.y;
	var a = THREE.MathUtils.mapLinear(node.x,minX,maxX+1,0,2*Math.PI);
	node.x = r*Math.cos( a );
	node.y = r*Math.sin( a );
	for( var i=0; i<node.children.length; i++ )
		toPolar( node.children[i] );

}
toPolar( rootClass );
*/



// materials and geometries for the tree branches
var colors = {
	false: 'steelblue', // is addon
	true: 0x606060, // is core
}

var materials = {
	false: new THREE.MeshBasicMaterial({color:colors[false]}), // is addon
	true: new THREE.MeshBasicMaterial({color:colors[true]}), // is core
}

var geometries = {};

function defineGeometries( )
{
	// circle-to-rectangle
	
	var s = Math.sqrt(2);
	var R = 0.4;
	var r = 0.1;
	var H = 0.7;
	var h = 0.8;
	var shape = new THREE.Shape();
		shape.moveTo( R, 0 ); //1
		for( let i=0; i<10; i++ ) shape.lineTo( R*Math.cos(i/10*Math.PI/4), R*Math.sin(i/10*Math.PI/4) );
		//shape.moveTo( R/s, R/s ); //1
		shape.quadraticCurveTo( r, R*s-r, r, H ); // 2, 3
		shape.lineTo( r, H+h ); // 4
		shape.lineTo( -r, H+h ); // 5
		shape.lineTo( -r, H ); // 6
		shape.quadraticCurveTo( -r, R*s-r, -R/s, R/s ); // 7, 8
		for( let i=9; i>=0; i-- ) shape.lineTo( -R*Math.cos(i/10*Math.PI/4), R*Math.sin(i/10*Math.PI/4) );
		//shape.lineTo( R/s, R/s ); // 1
		shape.lineTo( R, 0 ); // 1
		
	geometries.circleToRect = new THREE.ShapeGeometry( shape );

	// circle
	
	geometries.circle = new THREE.CircleGeometry( R, 32, 0, Math.PI );
}

defineGeometries();




function drawLevels( node, size=2 )
{
	var ball = new THREE.Group( );
	ball.position.set( node.x, VSCALE*node.y, 0*Math.random() );
	scene.add( ball );	

	var ball2;
	//if( !node.isZone )
	if( node.name )
	{
		var ball2up = new THREE.Mesh( node.children.length>0 ? geometries.circleToRect : geometries.circle, materials[node.isCore] );
		ball.add( ball2up );	

		var ball2down = new THREE.Mesh( node.parent ? geometries.circleToRect : geometries.circle, materials[node.isCore] );
		ball2down.rotation.z = Math.PI;
		ball.add( ball2down );	
	}
	
	// label
	if( node.name )
	{
		var labelDiv = document.createElement( 'div' );
		labelDiv.className = node.isCore?'labelCore':'labelAddon';
		if( node.isZone ) labelDiv.classList.add( 'zone' );
		//labelDiv.innerHTML = (node.isZone/*||node.isZoneJS*/)?'('+node.name+')':node.name;
		labelDiv.innerHTML = node.wrappedName;
		//labelDiv.textContent = (node.isZone||node.isZoneJS||node.isZoneFake)?'('+node.children.length+')':node.children.length;
	
		var label = new CSS3DObject( labelDiv );
		label.position.set( node.x, VSCALE*node.y, 0 );
		label.scale.setScalar( 0.007 );
		scene.add( label );
	}
				
	size = 0.8*size+0.2;
	for( var i=0; i<node.children.length; i++ )
	{
		var child = drawLevels(node.children[i], size );
		
		var s = Math.sign(child.position.x-ball.position.x);
		var v0 = new THREE.Vector3( child.position.x, child.position.y-0.5*VSCALE, 0 );
		var v1 = new THREE.Vector3( child.position.x-0.25*s, child.position.y-0.5*VSCALE, 0 );
		var v2 = new THREE.Vector3( ball.position.x+0.25*s, ball.position.y+0.5*VSCALE, 0 );
		var v3 = new THREE.Vector3( ball.position.x, ball.position.y+0.5*VSCALE, 0 );
		//var h0 = new THREE.Vector3( child.position.x, ball.position.y, 0 );
		
		//points[node.children[i].isCore].push( ball.position,v3,v3,v2,v2,v1,v1,v0,v0,child.position ); // max segmented
		points[node.children[i].isCore].push( ball.position,v3,v3,v0,v0,child.position ); // min segmented
		//points[node.children[i].isCore].push( ball.position,child.position ); // direct
	}
	
	return ball;
} // drawLevels

drawLevels( rootClass );



scene.add( new THREE.LineSegments(
				new THREE.BufferGeometry().setFromPoints( points[false] ), 
				new THREE.LineBasicMaterial({color:'steelblue'})
			) );
scene.add( new THREE.LineSegments(
				new THREE.BufferGeometry().setFromPoints( points[true] ), 
				new THREE.LineBasicMaterial({color:0x606060})
			) );


//console.table( classes )
//console.table( levels )


var stats = {classes:0, zones:0/*, zonesJS:0, zonesFake:0*/};
function countStats( node )
{
	if( node.isZone )
		stats.zones++;
	else
		stats.classes++;
	
	for( var child of node.children )
		countStats( child );
}

countStats( rootClass );

console.group( 'Final stats' );
console.log( 'classes:', stats.classes);
console.log( 'Zones:', stats.zones);
console.groupEnd( 'Final stats' );

console.groupCollapsed( 'Final classes' );
rootClass.dump(true);
console.groupEnd( 'Final classes' );

//console.log( rootClass )
