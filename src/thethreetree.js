

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CSS3DObject, CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

import { Class } from "./globals.js";
import { nodes, rootClass } from "./hierarchy.js";


var renderer, cssRenderer, scene, camera, light, controls;

var VSCALE = 2;
var CAMERA_POS = new THREE.Vector3( 142, 10, 15 );

var clock = new THREE.Clock();
var leftTime = 0;

function startLoop( ) {

	clock.getDelta();
	leftTime = 1;
	renderer.setAnimationLoop( animationLoop );

}

function endLoop( ) {

	renderer.setAnimationLoop( null );

}

function init( ) {

	// setting up the scene

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( innerWidth, innerHeight );
	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.top = '0px';
	document.body.appendChild( renderer.domElement );

	cssRenderer = new CSS3DRenderer();
	cssRenderer.setSize( innerWidth, innerHeight );
	cssRenderer.domElement.style.position = 'absolute';
	cssRenderer.domElement.style.top = '0px';
	document.body.appendChild( cssRenderer.domElement );


	scene = new THREE.Scene();
	scene.background = new THREE.Color( 'white' );
	//	scene.rotation.z = -Math.PI/2;

	camera = new THREE.PerspectiveCamera( 60, innerWidth/innerHeight );
	camera.position.copy( CAMERA_POS );

	light = new THREE.DirectionalLight( 'white', 1.5 );
	light.decay = 0;
	scene.add( light );

	var ambientLight = new THREE.AmbientLight( 'white', 2 );
	scene.add( ambientLight );

	controls = new OrbitControls( camera, cssRenderer.domElement );
	controls.enableDamping = true;
	controls.dampingFactor = 0.1;
	controls.enableRotate = false;
	controls.target.set( CAMERA_POS.x, CAMERA_POS.y, 0 );
	controls.addEventListener( 'change', startLoop );
	controls.zoomSpeed = 40;
	controls.mouseButtons.LEFT = THREE.MOUSE.PAN;
	controls.minDistance = 3;
	controls.maxDistance = 100;


	// manage window resizes

	window.addEventListener( "resize", onResize );

	function onResize( /*event*/ ) {

		camera.aspect = innerWidth/innerHeight;

		camera.updateProjectionMatrix( );

		renderer.setSize( innerWidth, innerHeight );
		cssRenderer.setSize( innerWidth, innerHeight );

		startLoop( );

	}

	onResize( );

	/*
	// back panel
	var back1 = new THREE.Mesh(
		new THREE.PlaneGeometry( 1, 20 ).translate(0.5,0,0),
		new THREE.MeshBasicMaterial({color:'linen'})
	);
	back1.scale.x = 104;
	back1.position.set( -1, 10, -1 );
	scene.add( back1 );
*/
	startLoop( );

} // init


init( );


function animationLoop( /*t*/ ) {

	leftTime -= clock.getDelta();
	if ( leftTime<0 ) endLoop( );

	controls.update( );
	renderer.render( scene, camera );
	cssRenderer.render( scene, camera );

} // animationLoop



/* ***********************************
// shift graphically a range of nodes

function moveNodes( nodeName1, nodeName2, n, parentName=null, grandparentName=null )
{
	var node1 = findNode( nodeName1, parentName, grandparentName );
	if( node1==null ) return;

	var node2 = findNode( nodeName2, parentName, grandparentName );
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


************************************************ */



// shift graphically a node and its subtrees

function moveNodeSub( node, dx, levels = 1e5, skips=0 ) {

	if ( levels>0 ) {

		if ( skips<1 ) node.x += dx;
		for ( var child of node.children ) moveNodeSub( child, dx, levels-1, skips-1 );

	}

} // moveNode



// build 2D tree

var levels = [];
var points = { false: [], true: [] };

function calcLevels( node, level ) {

	if ( levels[ level ] === undefined ) levels[ level ] = [];

	node.x = levels[ level ].length;
	node.y = level;

	levels[ level ].push( node );

	for ( var i=0; i<node.children.length; i++ )
		calcLevels( node.children[ i ], level+1 );

} // calcLevels

