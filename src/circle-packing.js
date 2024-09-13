import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//import { LoopSubdivision } from 'three/addons/modifiers/LoopSubdivision.js';
//import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';



// initialize the scene
{
	var renderer = new THREE.WebGLRenderer( {antialias:true} );
		document.body.appendChild( renderer.domElement );
		document.body.style.margin = 0;
		document.body.style.overflow = 'hidden';

	var scene = new THREE.Scene();
		scene.background = new THREE.Color( 'lightgray' );

	var camera = new THREE.PerspectiveCamera( 60, 1, 1, 500 );
		camera.position.set( 0, 0, 300 );
		camera.lookAt( scene.position );

	var controls = new OrbitControls( camera, renderer.domElement );
		controls.maxDistance = 450;
		controls.minDistance = 2;
		controls.enablePanning = true;
}



// manage window resize events
{
	function onWindowResize( /*event*/ )
	{
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight, true );
	}			

	window.addEventListener( 'resize', onWindowResize, false );

	onWindowResize();
}




var force = new THREE.Vector3(),
	step = new THREE.Vector3();

class Circle extends THREE.Mesh
{
	constructor( x, y, r )
	{
		var width = THREE.MathUtils.clamp( 0.1*r, 0.5, 5 );
		var geometry = new THREE.RingGeometry( r-width, r, Math.round(r+10) ),
			material = new THREE.MeshBasicMaterial( {color: 'royalblue', side: THREE.DoubleSide} );
			
		super( geometry, material );
		
		this.r = r;
		this.position.set( x, y, 0 );
	} // Circle.constructor

	addCircles( radii )
	{
		const K = 1.1, N = 5;
		
		var total = this.r ** K,
			sum = 0;
			
		for( let r of radii )
				sum += (N+r) ** K;

		for( let r of radii )
		{	
			r = (N+r)**K / sum * total;
			var d = (this.r-r)*Math.random(),
				a = 2*Math.PI*Math.random(),
				x = d * Math.cos(a),
				y = d * Math.sin(a);
				
			this.add( new Circle( x, y, r ) );
		}

	}
	
	
	adjust( maxStep = 0.5, powerScale = 1 )
	{
		var dist;
		
		function power( dist )
		{
			dist = Math.max( dist, 0.1 );

			var p = powerScale/dist**2;
			return p;
		}
		
		for( var child of this.children )
			if( child instanceof Circle )
			{
				step.set( 0, 0, 0 );
				
				// distance to parent
				dist = this.r - child.position.length() - child.r;
				force.copy( child.position ).setLength( -0.5*child.r*this.r*power(dist) );
//if( child==this.children[0] )
//	console.log(power(dist)*Math.sign(dist));

				step.add( force );
				
				// distance to siblings
				for( var sibling of this.children )
					if( sibling instanceof Circle )
						if( sibling !== child )
						{
							dist = child.position.distanceTo( sibling.position) - child.r - sibling.r;
							force.subVectors( sibling.position, child.position ).setLength( -child.r*sibling.r*power(dist) );
							step.add( force );
						}
					
				dist = step.length()/child.r;
				if( dist > maxStep ) step.setLength( maxStep );
				child.position.add( step );
				
				child.adjust( maxStep * child.r/this.r, powerScale * (child.r/this.r)**2 );
			}
	} // Circle.adjust
} // class Circle




var mainCircle = new Circle( 0, 0, 104 );
	scene.add( mainCircle );
	
	mainCircle.addCircles( [9,3,2,10,10,1,1,2,4,1,23,2,15,3,2, 1, 1, 1, 1, 1] );
	mainCircle.children[0].addCircles( [1,   1,1,1,1,1,1,1,1] );
	mainCircle.children[3].addCircles( [1] );
	mainCircle.children[4].addCircles( [3,1,   1,1,1,1,1,1] );
	mainCircle.children[10].addCircles( [1,    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] );
	mainCircle.children[12].addCircles( [2,3,5, 1,1,1,1,1] );
	mainCircle.children[12].children[0].addCircles( [1,1,    1,1,1] );
	
	for( var i=0; i<1250; i++ ) mainCircle.adjust( 0.5 );

// animation loop
function animate( )
{
//		controls.update( );
	renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );


