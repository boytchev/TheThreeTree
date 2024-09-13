import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { LoopSubdivision } from 'three/addons/modifiers/LoopSubdivision.js';



// initialize the scene
{
	var renderer = new THREE.WebGLRenderer( {antialias:true} );
		document.body.appendChild( renderer.domElement );
		document.body.style.margin = 0;
		document.body.style.overflow = 'hidden';

	var scene = new THREE.Scene();
		scene.background = new THREE.Color( 'white' );

	var camera = new THREE.PerspectiveCamera( 60, 1, 1, 200 );
		camera.position.set( 30, 20, 10 );
		camera.lookAt( scene.position );

	var controls = new OrbitControls( camera, renderer.domElement );
		controls.maxDistance = 20;
		controls.minDistance = 2;
		controls.enableDamping = true;
		//controls.autoRotate = true;
		controls.autoRotateSpeed = 5;

	var light = new THREE.DirectionalLight( );
		scene.add( light );
}



// process window resize events
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
	
	

// create animation loop
{
	function animate( )
	{
		controls.update( );
		light.position.copy( camera.position );

		renderer.render( scene, camera );
	}

	renderer.setAnimationLoop( animate );
}



const params = {
    split:          !true,       // optional, default: true
    uvSmooth:       false,      // optional, default: false
    preserveEdges:  false,      // optional, default: false
    flatOnly:       false,      // optional, default: false
    maxTriangles:   Infinity,   // optional, default: Infinity
};


// tree fork: https://en.wikipedia.org/wiki/Tree_fork


/*
         gap topRadius  vertices
		  :   :         :
1		  :   :			:
     \   \ /   /		10,11,12,13, 14,15,16,17,
2/3   \   V   /			8,9
       \     /			4,5,6,7
1/3     |   |
        |   |			0,1,2,3
0		  :
		  :
		bottomRadius
		
		
      2            3
     -,- ________ +,-
        /       /                   c-b
       /       /                    |/|
      /_______/                     d-a
   -,+        +,+
    1          0
			   
*/


class TreeForkGeometry extends THREE.BufferGeometry
{
	constructor( baseRadius=0.5, topRadius1=0.3, gap1=0.5 , topRadius2=0.3, gap2=0.5 )
	{
		super( );
		
		this.type = 'TreeForkGeometry';
		
		var indices = [],
			vertices = [];
			
		var r, x, y, g;
		
		// 0-3
		r = baseRadius * Math.sqrt(2);
		y = 0;
		vertices.push( r,y,r, -r,y,r, -r,y,-r, r,y,-r );

		// 4-7
		y = 1/3;
		vertices.push( r,y,r, -r,y,r, -r,y,-r, r,y,-r );

		// 8-9
		r = (baseRadius+topRadius1+topRadius2)/3 * Math.sqrt(2);
		x = (gap2 - gap1)/2;
		y = 2/3;
		vertices.push( x,y,r, x,y,-r );
		
		// 10-13
		r = topRadius1 * Math.sqrt(2);
		g = r + gap1;
		y = 1;
		vertices.push( r-g,y,r, -r-g,y,r, -r-g,y,-r, r-g,y,-r );
		
		// 14-17
		r = topRadius2 * Math.sqrt(2);
		g = r + gap2;
		vertices.push( r+g,y,r, -r+g,y,r, -r+g,y,-r, r+g,y,-r );

		function trig(a,b,c)
		{
			indices.push(a,b,c);
		}
		
		function quad(a,b,c,d)
		{
			trig(a,b,d);
			trig(b,c,d);
		}
		
		function ring(a,b,c,d,A,B,C,D)
		{
			quad(a,A,B,b);
			quad(b,B,C,c);
			quad(c,C,D,d);
			quad(d,D,A,a);
		}
		
		ring(0,1,2,3,4,5,6,7);
		ring(8,5,6,9,10,11,12,13);
		ring(4,8,9,7,14,15,16,17);
		trig(4,8,5);
		trig(6,9,7);
		
		this.setIndex( indices );
		this.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
	}
} // class TreeForkGeometry


var mat = new THREE.MeshNormalMaterial( {wireframe: !true, flatShading: true, side: THREE.DoubleSide} );

for( var i=0; i<3; i++ )
{
	var tree = new THREE.Mesh(
		LoopSubdivision.modify( new TreeForkGeometry( 1, 1, 1, 0.2, 2 ), i, params ),
		mat
	);
	tree.position.x = (i-1)*7;
	tree.scale.y = 5;
	scene.add( tree );
}



scene.add( new THREE.AxesHelper( 10 ) );


//export { MAX_LEVEL, updatePlatons, exportPlatonAsGLTF, exportPlatonAsJSON, exportPlatonAsImage, exportPlatonAsHTML, exportPlatonAsJS };