calcLevels( rootClass, 0 );



// expand tree

function expandTree( node ) {

	var n = node.children.length;

	if ( n == 0 ) return; // nothing to do

	var min = node.children[ 0 ].x;
	var max = node.children[ n-1 ].x;
	var mid = ( min+max )/2;

	var dx, level;

	if ( node.x > mid ) {

		// shift to the right all children and all nodes after them on the same level
		dx = node.x-mid;
		level = node.y+1;
		for ( let subnode of levels[ level ])
			if ( subnode.x >= min )
				subnode.x += dx;

	} else
		if ( node.x < mid ) {

			// shift to the right this node and all nodes after it on the same level
			dx = mid-node.x;
			level = node.y;
			min = node.x;
			for ( let subnode of levels[ level ])
				if ( subnode.x >= min )
					subnode.x += dx;

		}

	for ( var i=0; i<node.children.length; i++ )
		expandTree( node.children[ i ]);

} // expandTree

expandTree( rootClass );



// shrink tree (reduce gaps between some children)

function shrinkTree( node ) {

	var n = node.children.length;

	if ( n == 0 ) return; // nothing to do

	for ( var i=0; i<n; i++ )
		shrinkTree( node.children[ i ]);

	for ( i=n-1; i>0; i-- )
		if ( node.children[ i ].parent == node.children[ i-1 ].parent )
			if ( node.children[ i-1 ].children.length==0 )
				node.children[ i-1 ].x = node.children[ i ].x-1;

} // shrinkTree

shrinkTree( rootClass );



function centerParents( node ) {

	if ( node.children.length==0 ) return;

	for ( var i=0; i<node.children.length; i++ )
		centerParents( node.children[ i ]);

	var minChildX = node.children[ 0 ].x;
	var maxChildX = node.children[ node.children.length-1 ].x;
	var newX = ( minChildX+maxChildX )/2;

	// now check whether this newX is available
	i = levels[ node.y ].indexOf( node );
	if ( i<0 ) console.error( 'Cannot center node ${node.info}, not found in its level' );

	var min = -1E5;
	var max = 1E5;
	if ( i>0 ) min = levels[ node.y ][ i-1 ].x+1;
	if ( i<levels[ node.y ].length-1 ) max = levels[ node.y ][ i+1 ].x-1;

	newX = THREE.MathUtils.clamp( newX, min, max );

	node.x = newX;

} // centerParents

centerParents( rootClass );


// move node to match its parent (while the only child)
function parentizeNode( idx ) {

	var node = nodes[ idx ];
	while ( node.parent.children.length == 1 ) {

		moveNodeSub( node, node.parent.x-node.x );
		node = node.parent;

	}

}

function moveNode( idx, dx, levels=1, skips=0 ) {

	moveNodeSub( nodes[ idx ], dx, levels, skips );

}


// used only for debug purposes - marks a branch
/*
function doneNode( idx )
{
	function helper( node )
	{
		if( !node.isZone ) node.selected = true;
		for( var child of node.children ) helper(child);
	}
	helper( nodes[idx] );
}
*/

/*
function spreadNodes( idx, n )
{
	var node = nodes[idx];
	var from = node.parent.children.indexOf( node );
	var to = from+n;
	for( var i=from+1; i<to; i++ )
		node.parent.children[i].x = THREE.MathUtils.mapLinear( i, to, from, node.parent.children[to].x, node.parent.children[from].x );
}
*/

