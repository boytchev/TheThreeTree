

import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { packSiblings, packEnclose } from '../vendor/d3-hierarchy.js';
import { tree } from "../data/data.js";



// setup scene

var renderer = new THREE.WebGPURenderer( { antialias: true } );
	renderer.setSize( innerWidth, innerHeight );
	
	document.body.appendChild( renderer.domElement );
	document.body.style.overflow = 'hidden';
	document.body.style.margin = '0';

var colorA = new THREE.Color( 'whitesmoke' ),
	colorB = new THREE.Color( 'black' );

var scene = new THREE.Scene();
	scene.background = colorA;

var camera = new THREE.PerspectiveCamera( 30, innerWidth/innerHeight );
	camera.position.set( 0, 0, 600 );

var controls = new OrbitControls( camera, renderer.domElement );
	controls.enableDamping = true;
	controls.zoomSpeed = 10;
	controls.maxPolarAngle = Math.PI/2+1.5;
	controls.minPolarAngle = Math.PI/2-1.5;
	
window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth/innerHeight;
	camera.updateProjectionMatrix( );
	renderer.setSize( innerWidth, innerHeight );

} );

function animationLoop( time ) {

	scene.background = Math.cos(controls.getAzimuthalAngle())>=0 ? colorA : colorB;
	controls.update( time );
	renderer.render( scene, camera );

}

renderer.setAnimationLoop( animationLoop );



// recursively create rings 

function positions( node, level ) {

	node.group = new THREE.Group();
	
	if( node.children.length == 0 ) {
		node.radius = 1;
	}
	else
	{
		node.children.forEach( e => node.group.add(positions(e,level+1)) );
		
		node.children.sort( (a,b)=>b.radius-a.radius );
		
		var circles = node.children.map(e => ({ r: e.radius+0.5}));
		packSiblings(circles);
		
		var container = packEnclose(circles);

		node.children.forEach( (e,i) =>
			e.group.position.set( circles[i].x, circles[i].y, 0 )
		);
		
		node.radius = container.r+0.2;
	}

	node.group.add( new THREE.Mesh(
		new THREE.RingGeometry(node.radius,node.radius-0.5,100),
		new THREE.MeshBasicMaterial( { color: 'black', side: THREE.BackSide } )
	) );

	var a =	new THREE.Mesh(
		new THREE.CircleGeometry(node.radius, 100),
		new THREE.MeshBasicMaterial( { color: new THREE.Color().setHSL(0,1,level/12+0.05), depthTest:false, side: THREE.BackSide } )
	);
	a.renderOrder = level;
	node.group.add( a );
	
	return node.group;
}

scene.add( positions( tree, 0 ) );
