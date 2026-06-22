
/*
 * The Three Tree - TSL code
 */



import { InstancedInterleavedBuffer } from 'three';
import { buffer, Fn, instancedBufferAttribute, instanceIndex, mx_noise_vec3 as noise3d, time, uniform, uv, vec3, } from 'three/tsl';



const SWAY_ENABLED = true;
const FADE_DISTANCE = 35;



/*
 * Sway function imitating organic motion - attached as positionNode
 */

var sway = Fn( ([ pos, seed ]) => {

	var offset = vec3( 0, time, 0 ), // animation effect
		position = seed.div( 30 ); // sway expansion

	var noise = noise3d( position.add( offset ) );

	return pos.add( noise );

} );



/*
 * Fade function gradual fading of distant objects - attached as opacityNode
 */

var sizeUniform = uniform( 1.0 );

sizeUniform.onObjectUpdate( ( { object } ) => {

	sizeUniform.value = object.parent.textScale;

} );

var fade = Fn( ([ from, to ]) => {

	return from.distance( to ).div( sizeUniform ).div( FADE_DISTANCE ).oneMinus().smoothstep( 0, 0.5 );

} );



/*
 * Banding function for bulbs - add nice vertical lines
 */

var stripes = Fn( ( ) => {

	return uv().x.mul( 3.14*32 ).sin().smoothstep( -0.91, -0.9 ).div( 2 ).mul( uv().y.sub( 0.5 ).mul( 5 ).cos().clamp( 0, 1 ) );

} );



/*
 * Calculate world position of a vertex of instance in instanced mesh
 */

var instanceWorldPositionNode = Fn( ( { object: mesh } ) => {

	var matrices = mesh.instanceMatrix.array;

	if ( mesh.count <= 1000 ) {

		var bufferNode = buffer( matrices, 'mat4', Math.max( mesh.count, 1 ) );
		return bufferNode.element( instanceIndex ).toMat4().element( 3 ).xyz;

	} else {

		var bufferNode = new InstancedInterleavedBuffer( matrices, 16, 1 );
		return instancedBufferAttribute( bufferNode, 'vec4', 16, 12 ).xyz;

	}

} )();



export { sway, SWAY_ENABLED, fade, FADE_DISTANCE, stripes, instanceWorldPositionNode };