// reposition nodes (keeping the same order)
function repositionNodes() {

	parentizeNode( 317 );
	parentizeNode( 1 );
	parentizeNode( 810 );

	// Pass
	moveNode( 94, 1, 10, 1 );

	// branch Nodes
	moveNode( 346, -1, 10, 1 );
	moveNode( 362, 0.5, 1 );
	moveNode( 409, 1, 1 );
	//doneNode( 317 );

	// branch addons
	moveNode( 49, -1.25, 1 );
	moveNode( 64, -0.5, 1 );
	moveNode( 76, 0.5, 1 );
	moveNode( 1, -6.5, 10, 1 );
	//doneNode( 1 );

	// branch object3D
	moveNode( 569, 7, 1 );
	//doneNode( 469 );

	// BufferGeometry
	moveNode( 247, -1, 10, 1 );
	moveNode( 213, -0.25, 1, 0 );
	//doneNode( 213 );

	// animation
	moveNode( 177, 0.5, 1, 0 );
	//doneNode( 177 );

	// branch Material, Controls, BufferAttributs
	moveNode( 196, 0.5, 1, 0 );
	moveNode( 271, 1.5, 1, 0 );
	//doneNode( 271 );
	//doneNode( 260 );
	//doneNode( 196 );

	// EventDispatcher
	moveNode( 469, 3, 1, 0 );
	moveNode( 211, 14.75, 1, 0 );
	moveNode( 195, 13.5, 1, 0 );
	//doneNode( 195 );

	// src/extras
	moveNode( 642, -0.5, 1, 0 );
	//doneNode( 642 );

	// src/loaders
	moveNode( 754, 7, 2, 0 );
	moveNode( 684, 1.5, 2, 0 );
	moveNode( 752, -3, 1, 0 );
	moveNode( 753, 3, 1, 0 );
	//doneNode( 684 );

	// src/math
	moveNode( 763, 3, 1, 0 );
	moveNode( 757, 3, 1, 0 );
	//doneNode( 756 );

	// src/nodes/core
	//doneNode( 783 );
	moveNode( 763, 3, 1, 0 );

	// src/renderers
	moveNode( 812, 11, 1, 0 );
	moveNode( 811, 13, 1, 0 );
	moveNode( 976, -12.25, 100, 0 );
	moveNode( 976, -2.25, 100, 1 );

	// root
	moveNode( 0, -14.5, 1, 0 );

} // repositionNodes

repositionNodes();


// calc span -- for debug purposes
var minX = Infinity;
var maxX = -Infinity;
function calcSpan( node ) {

	minX = Math.min( minX, node.x );
	maxX = Math.max( maxX, node.x );
	for ( var i=0; i<node.children.length; i++ )
		calcSpan( node.children[ i ]);

}

calcSpan( rootClass/*.children[0]*/ );


// materials and geometries for the tree branches
var colors = {
	addon: new THREE.Color( 'steelblue' ),
	core: new THREE.Color( 'black' ),
};

var meshes = {};

function generateBubbleShape( R, r, H, h ) {

	var s = Math.sqrt( 2 );
	var n = 10;

	var bubbleShape = new THREE.Shape();
	bubbleShape.moveTo( R, 0 ); //1
	for ( let i=0; i<n; i++ )
		bubbleShape.lineTo( R*Math.cos( i/n*Math.PI/4 ), R*Math.sin( i/n*Math.PI/4 ) );
	bubbleShape.quadraticCurveTo( r, R*s-r, r, H ); // 2, 3
	if ( h>0 ) {

		bubbleShape.lineTo( r, H+h ); // 4
		bubbleShape.lineTo( -r, H+h ); // 5

	}

	bubbleShape.lineTo( -r, H ); // 6
	bubbleShape.quadraticCurveTo( -r, R*s-r, -R/s, R/s ); // 7, 8
	for ( let i=n-1; i>=0; i-- )
		bubbleShape.lineTo( -R*Math.cos( i/n*Math.PI/4 ), R*Math.sin( i/n*Math.PI/4 ) );
	bubbleShape.lineTo( R, 0 ); // 1

	return bubbleShape;

}


var R = 0.4; // size of bubbles
var r = 0.06; // width of lines
var H = 0.7;
var C = 0.25; // curved corner radius
var h = VSCALE/2-H-C;

