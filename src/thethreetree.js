

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

import {/*classes, */rootClass, nodes/*, findNode*/} from "./hierarchy.js";


var renderer, cssRenderer, scene, camera, light, controls;

var VSCALE = 2;
var CAMERA_POS = new THREE.Vector3( 222, 10, 10 );

var selectedNode;

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
//	scene.rotation.z = -Math.PI/2;

	camera = new THREE.PerspectiveCamera( 60, innerWidth/innerHeight );
	camera.position.copy( CAMERA_POS );

	light = new THREE.DirectionalLight( 'white', 1.5 );
	light.decay = 0;
	scene.add( light );

	var ambientLight = new THREE.AmbientLight( 'white', 2 );
	scene.add( ambientLight );

	controls = new OrbitControls( camera, cssRenderer.domElement );
	//controls.enableDamping = true;*
	controls.enableRotate = false;
	controls.target.set( CAMERA_POS.x, CAMERA_POS.y, 0 );
	controls.addEventListener( 'change', animationLoop );
	controls.zoomSpeed = 40;
	controls.mouseButtons.LEFT = THREE.MOUSE.PAN;


	// manage window resizes

	window.addEventListener( "resize", onResize );

	function onResize( /*event*/ ) {

		camera.aspect = innerWidth/innerHeight;

		camera.updateProjectionMatrix( );

		renderer.setSize( innerWidth, innerHeight );
		cssRenderer.setSize( innerWidth, innerHeight );

	}

	onResize( );
	
	
	// back panel
	var back1 = new THREE.Mesh(
		new THREE.PlaneGeometry( 1, 20 ).translate(0.5,0,0),
		new THREE.MeshBasicMaterial({color:'linen'})
	);
	back1.scale.x = 104;
	back1.position.set( -1, 10, -1 );
	scene.add( back1 );
	
} // init


init( );


