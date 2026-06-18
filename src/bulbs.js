
/*
 * The Three Tree - Bulbs
 */



import * as THREE from 'three';



const PATH_POINTS = 10; // side-view precision
const RADIAL_POINTS = 30; // top-view precision



/*
 * Generate top-bulb - fixed size, top is round, bottom has joint
 *              ____
 *             /    \
 *             \_  _/
 *               ||
 */

function generateTopBulbGeometry( ) {

	var path = new THREE.Path();

	path.moveTo( 0, 1 );
	path.bezierCurveTo( 4.3/8, 1, 1, 4.3/8, 1, 0 );
	path.bezierCurveTo( 1, -3.5/8, 6/8, -5.5/8, 4.3/8, -6.6/8 );
	path.bezierCurveTo( 2.8/8, -7.8/8, 0.8/8, -9.6/8, 0.8/8, -13.5/8 );

	var points = path.getPoints( PATH_POINTS ).reverse();

	var geometry = new THREE.LatheGeometry( points, RADIAL_POINTS );

	return geometry;

}



/*
 * Generate mid-bulb - level size, top and bottom have joints
 *
 *              _||_
 *             /    \
 *             \_  _/
 *               ||
 */

function generateMidBulbGeometry( level ) {

	var path = new THREE.Path();

	path.moveTo( 0.8/8, 13.5/8 );
	path.bezierCurveTo( 0.8/8, 9.6/8, 2.8/8, 7.8/8, 4.3/8, 6.6/8 );
	path.bezierCurveTo( 6/8, 5.5/8, 1, 3.5/8, 1, 0 );
	path.bezierCurveTo( 1, -3.5/8, 6/8, -5.5/8, 4.3/8, -6.6/8 );
	path.bezierCurveTo( 2.8/8, -7.8/8, 0.8/8, -9.6/8, 0.8/8, -13.5/8 );

	var points = path.getPoints( PATH_POINTS ).reverse();
	points.forEach( e => e.multiplyScalar( level ) );

	var geometry = new THREE.LatheGeometry( points, RADIAL_POINTS );

	return geometry;

}



/*
 * Create array of instances of bulbs
 *	- [1] is only for top bulbs (they have fixed size)
 *  - [n] for n>1 is only for mid bulbs of size n
 */

var bulbs = [];

function createBulbInstances( bulbCounts, material ) {

	bulbCounts.forEach( ( count, i ) => {

		var geometry;

		if ( count ) {

			if ( i==1 )
				geometry = generateTopBulbGeometry( );
			else
				geometry = generateMidBulbGeometry( i );

		}

		bulbs[ i ] = new THREE.InstancedMesh( geometry, material.clone(), count );
		bulbs[ i ].setColorAt( 0, material.color );
		bulbs[ i ].frustumCulled = false;

	} );

	return bulbs;

}



export { createBulbInstances };