function defineMeshes( ) {

	// bubble

	var bubbleShape = generateBubbleShape( R, r, H, h );
	var bubble = new THREE.ShapeGeometry( bubbleShape );

	meshes.bubbleCore = new THREE.Mesh(
		bubble,
		new THREE.MeshBasicMaterial( { color: colors.core } )
	);

	meshes.bubbleAddon = new THREE.Mesh(
		bubble,
		new THREE.MeshBasicMaterial( { color: colors.addon } )
	);

	// multicolor bubble

	bubbleShape = generateBubbleShape( R, r, H, 0 );
	bubble = mergeGeometries([
		new THREE.ShapeGeometry( bubbleShape ),
		new THREE.PlaneGeometry( 2*r, h ).translate( 0, H+h/2, 0 )
	]);

	var pos = bubble.getAttribute( 'position' );
	var col = new THREE.Float32BufferAttribute( 3*pos.count, 3 );
	for ( let i=0; i<pos.count; i++ )
		if ( pos.getY( i )>H+h/2 )
			col.setXYZ( i, colors.core.r, colors.core.g, colors.core.b );
		else
			col.setXYZ( i, colors.addon.r, colors.addon.g, colors.addon.b );

	bubble.setAttribute( 'color', col );


	meshes.bubbleCoreToAddon = new THREE.Mesh(
		bubble,
		new THREE.MeshBasicMaterial( { vertexColors: true } )
	);


	// circle

	var circle = new THREE.CircleGeometry( R, 32, 0, Math.PI );

	meshes.circleCore = new THREE.Mesh(
		circle,
		new THREE.MeshBasicMaterial( { color: colors.core } )
	);

	meshes.circleAddon = new THREE.Mesh(
		circle,
		new THREE.MeshBasicMaterial( { color: colors.addon } )
	);


	// connector

	//var connector = new THREE.RingGeometry( 1*r, 3*r, 16, 1, Math.PI, Math.PI/2).translate(2*r,-H-h,0);
	var connector = new THREE.RingGeometry( C-r, C+r, 16, 1, Math.PI, Math.PI/2 ).translate( C, -VSCALE/2+C, 0 );

	meshes.connectorCore = new THREE.Mesh(
		connector,
		new THREE.MeshBasicMaterial( { color: colors.core } )
	);

	meshes.connectorAddon = new THREE.Mesh(
		connector,
		new THREE.MeshBasicMaterial( { color: colors.addon } )
	);


	var straight = new THREE.PlaneGeometry( 2*r, 2*C ).translate( 0, -H-h-r, 0 );

	meshes.straightCore = new THREE.Mesh(
		straight,
		new THREE.MeshBasicMaterial( { color: colors.core } )
	);

	meshes.straightAddon = new THREE.Mesh(
		straight,
		new THREE.MeshBasicMaterial( { color: colors.addon } )
	);


	var long2 = new THREE.PlaneGeometry( 2*r, 2*C ).translate( 0, -H-h-C, 0 );

	meshes.longCore = new THREE.Mesh(
		long2,
		new THREE.MeshBasicMaterial( { color: colors.core } )
	);

	meshes.longAddon = new THREE.Mesh(
		long2,
		new THREE.MeshBasicMaterial( { color: colors.addon } )
	);


	var horizontal = new THREE.PlaneGeometry( 1, 2*r ).translate( 0, H+h+C, 0 );

	meshes.horizontalCore = new THREE.Mesh(
		horizontal,
		new THREE.MeshBasicMaterial( { color: colors.core } )
	);

	meshes.horizontalAddon = new THREE.Mesh(
		horizontal,
		new THREE.MeshBasicMaterial( { color: colors.addon } )
	);


	var vertical = new THREE.PlaneGeometry( C, VSCALE );//.translate(0,-VSCALE/2,0);

	meshes.verticalCore = new THREE.Mesh(
		vertical,
		new THREE.MeshBasicMaterial( { color: colors.core } )
	);

	meshes.verticalAddon = new THREE.Mesh(
		vertical,
		new THREE.MeshBasicMaterial( { color: colors.addon } )
	);


	var verticalZone = new THREE.PlaneGeometry( 2*r, VSCALE-2*C );//.translate(0,-VSCALE/2,0);

	meshes.verticalZoneCore = new THREE.Mesh(
		verticalZone,
		new THREE.MeshBasicMaterial( { color: colors.core } )
	);

	meshes.verticalZoneAddon = new THREE.Mesh(
		verticalZone,
		new THREE.MeshBasicMaterial( { color: colors.addon } )
	);


	verticalZone = new THREE.PlaneGeometry( 2*r, VSCALE-2*C );//.translate(0,-VSCALE/2,0);

	pos = verticalZone.getAttribute( 'position' );
	col = new THREE.Float32BufferAttribute( 3*pos.count, 3 );
	for ( let i=0; i<pos.count; i++ )
		if ( pos.getY( i )>0 )
			col.setXYZ( i, colors.core.r, colors.core.g, colors.core.b );
		else
			col.setXYZ( i, colors.addon.r, colors.addon.g, colors.addon.b );

	verticalZone.setAttribute( 'color', col );

	meshes.verticalCoreToAddon = new THREE.Mesh(
		verticalZone,
		new THREE.MeshBasicMaterial( { vertexColors: true } )
	);

}