function animationLoop( /*t*/ ) {

//	controls.update( );
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

function moveNodeSub( node, dx, levels = 1e5 )
{
	if( levels>0 )
	{
		node.x += dx;
		for( var child of node.children) moveNodeSub(child,dx,levels-1);
	}
} // moveNode



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


// move node to match its parent (while the only child)
function parentizeNode( idx )
{
	var node = nodes[idx];
	while( node.parent.children.length == 1 )
	{
		moveNodeSub( node, node.parent.x-node.x );
		node = node.parent;
	}
}

function moveNode( idx, dx, levels=1 )
{
	moveNodeSub(nodes[idx],dx,levels);
}


// reposition nodes (keeping the same order)
function repositionNodes()
{
	parentizeNode( 900 );
	moveNode( 162, 1 );
	moveNode( 136, 7, 2 );
	moveNode( 159, 7 );
	moveNode( 136, 1 );
	
} // repositionNodes

repositionNodes();


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


// materials and geometries for the tree branches
var colors = {
	addon: new THREE.Color('steelblue'),
	core: new THREE.Color('black'),
}

var meshes = {};

function generateBubbleShape(R,r,H,h)
{
	var s = Math.sqrt(2);
	var n = 10;
	
	var bubbleShape = new THREE.Shape();
		bubbleShape.moveTo( R, 0 ); //1
		for( let i=0; i<n; i++ )
			bubbleShape.lineTo( R*Math.cos(i/n*Math.PI/4), R*Math.sin(i/n*Math.PI/4) );
		bubbleShape.quadraticCurveTo( r, R*s-r, r, H ); // 2, 3
		if( h>0 )
		{
			bubbleShape.lineTo( r, H+h ); // 4
			bubbleShape.lineTo( -r, H+h ); // 5
		}
		bubbleShape.lineTo( -r, H ); // 6
		bubbleShape.quadraticCurveTo( -r, R*s-r, -R/s, R/s ); // 7, 8
		for( let i=n-1; i>=0; i-- )
			bubbleShape.lineTo( -R*Math.cos(i/n*Math.PI/4), R*Math.sin(i/n*Math.PI/4) );
		bubbleShape.lineTo( R, 0 ); // 1
		
	return bubbleShape;
}


var R = 0.4;
var r = 0.06//8;
var H = 0.7;
var h = VSCALE/2-H-2*r;

function defineMeshes( )
{

	// bubble

	var bubbleShape = generateBubbleShape(R,r,H,h);
	var bubble = new THREE.ShapeGeometry( bubbleShape );

	meshes.bubbleCore = new THREE.Mesh(
		bubble,
		new THREE.MeshBasicMaterial({color:colors.core})
	);
	
	meshes.bubbleAddon = new THREE.Mesh(
		bubble,
		new THREE.MeshBasicMaterial({color:colors.addon})
	);

	// multicolor bubble

	bubbleShape = generateBubbleShape(R,r,H,0);
	bubble = mergeGeometries( [
		new THREE.ShapeGeometry( bubbleShape ),
		new THREE.PlaneGeometry( 2*r, h ).translate(0,H+h/2,0)
	] );
	
	var pos = bubble.getAttribute( 'position' );
	var col = new THREE.Float32BufferAttribute( 3*pos.count, 3 );
	for( var i=0; i<pos.count; i++ )
		if( pos.getY(i)>H+h/2 )
			col.setXYZ(i,colors.core.r,colors.core.g,colors.core.b)
		else
			col.setXYZ(i,colors.addon.r,colors.addon.g,colors.addon.b)

	bubble.setAttribute( 'color', col);


	meshes.bubbleCoreToAddon = new THREE.Mesh(
		bubble,
		new THREE.MeshBasicMaterial({vertexColors:true})
	);

	
	// circle
	
	var circle = new THREE.CircleGeometry( R, 32, 0, Math.PI );
	
	meshes.circleCore = new THREE.Mesh(
		circle,
		new THREE.MeshBasicMaterial({color:colors.core})
	);
	
	meshes.circleAddon = new THREE.Mesh(
		circle,
		new THREE.MeshBasicMaterial({color:colors.addon})
	);
	
	
	// connector
	
	var connector = new THREE.RingGeometry( 1*r, 3*r, 16, 1, Math.PI, Math.PI/2).translate(2*r,-H-h,0);

	meshes.connectorCore = new THREE.Mesh(
		connector,
		new THREE.MeshBasicMaterial({color:colors.core})
	);

	meshes.connectorAddon = new THREE.Mesh(
		connector,
		new THREE.MeshBasicMaterial({color:colors.addon})
	);

	
	var straight = new THREE.PlaneGeometry( 2*r, 2*r).translate(0,-H-h-r,0);

	meshes.straightCore = new THREE.Mesh(
		straight,
		new THREE.MeshBasicMaterial({color:colors.core})
	);

	meshes.straightAddon = new THREE.Mesh(
		straight,
		new THREE.MeshBasicMaterial({color:colors.addon})
	);

	
	var long2 = new THREE.PlaneGeometry( 2*r, 4*r).translate(0,-H-h-2*r,0);

	meshes.longCore = new THREE.Mesh(
		long2,
		new THREE.MeshBasicMaterial({color:colors.core})
	);

	meshes.longAddon = new THREE.Mesh(
		long2,
		new THREE.MeshBasicMaterial({color:colors.addon})
	);

	
	var horizontal = new THREE.PlaneGeometry( 1, 2*r).translate(0,H+h+2*r,0);

	meshes.horizontalCore = new THREE.Mesh(
		horizontal,
		new THREE.MeshBasicMaterial({color:colors.core})
	);

	meshes.horizontalAddon = new THREE.Mesh(
		horizontal,
		new THREE.MeshBasicMaterial({color:colors.addon})
	);

	
	var vertical = new THREE.PlaneGeometry( 2*r, VSCALE);//.translate(0,-VSCALE/2,0);

	meshes.verticalCore = new THREE.Mesh(
		vertical,
		new THREE.MeshBasicMaterial({color:colors.core})
	);

	meshes.verticalAddon = new THREE.Mesh(
		vertical,
		new THREE.MeshBasicMaterial({color:colors.addon})
	);

	
	var verticalZone = new THREE.PlaneGeometry( 2*r, VSCALE-4*r);//.translate(0,-VSCALE/2,0);

	meshes.verticalZoneCore = new THREE.Mesh(
		verticalZone,
		new THREE.MeshBasicMaterial({color:colors.core})
	);

	meshes.verticalZoneAddon = new THREE.Mesh(
		verticalZone,
		new THREE.MeshBasicMaterial({color:colors.addon})
	);

	
	verticalZone = new THREE.PlaneGeometry( 2*r, VSCALE-4*r);//.translate(0,-VSCALE/2,0);

	pos = verticalZone.getAttribute( 'position' );
	col = new THREE.Float32BufferAttribute( 3*pos.count, 3 );
	for( var i=0; i<pos.count; i++ )
		if( pos.getY(i)>0 )
			col.setXYZ(i,colors.core.r,colors.core.g,colors.core.b)
		else
			col.setXYZ(i,colors.addon.r,colors.addon.g,colors.addon.b)

	verticalZone.setAttribute( 'color', col);

	meshes.verticalCoreToAddon = new THREE.Mesh(
		verticalZone,
		new THREE.MeshBasicMaterial({vertexColors:true})
	);

}

defineMeshes();


function selectNode( i )
{
	console.log( `selected index ${i}` );
	selectedNode = nodes[i];
	console.log( `selected node[${i}]`, selectedNode.name, selectedNode.x, selectedNode.y*VSCALE );
}

window.selectNode = selectNode;



	

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
		
	

function drawLevels( node, size=2 )
{
	var ball = new THREE.Group( );
	ball.position.set( node.x, VSCALE*node.y, 0*Math.random() );
	scene.add( ball );	

	var mesh, mesh2, mesh3;

	// draw top of node

	if( node.children.length>0 )
	{ // has children

		let min = node.children[0].x;
		let max = node.children[node.children.length-1].x;

		if( node.isCore )
		{
			if( node.isZone )
				mesh = meshes.verticalZoneCore.clone();
			else
			if( node.name )
				mesh = meshes.bubbleCore.clone();
			else
				mesh = meshes.verticalCore.clone();
				
			if( min < node.x )
				mesh2 = meshes.connectorCore.clone();
			if( max > node.x )
				mesh3 = meshes.connectorCore.clone();
		}
		else
		{
			if( node.isZone )
				mesh = meshes.verticalZoneAddon.clone();
			else
			if( node.name )
				mesh = meshes.bubbleAddon.clone();
			else
				mesh = meshes.verticalAddon.clone();
			
			if( node.children[0].x < node.x )
				mesh2 = meshes.connectorAddon.clone();
			if( node.children[node.children.length-1].x > node.x )
				mesh3 = meshes.connectorAddon.clone();
		}
		if( mesh2 )
		{
			mesh2.scale.x = -1;
			mesh2.scale.y = -1;
			ball.add( mesh2 );	
		}
		if( mesh3 )
		{
			mesh3.scale.y = -1;
			ball.add( mesh3 );	
		}
	}
	else
	{ // no children, a leaf
		if( node.isCore )
			mesh = meshes.circleCore.clone();
		else
			mesh = meshes.circleAddon.clone();
	}
	if( mesh )
	{
		ball.add( mesh );	
	}


	mesh2 = undefined;
	mesh3 = undefined;
	
	// draw horizontals
	if( node.children.length>0 )
	{
		let min = node.children[0].x;
		let max = node.children[node.children.length-1].x;
		
		if( node.isCore )
		{
			if( min < node.x )
			{
				mesh2 = meshes.horizontalCore.clone();
				mesh2.scale.x = node.x-min-4*r;
				mesh2.position.x = -(node.x-min)/2;
			}
			if( max > node.x )
			{
				mesh3 = meshes.horizontalCore.clone();
				mesh3.scale.x = max-node.x-4*r;
				mesh3.position.x = (max-node.x)/2;
			}
		}
		else
		{
			if( min < node.x )
			{
				mesh2 = meshes.horizontalAddon.clone();
				mesh2.scale.x = node.x-min-4*r;
				mesh2.position.x = -(node.x-min)/2;
			}
			if( max > node.x )
			{
				mesh3 = meshes.horizontalAddon.clone();
				mesh3.scale.x = max-node.x-4*r;
				mesh3.position.x = (max-node.x)/2;
			}
		}
		if( mesh2 )
		{
			ball.add( mesh2 );	
		}
		if( mesh3 )
		{
			ball.add( mesh3 );	
		}
	}
	
	
	// draw bottom of node

	mesh = undefined;
	mesh2 = undefined;
	
	if( node.parent )
	{ // has parent

		if( node.isCore )
		{
			if( node.name && !node.isZone ) mesh = meshes.bubbleCore.clone();
			if( node.x == node.parent.x )
			{
				mesh2 = meshes.longCore.clone();
			}
			else
				mesh2 = meshes.connectorCore.clone();
		}
		else
		{
			if( node.parent.isCore )
			{
				if( node.isZone )
					mesh = meshes.verticalCoreToAddon.clone();
				else
					if( node.name ) mesh = meshes.bubbleCoreToAddon.clone();
				
				if( node.x == node.parent.x )
				{
					mesh2 = meshes.longCore.clone();
				}
				else
					mesh2 = meshes.connectorCore.clone();
			}
			else
			{
				if( node.name && !node.isZone ) mesh = meshes.bubbleAddon.clone();
				if( node.x == node.parent.x )
				{
					mesh2 = meshes.longAddon.clone();
				}
				else
					mesh2 = meshes.connectorAddon.clone();
			}
		}
	}
	else
	{ // no parent, this is the root
		mesh = meshes.circleCore.clone();
	}
	if( mesh )
	{
		mesh.rotation.z = Math.PI;
		ball.add( mesh );	
	}
	if( mesh2 )
	{
		if( node.x > node.parent.x ) mesh2.scale.x = -1;
		ball.add( mesh2 );	
	}
	
	
	// label
	if( node.name )
	{
		var labelDiv = document.createElement( 'div' );
		labelDiv.className = node.isCore?'labelCore':'labelAddon';
		if( node.isZone ) labelDiv.classList.add( 'zone' );
		if( !node.hasDocs && !node.isZone ) labelDiv.classList.add( 'noDocs' );
		//labelDiv.innerHTML = (node.isZone/*||node.isZoneJS*/)?'('+node.name+')':node.name;
		labelDiv.innerHTML = node.wrappedName;
		labelDiv.setAttribute('onpointerdown', `selectNode(${node.idx})`);
		
		//labelDiv.textContent = (node.isZone||node.isZoneJS||node.isZoneFake)?'('+node.children.length+')':node.children.length;
	
		var label = new CSS3DObject( labelDiv );
		label.position.set( node.x, VSCALE*node.y, 0 );
		label.scale.setScalar( 0.007 );
		if( node.isZone )
		{
			label.rotation.z = Math.PI/2;
			label.position.y += 0.2*VSCALE;
		}
		scene.add( label );
	}
				
	size = 0.8*size+0.2;
	
	for( var i=0; i<node.children.length; i++ )
	{
		drawLevels(node.children[i], size );
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
				new THREE.LineBasicMaterial({color:'black'})
			) );


//console.table( classes )
//console.table( levels )



function swapLeft( )
{
	console.log('swap left',selectedNode.name);
}

window.swapLeft = swapLeft;


function swapRight( )
{
	console.log('swap right',selectedNode.name);
}

window.swapRight = swapRight;



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

console.log('Span',maxX-minX,' <- 463');
