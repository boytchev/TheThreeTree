

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

//import * as lil from "three/addons/libs/lil-gui.module.min.js";

import {classes, rootClass} from "./hierarchy.js";


var renderer, scene, camera, light, controls;

function init( )
{
	// setting up the scene

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( innerWidth, innerHeight );
	renderer.setAnimationLoop( animationLoop );
	renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
	document.body.appendChild( renderer.domElement );

	scene = new THREE.Scene();
	scene.background = new THREE.Color( 'white' );

	camera = new THREE.PerspectiveCamera( 60, innerWidth/innerHeight );
	camera.position.z = 10;
	camera.lookAt( scene.position );

	light = new THREE.DirectionalLight( 'white', 1.5 );
	light.decay = 0;
	scene.add( light );

	var ambientLight = new THREE.AmbientLight( 'white', 2 );
	scene.add( ambientLight );

	controls = new OrbitControls( camera, renderer.domElement );
	controls.enableDamping = true;


	// manage window resizes

	window.addEventListener( "resize", onResize );

	function onResize( /*event*/ ) {

		camera.aspect = innerWidth/innerHeight;

		camera.updateProjectionMatrix( );

		renderer.setSize( innerWidth, innerHeight );

	}

	onResize( );

	//var gui = new lil.GUI( { title: 'The Three Tree' } );
	
} // init


init( );


function animationLoop( /*t*/ ) {

	controls.update( );
	light.position.copy( camera.position );
	renderer.render( scene, camera );

} // animationLoop


scene.add( new THREE.AxesHelper() );


var branches = 0;

class Tree extends THREE.Group
{
	constructor( classNode, size = 1, length = 2 )
	{
		super();
				
		this.classNode = classNode;
		this.scale.setScalar( size );
		
		branches++;
		
		// stem
		var stemGeo = new THREE.CylinderGeometry(0.02,0.02,length,4);
		var stemMat = new THREE.MeshNormalMaterial();
		var stem = new THREE.Mesh( stemGeo, stemMat );
		stem.position.y = length/2;

		// ball
		var ballGeo = new THREE.IcosahedronGeometry(0.2,4);
		var ballMat = new THREE.MeshNormalMaterial();
		var ball = new THREE.Mesh( ballGeo, ballMat );
		ball.position.y = length;
		
		this.add( stem, ball );
		
		// process children
		var count = classNode.children.length;
		
		for( var i=0; i<count; i++ )
		{
			var child = classNode.children[i];
			var tree = new Tree( child, size*0.95, length*0.8 );
			tree.position.y = length;
			tree.rotation.set( count>1?1:0, 2*Math.PI*i/count, 0, 'YXZ' );
			this.add( tree );
		}
		
	} // Tree.constructor
} // Tree


scene.add( new Tree( rootClass, 1, 3 ) );
console.log( branches );

console.table( classes )