defineMeshes();


function clickNode( i ) {

	console.log( `clicked node[${i}]=${nodes[ i ].name} at (${nodes[ i ].x},${nodes[ i ].y*VSCALE}` );

}

window.clickNode = clickNode;





/*
	var v1 = new THREE.Vector3();
	var v2 = new THREE.Vector3();
	var v3 = new THREE.Vector3();
	var v4 = new THREE.Vector3();
	var v5 = new THREE.Vector3();
	var v6 = new THREE.Vector3();

	var dR = 2*r;

		for( var child of node.children )
		{
			// draw curve between parent and child
			var sign = Math.sign(child.image.position.x - node.image.position.x );

			v1.copy( node.image.position );
			v1.y += VSCALE/2-dR;

			v2.copy( v1 );
			v2.y += dR;

			v3.copy( v2 );
			v3.x += dR*sign;

			v6.copy( child.image.position );
			v6.y -= VSCALE/2-dR;

			v5.copy( v6 );
			v5.y -= dR;

			v4.copy( v5 );
			v4.x -= dR*sign;

			var points = [
					node.image.position,
					...new THREE.QuadraticBezierCurve3( v1, v2, v3 ).getPoints( 10 ),
					...new THREE.QuadraticBezierCurve3( v4, v5, v6 ).getPoints( 10 ),
					child.image.position,
				];

			var geometry = new THREE.BufferGeometry().setFromPoints( points );

			var material = new THREE.LineBasicMaterial( { color: 'red' } );

			scene.add( new THREE.Line( geometry, material ) );
		}
		*/



function drawLevels( node, size=2 ) {

	var ball = new THREE.Group( );
	ball.position.set( node.x, VSCALE*node.y, 0*Math.random() );
	scene.add( ball );

	var mesh, mesh2, mesh3;

	// draw top of node

	if ( node.children.length>0 ) { // has children

		let min = node.children[ 0 ].x;
		let max = node.children[ node.children.length-1 ].x;

		if ( node.isCore ) {

			if ( node.isZone )
				mesh = meshes.verticalZoneCore.clone();
			else
				if ( node.name )
					mesh = meshes.bubbleCore.clone();
				else
					mesh = meshes.verticalCore.clone();

			if ( min < node.x )
				mesh2 = meshes.connectorCore.clone();
			if ( max > node.x )
				mesh3 = meshes.connectorCore.clone();

		} else {

			if ( node.isZone )
				mesh = meshes.verticalZoneAddon.clone();
			else
				if ( node.name )
					mesh = meshes.bubbleAddon.clone();
				else
					mesh = meshes.verticalAddon.clone();

			if ( node.children[ 0 ].x < node.x )
				mesh2 = meshes.connectorAddon.clone();
			if ( node.children[ node.children.length-1 ].x > node.x )
				mesh3 = meshes.connectorAddon.clone();

		}

		if ( mesh2 ) {

			mesh2.scale.x = -1;
			mesh2.scale.y = -1;
			ball.add( mesh2 );

		}

		if ( mesh3 ) {

			mesh3.scale.y = -1;
			ball.add( mesh3 );

		}

	} else { // no children, a leaf

		if ( node.isCore )
			mesh = meshes.circleCore.clone();
		else
			mesh = meshes.circleAddon.clone();

	}

	if ( mesh ) {

		ball.add( mesh );

	}


	mesh2 = undefined;
	mesh3 = undefined;

	// draw horizontals
	if ( node.children.length>0 ) {

		let min = node.children[ 0 ].x;
		let max = node.children[ node.children.length-1 ].x;

		if ( node.isCore ) {

			if ( min < node.x ) {

				mesh2 = meshes.horizontalCore.clone();
				mesh2.scale.x = node.x-min-2*C;
				mesh2.position.x = -( node.x-min )/2;

			}

			if ( max > node.x ) {

				mesh3 = meshes.horizontalCore.clone();
				mesh3.scale.x = max-node.x-2*C;
				mesh3.position.x = ( max-node.x )/2;

			}

		} else {

			if ( min < node.x ) {

				mesh2 = meshes.horizontalAddon.clone();
				mesh2.scale.x = node.x-min-2*C;
				mesh2.position.x = -( node.x-min )/2;

			}

			if ( max > node.x ) {

				mesh3 = meshes.horizontalAddon.clone();
				mesh3.scale.x = max-node.x-2*C;
				mesh3.position.x = ( max-node.x )/2;

			}

		}

		if ( mesh2 ) {

			ball.add( mesh2 );

		}

		if ( mesh3 ) {

			ball.add( mesh3 );

		}

	}


	// draw bottom of node

	mesh = undefined;
	mesh2 = undefined;

	if ( node.parent ) { // has parent

		if ( node.isCore ) {

			if ( node.name && !node.isZone ) mesh = meshes.bubbleCore.clone();
			if ( node.x == node.parent.x ) {

				mesh2 = meshes.longCore.clone();

			} else
				mesh2 = meshes.connectorCore.clone();

		} else {

			if ( node.parent.isCore ) {

				if ( node.isZone )
					mesh = meshes.verticalCoreToAddon.clone();
				else
					if ( node.name ) mesh = meshes.bubbleCoreToAddon.clone();

				if ( node.x == node.parent.x ) {

					mesh2 = meshes.longCore.clone();

				} else
					mesh2 = meshes.connectorCore.clone();

			} else {

				if ( node.name && !node.isZone ) mesh = meshes.bubbleAddon.clone();
				if ( node.x == node.parent.x ) {

					mesh2 = meshes.longAddon.clone();

				} else
					mesh2 = meshes.connectorAddon.clone();

			}

		}

	} else { // no parent, this is the root

		mesh = meshes.circleCore.clone();

	}

	if ( mesh ) {

		mesh.rotation.z = Math.PI;
		ball.add( mesh );

	}

	if ( mesh2 ) {

		if ( node.x > node.parent.x ) mesh2.scale.x = -1;
		ball.add( mesh2 );

	}


	// label
	if ( node.name ) {

		var labelDiv = document.createElement( 'div' );
		labelDiv.className = node.isCore?'labelCore':'labelAddon';
		if ( node.isZone ) labelDiv.classList.add( 'zone' );
		if ( node.selected ) labelDiv.classList.add( 'selected' );
		if ( !node.hasDocs && !node.isZone ) labelDiv.classList.add( 'noDocs' );
		//labelDiv.innerHTML = (node.isZone/*||node.isZoneJS*/)?'('+node.name+')':node.name;
		labelDiv.innerHTML = node.wrappedName;
		labelDiv.setAttribute( 'onpointerdown', `clickNode(${node.idx})` );

		//labelDiv.textContent = (node.isZone||node.isZoneJS||node.isZoneFake)?'('+node.children.length+')':node.children.length;
		node.labelDiv = labelDiv;

		var label = new CSS3DObject( labelDiv );
		label.position.set( node.x, VSCALE*node.y, 0 );
		label.scale.setScalar( 0.007 );
		if ( node.isZone ) {

			label.rotation.z = Math.PI/2;
			label.position.y += 0.2*VSCALE;

		}

		scene.add( label );

		// big label
		if ([ 'Object3D', 'Mesh', 'Material', 'Loader', 'Node', 'BufferGeometry', Class.ROOT_NAME, 'Line', 'Light', 'Pass', 'exporters', 'Points' ].indexOf( node.name )>-1 ) {

			var bigLabelDiv = document.createElement( 'div' );
			bigLabelDiv.className = node.isCore?'bigLabelCore':'bigLabelAddon';
			bigLabelDiv.innerHTML = node.name;

			//node.labelDiv = labelDiv;

			var bigLabel = new CSS3DObject( bigLabelDiv );
			bigLabel.position.set( node.x+( node.isZone?2.25:2.5 ), VSCALE*node.y, 0 );
			bigLabel.scale.setScalar( 0.01 );

			scene.add( bigLabel );

		}

	}

	size = 0.8*size+0.2;

	for ( var i=0; i<node.children.length; i++ ) {

		drawLevels( node.children[ i ], size );

	}


	return ball;

} // drawLevels

drawLevels( rootClass );


scene.add( new THREE.LineSegments(
	new THREE.BufferGeometry().setFromPoints( points[ false ]),
	new THREE.LineBasicMaterial( { color: 'steelblue' } )
) );
scene.add( new THREE.LineSegments(
	new THREE.BufferGeometry().setFromPoints( points[ true ]),
	new THREE.LineBasicMaterial( { color: 'black' } )
) );


//console.table( classes )
//console.table( levels )



var stats = { classes: 0, zones: 0/*, zonesJS:0, zonesFake:0*/ };
function countStats( node ) {

	if ( node.isZone )
		stats.zones++;
	else
		stats.classes++;

	for ( var child of node.children )
		countStats( child );

}

countStats( rootClass );

console.group( 'Final stats' );
console.log( 'classes:', stats.classes );
console.log( 'Zones:', stats.zones );
console.groupEnd( 'Final stats' );

console.groupCollapsed( 'Final classes' );
rootClass.dump( true );
console.groupEnd( 'Final classes' );

//console.log( rootClass )

console.log( 'Span', maxX-minX, ' <- 463' );


function selectNode( node, recursive ) {

	if ( node.name[ 0 ]!='$' )
		node.labelDiv?.classList.add( 'selected' );

	if ( recursive )
		for ( var child of node.children )
			selectNode( child, recursive );

}

function processURLParams( ) {

	var params = new URLSearchParams( window.location.search );
	if ( params.has( 'name' ) ) {	// has name - try to find such node and focus on it

		var name = params.get( 'name' ).toUpperCase();
		var recursive = name.indexOf( '*' )>-1;

		name = name.replaceAll( '*', '' );

		var list = nodes.filter( e => e.name.toUpperCase().indexOf( name )>=0 );
		if ( list.length>0 ) {

			// put the largest node at the beginning
			list.sort( ( a, b ) => b.weight-a.weight );

			for ( var node of list )
				selectNode( node, recursive );

			camera.position.set( list[ 0 ].x, list[ 0 ].y*VSCALE+VSCALE/2, 5 );
			controls.target.set( list[ 0 ].x, list[ 0 ].y*VSCALE+VSCALE/2, 0 );
			controls.update();

		}

	} else {

		// no name, use default view
		camera.position.set( rootClass.x, rootClass.y*VSCALE+VSCALE*2, 15 );
		controls.target.set( rootClass.x, rootClass.y*VSCALE+VSCALE*2, 0 );
		controls.update();

	}

}

processURLParams( );
