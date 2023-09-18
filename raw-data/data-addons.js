DATA_ADDONS = ` 
@FILENAME
addons|animation|AnimationClipCreator.js
@EXPORT
export { AnimationClipCreator }
@CLASS
class AnimationClipCreator {
@FILENAME
addons|animation|CCDIKSolver.js
@EXPORT
export { CCDIKSolver, CCDIKHelper }
@CLASS
class CCDIKSolver {
@CLASS
class CCDIKHelper extends Object3D {
@FILENAME
addons|animation|MMDAnimationHelper.js
@EXPORT
export { MMDAnimationHelper }
@CLASS
class MMDAnimationHelper {
@CLASS
Class and 2. bone index. 	// In PMX animation system, bone transformations should be processed 	// in this order. 	_sortBoneDataArray( boneDataArray ) {
@CLASS
Class !== b.transformationClass ) {
@CLASS
Class ) {
@CLASS
Class - b.transformationClass;  			} else {
@CLASS
Class;  			} else {
@CLASS
class AudioManager {
@CLASS
class GrantSolver {
@FILENAME
addons|animation|MMDPhysics.js
@EXPORT
export { MMDPhysics }
@CLASS
class MMDPhysics {
@CLASS
class ResourceManager {
@CLASS
class RigidBody {
@CLASS
class Constraint {
@CLASS
class MMDPhysicsHelper extends Object3D {
@FILENAME
addons|cameras|CinematicCamera.js
@EXPORT
export { CinematicCamera }
@CLASS
class CinematicCamera extends PerspectiveCamera {
@FILENAME
addons|capabilities|WebGL.js
@CLASS
class WebGL {
@FILENAME
addons|capabilities|WebGPU.js
@CLASS
class WebGPU {
@FILENAME
addons|controls|ArcballControls.js
@EXPORT
export { ArcballControls }
@CLASS
class ArcballControls extends EventDispatcher {
@FILENAME
addons|controls|DragControls.js
@EXPORT
export { DragControls }
@CLASS
class DragControls extends EventDispatcher {
@FILENAME
addons|controls|FirstPersonControls.js
@EXPORT
export { FirstPersonControls }
@CLASS
class FirstPersonControls {
@FILENAME
addons|controls|FlyControls.js
@EXPORT
export { FlyControls }
@CLASS
class FlyControls extends EventDispatcher {
@FILENAME
addons|controls|MapControls.js
@EXPORT
export { MapControls }
@CLASS
class MapControls extends OrbitControls {
@FILENAME
addons|controls|OrbitControls.js
@EXPORT
export { OrbitControls }
@CLASS
class OrbitControls extends EventDispatcher {
@FILENAME
addons|controls|PointerLockControls.js
@EXPORT
export { PointerLockControls }
@CLASS
class PointerLockControls extends EventDispatcher {
@FILENAME
addons|controls|TrackballControls.js
@EXPORT
export { TrackballControls }
@CLASS
class TrackballControls extends EventDispatcher {
@FILENAME
addons|controls|TransformControls.js
@EXPORT
export { TransformControls, TransformControlsGizmo, TransformControlsPlane }
@CLASS
class TransformControls extends Object3D {
@CLASS
class TransformControlsGizmo extends Object3D {
@CLASS
class TransformControlsPlane extends Mesh {
@FILENAME
addons|csm|CSM.js
@EXPORT
export class CSM {  	constructor( data ) {  		this.camera = data.camera; 		this.parent = data.parent; 		this.cascades = data.cascades || 3; 		this.maxFar = data.maxFar || 100000; 		this.mode = data.mode || 'practical'; 		this.shadowMapSize = data.shadowMapSize || 2048; 		this.shadowBias = data.shadowBias || 0.000001; 		this.lightDirection = data.lightDirection || new Vector3( 1, - 1, 1 ).normalize(); 		this.lightIntensity = data.lightIntensity || 3; 		this.lightNear = data.lightNear || 1; 		this.lightFar = data.lightFar || 2000; 		this.lightMargin = data.lightMargin || 200; 		this.customSplitsCallback = data.customSplitsCallback; 		this.fade = false; 		this.mainFrustum = new CSMFrustum(); 		this.frustums = []; 		this.breaks = [];  		this.lights = []; 		this.shaders = new Map();  		this.createLights(); 		this.updateFrustums(); 		this.injectInclude();  	}
@CLASS
class CSM {
@FILENAME
addons|csm|CSMFrustum.js
@EXPORT
export { CSMFrustum }
@CLASS
class CSMFrustum {
@FILENAME
addons|csm|CSMHelper.js
@EXPORT
export { CSMHelper }
@CLASS
class CSMHelper extends Group {
@FILENAME
addons|csm|CSMShader.js
@EXPORT
export { CSMShader }
@FILENAME
addons|curves|CurveExtras.js
@EXPORT
export { 	GrannyKnot, 	HeartCurve, 	VivianiCurve, 	KnotCurve, 	HelixCurve, 	TrefoilKnot, 	TorusKnot, 	CinquefoilKnot, 	TrefoilPolynomialKnot, 	FigureEightPolynomialKnot, 	DecoratedTorusKnot4a, 	DecoratedTorusKnot4b, 	DecoratedTorusKnot5a, 	DecoratedTorusKnot5c }
@CLASS
class GrannyKnot extends Curve {
@CLASS
class HeartCurve extends Curve {
@CLASS
class VivianiCurve extends Curve {
@CLASS
class KnotCurve extends Curve {
@CLASS
class HelixCurve extends Curve {
@CLASS
class TrefoilKnot extends Curve {
@CLASS
class TorusKnot extends Curve {
@CLASS
class CinquefoilKnot extends Curve {
@CLASS
class TrefoilPolynomialKnot extends Curve {
@CLASS
class FigureEightPolynomialKnot extends Curve {
@CLASS
class DecoratedTorusKnot4a extends Curve {
@CLASS
class DecoratedTorusKnot4b extends Curve {
@CLASS
class DecoratedTorusKnot5a extends Curve {
@CLASS
class DecoratedTorusKnot5c extends Curve {
@FILENAME
addons|curves|NURBSCurve.js
@EXPORT
export { NURBSCurve }
@CLASS
class NURBSCurve extends Curve {
@FILENAME
addons|curves|NURBSSurface.js
@EXPORT
export { NURBSSurface }
@CLASS
class NURBSSurface {
@FILENAME
addons|curves|NURBSUtils.js
@EXPORT
export { 	findSpan, 	calcBasisFunctions, 	calcBSplinePoint, 	calcBasisFunctionDerivatives, 	calcBSplineDerivatives, 	calcKoverI, 	calcRationalCurveDerivatives, 	calcNURBSDerivatives, 	calcSurfacePoint, }
@FILENAME
addons|effects|AnaglyphEffect.js
@EXPORT
export { AnaglyphEffect }
@CLASS
class AnaglyphEffect {
@FILENAME
addons|effects|AsciiEffect.js
@EXPORT
export { AsciiEffect }
@CLASS
class AsciiEffect {
@FILENAME
addons|effects|OutlineEffect.js
@EXPORT
export { OutlineEffect }
@CLASS
class OutlineEffect {
@FILENAME
addons|effects|ParallaxBarrierEffect.js
@EXPORT
export { ParallaxBarrierEffect }
@CLASS
class ParallaxBarrierEffect {
@FILENAME
addons|effects|PeppersGhostEffect.js
@EXPORT
export { PeppersGhostEffect }
@CLASS
class PeppersGhostEffect {
@FILENAME
addons|effects|StereoEffect.js
@EXPORT
export { StereoEffect }
@CLASS
class StereoEffect {
@FILENAME
addons|environments|DebugEnvironment.js
@EXPORT
export { DebugEnvironment }
@CLASS
class DebugEnvironment extends Scene {
@FILENAME
addons|environments|RoomEnvironment.js
@EXPORT
export { RoomEnvironment }
@CLASS
class RoomEnvironment extends Scene {
@FILENAME
addons|exporters|DRACOExporter.js
@EXPORT
Export draco compressed files from threejs geometry objects.  *  * Draco files are compressed and usually are smaller than conventional 3D file formats.  *  * The exporter receives a options object containing  *  - decodeSpeed, indicates how to tune the encoder regarding decode speed (0 gives better speed but worst quality)  *  - encodeSpeed, indicates how to tune the encoder parameters (0 gives better speed but worst quality)  *  - encoderMethod  *  - quantization, indicates the presision of each type of data stored in the draco file in the order (POSITION, NORMAL, COLOR, TEX_COORD, GENERIC)  *  - exportUvs  *  - exportNormals  *  - exportColor  */  /* global DracoEncoderModule */  class DRACOExporter {  	parse( object, options = {}
@EXPORT
exporter receives a options object containing  *  - decodeSpeed, indicates how to tune the encoder regarding decode speed (0 gives better speed but worst quality)  *  - encodeSpeed, indicates how to tune the encoder parameters (0 gives better speed but worst quality)  *  - encoderMethod  *  - quantization, indicates the presision of each type of data stored in the draco file in the order (POSITION, NORMAL, COLOR, TEX_COORD, GENERIC)  *  - exportUvs  *  - exportNormals  *  - exportColor  */  /* global DracoEncoderModule */  class DRACOExporter {  	parse( object, options = {}
@EXPORT
exportUvs  *  - exportNormals  *  - exportColor  */  /* global DracoEncoderModule */  class DRACOExporter {  	parse( object, options = {}
@EXPORT
exportNormals  *  - exportColor  */  /* global DracoEncoderModule */  class DRACOExporter {  	parse( object, options = {}
@EXPORT
exportColor  */  /* global DracoEncoderModule */  class DRACOExporter {  	parse( object, options = {}
@EXPORT
Exporter {  	parse( object, options = {}
@EXPORT
Exporter.MESH_EDGEBREAKER_ENCODING, 			quantization: [ 16, 8, 8, 8, 8 ], 			exportUvs: true, 			exportNormals: true, 			exportColor: false, 		}
@EXPORT
exportUvs: true, 			exportNormals: true, 			exportColor: false, 		}
@EXPORT
exportNormals: true, 			exportColor: false, 		}
@EXPORT
exportColor: false, 		}
@EXPORT
Exporter: required the draco_encoder to work.' );  		}
@EXPORT
exportNormals === true ) {  				const normals = geometry.getAttribute( 'normal' );  				if ( normals !== undefined ) {  					builder.AddFloatAttributeToMesh( dracoObject, dracoEncoder.NORMAL, normals.count, normals.itemSize, normals.array );  				}
@EXPORT
exportUvs === true ) {  				const uvs = geometry.getAttribute( 'uv' );  				if ( uvs !== undefined ) {  					builder.AddFloatAttributeToMesh( dracoObject, dracoEncoder.TEX_COORD, uvs.count, uvs.itemSize, uvs.array );  				}
@EXPORT
exportColor === true ) {  				const colors = geometry.getAttribute( 'color' );  				if ( colors !== undefined ) {  					const array = createVertexColorSRGBArray( colors );  					builder.AddFloatAttributeToMesh( dracoObject, dracoEncoder.COLOR, colors.count, colors.itemSize, array );  				}
@EXPORT
exportColor === true ) {  				const colors = geometry.getAttribute( 'color' );  				if ( colors !== undefined ) {  					const array = createVertexColorSRGBArray( colors );  					builder.AddFloatAttribute( dracoObject, dracoEncoder.COLOR, colors.count, colors.itemSize, array );  				}
@EXPORT
Exporter: Unsupported object type.' );  		}
@EXPORT
Exporter: Draco encoding failed.' );  		}
@EXPORT
Exporter.MESH_EDGEBREAKER_ENCODING = 1; DRACOExporter.MESH_SEQUENTIAL_ENCODING = 0;  // Geometry type  DRACOExporter.POINT_CLOUD = 0; DRACOExporter.TRIANGULAR_MESH = 1;  // Attribute type  DRACOExporter.INVALID = - 1; DRACOExporter.POSITION = 0; DRACOExporter.NORMAL = 1; DRACOExporter.COLOR = 2; DRACOExporter.TEX_COORD = 3; DRACOExporter.GENERIC = 4;  export { DRACOExporter }
@EXPORT
Exporter.MESH_SEQUENTIAL_ENCODING = 0;  // Geometry type  DRACOExporter.POINT_CLOUD = 0; DRACOExporter.TRIANGULAR_MESH = 1;  // Attribute type  DRACOExporter.INVALID = - 1; DRACOExporter.POSITION = 0; DRACOExporter.NORMAL = 1; DRACOExporter.COLOR = 2; DRACOExporter.TEX_COORD = 3; DRACOExporter.GENERIC = 4;  export { DRACOExporter }
@EXPORT
Exporter.POINT_CLOUD = 0; DRACOExporter.TRIANGULAR_MESH = 1;  // Attribute type  DRACOExporter.INVALID = - 1; DRACOExporter.POSITION = 0; DRACOExporter.NORMAL = 1; DRACOExporter.COLOR = 2; DRACOExporter.TEX_COORD = 3; DRACOExporter.GENERIC = 4;  export { DRACOExporter }
@EXPORT
Exporter.TRIANGULAR_MESH = 1;  // Attribute type  DRACOExporter.INVALID = - 1; DRACOExporter.POSITION = 0; DRACOExporter.NORMAL = 1; DRACOExporter.COLOR = 2; DRACOExporter.TEX_COORD = 3; DRACOExporter.GENERIC = 4;  export { DRACOExporter }
@EXPORT
Exporter.INVALID = - 1; DRACOExporter.POSITION = 0; DRACOExporter.NORMAL = 1; DRACOExporter.COLOR = 2; DRACOExporter.TEX_COORD = 3; DRACOExporter.GENERIC = 4;  export { DRACOExporter }
@EXPORT
Exporter.POSITION = 0; DRACOExporter.NORMAL = 1; DRACOExporter.COLOR = 2; DRACOExporter.TEX_COORD = 3; DRACOExporter.GENERIC = 4;  export { DRACOExporter }
@EXPORT
Exporter.NORMAL = 1; DRACOExporter.COLOR = 2; DRACOExporter.TEX_COORD = 3; DRACOExporter.GENERIC = 4;  export { DRACOExporter }
@EXPORT
Exporter.COLOR = 2; DRACOExporter.TEX_COORD = 3; DRACOExporter.GENERIC = 4;  export { DRACOExporter }
@EXPORT
Exporter.TEX_COORD = 3; DRACOExporter.GENERIC = 4;  export { DRACOExporter }
@EXPORT
Exporter.GENERIC = 4;  export { DRACOExporter }
@EXPORT
export { DRACOExporter }
@EXPORT
Exporter }
@CLASS
class DRACOExporter {
@FILENAME
addons|exporters|EXRExporter.js
@EXPORT
Exporter {  	parse( renderer, renderTarget, options ) {  		if ( ! supported( renderer, renderTarget ) ) return undefined;  		const info = buildInfo( renderTarget, options ), 			dataBuffer = getPixelData( renderer, renderTarget, info ), 			rawContentBuffer = reorganizeDataBuffer( dataBuffer, info ), 			chunks = compressData( rawContentBuffer, info );  		return fillData( chunks, info );  	}
@EXPORT
Exporter.parse: Unsupported first parameter, expected instance of WebGLRenderer.' );  		return false;  	}
@EXPORT
Exporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.' );  		return false;  	}
@EXPORT
Exporter.parse: Unsupported WebGLRenderTarget texture type.' );  		return false;  	}
@EXPORT
Exporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.' );  		return false;  	}
@EXPORT
EXPORTER_TYPE = ( options.type !== undefined ) ? options.type : HalfFloatType, 		OUT_TYPE = ( EXPORTER_TYPE === FloatType ) ? 2 : 1, 		COMPRESSION_SIZE = compressionSizes[ COMPRESSION ], 		NUM_CHANNELS = 4;  	return { 		width: WIDTH, 		height: HEIGHT, 		type: TYPE, 		format: FORMAT, 		colorSpace: COLOR_SPACE, 		compression: COMPRESSION, 		blockLines: COMPRESSION_SIZE, 		dataType: OUT_TYPE, 		dataSize: 2 * OUT_TYPE, 		numBlocks: Math.ceil( HEIGHT / COMPRESSION_SIZE ), 		numInputChannels: 4, 		numOutputChannels: NUM_CHANNELS, 	}
@EXPORT
EXPORTER_TYPE === FloatType ) ? 2 : 1, 		COMPRESSION_SIZE = compressionSizes[ COMPRESSION ], 		NUM_CHANNELS = 4;  	return { 		width: WIDTH, 		height: HEIGHT, 		type: TYPE, 		format: FORMAT, 		colorSpace: COLOR_SPACE, 		compression: COMPRESSION, 		blockLines: COMPRESSION_SIZE, 		dataType: OUT_TYPE, 		dataSize: 2 * OUT_TYPE, 		numBlocks: Math.ceil( HEIGHT / COMPRESSION_SIZE ), 		numInputChannels: 4, 		numOutputChannels: NUM_CHANNELS, 	}
@EXPORT
export { EXRExporter, NO_COMPRESSION, ZIP_COMPRESSION, ZIPS_COMPRESSION }
@EXPORT
Exporter, NO_COMPRESSION, ZIP_COMPRESSION, ZIPS_COMPRESSION }
@CLASS
class EXRExporter {
@FILENAME
addons|exporters|GLTFExporter.js
@EXPORT
Exporter {  	constructor() {  		this.pluginCallbacks = [];  		this.register( function ( writer ) {  			return new GLTFLightExtension( writer );  		}
@EXPORT
Exporter' 			}
@EXPORT
Exporter: userData of |'' + object.name + '|' ' + 				'won|'t be serialized because of JSON.stringify error - ' + error.message );  		}
@EXPORT
Exporter: Merged metalnessMap and roughnessMap textures.' );  		if ( metalnessMap instanceof CompressedTexture ) {  			metalnessMap = decompress( metalnessMap );  		}
@EXPORT
Exporter: UV channels for metalnessMap and roughnessMap textures must match.' );  		}
@EXPORT
export. 		buffers.push( buffer );  		return 0;  	}
@EXPORT
Exporter: Unsupported bufferAttribute component type: ' + attribute.array.constructor.name );  		}
@EXPORT
export 		if ( count === 0 ) return null;  		const minMax = getMinMax( attribute, start, count ); 		let bufferViewTarget;  		// If geometry isn't provided, don't infer the target usage of the bufferView. For 		// animation samplers, target must not be set. 		if ( geometry !== undefined ) {  			bufferViewTarget = attribute === geometry.index ? WEBGL_CONSTANTS.ELEMENT_ARRAY_BUFFER : WEBGL_CONSTANTS.ARRAY_BUFFER;  		}
@EXPORT
export format 	 * @return {Integer}
@EXPORT
Exporter: Only RGBAFormat is supported.', format );  				}
@EXPORT
Exporter: Image size is bigger than maxTextureSize', image );  				}
@EXPORT
Exporter: No valid image data found. Unable to process texture.' );  		}
@EXPORT
Exporter: THREE.ShaderMaterial not supported.' ); 			return null;  		}
@EXPORT
Exporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.' );  		}
@EXPORT
Exporter: Creating normalized normal attribute from the non-normalized one.' );  			geometry.setAttribute( 'normal', this.createNormalizedNormalAttribute( originalNormal ) );  		}
@EXPORT
exported later. 			if ( attributeName.slice( 0, 5 ) === 'morph' ) continue;  			const attribute = geometry.attributes[ attributeName ]; 			attributeName = nameConversion[ attributeName ] || attributeName.toUpperCase();  			// Prefix all geometry attributes except the ones specifically 			// listed in the spec; non-spec attributes are considered custom. 			const validVertexAttributes = 					/^(POSITION|NORMAL|TANGENT|TEXCOORD_|d+|COLOR_|d+|JOINTS_|d+|WEIGHTS_|d+)$/;  			if ( ! validVertexAttributes.test( attributeName ) ) attributeName = '_' + attributeName;  			if ( cache.attributes.has( this.getUID( attribute ) ) ) {  				attributes[ attributeName ] = cache.attributes.get( this.getUID( attribute ) ); 				continue;  			}
@EXPORT
Exporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.' ); 				modifiedAttribute = new BufferAttribute( new Uint16Array( array ), attribute.itemSize, attribute.normalized );  			}
@EXPORT
exportable attributes found 		if ( Object.keys( attributes ).length === 0 ) return null;  		// Morph targets 		if ( mesh.morphTargetInfluences !== undefined && mesh.morphTargetInfluences.length > 0 ) {  			const weights = []; 			const targetNames = []; 			const reverseDictionary = {}
@EXPORT
Exporter: Only POSITION and NORMAL morph are supported.' ); 							warned = true;  						}
@EXPORT
Exporter.Utils.mergeMorphTargetTracks( clip.clone(), root );  		const tracks = clip.tracks; 		const channels = []; 		const samplers = [];  		for ( let i = 0; i < tracks.length; ++ i ) {  			const track = tracks[ i ]; 			const trackBinding = PropertyBinding.parseTrackName( track.name ); 			let trackNode = PropertyBinding.findNode( root, trackBinding.nodeName ); 			const trackProperty = PATH_PROPERTIES[ trackBinding.propertyName ];  			if ( trackBinding.objectName === 'bones' ) {  				if ( trackNode.isSkinnedMesh === true ) {  					trackNode = trackNode.skeleton.getBoneByName( trackBinding.objectIndex );  				}
@EXPORT
Exporter: Could not export animation track "%s".', track.name ); 				return null;  			}
@EXPORT
export animation track "%s".', track.name ); 				return null;  			}
@EXPORT
export CubicInterpolant(InterpolateSmooth) as CUBICSPLINE  			// Detecting glTF cubic spline interpolant by checking factory method's special property 			// GLTFCubicSplineInterpolant is a custom interpolant and track doesn't return 			// valid value from .getInterpolation(). 			if ( track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline === true ) {  				interpolation = 'CUBICSPLINE';  				// itemSize of CUBICSPLINE keyframe is 9 				// (VEC3 * 3: inTangent, splineVertex, and outTangent) 				// but needs to be stored as VEC3 so dividing by 3 here. 				outputItemSize /= 3;  			}
@EXPORT
export empty strings name because it represents no-name in Three.js. 		if ( object.name !== '' ) nodeDef.name = String( object.name );  		this.serializeUserData( object, nodeDef );  		if ( object.isMesh || object.isLine || object.isPoints ) {  			const meshIndex = this.processMesh( object );  			if ( meshIndex !== null ) nodeDef.mesh = meshIndex;  		}
@EXPORT
Exporter: Only directional, point, and spot lights are supported.', light ); 			return;  		}
@EXPORT
Exporter: Light decay may be lost. glTF is physically-based, ' 				+ 'and expects light.decay=2.' );  		}
@EXPORT
Exporter: Light direction may be lost. For best results, ' 				+ 'make light.target a child of the light with position 0,0,-1.' );  		}
@EXPORT
Exporter.Utils = {  	insertKeyframe: function ( track, time ) {  		const tolerance = 0.001; // 1ms 		const valueSize = track.getValueSize();  		const times = new track.TimeBufferType( track.times.length + 1 ); 		const values = new track.ValueBufferType( track.values.length + valueSize ); 		const interpolant = track.createInterpolant( new track.ValueBufferType( valueSize ) );  		let index;  		if ( track.times.length === 0 ) {  			times[ 0 ] = time;  			for ( let i = 0; i < valueSize; i ++ ) {  				values[ i ] = 0;  			}
@EXPORT
Exporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.' );  				}
@EXPORT
Exporter: Morph target interpolation mode not yet supported. Using LINEAR instead.' );  				sourceTrack = sourceTrack.clone(); 				sourceTrack.setInterpolation( InterpolateLinear );  			}
@EXPORT
Exporter: Morph target name not found: ' + sourceTrackBinding.propertyIndex );  			}
@EXPORT
export { GLTFExporter }
@EXPORT
Exporter }
@CLASS
class GLTFExporter {
@CLASS
class GLTFWriter {
@CLASS
class GLTFLightExtension {
@CLASS
class GLTFMaterialsUnlitExtension {
@CLASS
class GLTFMaterialsClearcoatExtension {
@CLASS
class GLTFMaterialsIridescenceExtension {
@CLASS
class GLTFMaterialsTransmissionExtension {
@CLASS
class GLTFMaterialsVolumeExtension {
@CLASS
class GLTFMaterialsIorExtension {
@CLASS
class GLTFMaterialsSpecularExtension {
@CLASS
class GLTFMaterialsSheenExtension {
@CLASS
class GLTFMaterialsAnisotropyExtension {
@CLASS
class GLTFMaterialsEmissiveStrengthExtension {
@FILENAME
addons|exporters|KTX2Exporter.js
@EXPORT
Exporter: Supported inputs are DataTexture, Data3DTexture, or WebGLRenderer and WebGLRenderTarget.'; const ERROR_FORMAT = 'THREE.KTX2Exporter: Supported formats are RGBAFormat, RGFormat, or RedFormat.'; const ERROR_TYPE = 'THREE.KTX2Exporter: Supported types are FloatType, HalfFloatType, or UnsignedByteType."'; const ERROR_COLOR_SPACE = 'THREE.KTX2Exporter: Supported color spaces are SRGBColorSpace (UnsignedByteType only), LinearSRGBColorSpace, or NoColorSpace.';  export class KTX2Exporter {  	parse( arg1, arg2 ) {  		let texture;  		if ( arg1.isDataTexture || arg1.isData3DTexture ) {  			texture = arg1;  		}
@EXPORT
Exporter: Supported formats are RGBAFormat, RGFormat, or RedFormat.'; const ERROR_TYPE = 'THREE.KTX2Exporter: Supported types are FloatType, HalfFloatType, or UnsignedByteType."'; const ERROR_COLOR_SPACE = 'THREE.KTX2Exporter: Supported color spaces are SRGBColorSpace (UnsignedByteType only), LinearSRGBColorSpace, or NoColorSpace.';  export class KTX2Exporter {  	parse( arg1, arg2 ) {  		let texture;  		if ( arg1.isDataTexture || arg1.isData3DTexture ) {  			texture = arg1;  		}
@EXPORT
Exporter: Supported types are FloatType, HalfFloatType, or UnsignedByteType."'; const ERROR_COLOR_SPACE = 'THREE.KTX2Exporter: Supported color spaces are SRGBColorSpace (UnsignedByteType only), LinearSRGBColorSpace, or NoColorSpace.';  export class KTX2Exporter {  	parse( arg1, arg2 ) {  		let texture;  		if ( arg1.isDataTexture || arg1.isData3DTexture ) {  			texture = arg1;  		}
@EXPORT
Exporter: Supported color spaces are SRGBColorSpace (UnsignedByteType only), LinearSRGBColorSpace, or NoColorSpace.';  export class KTX2Exporter {  	parse( arg1, arg2 ) {  		let texture;  		if ( arg1.isDataTexture || arg1.isData3DTexture ) {  			texture = arg1;  		}
@EXPORT
export class KTX2Exporter {  	parse( arg1, arg2 ) {  		let texture;  		if ( arg1.isDataTexture || arg1.isData3DTexture ) {  			texture = arg1;  		}
@EXPORT
Exporter {  	parse( arg1, arg2 ) {  		let texture;  		if ( arg1.isDataTexture || arg1.isData3DTexture ) {  			texture = arg1;  		}
@CLASS
class KTX2Exporter {
@FILENAME
addons|exporters|MMDExporter.js
@EXPORT
Exporter {  	/* TODO: implement 	// mesh -> pmd 	this.parsePmd = function ( object ) {  	}
@EXPORT
Exporter: parseVpd() requires SkinnedMesh instance.' ); 			return null;  		}
@EXPORT
export { MMDExporter }
@EXPORT
Exporter }
@CLASS
class MMDExporter {
@FILENAME
addons|exporters|OBJExporter.js
@EXPORT
Exporter {  	parse( object ) {  		let output = '';  		let indexVertex = 0; 		let indexVertexUvs = 0; 		let indexNormals = 0;  		const vertex = new Vector3(); 		const color = new Color(); 		const normal = new Vector3(); 		const uv = new Vector2();  		const face = [];  		function parseMesh( mesh ) {  			let nbVertex = 0; 			let nbNormals = 0; 			let nbVertexUvs = 0;  			const geometry = mesh.geometry;  			const normalMatrixWorld = new Matrix3();  			// shortcuts 			const vertices = geometry.getAttribute( 'position' ); 			const normals = geometry.getAttribute( 'normal' ); 			const uvs = geometry.getAttribute( 'uv' ); 			const indices = geometry.getIndex();  			// name of the mesh object 			output += 'o ' + mesh.name + '|n';  			// name of the mesh material 			if ( mesh.material && mesh.material.name ) {  				output += 'usemtl ' + mesh.material.name + '|n';  			}
@EXPORT
export format 					output += 'v ' + vertex.x + ' ' + vertex.y + ' ' + vertex.z + '|n';  				}
@EXPORT
export format 					output += 'vt ' + uv.x + ' ' + uv.y + '|n';  				}
@EXPORT
export format 					output += 'vn ' + normal.x + ' ' + normal.y + ' ' + normal.z + '|n';  				}
@EXPORT
export format 					output += 'f ' + face.join( ' ' ) + '|n';  				}
@EXPORT
export format 					output += 'f ' + face.join( ' ' ) + '|n';  				}
@EXPORT
export format 					output += 'v ' + vertex.x + ' ' + vertex.y + ' ' + vertex.z + '|n';  				}
@EXPORT
export { OBJExporter }
@EXPORT
Exporter }
@CLASS
class OBJExporter {
@FILENAME
addons|exporters|PLYExporter.js
@EXPORT
exporter-js  *  * Usage:  *  const exporter = new PLYExporter();  *  *  // second argument is a list of options  *  exporter.parse(mesh, data => console.log(data), { binary: true, excludeAttributes: [ 'color' ], littleEndian: true }
@EXPORT
exporter = new PLYExporter();  *  *  // second argument is a list of options  *  exporter.parse(mesh, data => console.log(data), { binary: true, excludeAttributes: [ 'color' ], littleEndian: true }
@EXPORT
Exporter();  *  *  // second argument is a list of options  *  exporter.parse(mesh, data => console.log(data), { binary: true, excludeAttributes: [ 'color' ], littleEndian: true }
@EXPORT
exporter.parse(mesh, data => console.log(data), { binary: true, excludeAttributes: [ 'color' ], littleEndian: true }
@EXPORT
Exporter {  	parse( object, onDone, options = {}
@EXPORT
Exporter: Failed to generate a valid PLY file with triangle indices because the ' + 				'number of indices is not divisible by 3.'  			);  			return null;  		}
@EXPORT
export { PLYExporter }
@EXPORT
Exporter }
@CLASS
class PLYExporter {
@FILENAME
addons|exporters|STLExporter.js
@EXPORT
exporter = new STLExporter();  *  *  // second argument is a list of options  *  const data = exporter.parse( mesh, { binary: true }
@EXPORT
Exporter();  *  *  // second argument is a list of options  *  const data = exporter.parse( mesh, { binary: true }
@EXPORT
exporter.parse( mesh, { binary: true }
@EXPORT
Exporter {  	parse( scene, options = {}
@EXPORT
exported|n';  		}
@EXPORT
exported|n';  		}
@EXPORT
export { STLExporter }
@EXPORT
Exporter }
@CLASS
class STLExporter {
@FILENAME
addons|exporters|USDZExporter.js
@EXPORT
Exporter {  	async parse( scene, options = {}
@EXPORT
Exporter: Unsupported material type (USDZ only supports MeshStandardMaterial)', object );  				}
@EXPORT
Exporter: No valid image data found. Unable to process texture.' );  	}
@EXPORT
Exporter" 	}
@EXPORT
Exporter: USDZ does not support negative scales', object );  	}
@EXPORT
Exporter: Normals missing.' ); 		return Array( count ).fill( '(0, 0, 0)' ).join( ', ' );  	}
@EXPORT
Exporter: UVs missing.' ); 		return Array( count ).fill( '(0, 0)' ).join( ', ' );  	}
@EXPORT
Exporter: USDZ does not support double sided materials', material );  	}
@EXPORT
Exporter: USDZ does not support negative scales', camera );  	}
@EXPORT
export { USDZExporter }
@EXPORT
Exporter }
@CLASS
class USDZExporter {
@FILENAME
addons|geometries|BoxLineGeometry.js
@EXPORT
export { BoxLineGeometry }
@CLASS
class BoxLineGeometry extends BufferGeometry {
@FILENAME
addons|geometries|ConvexGeometry.js
@EXPORT
export { ConvexGeometry }
@CLASS
class ConvexGeometry extends BufferGeometry {
@FILENAME
addons|geometries|DecalGeometry.js
@EXPORT
export { DecalGeometry, DecalVertex }
@CLASS
class DecalGeometry extends BufferGeometry {
@CLASS
class DecalVertex {
@FILENAME
addons|geometries|ParametricGeometries.js
@EXPORT
export { ParametricGeometries }
@CLASS
class TubeGeometry extends ParametricGeometry {
@CLASS
class TorusKnotGeometry extends ParametricGeometries.TubeGeometry {
@CLASS
class TorusKnotCurve extends Curve {
@CLASS
class SphereGeometry extends ParametricGeometry {
@CLASS
class PlaneGeometry extends ParametricGeometry {
@FILENAME
addons|geometries|ParametricGeometry.js
@EXPORT
export { ParametricGeometry }
@CLASS
class ParametricGeometry extends BufferGeometry {
@FILENAME
addons|geometries|RoundedBoxGeometry.js
@EXPORT
export { RoundedBoxGeometry }
@CLASS
class RoundedBoxGeometry extends BoxGeometry {
@FILENAME
addons|geometries|TeapotGeometry.js
@EXPORT
export { TeapotGeometry }
@CLASS
class TeapotGeometry extends BufferGeometry {
@FILENAME
addons|geometries|TextGeometry.js
@EXPORT
export { TextGeometry }
@CLASS
class TextGeometry extends ExtrudeGeometry {
@FILENAME
addons|helpers|LightProbeHelper.js
@EXPORT
export { LightProbeHelper }
@CLASS
class LightProbeHelper extends Mesh {
@FILENAME
addons|helpers|OctreeHelper.js
@EXPORT
export { OctreeHelper }
@CLASS
class OctreeHelper extends LineSegments {
@FILENAME
addons|helpers|PositionalAudioHelper.js
@EXPORT
export { PositionalAudioHelper }
@CLASS
class PositionalAudioHelper extends Line {
@FILENAME
addons|helpers|RectAreaLightHelper.js
@EXPORT
export { RectAreaLightHelper }
@CLASS
class RectAreaLightHelper extends Line {
@FILENAME
addons|helpers|VertexNormalsHelper.js
@EXPORT
export { VertexNormalsHelper }
@CLASS
class VertexNormalsHelper extends LineSegments {
@FILENAME
addons|helpers|VertexTangentsHelper.js
@EXPORT
export { VertexTangentsHelper }
@CLASS
class VertexTangentsHelper extends LineSegments {
@FILENAME
addons|helpers|ViewHelper.js
@EXPORT
export { ViewHelper }
@CLASS
class ViewHelper extends Object3D {
@FILENAME
addons|interactive|HTMLMesh.js
@EXPORT
export { HTMLMesh }
@CLASS
class HTMLMesh extends Mesh {
@CLASS
class HTMLTexture extends CanvasTexture {
@FILENAME
addons|interactive|InteractiveGroup.js
@EXPORT
export { InteractiveGroup }
@CLASS
class InteractiveGroup extends Group {
@FILENAME
addons|interactive|SelectionBox.js
@EXPORT
export { SelectionBox }
@CLASS
class to check whether objects are in a selection area in 3D space  */  const _frustum = new Frustum(); const _center = new Vector3();  const _tmpPoint = new Vector3();  const _vecNear = new Vector3(); const _vecTopLeft = new Vector3(); const _vecTopRight = new Vector3(); const _vecDownRight = new Vector3(); const _vecDownLeft = new Vector3();  const _vecFarTopLeft = new Vector3(); const _vecFarTopRight = new Vector3(); const _vecFarDownRight = new Vector3(); const _vecFarDownLeft = new Vector3();  const _vectemp1 = new Vector3(); const _vectemp2 = new Vector3(); const _vectemp3 = new Vector3();  const _matrix = new Matrix4(); const _quaternion = new Quaternion(); const _scale = new Vector3();  class SelectionBox {
@CLASS
class SelectionBox {
@FILENAME
addons|interactive|SelectionHelper.js
@EXPORT
export { SelectionHelper }
@CLASS
class SelectionHelper {
@CLASS
ClassName ) {
@CLASS
classList.add( cssClassName ); 		this.element.style.pointerEvents = 'none';  		this.renderer = renderer;  		this.startPoint = new Vector2(); 		this.pointTopLeft = new Vector2(); 		this.pointBottomRight = new Vector2();  		this.isDown = false; 		this.enabled = true;  		this.onPointerDown = function ( event ) {
@CLASS
ClassName ); 		this.element.style.pointerEvents = 'none';  		this.renderer = renderer;  		this.startPoint = new Vector2(); 		this.pointTopLeft = new Vector2(); 		this.pointBottomRight = new Vector2();  		this.isDown = false; 		this.enabled = true;  		this.onPointerDown = function ( event ) {
@FILENAME
addons|libs|ammo.wasm.js
@EXPORT
exports;Ma--;b.monitorRunDependencies&&b.monitorRunDependencies(Ma);0==Ma&&(null!==Na&&(clearInterval(Na),Na=null),Oa&&(g=Oa,Oa=null,g()))}
@EXPORT
exports === 'object' && typeof module === 'object')       module.exports = Ammo;     else if (typeof define === 'function' && define['amd'])       define([], function() { return Ammo; }
@EXPORT
exports = Ammo;     else if (typeof define === 'function' && define['amd'])       define([], function() { return Ammo; }
@CLASS
Class=function(a){
@FILENAME
addons|libs|chevrotain.module.min.js
@EXPORT
exports:{}
@EXPORT
exports,e)),e.exports);var Er=R(Pt=>{"use strict";Object.defineProperty(Pt,"__esModule",{value:!0}
@EXPORT
exports);var Er=R(Pt=>{"use strict";Object.defineProperty(Pt,"__esModule",{value:!0}
@EXPORT
exports,module)=>{"use strict";var __spreadArray=exports&&exports.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t}
@EXPORT
exports&&exports.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t}
@EXPORT
exports.__spreadArray||function(t,e){for(var r=0,n=e.length,i=t.length;r<n;r++,i++)t[i]=e[r];return t}
@EXPORT
exports,"__esModule",{value:!0}
@EXPORT
exports.toFastProperties=exports.timer=exports.peek=exports.isES2015MapSupported=exports.PRINT_WARNING=exports.PRINT_ERROR=exports.packArray=exports.IDENTITY=exports.NOOP=exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.timer=exports.peek=exports.isES2015MapSupported=exports.PRINT_WARNING=exports.PRINT_ERROR=exports.packArray=exports.IDENTITY=exports.NOOP=exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.peek=exports.isES2015MapSupported=exports.PRINT_WARNING=exports.PRINT_ERROR=exports.packArray=exports.IDENTITY=exports.NOOP=exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.isES2015MapSupported=exports.PRINT_WARNING=exports.PRINT_ERROR=exports.packArray=exports.IDENTITY=exports.NOOP=exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.PRINT_WARNING=exports.PRINT_ERROR=exports.packArray=exports.IDENTITY=exports.NOOP=exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.PRINT_ERROR=exports.packArray=exports.IDENTITY=exports.NOOP=exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.packArray=exports.IDENTITY=exports.NOOP=exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.IDENTITY=exports.NOOP=exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.NOOP=exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.merge=exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.groupBy=exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.defaults=exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.assignNoOverwrite=exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.assign=exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.zipObject=exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.sortBy=exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.indexOf=exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.some=exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.difference=exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.every=exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.isObject=exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.isRegExp=exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.isArray=exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.partial=exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.uniq=exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.compact=exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.reduce=exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.findAll=exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.find=exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.cloneObj=exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.cloneArr=exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.contains=exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.has=exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.pick=exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.reject=exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.filter=exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.dropRight=exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.drop=exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.isFunction=exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.isUndefined=exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.isString=exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.forEach=exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.last=exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.first=exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.flatten=exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.map=exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.mapValues=exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.values=exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.keys=exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.isEmpty=void 0;function isEmpty(t){return t&&t.length===0}
@EXPORT
exports.isEmpty=isEmpty;function keys(t){return t==null?[]:Object.keys(t)}
@EXPORT
exports.keys=keys;function values(t){for(var e=[],r=Object.keys(t),n=0;n<r.length;n++)e.push(t[r[n]]);return e}
@EXPORT
exports.values=values;function mapValues(t,e){for(var r=[],n=keys(t),i=0;i<n.length;i++){var a=n[i];r.push(e.call(null,t[a],a))}
@EXPORT
exports.mapValues=mapValues;function map(t,e){for(var r=[],n=0;n<t.length;n++)r.push(e.call(null,t[n],n));return r}
@EXPORT
exports.map=map;function flatten(t){for(var e=[],r=0;r<t.length;r++){var n=t[r];Array.isArray(n)?e=e.concat(flatten(n)):e.push(n)}
@EXPORT
exports.flatten=flatten;function first(t){return isEmpty(t)?void 0:t[0]}
@EXPORT
exports.first=first;function last(t){var e=t&&t.length;return e?t[e-1]:void 0}
@EXPORT
exports.last=last;function forEach(t,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)e.call(null,t[r],r);else if(isObject(t))for(var n=keys(t),r=0;r<n.length;r++){var i=n[r],a=t[i];e.call(null,a,i)}
@EXPORT
exports.forEach=forEach;function isString(t){return typeof t=="string"}
@EXPORT
exports.isString=isString;function isUndefined(t){return t===void 0}
@EXPORT
exports.isUndefined=isUndefined;function isFunction(t){return t instanceof Function}
@EXPORT
exports.isFunction=isFunction;function drop(t,e){return e===void 0&&(e=1),t.slice(e,t.length)}
@EXPORT
exports.drop=drop;function dropRight(t,e){return e===void 0&&(e=1),t.slice(0,t.length-e)}
@EXPORT
exports.dropRight=dropRight;function filter(t,e){var r=[];if(Array.isArray(t))for(var n=0;n<t.length;n++){var i=t[n];e.call(null,i)&&r.push(i)}
@EXPORT
exports.filter=filter;function reject(t,e){return filter(t,function(r){return!e(r)}
@EXPORT
exports.reject=reject;function pick(t,e){for(var r=Object.keys(t),n={}
@EXPORT
exports.pick=pick;function has(t,e){return isObject(t)?t.hasOwnProperty(e):!1}
@EXPORT
exports.has=has;function contains(t,e){return find(t,function(r){return r===e}
@EXPORT
exports.contains=contains;function cloneArr(t){for(var e=[],r=0;r<t.length;r++)e.push(t[r]);return e}
@EXPORT
exports.cloneArr=cloneArr;function cloneObj(t){var e={}
@EXPORT
exports.cloneObj=cloneObj;function find(t,e){for(var r=0;r<t.length;r++){var n=t[r];if(e.call(null,n))return n}
@EXPORT
exports.find=find;function findAll(t,e){for(var r=[],n=0;n<t.length;n++){var i=t[n];e.call(null,i)&&r.push(i)}
@EXPORT
exports.findAll=findAll;function reduce(t,e,r){for(var n=Array.isArray(t),i=n?t:values(t),a=n?[]:keys(t),o=r,s=0;s<i.length;s++)o=e.call(null,o,i[s],n?s:a[s]);return o}
@EXPORT
exports.reduce=reduce;function compact(t){return reject(t,function(e){return e==null}
@EXPORT
exports.compact=compact;function uniq(t,e){e===void 0&&(e=function(n){return n}
@EXPORT
exports.uniq=uniq;function partial(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=[null],i=n.concat(e);return Function.bind.apply(t,i)}
@EXPORT
exports.partial=partial;function isArray(t){return Array.isArray(t)}
@EXPORT
exports.isArray=isArray;function isRegExp(t){return t instanceof RegExp}
@EXPORT
exports.isRegExp=isRegExp;function isObject(t){return t instanceof Object}
@EXPORT
exports.isObject=isObject;function every(t,e){for(var r=0;r<t.length;r++)if(!e(t[r],r))return!1;return!0}
@EXPORT
exports.every=every;function difference(t,e){return reject(t,function(r){return contains(e,r)}
@EXPORT
exports.difference=difference;function some(t,e){for(var r=0;r<t.length;r++)if(e(t[r]))return!0;return!1}
@EXPORT
exports.some=some;function indexOf(t,e){for(var r=0;r<t.length;r++)if(t[r]===e)return r;return-1}
@EXPORT
exports.indexOf=indexOf;function sortBy(t,e){var r=cloneArr(t);return r.sort(function(n,i){return e(n)-e(i)}
@EXPORT
exports.sortBy=sortBy;function zipObject(t,e){if(t.length!==e.length)throw Error("can't zipObject with different number of keys and values!");for(var r={}
@EXPORT
exports.zipObject=zipObject;function assign(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=0;n<e.length;n++)for(var i=e[n],a=keys(i),o=0;o<a.length;o++){var s=a[o];t[s]=i[s]}
@EXPORT
exports.assign=assign;function assignNoOverwrite(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=0;n<e.length;n++)for(var i=e[n],a=keys(i),o=0;o<a.length;o++){var s=a[o];has(t,s)||(t[s]=i[s])}
@EXPORT
exports.assignNoOverwrite=assignNoOverwrite;function defaults(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return assignNoOverwrite.apply(void 0,__spreadArray([{}
@EXPORT
exports.defaults=defaults;function groupBy(t,e){var r={}
@EXPORT
exports.groupBy=groupBy;function merge(t,e){for(var r=cloneObj(t),n=keys(e),i=0;i<n.length;i++){var a=n[i],o=e[a];r[a]=o}
@EXPORT
exports.merge=merge;function NOOP(){}
@EXPORT
exports.NOOP=NOOP;function IDENTITY(t){return t}
@EXPORT
exports.IDENTITY=IDENTITY;function packArray(t){for(var e=[],r=0;r<t.length;r++){var n=t[r];e.push(n!==void 0?n:void 0)}
@EXPORT
exports.packArray=packArray;function PRINT_ERROR(t){console&&console.error&&console.error("Error: "+t)}
@EXPORT
exports.PRINT_ERROR=PRINT_ERROR;function PRINT_WARNING(t){console&&console.warn&&console.warn("Warning: "+t)}
@EXPORT
exports.PRINT_WARNING=PRINT_WARNING;function isES2015MapSupported(){return typeof Map=="function"}
@EXPORT
exports.isES2015MapSupported=isES2015MapSupported;function peek(t){return t[t.length-1]}
@EXPORT
exports.peek=peek;function timer(t){var e=new Date().getTime(),r=t(),n=new Date().getTime(),i=n-e;return{time:i,value:r}
@EXPORT
exports.timer=timer;function toFastProperties(toBecomeFast){function FakeConstructor(){}
@EXPORT
exports.toFastProperties=toFastProperties}
@EXPORT
exports?St.exports=e():t.regexpToAst=e()}
@EXPORT
exports=e():t.regexpToAst=e()}
@EXPORT
exportLexerState(),c=[],f=!1,p=this.LA(1),l=this.LA(1),m=function(){var v=a.LA(0),u=a.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:p,previous:v,ruleName:a.getCurrRuleFullName()}
@EXPORT
exportLexerState=function(){return this.currIdx}
@EXPORT
exportLexerState()}
@EXPORT
exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}
@CLASS
Class();break;case"(":u=this.group();break}return u===void 0&&this.isPatternCharacter()&&(u=this.patternCharacter()),s(u),u.loc=this.loc(d),this.isQuantifier()&&(u.quantifier=this.quantifier()),u},t.prototype.dotAll=function(){
@CLASS
ClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.decimalEscapeAtom=function(){
@CLASS
ClassEscape=function(){
@CLASS
classPatternCharacterAtom=function(){
@CLASS
Class=function(){
@CLASS
ClassAtom();){
@CLASS
classAtom(),_=A.type==="Character";if(_&&this.isRangeDash()){
@CLASS
classAtom(),y=g.type==="Character";if(y){
@CLASS
class");u.push({
@CLASS
classAtom=function(){
@CLASS
classEscape();default:return this.classPatternCharacterAtom()}},t.prototype.classEscape=function(){
@CLASS
classPatternCharacterAtom()}},t.prototype.classEscape=function(){
@CLASS
classEscape=function(){
@CLASS
ClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}},t.prototype.group=function(){
@CLASS
ClassAtom(1)},t.prototype.isDigit=function(){
@CLASS
ClassAtom=function(u){
@CLASS
Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){
@CLASS
Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){
@CLASS
Class=N.tokenShortNameIdx=N.tokenStructuredMatcherNoCategories=N.tokenStructuredMatcher=void 0;var V=k();function so(t,e){
@CLASS
Class={
@CLASS
Class[N.tokenShortNameIdx]=e,e.tokenTypeIdx=N.tokenShortNameIdx++),Nr(e)&&!V.isArray(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),Nr(e)||(e.CATEGORIES=[]),Fn(e)||(e.categoryMatches=[]),wn(e)||(e.categoryMatchesMap={
@CLASS
Class[n].tokenTypeIdx)})})}N.assignCategoriesTokensProp=Ln;function Mn(t){
@CLASS
Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){
@CLASS
Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){
@CLASS
Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){
@CLASS
Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){
@CLASS
Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){
@CLASS
Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){
@CLASS
Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){
@CLASS
Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){
@CLASS
classNameFromInstance=void 0;var Fs=k();function ws(t){
@CLASS
classNameFromInstance=ws;var Xi="name";function Yi(t){
@CLASS
className,K.keys(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor},t.prototype.getBaseCstVisitorConstructorWithDefaults=function(){
@CLASS
className,K.keys(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor},t.prototype.getLastExplicitRuleShortName=function(){
@CLASS
className}),a={
@CLASS
className)),this.definitionErrors=this.definitionErrors.concat(i);var a=this.defineRule(e,r,n);return this[e]=a,a},t.prototype.BACKTRACK=function(e,r){
@CLASS
className=$s.classNameFromInstance(this),this.shortRuleNameToFull={
@CLASS
classNameFromInstance(this),this.shortRuleNameToFull={
@CLASS
Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){
@CLASS
className;e.TRACE_INIT("toFastProps",function(){
@FILENAME
addons|libs|ecsy.module.js
@EXPORT
export { Component, Not, ObjectPool, System, SystemStateComponent, TagComponent, Types, Version, World, Entity as _Entity, cloneArray, cloneClonable, cloneJSON, cloneValue, copyArray, copyCopyable, copyJSON, copyValue, createType, enableRemoteDevtools }
@CLASS
class SystemManager {
@CLASS
Class, attributes) {
@CLASS
Class.isSystem) {
@CLASS
Class.name}' does not extend 'System' class|       );     }      if (this.getSystem(SystemClass) !== undefined) {
@CLASS
class|       );     }      if (this.getSystem(SystemClass) !== undefined) {
@CLASS
Class) !== undefined) {
@CLASS
Class.getName()}' already registered.|);       return this;     }      var system = new SystemClass(this.world, attributes);     if (system.init) system.init(attributes);     system.order = this._systems.length;     this._systems.push(system);     if (system.execute) {
@CLASS
Class(this.world, attributes);     if (system.init) system.init(attributes);     system.order = this._systems.length;     this._systems.push(system);     if (system.execute) {
@CLASS
Class) {
@CLASS
Class);     if (system === undefined) {
@CLASS
Class.getName()}'. It doesn't exist.|       );       return this;     }      this._systems.splice(this._systems.indexOf(system), 1);      if (system.execute) {
@CLASS
Class) {
@CLASS
Class);   }    getSystems() {
@CLASS
Class) {
@CLASS
Class);     if (!~index) return;      this._systems.splice(index, 1);   }    executeSystem(system, delta, time) {
@CLASS
class ObjectPool {
@CLASS
class EventDispatcher  */ class EventDispatcher {
@CLASS
class EventDispatcher {
@CLASS
class Query {
@CLASS
class QueryManager  */ class QueryManager {
@CLASS
class QueryManager {
@CLASS
class    */   stats() {
@CLASS
class Component {
@CLASS
class SystemStateComponent extends Component {
@CLASS
class EntityPool extends ObjectPool {
@CLASS
Class, initialSize) {
@CLASS
Class, undefined);     this.entityManager = entityManager;      if (typeof initialSize !== "undefined") {
@CLASS
class EntityManager  */ class EntityManager {
@CLASS
class EntityManager {
@CLASS
Class,       this.world.options.entityPoolSize     );      // Deferred deletion     this.entitiesWithComponentsToRemove = [];     this.entitiesToRemove = [];     this.deferredRemovalEnabled = true;   }    getEntityByName(name) {
@CLASS
class ComponentManager {
@CLASS
class Entity {
@CLASS
Class: Entity, };  class World {
@CLASS
class World {
@CLASS
Class) {
@CLASS
Class);   }    getSystems() {
@CLASS
class System {
@CLASS
class TagComponent extends Component {
@FILENAME
addons|libs|fflate.module.js
@EXPORT
export { Deflate }
@EXPORT
export { AsyncDeflate }
@EXPORT
export function deflate(data, opts, cb) {     if (!cb)         cb = opts, opts = {}
@EXPORT
export function deflateSync(data, opts) {     return dopt(data, opts || {}
@EXPORT
export { Inflate }
@EXPORT
export { AsyncInflate }
@EXPORT
export function inflate(data, opts, cb) {     if (!cb)         cb = opts, opts = {}
@EXPORT
export function inflateSync(data, out) {     return inflt(data, out); }
@EXPORT
export { Gzip }
@EXPORT
export { AsyncGzip }
@EXPORT
export function gzip(data, opts, cb) {     if (!cb)         cb = opts, opts = {}
@EXPORT
export function gzipSync(data, opts) {     if (!opts)         opts = {}
@EXPORT
export { Gunzip }
@EXPORT
export { AsyncGunzip }
@EXPORT
export function gunzip(data, opts, cb) {     if (!cb)         cb = opts, opts = {}
@EXPORT
export function gunzipSync(data, out) {     return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data))); }
@EXPORT
export { Zlib }
@EXPORT
export { AsyncZlib }
@EXPORT
export function zlib(data, opts, cb) {     if (!cb)         cb = opts, opts = {}
@EXPORT
export function zlibSync(data, opts) {     if (!opts)         opts = {}
@EXPORT
export { Unzlib }
@EXPORT
export { AsyncUnzlib }
@EXPORT
export function unzlib(data, opts, cb) {     if (!cb)         cb = opts, opts = {}
@EXPORT
export function unzlibSync(data, out) {     return inflt((zlv(data), data.subarray(2, -4)), out); }
@EXPORT
export { gzip as compress, AsyncGzip as AsyncCompress }
@EXPORT
export { gzipSync as compressSync, Gzip as Compress }
@EXPORT
export { Decompress }
@EXPORT
export { AsyncDecompress }
@EXPORT
export function decompress(data, opts, cb) {     if (!cb)         cb = opts, opts = {}
@EXPORT
export function decompressSync(data, out) {     return (data[0] == 31 && data[1] == 139 && data[2] == 8)         ? gunzipSync(data, out)         : ((data[0] & 15) != 8 || (data[0] >> 4) > 7 || ((data[0] << 8 | data[1]) % 31))             ? inflateSync(data, out)             : unzlibSync(data, out); }
@EXPORT
export { DecodeUTF8 }
@EXPORT
export { EncodeUTF8 }
@EXPORT
export function strToU8(str, latin1) {     if (latin1) {         var ar_1 = new u8(str.length);         for (var i = 0; i < str.length; ++i)             ar_1[i] = str.charCodeAt(i);         return ar_1;     }
@EXPORT
export function strFromU8(dat, latin1) {     if (latin1) {         var r = '';         for (var i = 0; i < dat.length; i += 16384)             r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));         return r;     }
@EXPORT
export { ZipPassThrough }
@EXPORT
export { ZipDeflate }
@EXPORT
export { AsyncZipDeflate }
@EXPORT
export { Zip }
@EXPORT
export function zip(data, opts, cb) {     if (!cb)         cb = opts, opts = {}
@EXPORT
export function zipSync(data, opts) {     if (!opts)         opts = {}
@EXPORT
export { UnzipPassThrough }
@EXPORT
export { UnzipInflate }
@EXPORT
export { AsyncUnzipInflate }
@EXPORT
export { Unzip }
@EXPORT
export function unzip(data, cb) {     if (typeof cb != 'function')         throw 'no callback';     var term = [];     var tAll = function () {         for (var i = 0; i < term.length; ++i)             term[i]();     }
@EXPORT
export function unzipSync(data) {     var files = {}
@CLASS
class for custom behavior, but by default this passes      * the data through. You must call this.ondata(err, chunk, final) at some      * point in this method.      * @param chunk The chunk to process      * @param final Whether this is the last chunk      */     ZipPassThrough.prototype.process = function (chunk, final) {
@CLASS
classing this with a custom      * compression algorithm, note that you must push data from the source      * file only, pre-compression.      * @param chunk The chunk to push      * @param final Whether this is the last chunk      */     ZipPassThrough.prototype.push = function (chunk, final) {
@FILENAME
addons|libs|ktx-parse.module.js
@EXPORT
export{Q as KHR_DF_CHANNEL_RGBSDA_ALPHA,q as KHR_DF_CHANNEL_RGBSDA_BLUE,J as KHR_DF_CHANNEL_RGBSDA_DEPTH,Y as KHR_DF_CHANNEL_RGBSDA_GREEN,R as KHR_DF_CHANNEL_RGBSDA_RED,G as KHR_DF_CHANNEL_RGBSDA_STENCIL,p as KHR_DF_FLAG_ALPHA_PREMULTIPLIED,_ as KHR_DF_FLAG_ALPHA_STRAIGHT,s as KHR_DF_KHR_DESCRIPTORTYPE_BASICFORMAT,c as KHR_DF_MODEL_ASTC,f as KHR_DF_MODEL_ETC1,h as KHR_DF_MODEL_ETC1S,U as KHR_DF_MODEL_ETC2,l as KHR_DF_MODEL_RGBSDA,o as KHR_DF_MODEL_UNSPECIFIED,W as KHR_DF_PRIMARIES_ACES,N as KHR_DF_PRIMARIES_ACESCC,j as KHR_DF_PRIMARIES_ADOBERGB,z as KHR_DF_PRIMARIES_BT2020,P as KHR_DF_PRIMARIES_BT601_EBU,C as KHR_DF_PRIMARIES_BT601_SMPTE,F as KHR_DF_PRIMARIES_BT709,M as KHR_DF_PRIMARIES_CIEXYZ,X as KHR_DF_PRIMARIES_DISPLAYP3,H as KHR_DF_PRIMARIES_NTSC1953,K as KHR_DF_PRIMARIES_PAL525,E as KHR_DF_PRIMARIES_UNSPECIFIED,tt as KHR_DF_SAMPLE_DATATYPE_EXPONENT,Z as KHR_DF_SAMPLE_DATATYPE_FLOAT,et as KHR_DF_SAMPLE_DATATYPE_LINEAR,$ as KHR_DF_SAMPLE_DATATYPE_SIGNED,O as KHR_DF_TRANSFER_ACESCC,T as KHR_DF_TRANSFER_ACESCCT,V as KHR_DF_TRANSFER_ADOBERGB,w as KHR_DF_TRANSFER_BT1886,k as KHR_DF_TRANSFER_DCIP3,B as KHR_DF_TRANSFER_HLG_EOTF,D as KHR_DF_TRANSFER_HLG_OETF,u as KHR_DF_TRANSFER_ITU,y as KHR_DF_TRANSFER_LINEAR,b as KHR_DF_TRANSFER_NTSC,S as KHR_DF_TRANSFER_PAL625_EOTF,v as KHR_DF_TRANSFER_PAL_OETF,L as KHR_DF_TRANSFER_PQ_EOTF,A as KHR_DF_TRANSFER_PQ_OETF,d as KHR_DF_TRANSFER_SLOG,m as KHR_DF_TRANSFER_SLOG2,x as KHR_DF_TRANSFER_SRGB,I as KHR_DF_TRANSFER_ST240,g as KHR_DF_TRANSFER_UNSPECIFIED,a as KHR_DF_VENDORID_KHRONOS,r as KHR_DF_VERSION,e as KHR_SUPERCOMPRESSION_BASISLZ,t as KHR_SUPERCOMPRESSION_NONE,i as KHR_SUPERCOMPRESSION_ZLIB,n as KHR_SUPERCOMPRESSION_ZSTD,Si as KTX2Container,Ut as VK_FORMAT_A1R5G5B5_UNORM_PACK16,qt as VK_FORMAT_A2B10G10R10_SINT_PACK32,Rt as VK_FORMAT_A2B10G10R10_SNORM_PACK32,Yt as VK_FORMAT_A2B10G10R10_UINT_PACK32,jt as VK_FORMAT_A2B10G10R10_UNORM_PACK32,Xt as VK_FORMAT_A2R10G10B10_SINT_PACK32,Ht as VK_FORMAT_A2R10G10B10_SNORM_PACK32,Kt as VK_FORMAT_A2R10G10B10_UINT_PACK32,Nt as VK_FORMAT_A2R10G10B10_UNORM_PACK32,vi as VK_FORMAT_A4B4G4R4_UNORM_PACK16_EXT,ki as VK_FORMAT_A4R4G4B4_UNORM_PACK16_EXT,Bi as VK_FORMAT_ASTC_10x10_SFLOAT_BLOCK_EXT,Xn as VK_FORMAT_ASTC_10x10_SRGB_BLOCK,Kn as VK_FORMAT_ASTC_10x10_UNORM_BLOCK,mi as VK_FORMAT_ASTC_10x5_SFLOAT_BLOCK_EXT,zn as VK_FORMAT_ASTC_10x5_SRGB_BLOCK,Cn as VK_FORMAT_ASTC_10x5_UNORM_BLOCK,wi as VK_FORMAT_ASTC_10x6_SFLOAT_BLOCK_EXT,Wn as VK_FORMAT_ASTC_10x6_SRGB_BLOCK,Mn as VK_FORMAT_ASTC_10x6_UNORM_BLOCK,Di as VK_FORMAT_ASTC_10x8_SFLOAT_BLOCK_EXT,Hn as VK_FORMAT_ASTC_10x8_SRGB_BLOCK,Nn as VK_FORMAT_ASTC_10x8_UNORM_BLOCK,Li as VK_FORMAT_ASTC_12x10_SFLOAT_BLOCK_EXT,Rn as VK_FORMAT_ASTC_12x10_SRGB_BLOCK,jn as VK_FORMAT_ASTC_12x10_UNORM_BLOCK,Ai as VK_FORMAT_ASTC_12x12_SFLOAT_BLOCK_EXT,qn as VK_FORMAT_ASTC_12x12_SRGB_BLOCK,Yn as VK_FORMAT_ASTC_12x12_UNORM_BLOCK,_i as VK_FORMAT_ASTC_4x4_SFLOAT_BLOCK_EXT,wn as VK_FORMAT_ASTC_4x4_SRGB_BLOCK,mn as VK_FORMAT_ASTC_4x4_UNORM_BLOCK,pi as VK_FORMAT_ASTC_5x4_SFLOAT_BLOCK_EXT,Bn as VK_FORMAT_ASTC_5x4_SRGB_BLOCK,Dn as VK_FORMAT_ASTC_5x4_UNORM_BLOCK,gi as VK_FORMAT_ASTC_5x5_SFLOAT_BLOCK_EXT,An as VK_FORMAT_ASTC_5x5_SRGB_BLOCK,Ln as VK_FORMAT_ASTC_5x5_UNORM_BLOCK,yi as VK_FORMAT_ASTC_6x5_SFLOAT_BLOCK_EXT,vn as VK_FORMAT_ASTC_6x5_SRGB_BLOCK,kn as VK_FORMAT_ASTC_6x5_UNORM_BLOCK,xi as VK_FORMAT_ASTC_6x6_SFLOAT_BLOCK_EXT,In as VK_FORMAT_ASTC_6x6_SRGB_BLOCK,Sn as VK_FORMAT_ASTC_6x6_UNORM_BLOCK,ui as VK_FORMAT_ASTC_8x5_SFLOAT_BLOCK_EXT,Tn as VK_FORMAT_ASTC_8x5_SRGB_BLOCK,On as VK_FORMAT_ASTC_8x5_UNORM_BLOCK,bi as VK_FORMAT_ASTC_8x6_SFLOAT_BLOCK_EXT,En as VK_FORMAT_ASTC_8x6_SRGB_BLOCK,Vn as VK_FORMAT_ASTC_8x6_UNORM_BLOCK,di as VK_FORMAT_ASTC_8x8_SFLOAT_BLOCK_EXT,Pn as VK_FORMAT_ASTC_8x8_SRGB_BLOCK,Fn as VK_FORMAT_ASTC_8x8_UNORM_BLOCK,Me as VK_FORMAT_B10G11R11_UFLOAT_PACK32,$n as VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16,si as VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16,at as VK_FORMAT_B4G4R4A4_UNORM_PACK16,ft as VK_FORMAT_B5G5R5A1_UNORM_PACK16,ot as VK_FORMAT_B5G6R5_UNORM_PACK16,Mt as VK_FORMAT_B8G8R8A8_SINT,Ct as VK_FORMAT_B8G8R8A8_SNORM,Wt as VK_FORMAT_B8G8R8A8_SRGB,zt as VK_FORMAT_B8G8R8A8_UINT,Pt as VK_FORMAT_B8G8R8A8_UNORM,St as VK_FORMAT_B8G8R8_SINT,kt as VK_FORMAT_B8G8R8_SNORM,It as VK_FORMAT_B8G8R8_SRGB,vt as VK_FORMAT_B8G8R8_UINT,At as VK_FORMAT_B8G8R8_UNORM,Qe as VK_FORMAT_BC1_RGBA_SRGB_BLOCK,Je as VK_FORMAT_BC1_RGBA_UNORM_BLOCK,Ge as VK_FORMAT_BC1_RGB_SRGB_BLOCK,qe as VK_FORMAT_BC1_RGB_UNORM_BLOCK,$e as VK_FORMAT_BC2_SRGB_BLOCK,Ze as VK_FORMAT_BC2_UNORM_BLOCK,en as VK_FORMAT_BC3_SRGB_BLOCK,tn as VK_FORMAT_BC3_UNORM_BLOCK,sn as VK_FORMAT_BC4_SNORM_BLOCK,nn as VK_FORMAT_BC4_UNORM_BLOCK,rn as VK_FORMAT_BC5_SNORM_BLOCK,an as VK_FORMAT_BC5_UNORM_BLOCK,ln as VK_FORMAT_BC6H_SFLOAT_BLOCK,on as VK_FORMAT_BC6H_UFLOAT_BLOCK,Un as VK_FORMAT_BC7_SRGB_BLOCK,fn as VK_FORMAT_BC7_UNORM_BLOCK,Ne as VK_FORMAT_D16_UNORM,je as VK_FORMAT_D16_UNORM_S8_UINT,Re as VK_FORMAT_D24_UNORM_S8_UINT,Ke as VK_FORMAT_D32_SFLOAT,Ye as VK_FORMAT_D32_SFLOAT_S8_UINT,We as VK_FORMAT_E5B9G9R9_UFLOAT_PACK32,dn as VK_FORMAT_EAC_R11G11_SNORM_BLOCK,bn as VK_FORMAT_EAC_R11G11_UNORM_BLOCK,un as VK_FORMAT_EAC_R11_SNORM_BLOCK,xn as VK_FORMAT_EAC_R11_UNORM_BLOCK,pn as VK_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK,_n as VK_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK,yn as VK_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK,gn as VK_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK,hn as VK_FORMAT_ETC2_R8G8B8_SRGB_BLOCK,cn as VK_FORMAT_ETC2_R8G8B8_UNORM_BLOCK,Zn as VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16,ii as VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16,fi as VK_FORMAT_PVRTC1_2BPP_SRGB_BLOCK_IMG,ai as VK_FORMAT_PVRTC1_2BPP_UNORM_BLOCK_IMG,Ui as VK_FORMAT_PVRTC1_4BPP_SRGB_BLOCK_IMG,ri as VK_FORMAT_PVRTC1_4BPP_UNORM_BLOCK_IMG,ci as VK_FORMAT_PVRTC2_2BPP_SRGB_BLOCK_IMG,oi as VK_FORMAT_PVRTC2_2BPP_UNORM_BLOCK_IMG,hi as VK_FORMAT_PVRTC2_4BPP_SRGB_BLOCK_IMG,li as VK_FORMAT_PVRTC2_4BPP_UNORM_BLOCK_IMG,Qn as VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16,Jn as VK_FORMAT_R10X6G10X6_UNORM_2PACK16,Gn as VK_FORMAT_R10X6_UNORM_PACK16,ni as VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16,ei as VK_FORMAT_R12X4G12X4_UNORM_2PACK16,ti as VK_FORMAT_R12X4_UNORM_PACK16,pe as VK_FORMAT_R16G16B16A16_SFLOAT,_e as VK_FORMAT_R16G16B16A16_SINT,ce as VK_FORMAT_R16G16B16A16_SNORM,he as VK_FORMAT_R16G16B16A16_UINT,Ue as VK_FORMAT_R16G16B16A16_UNORM,fe as VK_FORMAT_R16G16B16_SFLOAT,le as VK_FORMAT_R16G16B16_SINT,re as VK_FORMAT_R16G16B16_SNORM,oe as VK_FORMAT_R16G16B16_UINT,ae as VK_FORMAT_R16G16B16_UNORM,se as VK_FORMAT_R16G16_SFLOAT,ie as VK_FORMAT_R16G16_SINT,ee as VK_FORMAT_R16G16_SNORM,ne as VK_FORMAT_R16G16_UINT,te as VK_FORMAT_R16G16_UNORM,$t as VK_FORMAT_R16_SFLOAT,Zt as VK_FORMAT_R16_SINT,Jt as VK_FORMAT_R16_SNORM,Qt as VK_FORMAT_R16_UINT,Gt as VK_FORMAT_R16_UNORM,Ae as VK_FORMAT_R32G32B32A32_SFLOAT,Le as VK_FORMAT_R32G32B32A32_SINT,Be as VK_FORMAT_R32G32B32A32_UINT,De as VK_FORMAT_R32G32B32_SFLOAT,we as VK_FORMAT_R32G32B32_SINT,me as VK_FORMAT_R32G32B32_UINT,de as VK_FORMAT_R32G32_SFLOAT,be as VK_FORMAT_R32G32_SINT,ue as VK_FORMAT_R32G32_UINT,xe as VK_FORMAT_R32_SFLOAT,ye as VK_FORMAT_R32_SINT,ge as VK_FORMAT_R32_UINT,st as VK_FORMAT_R4G4B4A4_UNORM_PACK16,it as VK_FORMAT_R4G4_UNORM_PACK8,lt as VK_FORMAT_R5G5B5A1_UNORM_PACK16,rt as VK_FORMAT_R5G6B5_UNORM_PACK16,ze as VK_FORMAT_R64G64B64A64_SFLOAT,Ce as VK_FORMAT_R64G64B64A64_SINT,Pe as VK_FORMAT_R64G64B64A64_UINT,Fe as VK_FORMAT_R64G64B64_SFLOAT,Ee as VK_FORMAT_R64G64B64_SINT,Ve as VK_FORMAT_R64G64B64_UINT,Te as VK_FORMAT_R64G64_SFLOAT,Oe as VK_FORMAT_R64G64_SINT,Ie as VK_FORMAT_R64G64_UINT,Se as VK_FORMAT_R64_SFLOAT,ve as VK_FORMAT_R64_SINT,ke as VK_FORMAT_R64_UINT,Et as VK_FORMAT_R8G8B8A8_SINT,Tt as VK_FORMAT_R8G8B8A8_SNORM,Ft as VK_FORMAT_R8G8B8A8_SRGB,Vt as VK_FORMAT_R8G8B8A8_UINT,Ot as VK_FORMAT_R8G8B8A8_UNORM,Bt as VK_FORMAT_R8G8B8_SINT,wt as VK_FORMAT_R8G8B8_SNORM,Lt as VK_FORMAT_R8G8B8_SRGB,Dt as VK_FORMAT_R8G8B8_UINT,mt as VK_FORMAT_R8G8B8_UNORM,bt as VK_FORMAT_R8G8_SINT,xt as VK_FORMAT_R8G8_SNORM,dt as VK_FORMAT_R8G8_SRGB,ut as VK_FORMAT_R8G8_UINT,yt as VK_FORMAT_R8G8_UNORM,pt as VK_FORMAT_R8_SINT,ht as VK_FORMAT_R8_SNORM,gt as VK_FORMAT_R8_SRGB,_t as VK_FORMAT_R8_UINT,ct as VK_FORMAT_R8_UNORM,Xe as VK_FORMAT_S8_UINT,nt as VK_FORMAT_UNDEFINED,He as VK_FORMAT_X8_D24_UNORM_PACK32,Pi as read,Mi as write}
@CLASS
class Si{
@CLASS
class Ii{
@FILENAME
addons|libs|lil-gui.module.min.js
@EXPORT
export default g;export{i as BooleanController,a as ColorController,t as Controller,h as FunctionController,g as GUI,d as NumberController,c as OptionController,u as StringController}
@EXPORT
export{i as BooleanController,a as ColorController,t as Controller,h as FunctionController,g as GUI,d as NumberController,c as OptionController,u as StringController}
@CLASS
class t{
@CLASS
classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),t.nextNameID=t.nextNameID||0,this.$name.id="lil-gui-name-"+ ++t.nextNameID,this.$widget=document.createElement(l),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(t){
@CLASS
classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),t.nextNameID=t.nextNameID||0,this.$name.id="lil-gui-name-"+ ++t.nextNameID,this.$widget=document.createElement(l),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(t){
@CLASS
classList.add("name"),t.nextNameID=t.nextNameID||0,this.$name.id="lil-gui-name-"+ ++t.nextNameID,this.$widget=document.createElement(l),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(t){
@CLASS
classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(t){
@CLASS
classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){
@CLASS
class i extends t{
@CLASS
class a extends t{
@CLASS
classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(l=this.initialValue,o.find(t=>t.match(l))),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{
@CLASS
class h extends t{
@CLASS
class d extends t{
@CLASS
classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=t=>{
@CLASS
classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=t=>{
@CLASS
classList.add("hasSlider");const t=t=>{
@CLASS
classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+i,t)}_getImplicitStep(){
@CLASS
classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+i,t)}_getImplicitStep(){
@CLASS
classList.toggle("lil-gui-"+i,t)}_getImplicitStep(){
@CLASS
class c extends t{
@CLASS
classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(t=>{
@CLASS
classList.add("focus")}),this.$select.addEventListener("blur",()=>{
@CLASS
classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){
@CLASS
class u extends t{
@CLASS
class g{
@CLASS
classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",t=>{
@CLASS
classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",t=>{
@CLASS
classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),r&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!p&&l&&(!function(t){
@CLASS
classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!p&&l&&(!function(t){
@CLASS
classList.add("root"),!p&&l&&(!function(t){
@CLASS
classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",t=>t.stopPropagation()),this.domElement.addEventListener("keyup",t=>t.stopPropagation())}add(t,e,s,n,l){
@CLASS
classList.toggle("closed",this._closed),this}close(){
@CLASS
classList.add("transition");const e=t=>{
@CLASS
classList.remove("transition"),this.$children.removeEventListener("transitionend",e))};this.$children.addEventListener("transitionend",e);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{
@CLASS
classList.toggle("closed",!t),requestAnimationFrame(()=>{
@FILENAME
addons|libs|lottie_canvas.module.js
@EXPORT
exports === 'object' && typeof module !== 'undefined')     && !(typeof define === 'function' && define.amd) // eslint-disable-line no-undef   ) {     window.bodymovin = lottie;   }
@EXPORT
exported characters list: ', char, style, font); // eslint-disable-line no-console     }
@EXPORT
exported as hidden (data.hd === true) no need to render       // If it is not visible no need to render       if (this.data.hd || this.hidden) {         return;       }
@EXPORT
export the implementation as a module using // either convention. //  // End anonymous scope, and pass initial values. }
@EXPORT
export { lottie as default }
@CLASS
Class = getRenderer(animType);   this.renderer = new RendererClass(this, params.rendererSettings);   this.imagePreloader.setCacheType(animType, this.renderer.globalData.defs);   this.renderer.setProjectInterface(this.projectInterface);   this.animType = animType;   if (params.loop === ''         || params.loop === null         || params.loop === undefined         || params.loop === true) {
@CLASS
Class(this, params.rendererSettings);   this.imagePreloader.setCacheType(animType, this.renderer.globalData.defs);   this.renderer.setProjectInterface(this.projectInterface);   this.animType = animType;   if (params.loop === ''         || params.loop === null         || params.loop === undefined         || params.loop === true) {
@CLASS
ClassName('lottie')),       [].slice.call(document.getElementsByClassName('bodymovin')));     var i;     var lenAnims = animElements.length;     for (i = 0; i < lenAnims; i += 1) {
@CLASS
ClassName('bodymovin')));     var i;     var lenAnims = animElements.length;     for (i = 0; i < lenAnims; i += 1) {
@CLASS
Class) {
@CLASS
class', fontData.fClass);       } else {
@CLASS
Class);       } else {
@CLASS
class', this.data.cl);     }     // Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped     if (this.data.ty === 0 && !this.data.hd) {
@CLASS
class', data.cl);   }   if (data.bm) {
@CLASS
class', data.cl);   }   if (data.bm) {
@CLASS
Class) {
@CLASS
class', fontData.fClass);   } else {
@CLASS
Class);   } else {
@CLASS
className) {
@CLASS
class', this.renderConfig.className);   }   if (this.renderConfig.id) {
@CLASS
className);   }   if (this.renderConfig.id) {
@CLASS
className: (config && config.className) || '',     id: (config && config.id) || '',     focusable: config && config.focusable,     filterSize: {
@CLASS
className) || '',     id: (config && config.id) || '',     focusable: config && config.focusable,     filterSize: {
@CLASS
className: (config && config.className) || '',     id: (config && config.id) || '',   };   this.renderConfig.dpr = (config && config.dpr) || 1;   if (this.animationItem.wrapper) {
@CLASS
className) || '',     id: (config && config.id) || '',   };   this.renderConfig.dpr = (config && config.dpr) || 1;   if (this.animationItem.wrapper) {
@CLASS
className) {
@CLASS
class', this.renderConfig.className);     }     if (this.renderConfig.id) {
@CLASS
className);     }     if (this.renderConfig.id) {
@CLASS
className: (config && config.className) || '',     id: (config && config.id) || '',   };   this.renderConfig.dpr = (config && config.dpr) || 1;   if (this.animationItem.wrapper) {
@CLASS
className) || '',     id: (config && config.id) || '',   };   this.renderConfig.dpr = (config && config.dpr) || 1;   if (this.animationItem.wrapper) {
@FILENAME
addons|libs|meshopt_decoder.module.js
@EXPORT
exports.__wasm_call_ctors(); 		}
@EXPORT
exports.sbrk; 		var count4 = (count + 3) & ~3; 		var tp = sbrk(count4 * size); 		var sp = sbrk(source.length); 		var heap = new Uint8Array(instance.exports.memory.buffer); 		heap.set(source, sp); 		var res = fun(tp, count, size, sp, source.length); 		if (res == 0 && filter) { 			filter(tp, count4, size); 		}
@EXPORT
exports.memory.buffer); 		heap.set(source, sp); 		var res = fun(tp, count, size, sp, source.length); 		if (res == 0 && filter) { 			filter(tp, count4, size); 		}
@EXPORT
exports.__wasm_call_ctors(); }
@EXPORT
exports[data.mode], target, data.count, data.size, data.source, instance.exports[data.filter]); 				self.postMessage({ id: data.id, count: data.count, action: "resolve", value: target }
@EXPORT
exports[data.filter]); 				self.postMessage({ id: data.id, count: data.count, action: "resolve", value: target }
@EXPORT
exports.meshopt_decodeVertexBuffer, target, count, size, source, instance.exports[filters[filter]]); 		}
@EXPORT
exports[filters[filter]]); 		}
@EXPORT
exports.meshopt_decodeIndexBuffer, target, count, size, source); 		}
@EXPORT
exports.meshopt_decodeIndexSequence, target, count, size, source); 		}
@EXPORT
exports[decoders[mode]], target, count, size, source, instance.exports[filters[filter]]); 		}
@EXPORT
exports[filters[filter]]); 		}
@EXPORT
exports[decoders[mode]], target, count, size, source, instance.exports[filters[filter]]); 				return target; 			}
@EXPORT
exports[filters[filter]]); 				return target; 			}
@EXPORT
export { MeshoptDecoder }
@FILENAME
addons|libs|mikktspace.module.js
@EXPORT
export function generateTangents(position, normal, texcoord) {     try {         const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);         var ptr0 = passArrayF32ToWasm0(position, wasm.__wbindgen_malloc);         var len0 = WASM_VECTOR_LEN;         var ptr1 = passArrayF32ToWasm0(normal, wasm.__wbindgen_malloc);         var len1 = WASM_VECTOR_LEN;         var ptr2 = passArrayF32ToWasm0(texcoord, wasm.__wbindgen_malloc);         var len2 = WASM_VECTOR_LEN;         wasm.generateTangents(retptr, ptr0, len0, ptr1, len1, ptr2, len2);         var r0 = getInt32Memory0()[retptr / 4 + 0];         var r1 = getInt32Memory0()[retptr / 4 + 1];         var v3 = getArrayF32FromWasm0(r0, r1).slice();         wasm.__wbindgen_free(r0, r1 * 4);         return v3;     }
@EXPORT
export const __wbindgen_string_new = function(arg0, arg1) {     var ret = getStringFromWasm0(arg0, arg1);     return addHeapObject(ret); }
@EXPORT
export const __wbindgen_rethrow = function(arg0) {     throw takeObject(arg0); }
@EXPORT
export let wasm;  export let isReady = false;  export const ready = fetch(wasmDataURI)     .then((res) => res.arrayBuffer())     .then((buffer) => WebAssembly.instantiate(buffer, {         './mikktspace_module_bg.js': {__wbindgen_string_new, __wbindgen_rethrow}
@EXPORT
export let isReady = false;  export const ready = fetch(wasmDataURI)     .then((res) => res.arrayBuffer())     .then((buffer) => WebAssembly.instantiate(buffer, {         './mikktspace_module_bg.js': {__wbindgen_string_new, __wbindgen_rethrow}
@EXPORT
export const ready = fetch(wasmDataURI)     .then((res) => res.arrayBuffer())     .then((buffer) => WebAssembly.instantiate(buffer, {         './mikktspace_module_bg.js': {__wbindgen_string_new, __wbindgen_rethrow}
@EXPORT
exports;         isReady = true;     }
@FILENAME
addons|libs|mmdparser.module.js
@EXPORT
export { MMDParser, CharsetEncoder, Parser }
@CLASS
Class = dv.getUint32(); 			p.flag = dv.getUint16();  			if ( p.flag & 0x1 ) {
@FILENAME
addons|libs|motion-controllers.module.js
@EXPORT
export { Constants, MotionController, fetchProfile, fetchProfilesList }
@CLASS
class VisualResponse {
@CLASS
class Component {
@CLASS
class MotionController {
@FILENAME
addons|libs|opentype.module.js
@EXPORT
exports opentype.BoundingBox  * @class  * @constructor  */ function BoundingBox() {     this.x1 = Number.NaN;     this.y1 = Number.NaN;     this.x2 = Number.NaN;     this.y2 = Number.NaN; }
@EXPORT
exports opentype.Path  * @class  * @constructor  */ function Path() {     this.commands = [];     this.fill = 'black';     this.stroke = null;     this.strokeWidth = 1; }
@EXPORT
exports opentype.decode  * @class  */ var decode = {}
@EXPORT
exports opentype.encode  * @class  */ var encode = {}
@EXPORT
exports opentype.sizeOf  * @class  */ var sizeOf = {}
@EXPORT
exports opentype.Table  * @class  * @param {string}
@EXPORT
exports opentype.Coverage  * @class  * @param {opentype.Table}
@EXPORT
exports opentype.FeatureList  * @class  * @param {opentype.Table}
@EXPORT
exports opentype.LookupList  * @class  * @param {opentype.Table}
@EXPORT
exports opentype.DefaultEncoding  * @class  * @constructor  * @param {opentype.Font}
@EXPORT
exports opentype.CmapEncoding  * @class  * @constructor  * @param {Object}
@EXPORT
exports opentype.CffEncoding  * @class  * @constructor  * @param {string}
@EXPORT
exports opentype.GlyphNames  * @class  * @constructor  * @param {Object}
@EXPORT
exports opentype.Glyph  * @class  * @param {GlyphOptions}
@EXPORT
exports opentype.GlyphSet  * @class  * @param {opentype.Font}
@EXPORT
exports opentype.Layout  * @class  */ function Layout(font, tableName) {     this.font = font;     this.tableName = tableName; }
@EXPORT
exports opentype.Position  * @class  * @extends opentype.Layout  * @param {opentype.Font}
@EXPORT
exports opentype.Substitution  * @class  * @extends opentype.Layout  * @param {opentype.Font}
@EXPORT
exports.DEBUG statements are removed on the minified distribution file. */  var instructionTable; var exec; var execGlyph; var execComponent;  /* * Creates a hinting object. * * There ought to be exactly one * for each truetype font that is used for hinting. */ function Hinting(font) {     // the font this hinting object is for     this.font = font;      this.getCommands = function (hPoints) {         return glyf.getPath(hPoints).commands;     }
@EXPORT
exports.DEBUG) {                 console.log('---EXEC FPGM---');                 fpgmState.step = -1;             }
@EXPORT
exports.DEBUG) {             console.log('---EXEC PREP---');             prepState.step = -1;         }
@EXPORT
exports.DEBUG) {             console.log('---EXEC GLYPH---');             state.step = -1;         }
@EXPORT
exports.DEBUG) {                 console.log('---EXEC COMP ' + i + '---');                 state.step = -1;             }
@EXPORT
exports.DEBUG) {                 console.log('---EXEC COMPOSITE---');                 state.step = -1;             }
@EXPORT
exports.DEBUG) {         console.log('PROCESSING GLYPH', state.stack);         for (var i$2 = 0; i$2 < pLen; i$2++) {             console.log(i$2, gZone[i$2].x, gZone[i$2].y);         }
@EXPORT
exports.DEBUG) {         console.log('FINISHED GLYPH', state.stack);         for (var i$3 = 0; i$3 < pLen; i$3++) {             console.log(i$3, gZone[i$3].x, gZone[i$3].y);         }
@EXPORT
exports.DEBUG) { state.step++; }
@EXPORT
exports.DEBUG) {             var da;             if (state.gZone) {                 da = [];                 for (let i = 0; i < state.gZone.length; i++)                 {                     da.push(i + ' ' +                         state.gZone[i].x * 64 + ' ' +                         state.gZone[i].y * 64 + ' ' +                         (state.gZone[i].xTouched ? 'x' : '') +                         (state.gZone[i].yTouched ? 'y' : '')                     );                 }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SVTCA[' + v.axis + ']'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SPVTCA[' + v.axis + ']'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SFVTCA[' + v.axis + ']'); }
@EXPORT
exports.DEBUG) { console.log('SPVTL[' + a + ']', p2i, p1i); }
@EXPORT
exports.DEBUG) { console.log('SFVTL[' + a + ']', p2i, p1i); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SPVFS[]', y, x); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SPVFS[]', y, x); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'GPV[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'GFV[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SFVTPV[]'); }
@EXPORT
exports.DEBUG) { console.log('ISECT[], ', pa0i, pa1i, pb0i, pb1i, pi); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SRP0[]', state.rp0); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SRP1[]', state.rp1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SRP2[]', state.rp2); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SZP0[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SZP1[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SZP2[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SZPS[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SLOOP[]', state.loop); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'RTG[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'RTHG[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SMD[]', d); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'ELSE[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'JMPR[]', o); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SCVTCI[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'DUP[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'POP[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'CLEAR[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SWAP[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'DEPTH[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'LOOPCALL[]', fn, c); }
@EXPORT
exports.DEBUG) { console.log(             ++state.step,             i + 1 < c ? 'next loopcall' : 'done loopcall',             i         ); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'CALL[]', fn); }
@EXPORT
exports.DEBUG) { console.log(++state.step, 'returning from', fn); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'CINDEX[]', k); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'MINDEX[]', k); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'FDEF[]', fn); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'MDAP[' + round + ']', pi); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'IUP[' + v.axis + ']'); }
@EXPORT
exports.DEBUG) {             console.log(                 state.step,                 (state.loop > 1 ?                    'loop ' + (state.loop - loop) + ': ' :                    ''                 ) +                 'SHP[' + (a ? 'rp1' : 'rp2') + ']', pi             );         }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SHC[' + a + ']', ci); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SHZ[' + a + ']', e); }
@EXPORT
exports.DEBUG) {             console.log(                 state.step,                 (state.loop > 1 ? 'loop ' + (state.loop - loop) + ': ' : '') +                 'SHPIX[]', pi, d             );         }
@EXPORT
exports.DEBUG) {             console.log(                 state.step,                 (state.loop > 1 ? 'loop ' + (state.loop - loop) + ': ' : '') +                 'IP[]', pi, rp1i, '<->', rp2i             );         }
@EXPORT
exports.DEBUG) { console.log(state.step, 'MSIRP[' + a + ']', d, pi); }
@EXPORT
exports.DEBUG) {             console.log(                 state.step,                 (state.loop > 1 ? 'loop ' + (state.loop - loop) + ': ' : '') +                 'ALIGNRP[]', pi             );         }
@EXPORT
exports.DEBUG) { console.log(state.step, 'RTDG[]'); }
@EXPORT
exports.DEBUG) {         console.log(             state.step,             'MIAP[' + round + ']',             n, '(', cv, ')', pi         );     }
@EXPORT
exports.DEBUG) { console.log(state.step, 'NPUSHB[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'NPUSHW[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'WS', v, l); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'RS', l); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'WCVTP', v, l); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'RCVT', cvte); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'GC[' + a + ']', pi); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'MD[' + a + ']', pi2, pi1, '->', d); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'MPPEM[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'FLIPON[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'LT[]', e2, e1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'LTEQ[]', e2, e1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'GT[]', e2, e1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'GTEQ[]', e2, e1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'EQ[]', e2, e1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'NEQ[]', e2, e1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'ODD[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'EVEN[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'IF[]', test); }
@EXPORT
exports.DEBUG) { console.log(state.step,  'EIF[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'EIF[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'AND[]', e2, e1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'OR[]', e2, e1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'NOT[]', e); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'DELTAP[' + b + ']', n, stack); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'DELTAPFIX', pi, 'by', mag * ds); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SDB[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SDS[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'ADD[]', n2, n1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SUB[]', n2, n1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'DIV[]', n2, n1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'MUL[]', n2, n1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'ABS[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'NEG[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'FLOOR[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'CEILING[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'ROUND[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'WCVTF[]', v, l); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'DELTAC[' + b + ']', n, stack); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'DELTACFIX', c, 'by', delta); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SROUND[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'S45ROUND[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'ROFF[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'RUTG[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'RDTG[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SCANCTRL[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SDPVTL[' + a + ']', p2i, p1i); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'GETINFO[]', sel); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'ROLL[]'); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'MAX[]', e2, e1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'MIN[]', e2, e1); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'SCANTYPE[]', n); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'INSTCTRL[]', s, v); }
@EXPORT
exports.DEBUG) { console.log(state.step, 'PUSHB[' + n + ']'); }
@EXPORT
exports.DEBUG) { console.log(state.ip, 'PUSHW[' + n + ']'); }
@EXPORT
exports.DEBUG) {         console.log(             state.step,             (indirect ? 'MIRP[' : 'MDRP[') +             (setRp0 ? 'M' : 'm') +             (keepD ? '>' : '_') +             (ro ? 'R' : '_') +             (dt === 0 ? 'Gr' : (dt === 1 ? 'Bl' : (dt === 2 ? 'Wh' : ''))) +             ']',             indirect ?                 cvte + '(' + state.cvt[cvte] + ',' +  cv + ')' :                 '',             pi,             '(d =', od, '->', sign * d, ')'         );     }
@EXPORT
exports opentype.Font  * @class  * @param {FontOptions}
@EXPORT
export default opentype; export { BoundingBox, Font, Glyph, Path, parse as _parse, load, loadSync, parseBuffer as parse }
@EXPORT
export { BoundingBox, Font, Glyph, Path, parse as _parse, load, loadSync, parseBuffer as parse }
@CLASS
class  * @constructor  */ function BoundingBox() {
@CLASS
class  * @constructor  */ function Path() {
@CLASS
class  */ var decode = {
@CLASS
class  */ var encode = {
@CLASS
class  */ var sizeOf = {
@CLASS
class  * @param {
@CLASS
class  * @param {
@CLASS
class  * @param {
@CLASS
class  * @param {
@CLASS
Class Definition Table in a GSUB, GPOS or GDEF table. // https://www.microsoft.com/typography/OTSPEC/chapter2.htm Parser.prototype.parseClassDef = function() {
@CLASS
ClassDef = function() {
@CLASS
classes: this.parseUShortList()         };     } else if (format === 2) {
@CLASS
classId: Parser.uShort             })         };     }     throw new Error('0x' + startOffset.toString(16) + ': ClassDef format must be 1 or 2.'); };  ///// Static methods /////////////////////////////////// // These convenience methods can be used as callbacks and should be called with "this" context set to a Parser instance.  Parser.list = function(count, itemCallback) {
@CLASS
ClassDef format must be 1 or 2.'); };  ///// Static methods /////////////////////////////////// // These convenience methods can be used as callbacks and should be called with "this" context set to a Parser instance.  Parser.list = function(count, itemCallback) {
@CLASS
classDef = Parser.prototype.parseClassDef;  ///// Script, Feature, Lookup lists /////////////////////////////////////////////// // https://www.microsoft.com/typography/OTSPEC/chapter2.htm  var langSysTable = {
@CLASS
ClassDef;  ///// Script, Feature, Lookup lists /////////////////////////////////////////////// // https://www.microsoft.com/typography/OTSPEC/chapter2.htm  var langSysTable = {
@CLASS
class  * @constructor  * @param {
@CLASS
class  * @constructor  * @param {
@CLASS
class  * @constructor  * @param {
@CLASS
class  * @constructor  * @param {
@CLASS
class contains utility methods for drawing the path and its points. /**  * @exports opentype.Glyph  * @class  * @param {
@CLASS
class  * @param {
@CLASS
class  * @param {
@CLASS
Class = p.parseUShort();     os2.usWidthClass = p.parseUShort();     os2.fsType = p.parseUShort();     os2.ySubscriptXSize = p.parseShort();     os2.ySubscriptYSize = p.parseShort();     os2.ySubscriptXOffset = p.parseShort();     os2.ySubscriptYOffset = p.parseShort();     os2.ySuperscriptXSize = p.parseShort();     os2.ySuperscriptYSize = p.parseShort();     os2.ySuperscriptXOffset = p.parseShort();     os2.ySuperscriptYOffset = p.parseShort();     os2.yStrikeoutSize = p.parseShort();     os2.yStrikeoutPosition = p.parseShort();     os2.sFamilyClass = p.parseShort();     os2.panose = [];     for (var i = 0; i < 10; i++) {
@CLASS
Class = p.parseUShort();     os2.fsType = p.parseUShort();     os2.ySubscriptXSize = p.parseShort();     os2.ySubscriptYSize = p.parseShort();     os2.ySubscriptXOffset = p.parseShort();     os2.ySubscriptYOffset = p.parseShort();     os2.ySuperscriptXSize = p.parseShort();     os2.ySuperscriptYSize = p.parseShort();     os2.ySuperscriptXOffset = p.parseShort();     os2.ySuperscriptYOffset = p.parseShort();     os2.yStrikeoutSize = p.parseShort();     os2.yStrikeoutPosition = p.parseShort();     os2.sFamilyClass = p.parseShort();     os2.panose = [];     for (var i = 0; i < 10; i++) {
@CLASS
Class = p.parseShort();     os2.panose = [];     for (var i = 0; i < 10; i++) {
@CLASS
Class', type: 'USHORT', value: 0},         {
@CLASS
Class', type: 'USHORT', value: 0},         {
@CLASS
Class', type: 'SHORT', value: 0},         {
@CLASS
classDef: this.parsePointer(Parser.classDef),             classSets: this.parseListOfLists(function() {
@CLASS
classDef),             classSets: this.parseListOfLists(function() {
@CLASS
classSets: this.parseListOfLists(function() {
@CLASS
classes: this.parseUShortList(glyphCount - 1),                     lookupRecords: this.parseRecordList(substCount, lookupRecordDesc)                 };             })         };     } else if (substFormat === 3) {
@CLASS
ClassDef: this.parsePointer(Parser.classDef),             inputClassDef: this.parsePointer(Parser.classDef),             lookaheadClassDef: this.parsePointer(Parser.classDef),             chainClassSet: this.parseListOfLists(function() {
@CLASS
classDef),             inputClassDef: this.parsePointer(Parser.classDef),             lookaheadClassDef: this.parsePointer(Parser.classDef),             chainClassSet: this.parseListOfLists(function() {
@CLASS
ClassDef: this.parsePointer(Parser.classDef),             lookaheadClassDef: this.parsePointer(Parser.classDef),             chainClassSet: this.parseListOfLists(function() {
@CLASS
classDef),             lookaheadClassDef: this.parsePointer(Parser.classDef),             chainClassSet: this.parseListOfLists(function() {
@CLASS
ClassDef: this.parsePointer(Parser.classDef),             chainClassSet: this.parseListOfLists(function() {
@CLASS
classDef),             chainClassSet: this.parseListOfLists(function() {
@CLASS
ClassSet: this.parseListOfLists(function() {
@CLASS
class definition) function searchRange(ranges, value) {
@CLASS
class  */ function Layout(font, tableName) {
@CLASS
class definition table      * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#class-definition-table      * @param {
@CLASS
class-definition-table      * @param {
@CLASS
classDefTable - an OpenType Layout class definition table      * @param {
@CLASS
class definition table      * @param {
@CLASS
Class: function(classDefTable, glyphIndex) {
@CLASS
classDefTable, glyphIndex) {
@CLASS
classDefTable.format) {
@CLASS
classDefTable.startGlyph <= glyphIndex && glyphIndex < classDefTable.startGlyph + classDefTable.classes.length) {
@CLASS
classDefTable.startGlyph + classDefTable.classes.length) {
@CLASS
classDefTable.classes.length) {
@CLASS
classes.length) {
@CLASS
classDefTable.classes[glyphIndex - classDefTable.startGlyph];                 }                 return 0;             case 2:                 var range = searchRange(classDefTable.ranges, glyphIndex);                 return range ? range.classId : 0;         }     },      /**      * Find a glyph in a coverage table      * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-table      * @param {
@CLASS
classes[glyphIndex - classDefTable.startGlyph];                 }                 return 0;             case 2:                 var range = searchRange(classDefTable.ranges, glyphIndex);                 return range ? range.classId : 0;         }     },      /**      * Find a glyph in a coverage table      * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-table      * @param {
@CLASS
classDefTable.startGlyph];                 }                 return 0;             case 2:                 var range = searchRange(classDefTable.ranges, glyphIndex);                 return range ? range.classId : 0;         }     },      /**      * Find a glyph in a coverage table      * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-table      * @param {
@CLASS
classDefTable.ranges, glyphIndex);                 return range ? range.classId : 0;         }     },      /**      * Find a glyph in a coverage table      * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-table      * @param {
@CLASS
classId : 0;         }     },      /**      * Find a glyph in a coverage table      * https://docs.microsoft.com/en-us/typography/opentype/spec/chapter2#coverage-table      * @param {
@CLASS
class  * @extends opentype.Layout  * @param {
@CLASS
class1 = this.getGlyphClass(subtable.classDef1, leftIndex);                     var class2 = this.getGlyphClass(subtable.classDef2, rightIndex);                     var pair$1 = subtable.classRecords[class1][class2];                     return pair$1.value1 && pair$1.value1.xAdvance || 0;             }         }     }     return 0; };  /**  * List all kerning lookup tables.  *  * @param {
@CLASS
Class(subtable.classDef1, leftIndex);                     var class2 = this.getGlyphClass(subtable.classDef2, rightIndex);                     var pair$1 = subtable.classRecords[class1][class2];                     return pair$1.value1 && pair$1.value1.xAdvance || 0;             }         }     }     return 0; };  /**  * List all kerning lookup tables.  *  * @param {
@CLASS
classDef1, leftIndex);                     var class2 = this.getGlyphClass(subtable.classDef2, rightIndex);                     var pair$1 = subtable.classRecords[class1][class2];                     return pair$1.value1 && pair$1.value1.xAdvance || 0;             }         }     }     return 0; };  /**  * List all kerning lookup tables.  *  * @param {
@CLASS
class2 = this.getGlyphClass(subtable.classDef2, rightIndex);                     var pair$1 = subtable.classRecords[class1][class2];                     return pair$1.value1 && pair$1.value1.xAdvance || 0;             }         }     }     return 0; };  /**  * List all kerning lookup tables.  *  * @param {
@CLASS
Class(subtable.classDef2, rightIndex);                     var pair$1 = subtable.classRecords[class1][class2];                     return pair$1.value1 && pair$1.value1.xAdvance || 0;             }         }     }     return 0; };  /**  * List all kerning lookup tables.  *  * @param {
@CLASS
classDef2, rightIndex);                     var pair$1 = subtable.classRecords[class1][class2];                     return pair$1.value1 && pair$1.value1.xAdvance || 0;             }         }     }     return 0; };  /**  * List all kerning lookup tables.  *  * @param {
@CLASS
classRecords[class1][class2];                     return pair$1.value1 && pair$1.value1.xAdvance || 0;             }         }     }     return 0; };  /**  * List all kerning lookup tables.  *  * @param {
@CLASS
class1][class2];                     return pair$1.value1 && pair$1.value1.xAdvance || 0;             }         }     }     return 0; };  /**  * List all kerning lookup tables.  *  * @param {
@CLASS
class2];                     return pair$1.value1 && pair$1.value1.xAdvance || 0;             }         }     }     return 0; };  /**  * List all kerning lookup tables.  *  * @param {
@CLASS
class  * @extends opentype.Layout  * @param {
@CLASS
Class Assertions ¢"? Checks if a char belongs to a certain class ¢"? // ¢ø¢"?¢?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢""¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢ô // jscs:disable maximumLineLength /**  * Check if a char is Arabic  * @param {
@CLASS
class ¢"? // ¢ø¢"?¢?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢""¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢"?¢ô // jscs:disable maximumLineLength /**  * Check if a char is Arabic  * @param {
@CLASS
Class  * @property {
@CLASS
Class  * @property {
@CLASS
class  * @param {
@CLASS
Class: options.weightClass || this.usWeightClasses.MEDIUM,                 usWidthClass: options.widthClass || this.usWidthClasses.MEDIUM,                 fsSelection: options.fsSelection || this.fsSelectionValues.REGULAR,             }, options.tables.os2)         });     }      this.supported = true; // Deprecated: parseBuffer will throw an error if font is not supported.     this.glyphs = new glyphset.GlyphSet(this, options.glyphs || []);     this.encoding = new DefaultEncoding(this);     this.position = new Position(this);     this.substitution = new Substitution(this);     this.tables = this.tables || {
@CLASS
Class || this.usWeightClasses.MEDIUM,                 usWidthClass: options.widthClass || this.usWidthClasses.MEDIUM,                 fsSelection: options.fsSelection || this.fsSelectionValues.REGULAR,             }, options.tables.os2)         });     }      this.supported = true; // Deprecated: parseBuffer will throw an error if font is not supported.     this.glyphs = new glyphset.GlyphSet(this, options.glyphs || []);     this.encoding = new DefaultEncoding(this);     this.position = new Position(this);     this.substitution = new Substitution(this);     this.tables = this.tables || {
@CLASS
Classes.MEDIUM,                 usWidthClass: options.widthClass || this.usWidthClasses.MEDIUM,                 fsSelection: options.fsSelection || this.fsSelectionValues.REGULAR,             }, options.tables.os2)         });     }      this.supported = true; // Deprecated: parseBuffer will throw an error if font is not supported.     this.glyphs = new glyphset.GlyphSet(this, options.glyphs || []);     this.encoding = new DefaultEncoding(this);     this.position = new Position(this);     this.substitution = new Substitution(this);     this.tables = this.tables || {
@CLASS
Class: options.widthClass || this.usWidthClasses.MEDIUM,                 fsSelection: options.fsSelection || this.fsSelectionValues.REGULAR,             }, options.tables.os2)         });     }      this.supported = true; // Deprecated: parseBuffer will throw an error if font is not supported.     this.glyphs = new glyphset.GlyphSet(this, options.glyphs || []);     this.encoding = new DefaultEncoding(this);     this.position = new Position(this);     this.substitution = new Substitution(this);     this.tables = this.tables || {
@CLASS
Class || this.usWidthClasses.MEDIUM,                 fsSelection: options.fsSelection || this.fsSelectionValues.REGULAR,             }, options.tables.os2)         });     }      this.supported = true; // Deprecated: parseBuffer will throw an error if font is not supported.     this.glyphs = new glyphset.GlyphSet(this, options.glyphs || []);     this.encoding = new DefaultEncoding(this);     this.position = new Position(this);     this.substitution = new Substitution(this);     this.tables = this.tables || {
@CLASS
Classes.MEDIUM,                 fsSelection: options.fsSelection || this.fsSelectionValues.REGULAR,             }, options.tables.os2)         });     }      this.supported = true; // Deprecated: parseBuffer will throw an error if font is not supported.     this.glyphs = new glyphset.GlyphSet(this, options.glyphs || []);     this.encoding = new DefaultEncoding(this);     this.position = new Position(this);     this.substitution = new Substitution(this);     this.tables = this.tables || {
@CLASS
Classes = {
@CLASS
Classes = {
@CLASS
classDef: p.parsePointer(Parser.classDef),         attachList: p.parsePointer(attachList),         ligCaretList: p.parsePointer(ligCaretList),         markAttachClassDef: p.parsePointer(Parser.classDef)     };     if (tableVersion >= 1.2) {
@CLASS
classDef),         attachList: p.parsePointer(attachList),         ligCaretList: p.parsePointer(ligCaretList),         markAttachClassDef: p.parsePointer(Parser.classDef)     };     if (tableVersion >= 1.2) {
@CLASS
ClassDef: p.parsePointer(Parser.classDef)     };     if (tableVersion >= 1.2) {
@CLASS
classDef)     };     if (tableVersion >= 1.2) {
@CLASS
classDef1 = this.parsePointer(Parser.classDef);         var classDef2 = this.parsePointer(Parser.classDef);         var class1Count = this.parseUShort();         var class2Count = this.parseUShort();         return {
@CLASS
classDef);         var classDef2 = this.parsePointer(Parser.classDef);         var class1Count = this.parseUShort();         var class2Count = this.parseUShort();         return {
@CLASS
classDef2 = this.parsePointer(Parser.classDef);         var class1Count = this.parseUShort();         var class2Count = this.parseUShort();         return {
@CLASS
classDef);         var class1Count = this.parseUShort();         var class2Count = this.parseUShort();         return {
@CLASS
class1Count = this.parseUShort();         var class2Count = this.parseUShort();         return {
@CLASS
class2Count = this.parseUShort();         return {
@CLASS
Class Pair Adjustment             posFormat: posFormat,             coverage: coverage,             valueFormat1: valueFormat1,             valueFormat2: valueFormat2,             classDef1: classDef1,             classDef2: classDef2,             class1Count: class1Count,             class2Count: class2Count,             classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
@CLASS
classDef1: classDef1,             classDef2: classDef2,             class1Count: class1Count,             class2Count: class2Count,             classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
@CLASS
classDef1,             classDef2: classDef2,             class1Count: class1Count,             class2Count: class2Count,             classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
@CLASS
classDef2: classDef2,             class1Count: class1Count,             class2Count: class2Count,             classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
@CLASS
classDef2,             class1Count: class1Count,             class2Count: class2Count,             classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
@CLASS
class1Count: class1Count,             class2Count: class2Count,             classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
@CLASS
class1Count,             class2Count: class2Count,             classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
@CLASS
class2Count: class2Count,             classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
@CLASS
class2Count,             classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
@CLASS
classRecords: this.parseList(class1Count, Parser.list(class2Count, function() {
@CLASS
class1Count, Parser.list(class2Count, function() {
@CLASS
class2Count, function() {
@FILENAME
addons|libs|potpack.module.js
@EXPORT
export { potpack }
@FILENAME
addons|libs|stats.module.js
@FILENAME
addons|libs|tween.module.js
@EXPORT
export things in a way that's compatible with both ES // Modules and CommonJS, without build hacks, and so as not to break the // existing API. // https://github.com/rollup/rollup/issues/1961#issuecomment-423037881 var getAll = TWEEN.getAll.bind(TWEEN); var removeAll = TWEEN.removeAll.bind(TWEEN); var add = TWEEN.add.bind(TWEEN); var remove = TWEEN.remove.bind(TWEEN); var update = TWEEN.update.bind(TWEEN); var exports = {     Easing: Easing,     Group: Group,     Interpolation: Interpolation,     now: now,     Sequence: Sequence,     nextId: nextId,     Tween: Tween,     VERSION: VERSION,     getAll: getAll,     removeAll: removeAll,     add: add,     remove: remove,     update: update, }
@EXPORT
exports = {     Easing: Easing,     Group: Group,     Interpolation: Interpolation,     now: now,     Sequence: Sequence,     nextId: nextId,     Tween: Tween,     VERSION: VERSION,     getAll: getAll,     removeAll: removeAll,     add: add,     remove: remove,     update: update, }
@EXPORT
export { Easing, Group, Interpolation, Sequence, Tween, VERSION, add, exports as default, getAll, nextId, now, remove, removeAll, update }
@EXPORT
exports as default, getAll, nextId, now, remove, removeAll, update }
@CLASS
class provides a collection of easing functions for use with tween.js.  */ var Easing = Object.freeze({
@CLASS
class */ (function () {
@CLASS
class */ (function () {
@CLASS
class */ (function () {
@FILENAME
addons|libs|utif.module.js
@FILENAME
addons|libs|zstddec.module.js
@EXPORT
exports.memory.buffer)}
@EXPORT
exports.malloc(Q);B.set(A,C),g=g||Number(I.exports.ZSTD_findDecompressedSize(C,Q));const E=I.exports.malloc(g),i=I.exports.ZSTD_decompress(E,g,C,Q),D=B.slice(E,E+i);return I.exports.free(C),I.exports.free(E),D}
@EXPORT
exports.ZSTD_findDecompressedSize(C,Q));const E=I.exports.malloc(g),i=I.exports.ZSTD_decompress(E,g,C,Q),D=B.slice(E,E+i);return I.exports.free(C),I.exports.free(E),D}
@EXPORT
exports.malloc(g),i=I.exports.ZSTD_decompress(E,g,C,Q),D=B.slice(E,E+i);return I.exports.free(C),I.exports.free(E),D}
@EXPORT
exports.ZSTD_decompress(E,g,C,Q),D=B.slice(E,E+i);return I.exports.free(C),I.exports.free(E),D}
@EXPORT
exports.free(C),I.exports.free(E),D}
@EXPORT
exports.free(E),D}
@EXPORT
export{Q as ZSTDDecoder}
@CLASS
class Q{
@FILENAME
addons|libs|basis|basis_transcoder.js
@EXPORT
exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["K"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["L"];removeRunDependency("wasm-instantiate")}
@EXPORT
exports;Module["asm"]=exports;wasmMemory=Module["asm"]["K"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["L"];removeRunDependency("wasm-instantiate")}
@EXPORT
exports;wasmMemory=Module["asm"]["K"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["L"];removeRunDependency("wasm-instantiate")}
@EXPORT
exports=Module["instantiateWasm"](info,receiveInstance);return exports}
@EXPORT
exports}
@EXPORT
exports === 'object' && typeof module === 'object')   module.exports = BASIS; else if (typeof define === 'function' && define['amd'])   define([], function() { return BASIS; }
@EXPORT
exports = BASIS; else if (typeof define === 'function' && define['amd'])   define([], function() { return BASIS; }
@CLASS
Class=createNamedFunction(errorName,function(message){
@CLASS
Class.prototype=Object.create(baseErrorType.prototype);errorClass.prototype.constructor=errorClass;errorClass.prototype.toString=function(){
@CLASS
Class.prototype.constructor=errorClass;errorClass.prototype.toString=function(){
@CLASS
Class;errorClass.prototype.toString=function(){
@CLASS
Class.prototype.toString=function(){
@CLASS
Class}var InternalError=undefined;function throwInternalError(message){
@CLASS
ClassHandle_isAliasOf(other){
@CLASS
ClassHandle)){
@CLASS
ClassHandle)){
@CLASS
Class=this.$$.ptrType.registeredClass;var left=this.$$.ptr;var rightClass=other.$$.ptrType.registeredClass;var right=other.$$.ptr;while(leftClass.baseClass){
@CLASS
Class;var left=this.$$.ptr;var rightClass=other.$$.ptrType.registeredClass;var right=other.$$.ptr;while(leftClass.baseClass){
@CLASS
Class=other.$$.ptrType.registeredClass;var right=other.$$.ptr;while(leftClass.baseClass){
@CLASS
Class;var right=other.$$.ptr;while(leftClass.baseClass){
@CLASS
Class.baseClass){
@CLASS
Class){
@CLASS
Class.upcast(left);leftClass=leftClass.baseClass}while(rightClass.baseClass){
@CLASS
Class=leftClass.baseClass}while(rightClass.baseClass){
@CLASS
Class.baseClass}while(rightClass.baseClass){
@CLASS
Class}while(rightClass.baseClass){
@CLASS
Class.baseClass){
@CLASS
Class){
@CLASS
Class.upcast(right);rightClass=rightClass.baseClass}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class=rightClass.baseClass}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class.baseClass}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class.name}throwBindingError(getInstanceTypeName(obj)+" instance already deleted")}var finalizationGroup=false;function detachFinalizer(handle){
@CLASS
Class.rawDestructor($$.ptr)}}function releaseClassHandle($$){
@CLASS
ClassHandle($$){
@CLASS
ClassHandle($$)}}});attachFinalizer=function(handle){
@CLASS
ClassHandle_clone(){
@CLASS
ClassHandle_delete(){
@CLASS
ClassHandle(this.$$);if(!this.$$.preservePointerOnDelete){
@CLASS
ClassHandle_isDeleted(){
@CLASS
ClassHandle_deleteLater(){
@CLASS
ClassHandle(){
@CLASS
ClassHandle.prototype["isAliasOf"]=ClassHandle_isAliasOf;ClassHandle.prototype["clone"]=ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_isAliasOf;ClassHandle.prototype["clone"]=ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle.prototype["clone"]=ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle(){
@CLASS
Class(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast){
@CLASS
Class,getActualType,upcast,downcast){
@CLASS
Class=baseClass;this.getActualType=getActualType;this.upcast=upcast;this.downcast=downcast;this.pureVirtualFunctions=[]}function upcastPointer(ptr,ptrClass,desiredClass){
@CLASS
Class;this.getActualType=getActualType;this.upcast=upcast;this.downcast=downcast;this.pureVirtualFunctions=[]}function upcastPointer(ptr,ptrClass,desiredClass){
@CLASS
Class,desiredClass){
@CLASS
Class){
@CLASS
Class!==desiredClass){
@CLASS
Class){
@CLASS
Class.upcast){
@CLASS
Class.name+", got an instance of "+ptrClass.name)}ptr=ptrClass.upcast(ptr);ptrClass=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class.name)}ptr=ptrClass.upcast(ptr);ptrClass=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class.upcast(ptr);ptrClass=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class=handle.$$.ptrType.registeredClass;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function genericPointerToWireType(destructors,handle){
@CLASS
Class;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function genericPointerToWireType(destructors,handle){
@CLASS
Class,this.registeredClass);return ptr}function genericPointerToWireType(destructors,handle){
@CLASS
Class);return ptr}function genericPointerToWireType(destructors,handle){
@CLASS
Class=handle.$$.ptrType.registeredClass;ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);if(this.isSmartPointer){
@CLASS
Class;ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);if(this.isSmartPointer){
@CLASS
Class,this.registeredClass);if(this.isSmartPointer){
@CLASS
Class);if(this.isSmartPointer){
@CLASS
Class=handle.$$.ptrType.registeredClass;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function RegisteredPointer_getPointee(ptr){
@CLASS
Class;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function RegisteredPointer_getPointee(ptr){
@CLASS
Class,this.registeredClass);return ptr}function RegisteredPointer_getPointee(ptr){
@CLASS
Class);return ptr}function RegisteredPointer_getPointee(ptr){
@CLASS
Class,desiredClass){
@CLASS
Class){
@CLASS
Class===desiredClass){
@CLASS
Class){
@CLASS
Class.baseClass){
@CLASS
Class){
@CLASS
Class,desiredClass.baseClass);if(rv===null){
@CLASS
Class.baseClass);if(rv===null){
@CLASS
Class);if(rv===null){
@CLASS
Class.downcast(rv)}function getInheritedInstanceCount(){
@CLASS
class_,ptr){
@CLASS
class_.baseClass){
@CLASS
Class){
@CLASS
class_.upcast(ptr);class_=class_.baseClass}return ptr}function getInheritedInstance(class_,ptr){
@CLASS
class_=class_.baseClass}return ptr}function getInheritedInstance(class_,ptr){
@CLASS
class_.baseClass}return ptr}function getInheritedInstance(class_,ptr){
@CLASS
Class}return ptr}function getInheritedInstance(class_,ptr){
@CLASS
class_,ptr){
@CLASS
class_,ptr);return registeredInstances[ptr]}function makeClassHandle(prototype,record){
@CLASS
ClassHandle(prototype,record){
@CLASS
ClassHandle requires ptr and ptrType")}var hasSmartPtrType=!!record.smartPtrType;var hasSmartPtr=!!record.smartPtr;if(hasSmartPtrType!==hasSmartPtr){
@CLASS
Class,rawPointer);if(undefined!==registeredInstance){
@CLASS
ClassHandle(this.registeredClass.instancePrototype,{
@CLASS
Class.instancePrototype,{
@CLASS
ClassHandle(this.registeredClass.instancePrototype,{
@CLASS
Class.instancePrototype,{
@CLASS
Class.getActualType(rawPointer);var registeredPointerRecord=registeredPointers[actualType];if(!registeredPointerRecord){
@CLASS
Class,toType.registeredClass);if(dp===null){
@CLASS
Class);if(dp===null){
@CLASS
ClassHandle(toType.registeredClass.instancePrototype,{
@CLASS
Class.instancePrototype,{
@CLASS
ClassHandle(toType.registeredClass.instancePrototype,{
@CLASS
Class.instancePrototype,{
@CLASS
Class,isReference,isConst,isSmartPointer,pointeeType,sharingPolicy,rawGetPointee,rawConstructor,rawShare,rawDestructor){
@CLASS
Class=registeredClass;this.isReference=isReference;this.isConst=isConst;this.isSmartPointer=isSmartPointer;this.pointeeType=pointeeType;this.sharingPolicy=sharingPolicy;this.rawGetPointee=rawGetPointee;this.rawConstructor=rawConstructor;this.rawShare=rawShare;this.rawDestructor=rawDestructor;if(!isSmartPointer&&registeredClass.baseClass===undefined){
@CLASS
Class;this.isReference=isReference;this.isConst=isConst;this.isSmartPointer=isSmartPointer;this.pointeeType=pointeeType;this.sharingPolicy=sharingPolicy;this.rawGetPointee=rawGetPointee;this.rawConstructor=rawConstructor;this.rawShare=rawShare;this.rawDestructor=rawDestructor;if(!isSmartPointer&&registeredClass.baseClass===undefined){
@CLASS
Class.baseClass===undefined){
@CLASS
Class===undefined){
@CLASS
class(rawType,rawPointerType,rawConstPointerType,baseClassRawType,getActualTypeSignature,getActualType,upcastSignature,upcast,downcastSignature,downcast,name,destructorSignature,rawDestructor){
@CLASS
ClassRawType,getActualTypeSignature,getActualType,upcastSignature,upcast,downcastSignature,downcast,name,destructorSignature,rawDestructor){
@CLASS
ClassRawType])});whenDependentTypesAreResolved([rawType,rawPointerType,rawConstPointerType],baseClassRawType?[baseClassRawType]:[],function(base){
@CLASS
ClassRawType?[baseClassRawType]:[],function(base){
@CLASS
ClassRawType]:[],function(base){
@CLASS
Class;var basePrototype;if(baseClassRawType){
@CLASS
ClassRawType){
@CLASS
Class=base.registeredClass;basePrototype=baseClass.instancePrototype}else{
@CLASS
Class;basePrototype=baseClass.instancePrototype}else{
@CLASS
Class.instancePrototype}else{
@CLASS
ClassHandle.prototype}var constructor=createNamedFunction(legalFunctionName,function(){
@CLASS
Class.constructor_body){
@CLASS
Class.constructor_body[arguments.length];if(undefined===body){
@CLASS
Class.constructor_body).toString()+") parameters instead!")}return body.apply(this,arguments)});var instancePrototype=Object.create(basePrototype,{
@CLASS
Class=new RegisteredClass(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast);var referenceConverter=new RegisteredPointer(name,registeredClass,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast);var referenceConverter=new RegisteredPointer(name,registeredClass,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class,getActualType,upcast,downcast);var referenceConverter=new RegisteredPointer(name,registeredClass,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class,false,true,false);registeredPointers[rawType]={
@CLASS
class_constructor(rawClassType,argCount,rawArgTypesAddr,invokerSignature,invoker,rawConstructor){
@CLASS
ClassType,argCount,rawArgTypesAddr,invokerSignature,invoker,rawConstructor){
@CLASS
ClassType],function(classType){
@CLASS
classType){
@CLASS
classType=classType[0];var humanName="constructor "+classType.name;if(undefined===classType.registeredClass.constructor_body){
@CLASS
classType[0];var humanName="constructor "+classType.name;if(undefined===classType.registeredClass.constructor_body){
@CLASS
classType.name;if(undefined===classType.registeredClass.constructor_body){
@CLASS
classType.registeredClass.constructor_body){
@CLASS
Class.constructor_body){
@CLASS
classType.registeredClass.constructor_body=[]}if(undefined!==classType.registeredClass.constructor_body[argCount-1]){
@CLASS
Class.constructor_body=[]}if(undefined!==classType.registeredClass.constructor_body[argCount-1]){
@CLASS
classType.registeredClass.constructor_body[argCount-1]){
@CLASS
Class.constructor_body[argCount-1]){
@CLASS
class '"+classType.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!")}classType.registeredClass.constructor_body[argCount-1]=function unboundTypeHandler(){
@CLASS
classType.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!")}classType.registeredClass.constructor_body[argCount-1]=function unboundTypeHandler(){
@CLASS
classType.registeredClass.constructor_body[argCount-1]=function unboundTypeHandler(){
@CLASS
Class.constructor_body[argCount-1]=function unboundTypeHandler(){
@CLASS
classType.name+" due to unbound types",rawArgTypes)};whenDependentTypesAreResolved([],rawArgTypes,function(argTypes){
@CLASS
classType.registeredClass.constructor_body[argCount-1]=function constructor_body(){
@CLASS
Class.constructor_body[argCount-1]=function constructor_body(){
@CLASS
classType,cppInvokerFunc,cppTargetFunc){
@CLASS
ClassMethodFunc=argTypes[1]!==null&&classType!==null;var needsDestructorStack=false;for(var i=1;i<argTypes.length;++i){
@CLASS
classType!==null;var needsDestructorStack=false;for(var i=1;i<argTypes.length;++i){
@CLASS
classParam"];var args2=[throwBindingError,cppInvokerFunc,cppTargetFunc,runDestructors,argTypes[0],argTypes[1]];if(isClassMethodFunc){
@CLASS
ClassMethodFunc){
@CLASS
classParam.toWireType("+dtorStack+", this);|n"}for(var i=0;i<argCount-2;++i){
@CLASS
ClassMethodFunc){
@CLASS
ClassMethodFunc?1:2;i<argTypes.length;++i){
@CLASS
class_function(rawClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,context,isPureVirtual){
@CLASS
ClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,context,isPureVirtual){
@CLASS
ClassType],function(classType){
@CLASS
classType){
@CLASS
classType=classType[0];var humanName=classType.name+"."+methodName;if(isPureVirtual){
@CLASS
classType[0];var humanName=classType.name+"."+methodName;if(isPureVirtual){
@CLASS
classType.name+"."+methodName;if(isPureVirtual){
@CLASS
classType.registeredClass.pureVirtualFunctions.push(methodName)}function unboundTypesHandler(){
@CLASS
Class.pureVirtualFunctions.push(methodName)}function unboundTypesHandler(){
@CLASS
classType.registeredClass.instancePrototype;var method=proto[methodName];if(undefined===method||undefined===method.overloadTable&&method.className!==classType.name&&method.argCount===argCount-2){
@CLASS
Class.instancePrototype;var method=proto[methodName];if(undefined===method||undefined===method.overloadTable&&method.className!==classType.name&&method.argCount===argCount-2){
@CLASS
className!==classType.name&&method.argCount===argCount-2){
@CLASS
classType.name&&method.argCount===argCount-2){
@CLASS
className=classType.name;proto[methodName]=unboundTypesHandler}else{
@CLASS
classType.name;proto[methodName]=unboundTypesHandler}else{
@CLASS
classType,rawInvoker,context);if(undefined===proto[methodName].overloadTable){
@CLASS
ClassHandle();init_RegisteredPointer();init_embind();UnboundTypeError=Module["UnboundTypeError"]=extendError(Error,"UnboundTypeError");init_emval();__ATINIT__.push({
@CLASS
class,"w":__embind_register_class_constructor,"d":__embind_register_class_function,"k":__embind_register_constant,"H":__embind_register_emval,"n":__embind_register_enum,"a":__embind_register_enum_value,"A":__embind_register_float,"i":__embind_register_function,"j":__embind_register_integer,"h":__embind_register_memory_view,"B":__embind_register_std_string,"v":__embind_register_std_wstring,"u":__embind_register_value_object,"c":__embind_register_value_object_field,"J":__embind_register_void,"m":__emval_as,"s":__emval_call_void_method,"b":__emval_decref,"y":__emval_get_global,"p":__emval_get_method_caller,"r":__emval_get_module_property,"e":__emval_get_property,"g":__emval_incref,"q":__emval_new,"f":__emval_new_cstring,"l":__emval_run_destructors,"o":_abort,"E":_emscripten_memcpy_big,"F":_emscripten_resize_heap,"G":_fd_close,"C":_fd_seek,"z":_fd_write,"D":_setTempRet0};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_constructor,"d":__embind_register_class_function,"k":__embind_register_constant,"H":__embind_register_emval,"n":__embind_register_enum,"a":__embind_register_enum_value,"A":__embind_register_float,"i":__embind_register_function,"j":__embind_register_integer,"h":__embind_register_memory_view,"B":__embind_register_std_string,"v":__embind_register_std_wstring,"u":__embind_register_value_object,"c":__embind_register_value_object_field,"J":__embind_register_void,"m":__emval_as,"s":__emval_call_void_method,"b":__emval_decref,"y":__emval_get_global,"p":__emval_get_method_caller,"r":__emval_get_module_property,"e":__emval_get_property,"g":__emval_incref,"q":__emval_new,"f":__emval_new_cstring,"l":__emval_run_destructors,"o":_abort,"E":_emscripten_memcpy_big,"F":_emscripten_resize_heap,"G":_fd_close,"C":_fd_seek,"z":_fd_write,"D":_setTempRet0};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_function,"k":__embind_register_constant,"H":__embind_register_emval,"n":__embind_register_enum,"a":__embind_register_enum_value,"A":__embind_register_float,"i":__embind_register_function,"j":__embind_register_integer,"h":__embind_register_memory_view,"B":__embind_register_std_string,"v":__embind_register_std_wstring,"u":__embind_register_value_object,"c":__embind_register_value_object_field,"J":__embind_register_void,"m":__emval_as,"s":__emval_call_void_method,"b":__emval_decref,"y":__emval_get_global,"p":__emval_get_method_caller,"r":__emval_get_module_property,"e":__emval_get_property,"g":__emval_incref,"q":__emval_new,"f":__emval_new_cstring,"l":__emval_run_destructors,"o":_abort,"E":_emscripten_memcpy_big,"F":_emscripten_resize_heap,"G":_fd_close,"C":_fd_seek,"z":_fd_write,"D":_setTempRet0};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@FILENAME
addons|libs|draco|draco_decoder.js
@EXPORT
exports=( // EMSCRIPTEN_START_ASM function instantiate(na){function c(d){d.set=function(a,b){this[a]=b}
@EXPORT
exports=instance.exports;Module["asm"]=exports;wasmTable=Module["asm"]["j"];addOnInit(Module["asm"]["i"]);removeRunDependency("wasm-instantiate")}
@EXPORT
exports;Module["asm"]=exports;wasmTable=Module["asm"]["j"];addOnInit(Module["asm"]["i"]);removeRunDependency("wasm-instantiate")}
@EXPORT
exports;wasmTable=Module["asm"]["j"];addOnInit(Module["asm"]["i"]);removeRunDependency("wasm-instantiate")}
@EXPORT
exports=Module["instantiateWasm"](info,receiveInstance);return exports}
@EXPORT
exports}
@EXPORT
exports === 'object' && typeof module === 'object')   module.exports = DracoDecoderModule; else if (typeof define === 'function' && define['amd'])   define([], function() { return DracoDecoderModule; }
@EXPORT
exports = DracoDecoderModule; else if (typeof define === 'function' && define['amd'])   define([], function() { return DracoDecoderModule; }
@CLASS
class__=WrapperObject;WrapperObject.__cache__={
@CLASS
class__){
@CLASS
class__||WrapperObject).__cache__}Module["getCache"]=getCache;function wrapPointer(ptr,__class__){
@CLASS
class__){
@CLASS
class__);var ret=cache[ptr];if(ret)return ret;ret=Object.create((__class__||WrapperObject).prototype);ret.ptr=ptr;return cache[ptr]=ret}Module["wrapPointer"]=wrapPointer;function castObject(obj,__class__){
@CLASS
class__||WrapperObject).prototype);ret.ptr=ptr;return cache[ptr]=ret}Module["wrapPointer"]=wrapPointer;function castObject(obj,__class__){
@CLASS
class__){
@CLASS
class__)}Module["castObject"]=castObject;Module["NULL"]=wrapPointer(0);function destroy(obj){
@CLASS
class__)[obj.ptr]}Module["destroy"]=destroy;function compare(obj1,obj2){
@CLASS
Class(obj){
@CLASS
class__}Module["getClass"]=getClass;var ensureCache={
@CLASS
Class"]=getClass;var ensureCache={
@CLASS
Class;var ensureCache={
@CLASS
class__=VoidPtr;VoidPtr.__cache__={
@CLASS
class__=DecoderBuffer;DecoderBuffer.__cache__={
@CLASS
class__=AttributeTransformData;AttributeTransformData.__cache__={
@CLASS
class__=GeometryAttribute;GeometryAttribute.__cache__={
@CLASS
class__=PointAttribute;PointAttribute.__cache__={
@CLASS
class__=AttributeQuantizationTransform;AttributeQuantizationTransform.__cache__={
@CLASS
class__=AttributeOctahedronTransform;AttributeOctahedronTransform.__cache__={
@CLASS
class__=PointCloud;PointCloud.__cache__={
@CLASS
class__=Mesh;Mesh.__cache__={
@CLASS
class__=Metadata;Metadata.__cache__={
@CLASS
class__=Status;Status.__cache__={
@CLASS
class__=DracoFloat32Array;DracoFloat32Array.__cache__={
@CLASS
class__=DracoInt8Array;DracoInt8Array.__cache__={
@CLASS
class__=DracoUInt8Array;DracoUInt8Array.__cache__={
@CLASS
class__=DracoInt16Array;DracoInt16Array.__cache__={
@CLASS
class__=DracoUInt16Array;DracoUInt16Array.__cache__={
@CLASS
class__=DracoInt32Array;DracoInt32Array.__cache__={
@CLASS
class__=DracoUInt32Array;DracoUInt32Array.__cache__={
@CLASS
class__=MetadataQuerier;MetadataQuerier.__cache__={
@CLASS
class__=Decoder;Decoder.__cache__={
@CLASS
class__&&array.__class__===Module.DecoderBuffer){
@CLASS
class__===Module.DecoderBuffer){
@FILENAME
addons|libs|draco|draco_encoder.js
@EXPORT
exported");return func}
@EXPORT
exports === 'object' && typeof module === 'object')   module.exports = DracoEncoderModule; else if (typeof define === 'function' && define['amd'])   define([], function() { return DracoEncoderModule; }
@EXPORT
exports = DracoEncoderModule; else if (typeof define === 'function' && define['amd'])   define([], function() { return DracoEncoderModule; }
@CLASS
class__=WrapperObject;WrapperObject.__cache__={
@CLASS
class__){
@CLASS
class__||WrapperObject).__cache__}Module["getCache"]=getCache;function wrapPointer(ptr,__class__){
@CLASS
class__){
@CLASS
class__);var ret=cache[ptr];if(ret)return ret;ret=Object.create((__class__||WrapperObject).prototype);ret.ptr=ptr;return cache[ptr]=ret}Module["wrapPointer"]=wrapPointer;function castObject(obj,__class__){
@CLASS
class__||WrapperObject).prototype);ret.ptr=ptr;return cache[ptr]=ret}Module["wrapPointer"]=wrapPointer;function castObject(obj,__class__){
@CLASS
class__){
@CLASS
class__)}Module["castObject"]=castObject;Module["NULL"]=wrapPointer(0);function destroy(obj){
@CLASS
class__)[obj.ptr]}Module["destroy"]=destroy;function compare(obj1,obj2){
@CLASS
Class(obj){
@CLASS
class__}Module["getClass"]=getClass;var ensureCache={
@CLASS
Class"]=getClass;var ensureCache={
@CLASS
Class;var ensureCache={
@CLASS
class__=PointCloud;PointCloud.__cache__={
@CLASS
class__=ExpertEncoder;ExpertEncoder.__cache__={
@CLASS
class__=PointAttribute;PointAttribute.__cache__={
@CLASS
class__=Encoder;Encoder.__cache__={
@CLASS
class__=MeshBuilder;MeshBuilder.__cache__={
@CLASS
class__=DracoInt8Array;DracoInt8Array.__cache__={
@CLASS
class__=MetadataBuilder;MetadataBuilder.__cache__={
@CLASS
class__=GeometryAttribute;GeometryAttribute.__cache__={
@CLASS
class__=Mesh;Mesh.__cache__={
@CLASS
class__=PointCloudBuilder;PointCloudBuilder.__cache__={
@CLASS
class__=VoidPtr;VoidPtr.__cache__={
@CLASS
class__=Metadata;Metadata.__cache__={
@FILENAME
addons|libs|draco|draco_wasm_wrapper.js
@EXPORT
exports;ja=a.asm.h;A();oa.unshift(a.asm.i);aa--;a.monitorRunDependencies&&a.monitorRunDependencies(aa);0==aa&&(null!==ra&&(clearInterval(ra),ra=null),ia&&(g=ia,ia=null,g()))}
@EXPORT
exports&&"object"===typeof module?module.exports=DracoDecoderModule:"function"===typeof define&&define.amd?define([],function(){return DracoDecoderModule}
@EXPORT
exports=DracoDecoderModule:"function"===typeof define&&define.amd?define([],function(){return DracoDecoderModule}
@CLASS
class__=t;t.__cache__={
@CLASS
class__)[b.ptr]};a.compare=function(b,c){
@CLASS
Class=function(b){
@CLASS
class__};var r={
@CLASS
class__=Z;Z.__cache__={
@CLASS
class__=S;S.__cache__={
@CLASS
class__=Q;Q.__cache__={
@CLASS
class__=W;W.__cache__={
@CLASS
class__=w;w.__cache__={
@CLASS
class__=C;C.__cache__={
@CLASS
class__=F;F.__cache__={
@CLASS
class__=G;G.__cache__={
@CLASS
class__=E;E.__cache__={
@CLASS
class__=T;T.__cache__={
@CLASS
class__=B;B.__cache__={
@CLASS
class__=H;H.__cache__={
@CLASS
class__=I;I.__cache__={
@CLASS
class__=J;J.__cache__={
@CLASS
class__=K;K.__cache__={
@CLASS
class__=L;L.__cache__={
@CLASS
class__=M;M.__cache__={
@CLASS
class__=N;N.__cache__={
@CLASS
class__=y;y.__cache__={
@CLASS
class__=m;m.__cache__={
@CLASS
class__&&b.__class__===a.DecoderBuffer)return a.Decoder.prototype.GetEncodedGeometryType_Deprecated(b);if(8>b.byteLength)return a.INVALID_GEOMETRY_TYPE;switch(b[7]){
@CLASS
class__===a.DecoderBuffer)return a.Decoder.prototype.GetEncodedGeometryType_Deprecated(b);if(8>b.byteLength)return a.INVALID_GEOMETRY_TYPE;switch(b[7]){
@FILENAME
addons|libs|draco|gltf|draco_decoder.js
@EXPORT
exports=( // EMSCRIPTEN_START_ASM function instantiate(ia){function c(d){d.set=function(a,b){this[a]=b}
@EXPORT
exports=instance.exports;Module["asm"]=exports;wasmTable=Module["asm"]["g"];addOnInit(Module["asm"]["f"]);removeRunDependency("wasm-instantiate")}
@EXPORT
exports;Module["asm"]=exports;wasmTable=Module["asm"]["g"];addOnInit(Module["asm"]["f"]);removeRunDependency("wasm-instantiate")}
@EXPORT
exports;wasmTable=Module["asm"]["g"];addOnInit(Module["asm"]["f"]);removeRunDependency("wasm-instantiate")}
@EXPORT
exports=Module["instantiateWasm"](info,receiveInstance);return exports}
@EXPORT
exports}
@EXPORT
exports === 'object' && typeof module === 'object')   module.exports = DracoDecoderModule; else if (typeof define === 'function' && define['amd'])   define([], function() { return DracoDecoderModule; }
@EXPORT
exports = DracoDecoderModule; else if (typeof define === 'function' && define['amd'])   define([], function() { return DracoDecoderModule; }
@CLASS
class__=WrapperObject;WrapperObject.__cache__={
@CLASS
class__){
@CLASS
class__||WrapperObject).__cache__}Module["getCache"]=getCache;function wrapPointer(ptr,__class__){
@CLASS
class__){
@CLASS
class__);var ret=cache[ptr];if(ret)return ret;ret=Object.create((__class__||WrapperObject).prototype);ret.ptr=ptr;return cache[ptr]=ret}Module["wrapPointer"]=wrapPointer;function castObject(obj,__class__){
@CLASS
class__||WrapperObject).prototype);ret.ptr=ptr;return cache[ptr]=ret}Module["wrapPointer"]=wrapPointer;function castObject(obj,__class__){
@CLASS
class__){
@CLASS
class__)}Module["castObject"]=castObject;Module["NULL"]=wrapPointer(0);function destroy(obj){
@CLASS
class__)[obj.ptr]}Module["destroy"]=destroy;function compare(obj1,obj2){
@CLASS
Class(obj){
@CLASS
class__}Module["getClass"]=getClass;var ensureCache={
@CLASS
Class"]=getClass;var ensureCache={
@CLASS
Class;var ensureCache={
@CLASS
class__=VoidPtr;VoidPtr.__cache__={
@CLASS
class__=DecoderBuffer;DecoderBuffer.__cache__={
@CLASS
class__=AttributeTransformData;AttributeTransformData.__cache__={
@CLASS
class__=GeometryAttribute;GeometryAttribute.__cache__={
@CLASS
class__=PointAttribute;PointAttribute.__cache__={
@CLASS
class__=AttributeQuantizationTransform;AttributeQuantizationTransform.__cache__={
@CLASS
class__=AttributeOctahedronTransform;AttributeOctahedronTransform.__cache__={
@CLASS
class__=PointCloud;PointCloud.__cache__={
@CLASS
class__=Mesh;Mesh.__cache__={
@CLASS
class__=Metadata;Metadata.__cache__={
@CLASS
class__=Status;Status.__cache__={
@CLASS
class__=DracoFloat32Array;DracoFloat32Array.__cache__={
@CLASS
class__=DracoInt8Array;DracoInt8Array.__cache__={
@CLASS
class__=DracoUInt8Array;DracoUInt8Array.__cache__={
@CLASS
class__=DracoInt16Array;DracoInt16Array.__cache__={
@CLASS
class__=DracoUInt16Array;DracoUInt16Array.__cache__={
@CLASS
class__=DracoInt32Array;DracoInt32Array.__cache__={
@CLASS
class__=DracoUInt32Array;DracoUInt32Array.__cache__={
@CLASS
class__=MetadataQuerier;MetadataQuerier.__cache__={
@CLASS
class__=Decoder;Decoder.__cache__={
@CLASS
class__&&array.__class__===Module.DecoderBuffer){
@CLASS
class__===Module.DecoderBuffer){
@FILENAME
addons|libs|draco|gltf|draco_encoder.js
@EXPORT
exported");return func}
@EXPORT
exports === 'object' && typeof module === 'object')   module.exports = DracoEncoderModule; else if (typeof define === 'function' && define['amd'])   define([], function() { return DracoEncoderModule; }
@EXPORT
exports = DracoEncoderModule; else if (typeof define === 'function' && define['amd'])   define([], function() { return DracoEncoderModule; }
@CLASS
class__=WrapperObject;WrapperObject.__cache__={
@CLASS
class__){
@CLASS
class__||WrapperObject).__cache__}Module["getCache"]=getCache;function wrapPointer(ptr,__class__){
@CLASS
class__){
@CLASS
class__);var ret=cache[ptr];if(ret)return ret;ret=Object.create((__class__||WrapperObject).prototype);ret.ptr=ptr;return cache[ptr]=ret}Module["wrapPointer"]=wrapPointer;function castObject(obj,__class__){
@CLASS
class__||WrapperObject).prototype);ret.ptr=ptr;return cache[ptr]=ret}Module["wrapPointer"]=wrapPointer;function castObject(obj,__class__){
@CLASS
class__){
@CLASS
class__)}Module["castObject"]=castObject;Module["NULL"]=wrapPointer(0);function destroy(obj){
@CLASS
class__)[obj.ptr]}Module["destroy"]=destroy;function compare(obj1,obj2){
@CLASS
Class(obj){
@CLASS
class__}Module["getClass"]=getClass;var ensureCache={
@CLASS
Class"]=getClass;var ensureCache={
@CLASS
Class;var ensureCache={
@CLASS
class__=PointCloud;PointCloud.__cache__={
@CLASS
class__=PointAttribute;PointAttribute.__cache__={
@CLASS
class__=Encoder;Encoder.__cache__={
@CLASS
class__=MeshBuilder;MeshBuilder.__cache__={
@CLASS
class__=DracoInt8Array;DracoInt8Array.__cache__={
@CLASS
class__=MetadataBuilder;MetadataBuilder.__cache__={
@CLASS
class__=GeometryAttribute;GeometryAttribute.__cache__={
@CLASS
class__=Mesh;Mesh.__cache__={
@CLASS
class__=PointCloudBuilder;PointCloudBuilder.__cache__={
@CLASS
class__=VoidPtr;VoidPtr.__cache__={
@CLASS
class__=Metadata;Metadata.__cache__={
@FILENAME
addons|libs|draco|gltf|draco_wasm_wrapper.js
@EXPORT
exports;ja=a.asm.e;l();oa.unshift(a.asm.f);ba--;a.monitorRunDependencies&&a.monitorRunDependencies(ba);0==ba&&(null!==qa&&(clearInterval(qa),qa=null),ha&&(g=ha,ha=null,g()))}
@EXPORT
exports&&"object"===typeof module?module.exports=DracoDecoderModule:"function"===typeof define&&define.amd?define([],function(){return DracoDecoderModule}
@EXPORT
exports=DracoDecoderModule:"function"===typeof define&&define.amd?define([],function(){return DracoDecoderModule}
@CLASS
class__=v;v.__cache__={
@CLASS
class__)[b.ptr]};a.compare=function(b,c){
@CLASS
Class=function(b){
@CLASS
class__};var r={
@CLASS
class__=X;X.__cache__={
@CLASS
class__=S;S.__cache__={
@CLASS
class__=Q;Q.__cache__={
@CLASS
class__=V;V.__cache__={
@CLASS
class__=x;x.__cache__={
@CLASS
class__=D;D.__cache__={
@CLASS
class__=G;G.__cache__={
@CLASS
class__= H;H.__cache__={
@CLASS
class__=E;E.__cache__={
@CLASS
class__=T;T.__cache__={
@CLASS
class__=C;C.__cache__={
@CLASS
class__=I;I.__cache__={
@CLASS
class__=J;J.__cache__={
@CLASS
class__=K;K.__cache__={
@CLASS
class__=L;L.__cache__={
@CLASS
class__=M;M.__cache__={
@CLASS
class__=N;N.__cache__={
@CLASS
class__=O;O.__cache__={
@CLASS
class__=z;z.__cache__={
@CLASS
class__=m;m.__cache__={
@CLASS
class__&&b.__class__===a.DecoderBuffer)return a.Decoder.prototype.GetEncodedGeometryType_Deprecated(b); if(8>b.byteLength)return a.INVALID_GEOMETRY_TYPE;switch(b[7]){
@CLASS
class__===a.DecoderBuffer)return a.Decoder.prototype.GetEncodedGeometryType_Deprecated(b); if(8>b.byteLength)return a.INVALID_GEOMETRY_TYPE;switch(b[7]){
@FILENAME
addons|libs|rhino3dm|rhino3dm.js
@EXPORT
exports["f"];return wrappedFunc}
@EXPORT
exported");return func}
@EXPORT
exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["memory"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["__indirect_function_table"];removeRunDependency("wasm-instantiate")}
@EXPORT
exports;Module["asm"]=exports;wasmMemory=Module["asm"]["memory"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["__indirect_function_table"];removeRunDependency("wasm-instantiate")}
@EXPORT
exports;wasmMemory=Module["asm"]["memory"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["__indirect_function_table"];removeRunDependency("wasm-instantiate")}
@EXPORT
exports=Module["instantiateWasm"](info,receiveInstance);return exports}
@EXPORT
exports}
@EXPORT
exports === 'object' && typeof module === 'object')   module.exports = rhino3dm; else if (typeof define === 'function' && define['amd'])   define([], function() { return rhino3dm; }
@EXPORT
exports = rhino3dm; else if (typeof define === 'function' && define['amd'])   define([], function() { return rhino3dm; }
@CLASS
Class=createNamedFunction(errorName,function(message){
@CLASS
Class.prototype=Object.create(baseErrorType.prototype);errorClass.prototype.constructor=errorClass;errorClass.prototype.toString=function(){
@CLASS
Class.prototype.constructor=errorClass;errorClass.prototype.toString=function(){
@CLASS
Class;errorClass.prototype.toString=function(){
@CLASS
Class.prototype.toString=function(){
@CLASS
Class}var InternalError=undefined;function throwInternalError(message){
@CLASS
ClassHandle_isAliasOf(other){
@CLASS
ClassHandle)){
@CLASS
ClassHandle)){
@CLASS
Class=this.$$.ptrType.registeredClass;var left=this.$$.ptr;var rightClass=other.$$.ptrType.registeredClass;var right=other.$$.ptr;while(leftClass.baseClass){
@CLASS
Class;var left=this.$$.ptr;var rightClass=other.$$.ptrType.registeredClass;var right=other.$$.ptr;while(leftClass.baseClass){
@CLASS
Class=other.$$.ptrType.registeredClass;var right=other.$$.ptr;while(leftClass.baseClass){
@CLASS
Class;var right=other.$$.ptr;while(leftClass.baseClass){
@CLASS
Class.baseClass){
@CLASS
Class){
@CLASS
Class.upcast(left);leftClass=leftClass.baseClass}while(rightClass.baseClass){
@CLASS
Class=leftClass.baseClass}while(rightClass.baseClass){
@CLASS
Class.baseClass}while(rightClass.baseClass){
@CLASS
Class}while(rightClass.baseClass){
@CLASS
Class.baseClass){
@CLASS
Class){
@CLASS
Class.upcast(right);rightClass=rightClass.baseClass}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class=rightClass.baseClass}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class.baseClass}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class.name}throwBindingError(getInstanceTypeName(obj)+" instance already deleted")}var finalizationGroup=false;function detachFinalizer(handle){
@CLASS
Class.rawDestructor($$.ptr)}}function releaseClassHandle($$){
@CLASS
ClassHandle($$){
@CLASS
ClassHandle($$)}}});attachFinalizer=function(handle){
@CLASS
ClassHandle_clone(){
@CLASS
ClassHandle_delete(){
@CLASS
ClassHandle(this.$$);if(!this.$$.preservePointerOnDelete){
@CLASS
ClassHandle_isDeleted(){
@CLASS
ClassHandle_deleteLater(){
@CLASS
ClassHandle(){
@CLASS
ClassHandle.prototype["isAliasOf"]=ClassHandle_isAliasOf;ClassHandle.prototype["clone"]=ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_isAliasOf;ClassHandle.prototype["clone"]=ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle.prototype["clone"]=ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle(){
@CLASS
Class(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast){
@CLASS
Class,getActualType,upcast,downcast){
@CLASS
Class=baseClass;this.getActualType=getActualType;this.upcast=upcast;this.downcast=downcast;this.pureVirtualFunctions=[]}function upcastPointer(ptr,ptrClass,desiredClass){
@CLASS
Class;this.getActualType=getActualType;this.upcast=upcast;this.downcast=downcast;this.pureVirtualFunctions=[]}function upcastPointer(ptr,ptrClass,desiredClass){
@CLASS
Class,desiredClass){
@CLASS
Class){
@CLASS
Class!==desiredClass){
@CLASS
Class){
@CLASS
Class.upcast){
@CLASS
Class.name+", got an instance of "+ptrClass.name)}ptr=ptrClass.upcast(ptr);ptrClass=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class.name)}ptr=ptrClass.upcast(ptr);ptrClass=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class.upcast(ptr);ptrClass=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class=handle.$$.ptrType.registeredClass;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function genericPointerToWireType(destructors,handle){
@CLASS
Class;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function genericPointerToWireType(destructors,handle){
@CLASS
Class,this.registeredClass);return ptr}function genericPointerToWireType(destructors,handle){
@CLASS
Class);return ptr}function genericPointerToWireType(destructors,handle){
@CLASS
Class=handle.$$.ptrType.registeredClass;ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);if(this.isSmartPointer){
@CLASS
Class;ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);if(this.isSmartPointer){
@CLASS
Class,this.registeredClass);if(this.isSmartPointer){
@CLASS
Class);if(this.isSmartPointer){
@CLASS
Class=handle.$$.ptrType.registeredClass;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function RegisteredPointer_getPointee(ptr){
@CLASS
Class;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function RegisteredPointer_getPointee(ptr){
@CLASS
Class,this.registeredClass);return ptr}function RegisteredPointer_getPointee(ptr){
@CLASS
Class);return ptr}function RegisteredPointer_getPointee(ptr){
@CLASS
Class,desiredClass){
@CLASS
Class){
@CLASS
Class===desiredClass){
@CLASS
Class){
@CLASS
Class.baseClass){
@CLASS
Class){
@CLASS
Class,desiredClass.baseClass);if(rv===null){
@CLASS
Class.baseClass);if(rv===null){
@CLASS
Class);if(rv===null){
@CLASS
Class.downcast(rv)}function getInheritedInstanceCount(){
@CLASS
class_,ptr){
@CLASS
class_.baseClass){
@CLASS
Class){
@CLASS
class_.upcast(ptr);class_=class_.baseClass}return ptr}function getInheritedInstance(class_,ptr){
@CLASS
class_=class_.baseClass}return ptr}function getInheritedInstance(class_,ptr){
@CLASS
class_.baseClass}return ptr}function getInheritedInstance(class_,ptr){
@CLASS
Class}return ptr}function getInheritedInstance(class_,ptr){
@CLASS
class_,ptr){
@CLASS
class_,ptr);return registeredInstances[ptr]}function makeClassHandle(prototype,record){
@CLASS
ClassHandle(prototype,record){
@CLASS
ClassHandle requires ptr and ptrType")}var hasSmartPtrType=!!record.smartPtrType;var hasSmartPtr=!!record.smartPtr;if(hasSmartPtrType!==hasSmartPtr){
@CLASS
Class,rawPointer);if(undefined!==registeredInstance){
@CLASS
ClassHandle(this.registeredClass.instancePrototype,{
@CLASS
Class.instancePrototype,{
@CLASS
ClassHandle(this.registeredClass.instancePrototype,{
@CLASS
Class.instancePrototype,{
@CLASS
Class.getActualType(rawPointer);var registeredPointerRecord=registeredPointers[actualType];if(!registeredPointerRecord){
@CLASS
Class,toType.registeredClass);if(dp===null){
@CLASS
Class);if(dp===null){
@CLASS
ClassHandle(toType.registeredClass.instancePrototype,{
@CLASS
Class.instancePrototype,{
@CLASS
ClassHandle(toType.registeredClass.instancePrototype,{
@CLASS
Class.instancePrototype,{
@CLASS
Class,isReference,isConst,isSmartPointer,pointeeType,sharingPolicy,rawGetPointee,rawConstructor,rawShare,rawDestructor){
@CLASS
Class=registeredClass;this.isReference=isReference;this.isConst=isConst;this.isSmartPointer=isSmartPointer;this.pointeeType=pointeeType;this.sharingPolicy=sharingPolicy;this.rawGetPointee=rawGetPointee;this.rawConstructor=rawConstructor;this.rawShare=rawShare;this.rawDestructor=rawDestructor;if(!isSmartPointer&&registeredClass.baseClass===undefined){
@CLASS
Class;this.isReference=isReference;this.isConst=isConst;this.isSmartPointer=isSmartPointer;this.pointeeType=pointeeType;this.sharingPolicy=sharingPolicy;this.rawGetPointee=rawGetPointee;this.rawConstructor=rawConstructor;this.rawShare=rawShare;this.rawDestructor=rawDestructor;if(!isSmartPointer&&registeredClass.baseClass===undefined){
@CLASS
Class.baseClass===undefined){
@CLASS
Class===undefined){
@CLASS
class(rawType,rawPointerType,rawConstPointerType,baseClassRawType,getActualTypeSignature,getActualType,upcastSignature,upcast,downcastSignature,downcast,name,destructorSignature,rawDestructor){
@CLASS
ClassRawType,getActualTypeSignature,getActualType,upcastSignature,upcast,downcastSignature,downcast,name,destructorSignature,rawDestructor){
@CLASS
ClassRawType])});whenDependentTypesAreResolved([rawType,rawPointerType,rawConstPointerType],baseClassRawType?[baseClassRawType]:[],function(base){
@CLASS
ClassRawType?[baseClassRawType]:[],function(base){
@CLASS
ClassRawType]:[],function(base){
@CLASS
Class;var basePrototype;if(baseClassRawType){
@CLASS
ClassRawType){
@CLASS
Class=base.registeredClass;basePrototype=baseClass.instancePrototype}else{
@CLASS
Class;basePrototype=baseClass.instancePrototype}else{
@CLASS
Class.instancePrototype}else{
@CLASS
ClassHandle.prototype}var constructor=createNamedFunction(legalFunctionName,function(){
@CLASS
Class.constructor_body){
@CLASS
Class.constructor_body[arguments.length];if(undefined===body){
@CLASS
Class.constructor_body).toString()+") parameters instead!")}return body.apply(this,arguments)});var instancePrototype=Object.create(basePrototype,{
@CLASS
Class=new RegisteredClass(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast);var referenceConverter=new RegisteredPointer(name,registeredClass,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast);var referenceConverter=new RegisteredPointer(name,registeredClass,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class,getActualType,upcast,downcast);var referenceConverter=new RegisteredPointer(name,registeredClass,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class,false,true,false);registeredPointers[rawType]={
@CLASS
classType,cppInvokerFunc,cppTargetFunc){
@CLASS
ClassMethodFunc=argTypes[1]!==null&&classType!==null;var needsDestructorStack=false;for(var i=1;i<argTypes.length;++i){
@CLASS
classType!==null;var needsDestructorStack=false;for(var i=1;i<argTypes.length;++i){
@CLASS
classParam"];var args2=[throwBindingError,cppInvokerFunc,cppTargetFunc,runDestructors,argTypes[0],argTypes[1]];if(isClassMethodFunc){
@CLASS
ClassMethodFunc){
@CLASS
classParam.toWireType("+dtorStack+", this);|n"}for(var i=0;i<argCount-2;++i){
@CLASS
ClassMethodFunc){
@CLASS
ClassMethodFunc?1:2;i<argTypes.length;++i){
@CLASS
class_class_function(rawClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,fn){
@CLASS
class_function(rawClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,fn){
@CLASS
ClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,fn){
@CLASS
ClassType],function(classType){
@CLASS
classType){
@CLASS
classType=classType[0];var humanName=classType.name+"."+methodName;function unboundTypesHandler(){
@CLASS
classType[0];var humanName=classType.name+"."+methodName;function unboundTypesHandler(){
@CLASS
classType.name+"."+methodName;function unboundTypesHandler(){
@CLASS
classType.registeredClass.constructor;if(undefined===proto[methodName]){
@CLASS
Class.constructor;if(undefined===proto[methodName]){
@CLASS
class_constructor(rawClassType,argCount,rawArgTypesAddr,invokerSignature,invoker,rawConstructor){
@CLASS
ClassType,argCount,rawArgTypesAddr,invokerSignature,invoker,rawConstructor){
@CLASS
ClassType],function(classType){
@CLASS
classType){
@CLASS
classType=classType[0];var humanName="constructor "+classType.name;if(undefined===classType.registeredClass.constructor_body){
@CLASS
classType[0];var humanName="constructor "+classType.name;if(undefined===classType.registeredClass.constructor_body){
@CLASS
classType.name;if(undefined===classType.registeredClass.constructor_body){
@CLASS
classType.registeredClass.constructor_body){
@CLASS
Class.constructor_body){
@CLASS
classType.registeredClass.constructor_body=[]}if(undefined!==classType.registeredClass.constructor_body[argCount-1]){
@CLASS
Class.constructor_body=[]}if(undefined!==classType.registeredClass.constructor_body[argCount-1]){
@CLASS
classType.registeredClass.constructor_body[argCount-1]){
@CLASS
Class.constructor_body[argCount-1]){
@CLASS
class '"+classType.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!")}classType.registeredClass.constructor_body[argCount-1]=function unboundTypeHandler(){
@CLASS
classType.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!")}classType.registeredClass.constructor_body[argCount-1]=function unboundTypeHandler(){
@CLASS
classType.registeredClass.constructor_body[argCount-1]=function unboundTypeHandler(){
@CLASS
Class.constructor_body[argCount-1]=function unboundTypeHandler(){
@CLASS
classType.name+" due to unbound types",rawArgTypes)};whenDependentTypesAreResolved([],rawArgTypes,function(argTypes){
@CLASS
classType.registeredClass.constructor_body[argCount-1]=function constructor_body(){
@CLASS
Class.constructor_body[argCount-1]=function constructor_body(){
@CLASS
class_function(rawClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,context,isPureVirtual){
@CLASS
ClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,context,isPureVirtual){
@CLASS
ClassType],function(classType){
@CLASS
classType){
@CLASS
classType=classType[0];var humanName=classType.name+"."+methodName;if(isPureVirtual){
@CLASS
classType[0];var humanName=classType.name+"."+methodName;if(isPureVirtual){
@CLASS
classType.name+"."+methodName;if(isPureVirtual){
@CLASS
classType.registeredClass.pureVirtualFunctions.push(methodName)}function unboundTypesHandler(){
@CLASS
Class.pureVirtualFunctions.push(methodName)}function unboundTypesHandler(){
@CLASS
classType.registeredClass.instancePrototype;var method=proto[methodName];if(undefined===method||undefined===method.overloadTable&&method.className!==classType.name&&method.argCount===argCount-2){
@CLASS
Class.instancePrototype;var method=proto[methodName];if(undefined===method||undefined===method.overloadTable&&method.className!==classType.name&&method.argCount===argCount-2){
@CLASS
className!==classType.name&&method.argCount===argCount-2){
@CLASS
classType.name&&method.argCount===argCount-2){
@CLASS
className=classType.name;proto[methodName]=unboundTypesHandler}else{
@CLASS
classType.name;proto[methodName]=unboundTypesHandler}else{
@CLASS
classType,rawInvoker,context);if(undefined===proto[methodName].overloadTable){
@CLASS
classType,humanName){
@CLASS
classType.registeredClass.constructor)){
@CLASS
Class.constructor)){
@CLASS
Class,classType.registeredClass)}function __embind_register_class_property(classType,fieldName,getterReturnType,getterSignature,getter,getterContext,setterArgumentType,setterSignature,setter,setterContext){
@CLASS
classType.registeredClass)}function __embind_register_class_property(classType,fieldName,getterReturnType,getterSignature,getter,getterContext,setterArgumentType,setterSignature,setter,setterContext){
@CLASS
Class)}function __embind_register_class_property(classType,fieldName,getterReturnType,getterSignature,getter,getterContext,setterArgumentType,setterSignature,setter,setterContext){
@CLASS
class_property(classType,fieldName,getterReturnType,getterSignature,getter,getterContext,setterArgumentType,setterSignature,setter,setterContext){
@CLASS
classType,fieldName,getterReturnType,getterSignature,getter,getterContext,setterArgumentType,setterSignature,setter,setterContext){
@CLASS
classType],function(classType){
@CLASS
classType){
@CLASS
classType=classType[0];var humanName=classType.name+"."+fieldName;var desc={
@CLASS
classType[0];var humanName=classType.name+"."+fieldName;var desc={
@CLASS
classType.name+"."+fieldName;var desc={
@CLASS
classType.registeredClass.instancePrototype,fieldName,desc);whenDependentTypesAreResolved([],setter?[getterReturnType,setterArgumentType]:[getterReturnType],function(types){
@CLASS
Class.instancePrototype,fieldName,desc);whenDependentTypesAreResolved([],setter?[getterReturnType,setterArgumentType]:[getterReturnType],function(types){
@CLASS
classType,humanName+" getter");return getterReturnType["fromWireType"](getter(getterContext,ptr))},enumerable:true};if(setter){
@CLASS
classType,humanName+" setter");var destructors=[];setter(setterContext,ptr,setterArgumentType["toWireType"](destructors,v));runDestructors(destructors)}}Object.defineProperty(classType.registeredClass.instancePrototype,fieldName,desc);return[]});return[]})}var emval_free_list=[];var emval_handle_array=[{
@CLASS
classType.registeredClass.instancePrototype,fieldName,desc);return[]});return[]})}var emval_free_list=[];var emval_handle_array=[{
@CLASS
Class.instancePrototype,fieldName,desc);return[]});return[]})}var emval_free_list=[];var emval_handle_array=[{
@CLASS
ClassHandle();init_RegisteredPointer();init_embind();UnboundTypeError=Module["UnboundTypeError"]=extendError(Error,"UnboundTypeError");init_emval();var ASSERTIONS=false;function intArrayFromString(stringy,dontAddNull,length){
@CLASS
class":__embind_register_class,"_embind_register_class_class_function":__embind_register_class_class_function,"_embind_register_class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class,"_embind_register_class_class_function":__embind_register_class_class_function,"_embind_register_class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_class_function":__embind_register_class_class_function,"_embind_register_class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_function":__embind_register_class_class_function,"_embind_register_class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_class_function,"_embind_register_class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_function,"_embind_register_class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@FILENAME
addons|libs|rhino3dm|rhino3dm.module.js
@EXPORT
exports["f"];return wrappedFunc}
@EXPORT
exported");return func}
@EXPORT
exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["memory"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["__indirect_function_table"];removeRunDependency("wasm-instantiate")}
@EXPORT
exports;Module["asm"]=exports;wasmMemory=Module["asm"]["memory"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["__indirect_function_table"];removeRunDependency("wasm-instantiate")}
@EXPORT
exports;wasmMemory=Module["asm"]["memory"];updateGlobalBufferAndViews(wasmMemory.buffer);wasmTable=Module["asm"]["__indirect_function_table"];removeRunDependency("wasm-instantiate")}
@EXPORT
exports=Module["instantiateWasm"](info,receiveInstance);return exports}
@EXPORT
exports}
@CLASS
Class=createNamedFunction(errorName,function(message){
@CLASS
Class.prototype=Object.create(baseErrorType.prototype);errorClass.prototype.constructor=errorClass;errorClass.prototype.toString=function(){
@CLASS
Class.prototype.constructor=errorClass;errorClass.prototype.toString=function(){
@CLASS
Class;errorClass.prototype.toString=function(){
@CLASS
Class.prototype.toString=function(){
@CLASS
Class}var InternalError=undefined;function throwInternalError(message){
@CLASS
ClassHandle_isAliasOf(other){
@CLASS
ClassHandle)){
@CLASS
ClassHandle)){
@CLASS
Class=this.$$.ptrType.registeredClass;var left=this.$$.ptr;var rightClass=other.$$.ptrType.registeredClass;var right=other.$$.ptr;while(leftClass.baseClass){
@CLASS
Class;var left=this.$$.ptr;var rightClass=other.$$.ptrType.registeredClass;var right=other.$$.ptr;while(leftClass.baseClass){
@CLASS
Class=other.$$.ptrType.registeredClass;var right=other.$$.ptr;while(leftClass.baseClass){
@CLASS
Class;var right=other.$$.ptr;while(leftClass.baseClass){
@CLASS
Class.baseClass){
@CLASS
Class){
@CLASS
Class.upcast(left);leftClass=leftClass.baseClass}while(rightClass.baseClass){
@CLASS
Class=leftClass.baseClass}while(rightClass.baseClass){
@CLASS
Class.baseClass}while(rightClass.baseClass){
@CLASS
Class}while(rightClass.baseClass){
@CLASS
Class.baseClass){
@CLASS
Class){
@CLASS
Class.upcast(right);rightClass=rightClass.baseClass}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class=rightClass.baseClass}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class.baseClass}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class}return leftClass===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class===rightClass&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class&&left===right}function shallowCopyInternalPointer(o){
@CLASS
Class.name}throwBindingError(getInstanceTypeName(obj)+" instance already deleted")}var finalizationGroup=false;function detachFinalizer(handle){
@CLASS
Class.rawDestructor($$.ptr)}}function releaseClassHandle($$){
@CLASS
ClassHandle($$){
@CLASS
ClassHandle($$)}}});attachFinalizer=function(handle){
@CLASS
ClassHandle_clone(){
@CLASS
ClassHandle_delete(){
@CLASS
ClassHandle(this.$$);if(!this.$$.preservePointerOnDelete){
@CLASS
ClassHandle_isDeleted(){
@CLASS
ClassHandle_deleteLater(){
@CLASS
ClassHandle(){
@CLASS
ClassHandle.prototype["isAliasOf"]=ClassHandle_isAliasOf;ClassHandle.prototype["clone"]=ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_isAliasOf;ClassHandle.prototype["clone"]=ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle.prototype["clone"]=ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_clone;ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle.prototype["delete"]=ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_delete;ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle.prototype["isDeleted"]=ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_isDeleted;ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle.prototype["deleteLater"]=ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle_deleteLater}function ClassHandle(){
@CLASS
ClassHandle(){
@CLASS
Class(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast){
@CLASS
Class,getActualType,upcast,downcast){
@CLASS
Class=baseClass;this.getActualType=getActualType;this.upcast=upcast;this.downcast=downcast;this.pureVirtualFunctions=[]}function upcastPointer(ptr,ptrClass,desiredClass){
@CLASS
Class;this.getActualType=getActualType;this.upcast=upcast;this.downcast=downcast;this.pureVirtualFunctions=[]}function upcastPointer(ptr,ptrClass,desiredClass){
@CLASS
Class,desiredClass){
@CLASS
Class){
@CLASS
Class!==desiredClass){
@CLASS
Class){
@CLASS
Class.upcast){
@CLASS
Class.name+", got an instance of "+ptrClass.name)}ptr=ptrClass.upcast(ptr);ptrClass=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class.name)}ptr=ptrClass.upcast(ptr);ptrClass=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class.upcast(ptr);ptrClass=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class=ptrClass.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class.baseClass}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class}return ptr}function constNoSmartPtrRawPointerToWireType(destructors,handle){
@CLASS
Class=handle.$$.ptrType.registeredClass;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function genericPointerToWireType(destructors,handle){
@CLASS
Class;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function genericPointerToWireType(destructors,handle){
@CLASS
Class,this.registeredClass);return ptr}function genericPointerToWireType(destructors,handle){
@CLASS
Class);return ptr}function genericPointerToWireType(destructors,handle){
@CLASS
Class=handle.$$.ptrType.registeredClass;ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);if(this.isSmartPointer){
@CLASS
Class;ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);if(this.isSmartPointer){
@CLASS
Class,this.registeredClass);if(this.isSmartPointer){
@CLASS
Class);if(this.isSmartPointer){
@CLASS
Class=handle.$$.ptrType.registeredClass;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function RegisteredPointer_getPointee(ptr){
@CLASS
Class;var ptr=upcastPointer(handle.$$.ptr,handleClass,this.registeredClass);return ptr}function RegisteredPointer_getPointee(ptr){
@CLASS
Class,this.registeredClass);return ptr}function RegisteredPointer_getPointee(ptr){
@CLASS
Class);return ptr}function RegisteredPointer_getPointee(ptr){
@CLASS
Class,desiredClass){
@CLASS
Class){
@CLASS
Class===desiredClass){
@CLASS
Class){
@CLASS
Class.baseClass){
@CLASS
Class){
@CLASS
Class,desiredClass.baseClass);if(rv===null){
@CLASS
Class.baseClass);if(rv===null){
@CLASS
Class);if(rv===null){
@CLASS
Class.downcast(rv)}function getInheritedInstanceCount(){
@CLASS
class_,ptr){
@CLASS
class_.baseClass){
@CLASS
Class){
@CLASS
class_.upcast(ptr);class_=class_.baseClass}return ptr}function getInheritedInstance(class_,ptr){
@CLASS
class_=class_.baseClass}return ptr}function getInheritedInstance(class_,ptr){
@CLASS
class_.baseClass}return ptr}function getInheritedInstance(class_,ptr){
@CLASS
Class}return ptr}function getInheritedInstance(class_,ptr){
@CLASS
class_,ptr){
@CLASS
class_,ptr);return registeredInstances[ptr]}function makeClassHandle(prototype,record){
@CLASS
ClassHandle(prototype,record){
@CLASS
ClassHandle requires ptr and ptrType")}var hasSmartPtrType=!!record.smartPtrType;var hasSmartPtr=!!record.smartPtr;if(hasSmartPtrType!==hasSmartPtr){
@CLASS
Class,rawPointer);if(undefined!==registeredInstance){
@CLASS
ClassHandle(this.registeredClass.instancePrototype,{
@CLASS
Class.instancePrototype,{
@CLASS
ClassHandle(this.registeredClass.instancePrototype,{
@CLASS
Class.instancePrototype,{
@CLASS
Class.getActualType(rawPointer);var registeredPointerRecord=registeredPointers[actualType];if(!registeredPointerRecord){
@CLASS
Class,toType.registeredClass);if(dp===null){
@CLASS
Class);if(dp===null){
@CLASS
ClassHandle(toType.registeredClass.instancePrototype,{
@CLASS
Class.instancePrototype,{
@CLASS
ClassHandle(toType.registeredClass.instancePrototype,{
@CLASS
Class.instancePrototype,{
@CLASS
Class,isReference,isConst,isSmartPointer,pointeeType,sharingPolicy,rawGetPointee,rawConstructor,rawShare,rawDestructor){
@CLASS
Class=registeredClass;this.isReference=isReference;this.isConst=isConst;this.isSmartPointer=isSmartPointer;this.pointeeType=pointeeType;this.sharingPolicy=sharingPolicy;this.rawGetPointee=rawGetPointee;this.rawConstructor=rawConstructor;this.rawShare=rawShare;this.rawDestructor=rawDestructor;if(!isSmartPointer&&registeredClass.baseClass===undefined){
@CLASS
Class;this.isReference=isReference;this.isConst=isConst;this.isSmartPointer=isSmartPointer;this.pointeeType=pointeeType;this.sharingPolicy=sharingPolicy;this.rawGetPointee=rawGetPointee;this.rawConstructor=rawConstructor;this.rawShare=rawShare;this.rawDestructor=rawDestructor;if(!isSmartPointer&&registeredClass.baseClass===undefined){
@CLASS
Class.baseClass===undefined){
@CLASS
Class===undefined){
@CLASS
class(rawType,rawPointerType,rawConstPointerType,baseClassRawType,getActualTypeSignature,getActualType,upcastSignature,upcast,downcastSignature,downcast,name,destructorSignature,rawDestructor){
@CLASS
ClassRawType,getActualTypeSignature,getActualType,upcastSignature,upcast,downcastSignature,downcast,name,destructorSignature,rawDestructor){
@CLASS
ClassRawType])});whenDependentTypesAreResolved([rawType,rawPointerType,rawConstPointerType],baseClassRawType?[baseClassRawType]:[],function(base){
@CLASS
ClassRawType?[baseClassRawType]:[],function(base){
@CLASS
ClassRawType]:[],function(base){
@CLASS
Class;var basePrototype;if(baseClassRawType){
@CLASS
ClassRawType){
@CLASS
Class=base.registeredClass;basePrototype=baseClass.instancePrototype}else{
@CLASS
Class;basePrototype=baseClass.instancePrototype}else{
@CLASS
Class.instancePrototype}else{
@CLASS
ClassHandle.prototype}var constructor=createNamedFunction(legalFunctionName,function(){
@CLASS
Class.constructor_body){
@CLASS
Class.constructor_body[arguments.length];if(undefined===body){
@CLASS
Class.constructor_body).toString()+") parameters instead!")}return body.apply(this,arguments)});var instancePrototype=Object.create(basePrototype,{
@CLASS
Class=new RegisteredClass(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast);var referenceConverter=new RegisteredPointer(name,registeredClass,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class(name,constructor,instancePrototype,rawDestructor,baseClass,getActualType,upcast,downcast);var referenceConverter=new RegisteredPointer(name,registeredClass,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class,getActualType,upcast,downcast);var referenceConverter=new RegisteredPointer(name,registeredClass,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class,true,false,false);var pointerConverter=new RegisteredPointer(name+"*",registeredClass,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class,false,false,false);var constPointerConverter=new RegisteredPointer(name+" const*",registeredClass,false,true,false);registeredPointers[rawType]={
@CLASS
Class,false,true,false);registeredPointers[rawType]={
@CLASS
classType,cppInvokerFunc,cppTargetFunc){
@CLASS
ClassMethodFunc=argTypes[1]!==null&&classType!==null;var needsDestructorStack=false;for(var i=1;i<argTypes.length;++i){
@CLASS
classType!==null;var needsDestructorStack=false;for(var i=1;i<argTypes.length;++i){
@CLASS
classParam"];var args2=[throwBindingError,cppInvokerFunc,cppTargetFunc,runDestructors,argTypes[0],argTypes[1]];if(isClassMethodFunc){
@CLASS
ClassMethodFunc){
@CLASS
classParam.toWireType("+dtorStack+", this);|n"}for(var i=0;i<argCount-2;++i){
@CLASS
ClassMethodFunc){
@CLASS
ClassMethodFunc?1:2;i<argTypes.length;++i){
@CLASS
class_class_function(rawClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,fn){
@CLASS
class_function(rawClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,fn){
@CLASS
ClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,fn){
@CLASS
ClassType],function(classType){
@CLASS
classType){
@CLASS
classType=classType[0];var humanName=classType.name+"."+methodName;function unboundTypesHandler(){
@CLASS
classType[0];var humanName=classType.name+"."+methodName;function unboundTypesHandler(){
@CLASS
classType.name+"."+methodName;function unboundTypesHandler(){
@CLASS
classType.registeredClass.constructor;if(undefined===proto[methodName]){
@CLASS
Class.constructor;if(undefined===proto[methodName]){
@CLASS
class_constructor(rawClassType,argCount,rawArgTypesAddr,invokerSignature,invoker,rawConstructor){
@CLASS
ClassType,argCount,rawArgTypesAddr,invokerSignature,invoker,rawConstructor){
@CLASS
ClassType],function(classType){
@CLASS
classType){
@CLASS
classType=classType[0];var humanName="constructor "+classType.name;if(undefined===classType.registeredClass.constructor_body){
@CLASS
classType[0];var humanName="constructor "+classType.name;if(undefined===classType.registeredClass.constructor_body){
@CLASS
classType.name;if(undefined===classType.registeredClass.constructor_body){
@CLASS
classType.registeredClass.constructor_body){
@CLASS
Class.constructor_body){
@CLASS
classType.registeredClass.constructor_body=[]}if(undefined!==classType.registeredClass.constructor_body[argCount-1]){
@CLASS
Class.constructor_body=[]}if(undefined!==classType.registeredClass.constructor_body[argCount-1]){
@CLASS
classType.registeredClass.constructor_body[argCount-1]){
@CLASS
Class.constructor_body[argCount-1]){
@CLASS
class '"+classType.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!")}classType.registeredClass.constructor_body[argCount-1]=function unboundTypeHandler(){
@CLASS
classType.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!")}classType.registeredClass.constructor_body[argCount-1]=function unboundTypeHandler(){
@CLASS
classType.registeredClass.constructor_body[argCount-1]=function unboundTypeHandler(){
@CLASS
Class.constructor_body[argCount-1]=function unboundTypeHandler(){
@CLASS
classType.name+" due to unbound types",rawArgTypes)};whenDependentTypesAreResolved([],rawArgTypes,function(argTypes){
@CLASS
classType.registeredClass.constructor_body[argCount-1]=function constructor_body(){
@CLASS
Class.constructor_body[argCount-1]=function constructor_body(){
@CLASS
class_function(rawClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,context,isPureVirtual){
@CLASS
ClassType,methodName,argCount,rawArgTypesAddr,invokerSignature,rawInvoker,context,isPureVirtual){
@CLASS
ClassType],function(classType){
@CLASS
classType){
@CLASS
classType=classType[0];var humanName=classType.name+"."+methodName;if(isPureVirtual){
@CLASS
classType[0];var humanName=classType.name+"."+methodName;if(isPureVirtual){
@CLASS
classType.name+"."+methodName;if(isPureVirtual){
@CLASS
classType.registeredClass.pureVirtualFunctions.push(methodName)}function unboundTypesHandler(){
@CLASS
Class.pureVirtualFunctions.push(methodName)}function unboundTypesHandler(){
@CLASS
classType.registeredClass.instancePrototype;var method=proto[methodName];if(undefined===method||undefined===method.overloadTable&&method.className!==classType.name&&method.argCount===argCount-2){
@CLASS
Class.instancePrototype;var method=proto[methodName];if(undefined===method||undefined===method.overloadTable&&method.className!==classType.name&&method.argCount===argCount-2){
@CLASS
className!==classType.name&&method.argCount===argCount-2){
@CLASS
classType.name&&method.argCount===argCount-2){
@CLASS
className=classType.name;proto[methodName]=unboundTypesHandler}else{
@CLASS
classType.name;proto[methodName]=unboundTypesHandler}else{
@CLASS
classType,rawInvoker,context);if(undefined===proto[methodName].overloadTable){
@CLASS
classType,humanName){
@CLASS
classType.registeredClass.constructor)){
@CLASS
Class.constructor)){
@CLASS
Class,classType.registeredClass)}function __embind_register_class_property(classType,fieldName,getterReturnType,getterSignature,getter,getterContext,setterArgumentType,setterSignature,setter,setterContext){
@CLASS
classType.registeredClass)}function __embind_register_class_property(classType,fieldName,getterReturnType,getterSignature,getter,getterContext,setterArgumentType,setterSignature,setter,setterContext){
@CLASS
Class)}function __embind_register_class_property(classType,fieldName,getterReturnType,getterSignature,getter,getterContext,setterArgumentType,setterSignature,setter,setterContext){
@CLASS
class_property(classType,fieldName,getterReturnType,getterSignature,getter,getterContext,setterArgumentType,setterSignature,setter,setterContext){
@CLASS
classType,fieldName,getterReturnType,getterSignature,getter,getterContext,setterArgumentType,setterSignature,setter,setterContext){
@CLASS
classType],function(classType){
@CLASS
classType){
@CLASS
classType=classType[0];var humanName=classType.name+"."+fieldName;var desc={
@CLASS
classType[0];var humanName=classType.name+"."+fieldName;var desc={
@CLASS
classType.name+"."+fieldName;var desc={
@CLASS
classType.registeredClass.instancePrototype,fieldName,desc);whenDependentTypesAreResolved([],setter?[getterReturnType,setterArgumentType]:[getterReturnType],function(types){
@CLASS
Class.instancePrototype,fieldName,desc);whenDependentTypesAreResolved([],setter?[getterReturnType,setterArgumentType]:[getterReturnType],function(types){
@CLASS
classType,humanName+" getter");return getterReturnType["fromWireType"](getter(getterContext,ptr))},enumerable:true};if(setter){
@CLASS
classType,humanName+" setter");var destructors=[];setter(setterContext,ptr,setterArgumentType["toWireType"](destructors,v));runDestructors(destructors)}}Object.defineProperty(classType.registeredClass.instancePrototype,fieldName,desc);return[]});return[]})}var emval_free_list=[];var emval_handle_array=[{
@CLASS
classType.registeredClass.instancePrototype,fieldName,desc);return[]});return[]})}var emval_free_list=[];var emval_handle_array=[{
@CLASS
Class.instancePrototype,fieldName,desc);return[]});return[]})}var emval_free_list=[];var emval_handle_array=[{
@CLASS
ClassHandle();init_RegisteredPointer();init_embind();UnboundTypeError=Module["UnboundTypeError"]=extendError(Error,"UnboundTypeError");init_emval();var ASSERTIONS=false;function intArrayFromString(stringy,dontAddNull,length){
@CLASS
class":__embind_register_class,"_embind_register_class_class_function":__embind_register_class_class_function,"_embind_register_class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class,"_embind_register_class_class_function":__embind_register_class_class_function,"_embind_register_class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_class_function":__embind_register_class_class_function,"_embind_register_class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_function":__embind_register_class_class_function,"_embind_register_class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_class_function,"_embind_register_class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_function,"_embind_register_class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_constructor":__embind_register_class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_constructor,"_embind_register_class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_function":__embind_register_class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_function,"_embind_register_class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_property":__embind_register_class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@CLASS
class_property,"_embind_register_emval":__embind_register_emval,"_embind_register_enum":__embind_register_enum,"_embind_register_enum_value":__embind_register_enum_value,"_embind_register_float":__embind_register_float,"_embind_register_integer":__embind_register_integer,"_embind_register_memory_view":__embind_register_memory_view,"_embind_register_std_string":__embind_register_std_string,"_embind_register_std_wstring":__embind_register_std_wstring,"_embind_register_value_array":__embind_register_value_array,"_embind_register_value_array_element":__embind_register_value_array_element,"_embind_register_value_object":__embind_register_value_object,"_embind_register_value_object_field":__embind_register_value_object_field,"_embind_register_void":__embind_register_void,"_emval_as":__emval_as,"_emval_call_method":__emval_call_method,"_emval_call_void_method":__emval_call_void_method,"_emval_decref":__emval_decref,"_emval_equals":__emval_equals,"_emval_get_global":__emval_get_global,"_emval_get_method_caller":__emval_get_method_caller,"_emval_get_module_property":__emval_get_module_property,"_emval_get_property":__emval_get_property,"_emval_incref":__emval_incref,"_emval_instanceof":__emval_instanceof,"_emval_is_number":__emval_is_number,"_emval_is_string":__emval_is_string,"_emval_new":__emval_new,"_emval_new_array":__emval_new_array,"_emval_new_cstring":__emval_new_cstring,"_emval_new_object":__emval_new_object,"_emval_run_destructors":__emval_run_destructors,"_emval_set_property":__emval_set_property,"_emval_take_value":__emval_take_value,"abort":_abort,"emscripten_memcpy_big":_emscripten_memcpy_big,"emscripten_resize_heap":_emscripten_resize_heap,"emscripten_thread_sleep":_emscripten_thread_sleep,"environ_get":_environ_get,"environ_sizes_get":_environ_sizes_get,"fd_close":_fd_close,"fd_fdstat_get":_fd_fdstat_get,"fd_read":_fd_read,"fd_seek":_fd_seek,"fd_write":_fd_write,"setTempRet0":_setTempRet0,"time":_time,"uuid_generate":_uuid_generate};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){
@FILENAME
addons|lights|IESSpotLight.js
@CLASS
class IESSpotLight extends SpotLight {
@FILENAME
addons|lights|LightProbeGenerator.js
@EXPORT
export { LightProbeGenerator }
@CLASS
class LightProbeGenerator {
@FILENAME
addons|lights|RectAreaLightUniformsLib.js
@EXPORT
export { RectAreaLightUniformsLib }
@CLASS
class RectAreaLightUniformsLib {
@FILENAME
addons|lines|Line2.js
@EXPORT
export { Line2 }
@CLASS
class Line2 extends LineSegments2 {
@FILENAME
addons|lines|LineGeometry.js
@EXPORT
export { LineGeometry }
@CLASS
class LineGeometry extends LineSegmentsGeometry {
@FILENAME
addons|lines|LineMaterial.js
@EXPORT
export { LineMaterial }
@CLASS
class LineMaterial extends ShaderMaterial {
@FILENAME
addons|lines|LineSegments2.js
@EXPORT
export { LineSegments2 }
@CLASS
class LineSegments2 extends Mesh {
@FILENAME
addons|lines|LineSegmentsGeometry.js
@EXPORT
export { LineSegmentsGeometry }
@CLASS
class LineSegmentsGeometry extends InstancedBufferGeometry {
@FILENAME
addons|lines|Wireframe.js
@EXPORT
export { Wireframe }
@CLASS
class Wireframe extends Mesh {
@FILENAME
addons|lines|WireframeGeometry2.js
@EXPORT
export { WireframeGeometry2 }
@CLASS
class WireframeGeometry2 extends LineSegmentsGeometry {
@FILENAME
addons|loaders|3DMLoader.js
@EXPORT
export { Rhino3dmLoader }
@CLASS
class Rhino3dmLoader extends Loader {
@FILENAME
addons|loaders|3MFLoader.js
@EXPORT
export { ThreeMFLoader }
@CLASS
class ThreeMFLoader extends Loader {
@FILENAME
addons|loaders|AMFLoader.js
@EXPORT
export { AMFLoader }
@CLASS
class AMFLoader extends Loader {
@FILENAME
addons|loaders|BVHLoader.js
@EXPORT
export { BVHLoader }
@CLASS
class BVHLoader extends Loader {
@FILENAME
addons|loaders|ColladaLoader.js
@EXPORT
export { ColladaLoader }
@CLASS
class ColladaLoader extends Loader {
@FILENAME
addons|loaders|DDSLoader.js
@EXPORT
export { DDSLoader }
@CLASS
class DDSLoader extends CompressedTextureLoader {
@FILENAME
addons|loaders|DRACOLoader.js
@EXPORT
export { DRACOLoader }
@CLASS
class DRACOLoader extends Loader {
@FILENAME
addons|loaders|EXRLoader.js
@EXPORT
export { EXRLoader }
@CLASS
class EXRLoader extends DataTextureLoader {
@CLASS
Classify channels 			const channels = EXRHeader.channels; 			const channelData = new Array( info.channels );  			for ( let i = 0; i < info.channels; ++ i ) {
@FILENAME
addons|loaders|FBXLoader.js
@EXPORT
exporter exports diffuse here instead of in materialNode.Diffuse 			parameters.color = new Color().fromArray( materialNode.DiffuseColor.value ).convertSRGBToLinear();  		}
@EXPORT
exports diffuse here instead of in materialNode.Diffuse 			parameters.color = new Color().fromArray( materialNode.DiffuseColor.value ).convertSRGBToLinear();  		}
@EXPORT
exporter exports emissive color here instead of in materialNode.Emissive 			parameters.emissive = new Color().fromArray( materialNode.EmissiveColor.value ).convertSRGBToLinear();  		}
@EXPORT
exports emissive color here instead of in materialNode.Emissive 			parameters.emissive = new Color().fromArray( materialNode.EmissiveColor.value ).convertSRGBToLinear();  		}
@EXPORT
exporter exports specular color here instead of in materialNode.Specular 			parameters.specular = new Color().fromArray( materialNode.SpecularColor.value ).convertSRGBToLinear();  		}
@EXPORT
exports specular color here instead of in materialNode.Specular 			parameters.specular = new Color().fromArray( materialNode.SpecularColor.value ).convertSRGBToLinear();  		}
@EXPORT
export.' );  				scope.genFace( buffers, geoInfo, facePositionIndexes, materialIndex, faceNormals, faceColors, faceUVs, faceWeights, faceWeightIndices, faceLength );  				polygonIndex ++; 				faceLength = 0;  				// reset arrays for the next face 				facePositionIndexes = []; 				faceNormals = []; 				faceColors = []; 				faceUVs = []; 				faceWeights = []; 				faceWeightIndices = [];  			}
@EXPORT
exporters embed fixed 15 or 16bytes?) 		// - 4bytes: magic 		// - 4bytes: version 		// - 120bytes: zero 		// - 16bytes: magic 		if ( reader.size() % 16 === 0 ) {  			return ( ( reader.getOffset() + 160 + 16 ) & ~ 0xf ) >= reader.size();  		}
@EXPORT
exporter. 	// true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54) 	// then sees LSB. 	getBoolean() {  		return ( this.getUint8() & 1 ) === 1;  	}
@EXPORT
export { FBXLoader }
@CLASS
class FBXLoader extends Loader {
@CLASS
class FBXTreeParser {
@CLASS
class_k_fbx_texture.html#889640e63e2e681259ea81061b85143a 		// 0: repeat(default), 1: clamp  		texture.wrapS = valueU === 0 ? RepeatWrapping : ClampToEdgeWrapping; 		texture.wrapT = valueV === 0 ? RepeatWrapping : ClampToEdgeWrapping;  		if ( 'Scaling' in textureNode ) {
@CLASS
class GeometryParser {
@CLASS
class AnimationParser {
@CLASS
class TextParser {
@CLASS
class BinaryParser {
@CLASS
class BinaryReader {
@CLASS
class FBXTree {
@CLASS
class_fbx_euler_html function getEulerOrder( order ) {
@FILENAME
addons|loaders|FontLoader.js
@EXPORT
export { FontLoader, Font }
@CLASS
class FontLoader extends Loader {
@CLASS
class Font {
@FILENAME
addons|loaders|GCodeLoader.js
@EXPORT
export { GCodeLoader }
@CLASS
class GCodeLoader  * @param {
@CLASS
class GCodeLoader extends Loader {
@FILENAME
addons|loaders|GLTFLoader.js
@EXPORT
export { GLTFLoader }
@CLASS
class GLTFLoader extends Loader {
@CLASS
class GLTFLightsExtension {
@CLASS
class GLTFMaterialsUnlitExtension {
@CLASS
class GLTFMaterialsEmissiveStrengthExtension {
@CLASS
class GLTFMaterialsClearcoatExtension {
@CLASS
class GLTFMaterialsIridescenceExtension {
@CLASS
class GLTFMaterialsSheenExtension {
@CLASS
class GLTFMaterialsTransmissionExtension {
@CLASS
class GLTFMaterialsVolumeExtension {
@CLASS
class GLTFMaterialsIorExtension {
@CLASS
class GLTFMaterialsSpecularExtension {
@CLASS
class GLTFMaterialsAnisotropyExtension {
@CLASS
class GLTFTextureBasisUExtension {
@CLASS
class GLTFTextureWebPExtension {
@CLASS
class GLTFTextureAVIFExtension {
@CLASS
class GLTFMeshoptCompression {
@CLASS
class GLTFMeshGpuInstancing {
@CLASS
class GLTFBinaryExtension {
@CLASS
class GLTFDracoMeshCompressionExtension {
@CLASS
class GLTFTextureTransformExtension {
@CLASS
class GLTFMeshQuantizationExtension {
@CLASS
class GLTFCubicSplineInterpolant extends Interpolant {
@CLASS
class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {
@CLASS
class GLTFParser {
@FILENAME
addons|loaders|HDRCubeTextureLoader.js
@EXPORT
export { HDRCubeTextureLoader }
@CLASS
class HDRCubeTextureLoader extends Loader {
@FILENAME
addons|loaders|IESLoader.js
@EXPORT
export { IESLoader }
@CLASS
class IESLoader extends Loader {
@FILENAME
addons|loaders|KMZLoader.js
@EXPORT
export { KMZLoader }
@CLASS
class KMZLoader extends Loader {
@FILENAME
addons|loaders|KTX2Loader.js
@EXPORT
export { KTX2Loader }
@CLASS
class KTX2Loader extends Loader {
@FILENAME
addons|loaders|KTXLoader.js
@EXPORT
export { KTXLoader }
@CLASS
class KTXLoader extends CompressedTextureLoader {
@CLASS
class KhronosTextureContainer {
@FILENAME
addons|loaders|LDrawLoader.js
@EXPORT
export { LDrawLoader }
@CLASS
class LDrawConditionalLineMaterial extends ShaderMaterial {
@CLASS
class ConditionalLineSegments extends LineSegments {
@CLASS
class LineParser {
@CLASS
class LDrawParsedCache {
@CLASS
Class used to parse and build LDraw parts as three.js objects and cache them if they're a "Part" type. class LDrawPartsGeometryCache {
@CLASS
class LDrawPartsGeometryCache {
@CLASS
class LDrawLoader extends Loader {
@FILENAME
addons|loaders|LogLuvLoader.js
@EXPORT
export { LogLuvLoader }
@CLASS
class LogLuvLoader extends DataTextureLoader {
@FILENAME
addons|loaders|LottieLoader.js
@EXPORT
export { LottieLoader }
@CLASS
class LottieLoader extends Loader {
@FILENAME
addons|loaders|LUT3dlLoader.js
@EXPORT
export class LUT3dlLoader extends Loader {  	load( url, onLoad, onProgress, onError ) {  		const loader = new FileLoader( this.manager ); 		loader.setPath( this.path ); 		loader.setResponseType( 'text' ); 		loader.load( url, text => {  			try {  				onLoad( this.parse( text ) );  			}
@CLASS
class LUT3dlLoader extends Loader {
@FILENAME
addons|loaders|LUTCubeLoader.js
@EXPORT
export class LUTCubeLoader extends Loader {  	load( url, onLoad, onProgress, onError ) {  		const loader = new FileLoader( this.manager ); 		loader.setPath( this.path ); 		loader.setResponseType( 'text' ); 		loader.load( url, text => {  			try {  				onLoad( this.parse( text ) );  			}
@CLASS
class LUTCubeLoader extends Loader {
@FILENAME
addons|loaders|LWOLoader.js
@EXPORT
export { LWOLoader }
@CLASS
class LWOLoader extends Loader {
@CLASS
class LWOTreeParser {
@CLASS
class MaterialParser {
@CLASS
class GeometryParser {
@FILENAME
addons|loaders|MaterialXLoader.js
@EXPORT
export { MaterialXLoader }
@CLASS
class MtlXElement {
@CLASS
class MaterialXLoader extends Loader {
@CLASS
class MaterialXNode {
@CLASS
ClassFromType( type ) {
@CLASS
Class = null;  		if ( type === 'integer' ) nodeClass = int; 		else if ( type === 'float' ) nodeClass = float; 		else if ( type === 'vector2' ) nodeClass = vec2; 		else if ( type === 'vector3' ) nodeClass = vec3; 		else if ( type === 'vector4' || type === 'color4' ) nodeClass = vec4; 		else if ( type === 'color3' ) nodeClass = color; 		else if ( type === 'boolean' ) nodeClass = bool;  		return nodeClass;  	}  	getNode() {
@CLASS
Class = int; 		else if ( type === 'float' ) nodeClass = float; 		else if ( type === 'vector2' ) nodeClass = vec2; 		else if ( type === 'vector3' ) nodeClass = vec3; 		else if ( type === 'vector4' || type === 'color4' ) nodeClass = vec4; 		else if ( type === 'color3' ) nodeClass = color; 		else if ( type === 'boolean' ) nodeClass = bool;  		return nodeClass;  	}  	getNode() {
@CLASS
Class = float; 		else if ( type === 'vector2' ) nodeClass = vec2; 		else if ( type === 'vector3' ) nodeClass = vec3; 		else if ( type === 'vector4' || type === 'color4' ) nodeClass = vec4; 		else if ( type === 'color3' ) nodeClass = color; 		else if ( type === 'boolean' ) nodeClass = bool;  		return nodeClass;  	}  	getNode() {
@CLASS
Class = vec2; 		else if ( type === 'vector3' ) nodeClass = vec3; 		else if ( type === 'vector4' || type === 'color4' ) nodeClass = vec4; 		else if ( type === 'color3' ) nodeClass = color; 		else if ( type === 'boolean' ) nodeClass = bool;  		return nodeClass;  	}  	getNode() {
@CLASS
Class = vec3; 		else if ( type === 'vector4' || type === 'color4' ) nodeClass = vec4; 		else if ( type === 'color3' ) nodeClass = color; 		else if ( type === 'boolean' ) nodeClass = bool;  		return nodeClass;  	}  	getNode() {
@CLASS
Class = vec4; 		else if ( type === 'color3' ) nodeClass = color; 		else if ( type === 'boolean' ) nodeClass = bool;  		return nodeClass;  	}  	getNode() {
@CLASS
Class = color; 		else if ( type === 'boolean' ) nodeClass = bool;  		return nodeClass;  	}  	getNode() {
@CLASS
Class = bool;  		return nodeClass;  	}  	getNode() {
@CLASS
Class;  	}  	getNode() {
@CLASS
Class = this.getClassFromType( type );  			node = nodeClass( ...this.getVector() );  		} else if ( this.hasReference ) {
@CLASS
ClassFromType( type );  			node = nodeClass( ...this.getVector() );  		} else if ( this.hasReference ) {
@CLASS
Class( ...this.getVector() );  		} else if ( this.hasReference ) {
@CLASS
Class = this.getClassFromType( type );  				node = nodeClass( this.getNodeByName( 'in' ) );  			} else if ( element === 'constant' ) {
@CLASS
ClassFromType( type );  				node = nodeClass( this.getNodeByName( 'in' ) );  			} else if ( element === 'constant' ) {
@CLASS
Class( this.getNodeByName( 'in' ) );  			} else if ( element === 'constant' ) {
@CLASS
Class = this.getClassFromType( type );  		if ( nodeToTypeClass !== null ) {
@CLASS
ClassFromType( type );  		if ( nodeToTypeClass !== null ) {
@CLASS
Class !== null ) {
@CLASS
Class( node );  		}  		node.name = this.name;  		this.node = node;  		return node;  	}  	getChildByName( name ) {
@CLASS
class MaterialX {
@FILENAME
addons|loaders|MD2Loader.js
@EXPORT
export { MD2Loader }
@CLASS
class MD2Loader extends Loader {
@FILENAME
addons|loaders|MDDLoader.js
@EXPORT
export { MDDLoader }
@CLASS
class MDDLoader extends Loader {
@FILENAME
addons|loaders|MMDLoader.js
@EXPORT
export { MMDLoader }
@CLASS
class MMDLoader extends Loader {
@CLASS
class MeshBuilder {
@CLASS
class GeometryBuilder {
@CLASS
Class: boneData.transformationClass, 				parent: boneData.parentIndex, 				name: boneData.name, 				pos: boneData.position.slice( 0, 3 ), 				rotq: [ 0, 0, 0, 1 ], 				scl: [ 1, 1, 1 ], 				rigidBodyType: boneTypeTable[ i ] !== undefined ? boneTypeTable[ i ] : - 1 			};  			if ( bone.parent !== - 1 ) {
@CLASS
Class, 				parent: boneData.parentIndex, 				name: boneData.name, 				pos: boneData.position.slice( 0, 3 ), 				rotq: [ 0, 0, 0, 1 ], 				scl: [ 1, 1, 1 ], 				rigidBodyType: boneTypeTable[ i ] !== undefined ? boneTypeTable[ i ] : - 1 			};  			if ( bone.parent !== - 1 ) {
@CLASS
Class: boneData.transformationClass 				};  				grantEntryMap[ i ] = {
@CLASS
Class 				};  				grantEntryMap[ i ] = {
@CLASS
class MaterialBuilder {
@CLASS
class AnimationBuilder {
@CLASS
class CubicBezierInterpolation extends Interpolant {
@CLASS
class MMDToonMaterial extends ShaderMaterial {
@FILENAME
addons|loaders|MTLLoader.js
@EXPORT
export { MTLLoader }
@CLASS
class MTLLoader extends Loader {
@CLASS
class MaterialCreator {
@FILENAME
addons|loaders|NRRDLoader.js
@EXPORT
export { NRRDLoader }
@CLASS
class NRRDLoader extends Loader {
@FILENAME
addons|loaders|OBJLoader.js
@EXPORT
export { OBJLoader }
@CLASS
class OBJLoader extends Loader {
@FILENAME
addons|loaders|PCDLoader.js
@EXPORT
export { PCDLoader }
@CLASS
class PCDLoader extends Loader {
@FILENAME
addons|loaders|PDBLoader.js
@EXPORT
export { PDBLoader }
@CLASS
class PDBLoader extends Loader {
@FILENAME
addons|loaders|PLYLoader.js
@EXPORT
export { PLYLoader }
@CLASS
class PLYLoader extends Loader {
@CLASS
class ArrayStream {
@FILENAME
addons|loaders|PVRLoader.js
@EXPORT
export { PVRLoader }
@CLASS
class PVRLoader extends CompressedTextureLoader {
@FILENAME
addons|loaders|RGBELoader.js
@EXPORT
export { RGBELoader }
@CLASS
class RGBELoader extends DataTextureLoader {
@FILENAME
addons|loaders|RGBMLoader.js
@EXPORT
export { RGBMLoader }
@CLASS
class RGBMLoader extends DataTextureLoader {
@FILENAME
addons|loaders|STLLoader.js
@EXPORT
export { STLLoader }
@CLASS
class STLLoader extends Loader {
@FILENAME
addons|loaders|SVGLoader.js
@EXPORT
export { SVGLoader }
@CLASS
class SVGLoader extends Loader {
@CLASS
class' ) ) {
@CLASS
classSelectors = node.getAttribute( 'class' ) 					.split( /|s/ ) 					.filter( Boolean ) 					.map( i => i.trim() );  				for ( let i = 0; i < classSelectors.length; i ++ ) {
@CLASS
class' ) 					.split( /|s/ ) 					.filter( Boolean ) 					.map( i => i.trim() );  				for ( let i = 0; i < classSelectors.length; i ++ ) {
@CLASS
classSelectors.length; i ++ ) {
@CLASS
classSelectors[ i ] ] );  				}  			}  			if ( node.hasAttribute( 'id' ) ) {
@CLASS
class 		// Returns Shape object  		const BIGNUMBER = 999999999;  		const IntersectionLocationType = {
@CLASS
classifyResult = {
@CLASS
classifyPoint( i === 0 ? b0 : b1, a0, a1 ); 					//find position of this endpoints relatively to edge1 					if ( classifyResult.loc == IntersectionLocationType.ORIGIN ) {
@CLASS
classifyResult.loc == IntersectionLocationType.ORIGIN ) {
@CLASS
classifyResult.t };  					} else if ( classifyResult.loc == IntersectionLocationType.BETWEEN ) {
@CLASS
classifyResult.loc == IntersectionLocationType.BETWEEN ) {
@CLASS
classifyResult.t * ( x2 - x1 ) ).toPrecision( 10 ) ); 						const y = + ( ( y1 + classifyResult.t * ( y2 - y1 ) ).toPrecision( 10 ) ); 						return {
@CLASS
classifyResult.t * ( y2 - y1 ) ).toPrecision( 10 ) ); 						return {
@CLASS
classifyResult.t, };  					}  				}  				return null;  			} else {
@CLASS
classifyPoint( i === 0 ? b0 : b1, a0, a1 );  					if ( classifyResult.loc == IntersectionLocationType.ORIGIN ) {
@CLASS
classifyResult.loc == IntersectionLocationType.ORIGIN ) {
@CLASS
classifyResult.t };  					}  				}  				const x = + ( ( x1 + t1 * ( x2 - x1 ) ).toPrecision( 10 ) ); 				const y = + ( ( y1 + t1 * ( y2 - y1 ) ).toPrecision( 10 ) ); 				return {
@CLASS
classifyPoint( p, edgeStart, edgeEnd ) {
@CLASS
classifyResult.loc = IntersectionLocationType.ORIGIN; 				classifyResult.t = 0; 				return;  			}  			if ( ( p.x === edgeEnd.x ) && ( p.y === edgeEnd.y ) ) {
@CLASS
classifyResult.t = 0; 				return;  			}  			if ( ( p.x === edgeEnd.x ) && ( p.y === edgeEnd.y ) ) {
@CLASS
classifyResult.loc = IntersectionLocationType.DESTINATION; 				classifyResult.t = 1; 				return;  			}  			if ( sa < - Number.EPSILON ) {
@CLASS
classifyResult.t = 1; 				return;  			}  			if ( sa < - Number.EPSILON ) {
@CLASS
classifyResult.loc = IntersectionLocationType.LEFT; 				return;  			}  			if ( sa > Number.EPSILON ) {
@CLASS
classifyResult.loc = IntersectionLocationType.RIGHT; 				return;   			}  			if ( ( ( ax * bx ) < 0 ) || ( ( ay * by ) < 0 ) ) {
@CLASS
classifyResult.loc = IntersectionLocationType.BEHIND; 				return;  			}  			if ( ( Math.sqrt( ax * ax + ay * ay ) ) < ( Math.sqrt( bx * bx + by * by ) ) ) {
@CLASS
classifyResult.loc = IntersectionLocationType.BEYOND; 				return;  			}  			let t;  			if ( ax !== 0 ) {
@CLASS
classifyResult.loc = IntersectionLocationType.BETWEEN; 			classifyResult.t = t;  		}  		function getIntersections( path1, path2 ) {
@CLASS
classifyResult.t = t;  		}  		function getIntersections( path1, path2 ) {
@FILENAME
addons|loaders|TDSLoader.js
@EXPORT
export { TDSLoader }
@CLASS
class TDSLoader  * @constructor  */  class TDSLoader extends Loader {
@CLASS
class TDSLoader extends Loader {
@CLASS
class Chunk {
@CLASS
class Chunk 	 * @param {
@FILENAME
addons|loaders|TGALoader.js
@EXPORT
export { TGALoader }
@CLASS
class TGALoader extends DataTextureLoader {
@FILENAME
addons|loaders|TIFFLoader.js
@EXPORT
export { TIFFLoader }
@CLASS
class TIFFLoader extends DataTextureLoader {
@FILENAME
addons|loaders|TiltLoader.js
@EXPORT
export { TiltLoader }
@CLASS
class TiltLoader extends Loader {
@CLASS
class StrokeGeometry extends BufferGeometry {
@FILENAME
addons|loaders|TTFLoader.js
@EXPORT
export { TTFLoader }
@CLASS
class TTFLoader extends Loader {
@FILENAME
addons|loaders|USDZLoader.js
@EXPORT
export { USDZLoader }
@CLASS
class USDAParser {
@CLASS
class USDZLoader extends Loader {
@FILENAME
addons|loaders|VOXLoader.js
@EXPORT
export { VOXLoader, VOXMesh, VOXData3DTexture }
@CLASS
class VOXLoader extends Loader {
@CLASS
class VOXMesh extends Mesh {
@CLASS
class VOXData3DTexture extends Data3DTexture {
@FILENAME
addons|loaders|VRMLLoader.js
@EXPORT
export { VRMLLoader }
@CLASS
class VRMLLoader extends Loader {
@CLASS
class  			class VRMLToASTVisitor extends BaseVRMLVisitor {
@CLASS
class VRMLToASTVisitor extends BaseVRMLVisitor {
@CLASS
class VRMLLexer {
@CLASS
class VRMLParser extends CstParser {
@CLASS
class Face {
@FILENAME
addons|loaders|VTKLoader.js
@EXPORT
export { VTKLoader }
@CLASS
class VTKLoader extends Loader {
@FILENAME
addons|loaders|XYZLoader.js
@EXPORT
export { XYZLoader }
@CLASS
class XYZLoader extends Loader {
@FILENAME
addons|loaders|lwo|IFFParser.js
@EXPORT
export { IFFParser }
@FILENAME
addons|loaders|lwo|LWO2Parser.js
@EXPORT
export { LWO2Parser }
@CLASS
class LWO2Parser {
@FILENAME
addons|loaders|lwo|LWO3Parser.js
@EXPORT
export { LWO3Parser }
@CLASS
class LWO3Parser {
@FILENAME
addons|materials|MeshGouraudMaterial.js
@EXPORT
export { MeshGouraudMaterial }
@CLASS
class MeshGouraudMaterial extends ShaderMaterial {
@FILENAME
addons|math|Capsule.js
@EXPORT
export { Capsule }
@CLASS
class Capsule {
@FILENAME
addons|math|ColorConverter.js
@EXPORT
export { ColorConverter }
@CLASS
class ColorConverter {
@FILENAME
addons|math|ConvexHull.js
@EXPORT
export { ConvexHull, Face, HalfEdge, VertexNode, VertexList }
@CLASS
class ConvexHull {
@CLASS
class Face {
@CLASS
class HalfEdge {
@CLASS
class VertexNode {
@CLASS
class VertexList {
@FILENAME
addons|math|ImprovedNoise.js
@EXPORT
export { ImprovedNoise }
@CLASS
class ImprovedNoise {
@FILENAME
addons|math|Lut.js
@EXPORT
export { Lut, ColorMapKeywords }
@CLASS
class Lut {
@FILENAME
addons|math|MeshSurfaceSampler.js
@EXPORT
export { MeshSurfaceSampler }
@CLASS
class for sampling weighted random points on the surface of a mesh.  *  * Building the sampler is a one-time O(n) operation. Once built, any number of  * random samples may be selected in O(logn) time. Memory usage is O(n).  *  * References:  * - http://www.joesfer.com/?p=84  * - https://stackoverflow.com/a/4322940/1314762  */  const _face = new Triangle(); const _color = new Vector3(); const _uva = new Vector2(), _uvb = new Vector2(), _uvc = new Vector2();  class MeshSurfaceSampler {
@CLASS
class MeshSurfaceSampler {
@FILENAME
addons|math|OBB.js
@EXPORT
export { OBB }
@CLASS
class OBB {
@FILENAME
addons|math|Octree.js
@EXPORT
export { Octree }
@CLASS
class Octree {
@FILENAME
addons|math|SimplexNoise.js
@EXPORT
export { SimplexNoise }
@CLASS
class SimplexNoise {
@FILENAME
addons|misc|ConvexObjectBreaker.js
@EXPORT
export { ConvexObjectBreaker }
@CLASS
class can be used to subdivide a convex Geometry object into pieces.  *  * Usage:  *  * Use the function prepareBreakableObject to prepare a Mesh object to be broken.  *  * Then, call the various functions to subdivide the object (subdivideByImpact, cutByPlane)  *  * Sub-objects that are product of subdivision don't need prepareBreakableObject to be called on them.  *  * Requisites for the object:  *  *  - Mesh object must have a buffer geometry and a material  *  *  - Vertex normals must be planar (not smoothed)  *  *  - The geometry must be convex (this is not checked in the library). You can create convex  *  geometries with ConvexGeometry. The BoxGeometry, SphereGeometry and other convex primitives  *  can also be used.  *  * Note: This lib adds member variables to object's userData member (see prepareBreakableObject function)  * Use with caution and read the code when using with other libs.  *  * @param {
@CLASS
class ConvexObjectBreaker {
@FILENAME
addons|misc|GPUComputationRenderer.js
@EXPORT
export { GPUComputationRenderer }
@CLASS
class GPUComputationRenderer {
@FILENAME
addons|misc|Gyroscope.js
@EXPORT
export { Gyroscope }
@CLASS
class Gyroscope extends Object3D {
@FILENAME
addons|misc|MD2Character.js
@EXPORT
export { MD2Character }
@CLASS
class MD2Character {
@FILENAME
addons|misc|MD2CharacterComplex.js
@EXPORT
export { MD2CharacterComplex }
@CLASS
class MD2CharacterComplex {
@FILENAME
addons|misc|MorphAnimMesh.js
@EXPORT
export { MorphAnimMesh }
@CLASS
class MorphAnimMesh extends Mesh {
@FILENAME
addons|misc|MorphBlendMesh.js
@EXPORT
export { MorphBlendMesh }
@CLASS
class MorphBlendMesh extends Mesh {
@FILENAME
addons|misc|ProgressiveLightMap.js
@EXPORT
export { ProgressiveLightMap }
@CLASS
class once, and then call  * |plmap.update(camera)| every frame to begin accumulating  * lighting samples.  *  * This should begin accumulating lightmaps which apply to  * your objects, so you can start jittering lighting to achieve  * the texture-space effect you're looking for.  *  * @param {
@CLASS
class ProgressiveLightMap {
@FILENAME
addons|misc|RollerCoaster.js
@EXPORT
export { RollerCoasterGeometry, RollerCoasterLiftersGeometry, RollerCoasterShadowGeometry, SkyGeometry, TreesGeometry }
@CLASS
class RollerCoasterGeometry extends BufferGeometry {
@CLASS
class RollerCoasterLiftersGeometry extends BufferGeometry {
@CLASS
class RollerCoasterShadowGeometry extends BufferGeometry {
@CLASS
class SkyGeometry extends BufferGeometry {
@CLASS
class TreesGeometry extends BufferGeometry {
@FILENAME
addons|misc|TubePainter.js
@EXPORT
export { TubePainter }
@FILENAME
addons|misc|Volume.js
@EXPORT
export { Volume }
@CLASS
class had been written to handle the output of the NRRD loader.  * It contains a volume of data and informations about it.  * For now it only handles 3 dimensional data.  * See the webgl_loader_nrrd.html example and the loaderNRRD.js file to see how to use this class.  * @class  * @param   {
@CLASS
class.  * @class  * @param   {
@CLASS
class  * @param   {
@CLASS
class Volume {
@FILENAME
addons|misc|VolumeSlice.js
@EXPORT
export { VolumeSlice }
@CLASS
class has been made to hold a slice of a volume data  * @class  * @param   {
@CLASS
class  * @param   {
@CLASS
class VolumeSlice {
@FILENAME
addons|modifiers|CurveModifier.js
@EXPORT
export function initSplineTexture( numberOfCurves = 1 ) {  	const dataArray = new Float32Array( TEXTURE_WIDTH * TEXTURE_HEIGHT * numberOfCurves * CHANNELS ); 	const dataTexture = new DataTexture( 		dataArray, 		TEXTURE_WIDTH, 		TEXTURE_HEIGHT * numberOfCurves, 		RGBAFormat, 		FloatType 	);  	dataTexture.wrapS = RepeatWrapping; 	dataTexture.wrapY = RepeatWrapping; 	dataTexture.magFilter = NearestFilter; 	dataTexture.needsUpdate = true;  	return dataTexture;  }
@EXPORT
export function updateSplineTexture( texture, splineCurve, offset = 0 ) {  	const numberOfPoints = Math.floor( TEXTURE_WIDTH * ( TEXTURE_HEIGHT / 4 ) ); 	splineCurve.arcLengthDivisions = numberOfPoints / 2; 	splineCurve.updateArcLengths(); 	const points = splineCurve.getSpacedPoints( numberOfPoints ); 	const frenetFrames = splineCurve.computeFrenetFrames( numberOfPoints, true );  	for ( let i = 0; i < numberOfPoints; i ++ ) {  		const rowOffset = Math.floor( i / TEXTURE_WIDTH ); 		const rowIndex = i % TEXTURE_WIDTH;  		let pt = points[ i ]; 		setTextureValue( texture, rowIndex, pt.x, pt.y, pt.z, 0 + rowOffset + ( TEXTURE_HEIGHT * offset ) ); 		pt = frenetFrames.tangents[ i ]; 		setTextureValue( texture, rowIndex, pt.x, pt.y, pt.z, 1 + rowOffset + ( TEXTURE_HEIGHT * offset ) ); 		pt = frenetFrames.normals[ i ]; 		setTextureValue( texture, rowIndex, pt.x, pt.y, pt.z, 2 + rowOffset + ( TEXTURE_HEIGHT * offset ) ); 		pt = frenetFrames.binormals[ i ]; 		setTextureValue( texture, rowIndex, pt.x, pt.y, pt.z, 3 + rowOffset + ( TEXTURE_HEIGHT * offset ) );  	}
@EXPORT
export function getUniforms( splineTexture ) {  	const uniforms = { 		spineTexture: { value: splineTexture }
@EXPORT
export function modifyShader( material, uniforms, numberOfCurves = 1 ) {  	if ( material.__ok ) return; 	material.__ok = true;  	material.onBeforeCompile = ( shader ) => {  		if ( shader.__modified ) return; 		shader.__modified = true;  		Object.assign( shader.uniforms, uniforms );  		const vertexShader = | 		uniform sampler2D spineTexture; 		uniform float pathOffset; 		uniform float pathSegment; 		uniform float spineOffset; 		uniform float spineLength; 		uniform int flow;  		float textureLayers = |TEXTURE_HEIGHT * numberOfCurves}
@EXPORT
export class Flow {  	/** 	 * @param {Mesh}
@EXPORT
export class InstancedFlow extends Flow {  	/** 	 * 	 * @param {number}
@CLASS
class for making meshes bend aroudn curves  */ export class Flow {
@CLASS
class Flow {
@CLASS
class for creating instanced versions of flow, where the instances are placed on the curve.  */ export class InstancedFlow extends Flow {
@CLASS
class InstancedFlow extends Flow {
@FILENAME
addons|modifiers|EdgeSplitModifier.js
@EXPORT
export { EdgeSplitModifier }
@CLASS
class EdgeSplitModifier {
@FILENAME
addons|modifiers|SimplifyModifier.js
@EXPORT
export { SimplifyModifier }
@CLASS
class SimplifyModifier {
@CLASS
class to represent structure of face slightly differently  class Triangle {
@CLASS
class Triangle {
@CLASS
class Vertex {
@FILENAME
addons|modifiers|TessellateModifier.js
@EXPORT
export { TessellateModifier }
@CLASS
class TessellateModifier {
@FILENAME
addons|nodes|Nodes.js
@EXPORT
export { default as SomeNode, other, exports }
@EXPORT
exports }
@EXPORT
export * from '...'" if we will use only named exports // this will also solve issues like "import TempNode from '../core/Node.js'"  // constants export * from './core/constants.js';  // core export { default as ArrayUniformNode /* @TODO: arrayUniform */ }
@EXPORT
exports // this will also solve issues like "import TempNode from '../core/Node.js'"  // constants export * from './core/constants.js';  // core export { default as ArrayUniformNode /* @TODO: arrayUniform */ }
@EXPORT
export * from './core/constants.js';  // core export { default as ArrayUniformNode /* @TODO: arrayUniform */ }
@EXPORT
export { default as ArrayUniformNode /* @TODO: arrayUniform */ }
@EXPORT
export { default as AttributeNode, attribute }
@EXPORT
export { default as BypassNode, bypass }
@EXPORT
export { default as CacheNode, cache }
@EXPORT
export { default as ConstNode }
@EXPORT
export { default as ContextNode, context, label }
@EXPORT
export { default as IndexNode, vertexIndex, instanceIndex }
@EXPORT
export { default as LightingModel }
@EXPORT
export { default as Node, addNodeClass, createNodeFromType }
@EXPORT
export { default as NodeAttribute }
@EXPORT
export { default as NodeBuilder }
@EXPORT
export { default as NodeCache }
@EXPORT
export { default as NodeCode }
@EXPORT
export { default as NodeFrame }
@EXPORT
export { default as NodeFunctionInput }
@EXPORT
export { default as NodeKeywords }
@EXPORT
export { default as NodeUniform }
@EXPORT
export { default as NodeVar }
@EXPORT
export { default as NodeVarying }
@EXPORT
export { default as PropertyNode, property, output, diffuseColor, roughness, metalness, specularColor, shininess }
@EXPORT
export { default as StackNode, stack }
@EXPORT
export { default as TempNode }
@EXPORT
export { default as UniformNode, uniform }
@EXPORT
export { default as VarNode, temp }
@EXPORT
export { default as VaryingNode, varying }
@EXPORT
export { default as OutputStructNode, outputStruct }
@EXPORT
export { NodeUtils }
@EXPORT
export { default as MathNode, EPSILON, INFINITY, radians, degrees, exp, exp2, log, log2, sqrt, inverseSqrt, floor, ceil, normalize, fract, sin, cos, tan, asin, acos, atan, abs, sign, length, negate, oneMinus, dFdx, dFdy, round, reciprocal, trunc, fwidth, atan2, min, max, mod, step, reflect, distance, difference, dot, cross, pow, pow2, pow3, pow4, transformDirection, mix, clamp, saturate, refract, smoothstep, faceForward }
@EXPORT
export { default as OperatorNode, add, sub, mul, div, remainder, equal, assign, lessThan, greaterThan, lessThanEqual, greaterThanEqual, and, or, xor, bitAnd, bitOr, bitXor, shiftLeft, shiftRight }
@EXPORT
export { default as CondNode, cond }
@EXPORT
export { default as HashNode, hash }
@EXPORT
export { default as ArrayElementNode }
@EXPORT
export { default as ConvertNode }
@EXPORT
export { default as DiscardNode, discard }
@EXPORT
export { default as EquirectUVNode, equirectUV }
@EXPORT
export { default as JoinNode }
@EXPORT
export { default as LoopNode, loop }
@EXPORT
export { default as MatcapUVNode, matcapUV }
@EXPORT
export { default as MaxMipLevelNode, maxMipLevel }
@EXPORT
export { default as OscNode, oscSine, oscSquare, oscTriangle, oscSawtooth }
@EXPORT
export { default as PackingNode, directionToColor, colorToDirection }
@EXPORT
export { default as RemapNode, remap, remapClamp }
@EXPORT
export { default as RotateUVNode, rotateUV }
@EXPORT
export { default as SpecularMIPLevelNode, specularMIPLevel }
@EXPORT
export { default as SplitNode }
@EXPORT
export { default as SpriteSheetUVNode, spritesheetUV }
@EXPORT
export { default as TimerNode, timerLocal, timerGlobal, timerDelta, frameId }
@EXPORT
export { default as TriplanarTexturesNode, triplanarTextures, triplanarTexture }
@EXPORT
export * from './shadernode/ShaderNode.js';  // accessors export { default as BitangentNode, bitangentGeometry, bitangentLocal, bitangentView, bitangentWorld, transformedBitangentView, transformedBitangentWorld }
@EXPORT
export { default as BitangentNode, bitangentGeometry, bitangentLocal, bitangentView, bitangentWorld, transformedBitangentView, transformedBitangentWorld }
@EXPORT
export { default as BufferAttributeNode, bufferAttribute, dynamicBufferAttribute, instancedBufferAttribute, instancedDynamicBufferAttribute }
@EXPORT
export { default as BufferNode, buffer }
@EXPORT
export { default as CameraNode, cameraProjectionMatrix, cameraViewMatrix, cameraNormalMatrix, cameraWorldMatrix, cameraPosition, cameraNear, cameraFar }
@EXPORT
export { default as CubeTextureNode, cubeTexture }
@EXPORT
export { default as ExtendedMaterialNode, materialNormal }
@EXPORT
export { default as InstanceNode, instance }
@EXPORT
export { default as MaterialNode, materialAlphaTest, materialColor, materialShininess, materialEmissive, materialOpacity, materialSpecularColor, materialReflectivity, materialRoughness, materialMetalness, materialRotation, materialSheen, materialSheenRoughness }
@EXPORT
export { default as MaterialReferenceNode, materialReference }
@EXPORT
export { default as MorphNode, morph }
@EXPORT
export { default as TextureBicubicNode, textureBicubic }
@EXPORT
export { default as ModelNode, modelDirection, modelViewMatrix, modelNormalMatrix, modelWorldMatrix, modelPosition, modelViewPosition, modelScale }
@EXPORT
export { default as ModelViewProjectionNode, modelViewProjection }
@EXPORT
export { default as NormalNode, normalGeometry, normalLocal, normalView, normalWorld, transformedNormalView, transformedNormalWorld, transformedClearcoatNormalView }
@EXPORT
export { default as Object3DNode, objectDirection, objectViewMatrix, objectNormalMatrix, objectWorldMatrix, objectPosition, objectScale, objectViewPosition }
@EXPORT
export { default as PointUVNode, pointUV }
@EXPORT
export { default as PositionNode, positionGeometry, positionLocal, positionWorld, positionWorldDirection, positionView, positionViewDirection }
@EXPORT
export { default as ReferenceNode, reference }
@EXPORT
export { default as ReflectVectorNode, reflectVector }
@EXPORT
export { default as SkinningNode, skinning }
@EXPORT
export { default as SceneNode, backgroundBlurriness, backgroundIntensity }
@EXPORT
export { default as StorageBufferNode, storage }
@EXPORT
export { default as TangentNode, tangentGeometry, tangentLocal, tangentView, tangentWorld, transformedTangentView, transformedTangentWorld }
@EXPORT
export { default as TextureNode, texture, /*textureLevel,*/ sampler }
@EXPORT
export { default as TextureStoreNode, textureStore }
@EXPORT
export { default as UVNode, uv }
@EXPORT
export { default as UserDataNode, userData }
@EXPORT
export { default as BlendModeNode, burn, dodge, overlay, screen }
@EXPORT
export { default as ColorAdjustmentNode, saturation, vibrance, hue, lumaCoeffs, luminance }
@EXPORT
export { default as ColorSpaceNode, linearToColorSpace, colorSpaceToLinear, linearTosRGB, sRGBToLinear }
@EXPORT
export { default as FrontFacingNode, frontFacing, faceDirection }
@EXPORT
export { default as NormalMapNode, normalMap, TBNViewMatrix }
@EXPORT
export { default as PosterizeNode, posterize }
@EXPORT
export { default as ToneMappingNode, toneMapping }
@EXPORT
export { default as ViewportNode, viewportCoordinate, viewportResolution, viewportTopLeft, viewportBottomLeft, viewportTopRight, viewportBottomRight }
@EXPORT
export { default as ViewportTextureNode, viewportTexture, viewportMipTexture }
@EXPORT
export { default as ViewportSharedTextureNode, viewportSharedTexture }
@EXPORT
export { default as ViewportDepthTextureNode, viewportDepthTexture }
@EXPORT
export { default as ViewportDepthNode, viewZToOrthographicDepth, orthographicDepthToViewZ, viewZToPerspectiveDepth, perspectiveDepthToViewZ, depth, depthTexture }
@EXPORT
export { default as ExpressionNode, expression }
@EXPORT
export { default as CodeNode, code, js, wgsl, glsl }
@EXPORT
export { default as FunctionCallNode, call }
@EXPORT
export { default as FunctionNode, wgslFn, glslFn }
@EXPORT
export { default as ScriptableNode, scriptable, global }
@EXPORT
export { default as ScriptableValueNode, scriptableValue }
@EXPORT
export { default as FogNode, fog }
@EXPORT
export { default as FogRangeNode, rangeFog }
@EXPORT
export { default as FogExp2Node, densityFog }
@EXPORT
export { default as RangeNode, range }
@EXPORT
export { default as ComputeNode, compute }
@EXPORT
export { default as LightNode, lightTargetDirection }
@EXPORT
export { default as PointLightNode }
@EXPORT
export { default as DirectionalLightNode }
@EXPORT
export { default as SpotLightNode }
@EXPORT
export { default as IESSpotLightNode }
@EXPORT
export { default as AmbientLightNode }
@EXPORT
export { default as LightsNode, lights, lightsWithoutWrap, addLightNode }
@EXPORT
export { default as LightingNode /* @TODO: lighting (abstract), light */ }
@EXPORT
export { default as LightingContextNode, lightingContext }
@EXPORT
export { default as HemisphereLightNode }
@EXPORT
export { default as EnvironmentNode }
@EXPORT
export { default as AONode }
@EXPORT
export { default as AnalyticLightNode }
@EXPORT
export { default as CheckerNode, checker }
@EXPORT
export { default as NodeLoader }
@EXPORT
export { default as NodeObjectLoader }
@EXPORT
export { default as NodeMaterialLoader }
@EXPORT
export { default as GLSLNodeParser }
@EXPORT
export * from './materials/Materials.js';  // materialX export * from './materialx/MaterialXNodes.js';  // functions export { default as BRDF_GGX }
@EXPORT
export * from './materialx/MaterialXNodes.js';  // functions export { default as BRDF_GGX }
@EXPORT
export { default as BRDF_GGX }
@EXPORT
export { default as BRDF_Lambert }
@EXPORT
export { default as D_GGX }
@EXPORT
export { default as DFGApprox }
@EXPORT
export { default as F_Schlick }
@EXPORT
export { default as V_GGX_SmithCorrelated }
@EXPORT
export { getDistanceAttenuation }
@EXPORT
export { default as getGeometryRoughness }
@EXPORT
export { default as getRoughness }
@EXPORT
export { default as PhongLightingModel }
@EXPORT
export { default as PhysicalLightingModel }
@CLASS
Class, createNodeFromType } from './core/Node.js'; export {
@FILENAME
addons|nodes|accessors|BitangentNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class BitangentNode extends Node {
@FILENAME
addons|nodes|accessors|BufferAttributeNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class BufferAttributeNode extends InputNode {
@FILENAME
addons|nodes|accessors|BufferNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class BufferNode extends UniformNode {
@FILENAME
addons|nodes|accessors|CameraNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class CameraNode extends Object3DNode {
@FILENAME
addons|nodes|accessors|CubeTextureNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class CubeTextureNode extends TextureNode {
@FILENAME
addons|nodes|accessors|ExtendedMaterialNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ExtendedMaterialNode extends MaterialNode {
@FILENAME
addons|nodes|accessors|InstanceNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class InstanceNode extends Node {
@FILENAME
addons|nodes|accessors|LineMaterialNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class LineMaterialNode extends MaterialNode {
@FILENAME
addons|nodes|accessors|MaterialNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class MaterialNode extends Node {
@FILENAME
addons|nodes|accessors|MaterialReferenceNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class MaterialReferenceNode extends ReferenceNode {
@FILENAME
addons|nodes|accessors|ModelNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ModelNode extends Object3DNode {
@FILENAME
addons|nodes|accessors|ModelViewProjectionNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ModelViewProjectionNode extends Node {
@FILENAME
addons|nodes|accessors|MorphNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class MorphNode extends Node {
@FILENAME
addons|nodes|accessors|NormalNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class NormalNode extends Node {
@FILENAME
addons|nodes|accessors|Object3DNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class Object3DNode extends Node {
@FILENAME
addons|nodes|accessors|PointUVNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class PointUVNode extends Node {
@FILENAME
addons|nodes|accessors|PositionNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class PositionNode extends Node {
@FILENAME
addons|nodes|accessors|ReferenceNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ReferenceNode extends Node {
@FILENAME
addons|nodes|accessors|ReflectVectorNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ReflectVectorNode extends Node {
@FILENAME
addons|nodes|accessors|SceneNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class SceneNode extends Node {
@FILENAME
addons|nodes|accessors|SkinningNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class SkinningNode extends Node {
@FILENAME
addons|nodes|accessors|StorageBufferNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class StorageBufferNode extends BufferNode {
@FILENAME
addons|nodes|accessors|TangentNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class TangentNode extends Node {
@FILENAME
addons|nodes|accessors|TextureBicubicNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class TextureBicubicNode extends TempNode {
@FILENAME
addons|nodes|accessors|TextureNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class TextureNode extends UniformNode {
@FILENAME
addons|nodes|accessors|TextureSizeNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class TextureSizeNode extends Node {
@FILENAME
addons|nodes|accessors|TextureStoreNode.js
@CLASS
Class } from '../core/Node.js'; import TextureNode from './TextureNode.js'; import {
@CLASS
class TextureStoreNode extends TextureNode {
@FILENAME
addons|nodes|accessors|UserDataNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class UserDataNode extends ReferenceNode {
@FILENAME
addons|nodes|accessors|UVNode.js
@CLASS
Class } from '../core/Node.js'; import AttributeNode from '../core/AttributeNode.js'; import {
@CLASS
class UVNode extends AttributeNode {
@FILENAME
addons|nodes|code|CodeNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class CodeNode extends Node {
@FILENAME
addons|nodes|code|ExpressionNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ExpressionNode extends Node {
@FILENAME
addons|nodes|code|FunctionCallNode.js
@EXPORT
export default FunctionCallNode;  export const call = ( func, ...params ) => {  	params = params.length > 1 || ( params[ 0 ] && params[ 0 ].isNode === true ) ? nodeArray( params ) : nodeObjects( params[ 0 ] );  	return nodeObject( new FunctionCallNode( nodeObject( func ), params ) );  }
@EXPORT
export const call = ( func, ...params ) => {  	params = params.length > 1 || ( params[ 0 ] && params[ 0 ].isNode === true ) ? nodeArray( params ) : nodeObjects( params[ 0 ] );  	return nodeObject( new FunctionCallNode( nodeObject( func ), params ) );  }
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class FunctionCallNode extends TempNode {
@FILENAME
addons|nodes|code|FunctionNode.js
@EXPORT
export default FunctionNode;  const nativeFn = ( code, includes, language = '' ) => {  	let functionNode = null;  	return ( ...params ) => {  		if ( functionNode === null ) functionNode = nodeObject( new FunctionNode( code, includes, language ) );  		return functionNode.call( ...params );  	}
@EXPORT
export const glslFn = ( code, includes ) => nativeFn( code, includes, 'glsl' ); export const wgslFn = ( code, includes ) => nativeFn( code, includes, 'wgsl' );  export const func = ( code, includes ) => { // @deprecated, r154  	console.warn( 'TSL: func() is deprecated. Use nativeFn(), wgslFn() or glslFn() instead.' );  	return nodeObject( new FunctionNode( code, includes ) );  }
@EXPORT
export const wgslFn = ( code, includes ) => nativeFn( code, includes, 'wgsl' );  export const func = ( code, includes ) => { // @deprecated, r154  	console.warn( 'TSL: func() is deprecated. Use nativeFn(), wgslFn() or glslFn() instead.' );  	return nodeObject( new FunctionNode( code, includes ) );  }
@EXPORT
export const func = ( code, includes ) => { // @deprecated, r154  	console.warn( 'TSL: func() is deprecated. Use nativeFn(), wgslFn() or glslFn() instead.' );  	return nodeObject( new FunctionNode( code, includes ) );  }
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class FunctionNode extends CodeNode {
@FILENAME
addons|nodes|code|ScriptableNode.js
@EXPORT
export const global = new Resources();  class ScriptableNode extends Node {  	constructor( codeNode = null, parameters = {}
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class Resources extends Map {
@CLASS
class Parameters {
@CLASS
class ScriptableNode extends Node {
@FILENAME
addons|nodes|code|ScriptableValueNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ScriptableValueNode extends Node {
@FILENAME
addons|nodes|core|ArrayUniformNode.js
@CLASS
Class } from './Node.js';  class ArrayUniformNode extends UniformNode {
@CLASS
class ArrayUniformNode extends UniformNode {
@FILENAME
addons|nodes|core|AttributeNode.js
@CLASS
Class } from './Node.js'; import {
@CLASS
class AttributeNode extends Node {
@FILENAME
addons|nodes|core|BypassNode.js
@CLASS
Class } from './Node.js'; import {
@CLASS
class BypassNode extends Node {
@FILENAME
addons|nodes|core|CacheNode.js
@CLASS
Class } from './Node.js'; import NodeCache from './NodeCache.js'; import {
@CLASS
class CacheNode extends Node {
@FILENAME
addons|nodes|core|constants.js
@EXPORT
export const NodeShaderStage = { 	VERTEX: 'vertex', 	FRAGMENT: 'fragment' }
@EXPORT
export const NodeUpdateType = { 	NONE: 'none', 	FRAME: 'frame', 	RENDER: 'render', 	OBJECT: 'object' }
@EXPORT
export const NodeType = { 	BOOLEAN: 'bool', 	INTEGER: 'int', 	FLOAT: 'float', 	VECTOR2: 'vec2', 	VECTOR3: 'vec3', 	VECTOR4: 'vec4', 	MATRIX3: 'mat3', 	MATRIX4: 'mat4' }
@FILENAME
addons|nodes|core|ConstNode.js
@CLASS
Class } from './Node.js';  class ConstNode extends InputNode {
@CLASS
class ConstNode extends InputNode {
@FILENAME
addons|nodes|core|ContextNode.js
@EXPORT
export default ContextNode;  export const context = nodeProxy( ContextNode ); export const label = ( node, name ) => context( node, { label: name }
@EXPORT
export const context = nodeProxy( ContextNode ); export const label = ( node, name ) => context( node, { label: name }
@EXPORT
export const label = ( node, name ) => context( node, { label: name }
@CLASS
Class } from './Node.js'; import {
@CLASS
class ContextNode extends Node {
@FILENAME
addons|nodes|core|IndexNode.js
@CLASS
Class } from './Node.js'; import {
@CLASS
class IndexNode extends Node {
@FILENAME
addons|nodes|core|InputNode.js
@CLASS
Class } from './Node.js'; import {
@CLASS
class InputNode extends Node {
@FILENAME
addons|nodes|core|LightingModel.js
@CLASS
class LightingModel {
@FILENAME
addons|nodes|core|Node.js
@EXPORT
export default Node;  export function addNodeClass( nodeClass ) {  	if ( typeof nodeClass !== 'function' || ! nodeClass.name ) throw new Error( |Node class | nodeClass.name }
@EXPORT
export function addNodeClass( nodeClass ) {  	if ( typeof nodeClass !== 'function' || ! nodeClass.name ) throw new Error( |Node class | nodeClass.name }
@EXPORT
export function createNodeFromType( type ) {  	const Class = NodeClasses.get( type );  	if ( Class !== undefined ) {  		return new Class();  	}
@CLASS
Classes = new Map();  let _nodeId = 0;  class Node extends EventDispatcher {
@CLASS
class Node extends EventDispatcher {
@CLASS
Class( nodeClass ) {
@CLASS
Class ) {
@CLASS
Class !== 'function' || ! nodeClass.name ) throw new Error( |Node class | nodeClass.name } is not a class| ); 	if ( NodeClasses.has( nodeClass.name ) ) throw new Error( |Redefinition of node class | nodeClass.name }| );  	NodeClasses.set( nodeClass.name, nodeClass );  }  export function createNodeFromType( type ) {
@CLASS
Class.name ) throw new Error( |Node class | nodeClass.name } is not a class| ); 	if ( NodeClasses.has( nodeClass.name ) ) throw new Error( |Redefinition of node class | nodeClass.name }| );  	NodeClasses.set( nodeClass.name, nodeClass );  }  export function createNodeFromType( type ) {
@CLASS
class | nodeClass.name } is not a class| ); 	if ( NodeClasses.has( nodeClass.name ) ) throw new Error( |Redefinition of node class | nodeClass.name }| );  	NodeClasses.set( nodeClass.name, nodeClass );  }  export function createNodeFromType( type ) {
@CLASS
Class.name } is not a class| ); 	if ( NodeClasses.has( nodeClass.name ) ) throw new Error( |Redefinition of node class | nodeClass.name }| );  	NodeClasses.set( nodeClass.name, nodeClass );  }  export function createNodeFromType( type ) {
@CLASS
class| ); 	if ( NodeClasses.has( nodeClass.name ) ) throw new Error( |Redefinition of node class | nodeClass.name }| );  	NodeClasses.set( nodeClass.name, nodeClass );  }  export function createNodeFromType( type ) {
@CLASS
Classes.has( nodeClass.name ) ) throw new Error( |Redefinition of node class | nodeClass.name }| );  	NodeClasses.set( nodeClass.name, nodeClass );  }  export function createNodeFromType( type ) {
@CLASS
Class.name ) ) throw new Error( |Redefinition of node class | nodeClass.name }| );  	NodeClasses.set( nodeClass.name, nodeClass );  }  export function createNodeFromType( type ) {
@CLASS
class | nodeClass.name }| );  	NodeClasses.set( nodeClass.name, nodeClass );  }  export function createNodeFromType( type ) {
@CLASS
Class.name }| );  	NodeClasses.set( nodeClass.name, nodeClass );  }  export function createNodeFromType( type ) {
@CLASS
Classes.set( nodeClass.name, nodeClass );  }  export function createNodeFromType( type ) {
@CLASS
Class.name, nodeClass );  }  export function createNodeFromType( type ) {
@CLASS
Class );  }  export function createNodeFromType( type ) {
@CLASS
Class = NodeClasses.get( type );  	if ( Class !== undefined ) {
@CLASS
Classes.get( type );  	if ( Class !== undefined ) {
@CLASS
Class !== undefined ) {
@FILENAME
addons|nodes|core|NodeAttribute.js
@CLASS
class NodeAttribute {
@FILENAME
addons|nodes|core|NodeBuilder.js
@CLASS
class NodeBuilder {
@FILENAME
addons|nodes|core|NodeCache.js
@CLASS
class NodeCache {
@FILENAME
addons|nodes|core|NodeCode.js
@CLASS
class NodeCode {
@FILENAME
addons|nodes|core|NodeFrame.js
@CLASS
class NodeFrame {
@FILENAME
addons|nodes|core|NodeFunction.js
@CLASS
class NodeFunction {
@FILENAME
addons|nodes|core|NodeFunctionInput.js
@CLASS
class NodeFunctionInput {
@FILENAME
addons|nodes|core|NodeKeywords.js
@CLASS
class NodeKeywords {
@FILENAME
addons|nodes|core|NodeParser.js
@CLASS
class NodeParser {
@FILENAME
addons|nodes|core|NodeUniform.js
@CLASS
class NodeUniform {
@FILENAME
addons|nodes|core|NodeUtils.js
@EXPORT
export function getCacheKey( object ) {  	let cacheKey = '{';  	if ( object.isNode === true ) {  		cacheKey += |uuid:"| object.uuid }
@EXPORT
export function* getNodeChildren( node, toJSON = false ) {  	for ( const property in node ) {  		// Ignore private properties. 		if ( property.startsWith( '_' ) === true ) continue;  		const object = node[ property ];  		if ( Array.isArray( object ) === true ) {  			for ( let i = 0; i < object.length; i ++ ) {  				const child = object[ i ];  				if ( child && ( child.isNode === true || toJSON && typeof child.toJSON === 'function' ) ) {  					yield { property, index: i, childNode: child }
@EXPORT
export function getValueType( value ) {  	if ( value === undefined || value === null ) return null;  	const typeOf = typeof value;  	if ( value.isNode === true ) {  		return 'node';  	}
@EXPORT
export function getValueFromType( type, ...params ) {  	const last4 = type ? type.slice( - 4 ) : undefined;  	if ( ( last4 === 'vec2' || last4 === 'vec3' || last4 === 'vec4' ) && params.length === 1 ) { // ensure same behaviour as in NodeBuilder.format()  		params = last4 === 'vec2' ? [ params[ 0 ], params[ 0 ] ] : [ params[ 0 ], params[ 0 ], params[ 0 ] ];  	}
@EXPORT
export function arrayBufferToBase64( arrayBuffer ) {  	let chars = '';  	const array = new Uint8Array( arrayBuffer );  	for ( let i = 0; i < array.length; i ++ ) {  		chars += String.fromCharCode( array[ i ] );  	}
@EXPORT
export function base64ToArrayBuffer( base64 ) {  	return Uint8Array.from( atob( base64 ), c => c.charCodeAt( 0 ) ).buffer;  }
@FILENAME
addons|nodes|core|NodeVar.js
@CLASS
class NodeVar {
@FILENAME
addons|nodes|core|NodeVarying.js
@CLASS
class NodeVarying extends NodeVar {
@FILENAME
addons|nodes|core|OutputStructNode.js
@CLASS
Class } from './Node.js'; import StructTypeNode from './StructTypeNode.js'; import {
@CLASS
class OutputStructNode extends Node {
@FILENAME
addons|nodes|core|PropertyNode.js
@CLASS
Class } from './Node.js'; import {
@CLASS
class PropertyNode extends Node {
@FILENAME
addons|nodes|core|StackNode.js
@CLASS
Class } from './Node.js'; import {
@CLASS
class StackNode extends Node {
@FILENAME
addons|nodes|core|StructTypeNode.js
@CLASS
Class } from './Node.js';  class StructTypeNode extends Node {
@CLASS
class StructTypeNode extends Node {
@FILENAME
addons|nodes|core|TempNode.js
@CLASS
Class } from './Node.js';  class TempNode extends Node {
@CLASS
class TempNode extends Node {
@FILENAME
addons|nodes|core|UniformNode.js
@EXPORT
export default UniformNode;  export const uniform = ( arg1, arg2 ) => {  	const nodeType = getConstNodeType( arg2 || arg1 );  	// @TODO: get ConstNode from .traverse() in the future 	const value = ( arg1 && arg1.isNode === true ) ? ( arg1.node && arg1.node.value ) || arg1.value : arg1;  	return nodeObject( new UniformNode( value, nodeType ) );  }
@EXPORT
export const uniform = ( arg1, arg2 ) => {  	const nodeType = getConstNodeType( arg2 || arg1 );  	// @TODO: get ConstNode from .traverse() in the future 	const value = ( arg1 && arg1.isNode === true ) ? ( arg1.node && arg1.node.value ) || arg1.value : arg1;  	return nodeObject( new UniformNode( value, nodeType ) );  }
@CLASS
Class } from './Node.js'; import {
@CLASS
class UniformNode extends InputNode {
@FILENAME
addons|nodes|core|VarNode.js
@CLASS
Class } from './Node.js'; import {
@CLASS
class VarNode extends Node {
@FILENAME
addons|nodes|core|VaryingNode.js
@CLASS
Class } from './Node.js'; import {
@CLASS
class VaryingNode extends Node {
@FILENAME
addons|nodes|display|BlendModeNode.js
@EXPORT
export const BurnNode = tslFn( ( { base, blend }
@EXPORT
export const DodgeNode = tslFn( ( { base, blend }
@EXPORT
export const ScreenNode = tslFn( ( { base, blend }
@EXPORT
export const OverlayNode = tslFn( ( { base, blend }
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class BlendModeNode extends TempNode {
@FILENAME
addons|nodes|display|BumpMapNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class BumpMapNode extends TempNode {
@FILENAME
addons|nodes|display|ColorAdjustmentNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ColorAdjustmentNode extends TempNode {
@FILENAME
addons|nodes|display|ColorSpaceNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ColorSpaceNode extends TempNode {
@FILENAME
addons|nodes|display|FrontFacingNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class FrontFacingNode extends Node {
@FILENAME
addons|nodes|display|NormalMapNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class NormalMapNode extends TempNode {
@FILENAME
addons|nodes|display|PosterizeNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class PosterizeNode extends TempNode {
@FILENAME
addons|nodes|display|ToneMappingNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ToneMappingNode extends TempNode {
@FILENAME
addons|nodes|display|ViewportDepthNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ViewportDepthNode extends Node {
@FILENAME
addons|nodes|display|ViewportDepthTextureNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ViewportDepthTextureNode extends ViewportTextureNode {
@FILENAME
addons|nodes|display|ViewportNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ViewportNode extends Node {
@FILENAME
addons|nodes|display|ViewportSharedTextureNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ViewportSharedTextureNode extends ViewportTextureNode {
@FILENAME
addons|nodes|display|ViewportTextureNode.js
@EXPORT
export default ViewportTextureNode;  export const viewportTexture = nodeProxy( ViewportTextureNode ); export const viewportMipTexture = nodeProxy( ViewportTextureNode, null, null, { generateMipmaps: true }
@EXPORT
export const viewportTexture = nodeProxy( ViewportTextureNode ); export const viewportMipTexture = nodeProxy( ViewportTextureNode, null, null, { generateMipmaps: true }
@EXPORT
export const viewportMipTexture = nodeProxy( ViewportTextureNode, null, null, { generateMipmaps: true }
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ViewportTextureNode extends TextureNode {
@FILENAME
addons|nodes|fog|FogExp2Node.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class FogExp2Node extends FogNode {
@FILENAME
addons|nodes|fog|FogNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class FogNode extends Node {
@FILENAME
addons|nodes|fog|FogRangeNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class FogRangeNode extends FogNode {
@FILENAME
addons|nodes|functions|PhongLightingModel.js
@CLASS
class PhongLightingModel extends LightingModel {
@FILENAME
addons|nodes|functions|PhysicalLightingModel.js
@CLASS
class PhysicalLightingModel extends LightingModel {
@FILENAME
addons|nodes|functions|BSDF|BRDF_GGX.js
@FILENAME
addons|nodes|functions|BSDF|BRDF_Lambert.js
@FILENAME
addons|nodes|functions|BSDF|BRDF_Sheen.js
@FILENAME
addons|nodes|functions|BSDF|DFGApprox.js
@FILENAME
addons|nodes|functions|BSDF|D_GGX.js
@FILENAME
addons|nodes|functions|BSDF|EnvironmentBRDF.js
@FILENAME
addons|nodes|functions|BSDF|F_Schlick.js
@FILENAME
addons|nodes|functions|BSDF|Schlick_to_F0.js
@FILENAME
addons|nodes|functions|BSDF|V_GGX_SmithCorrelated.js
@FILENAME
addons|nodes|functions|material|getGeometryRoughness.js
@FILENAME
addons|nodes|functions|material|getRoughness.js
@FILENAME
addons|nodes|geometry|RangeNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class RangeNode extends Node {
@FILENAME
addons|nodes|gpgpu|ComputeNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class ComputeNode extends Node {
@FILENAME
addons|nodes|lighting|AmbientLightNode.js
@CLASS
Class } from '../core/Node.js';  import {
@CLASS
class AmbientLightNode extends AnalyticLightNode {
@FILENAME
addons|nodes|lighting|AnalyticLightNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class AnalyticLightNode extends LightingNode {
@FILENAME
addons|nodes|lighting|AONode.js
@CLASS
Class } from '../core/Node.js';  class AONode extends LightingNode {
@CLASS
class AONode extends LightingNode {
@FILENAME
addons|nodes|lighting|DirectionalLightNode.js
@CLASS
Class } from '../core/Node.js';  import {
@CLASS
class DirectionalLightNode extends AnalyticLightNode {
@FILENAME
addons|nodes|lighting|EnvironmentNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class EnvironmentNode extends LightingNode {
@FILENAME
addons|nodes|lighting|HemisphereLightNode.js
@CLASS
Class } from '../core/Node.js';  import {
@CLASS
class HemisphereLightNode extends AnalyticLightNode {
@FILENAME
addons|nodes|lighting|IESSpotLightNode.js
@CLASS
Class } from '../core/Node.js';  import IESSpotLight from '../../lights/IESSpotLight.js';  class IESSpotLightNode extends SpotLightNode {
@CLASS
class IESSpotLightNode extends SpotLightNode {
@FILENAME
addons|nodes|lighting|LightingContextNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class LightingContextNode extends ContextNode {
@FILENAME
addons|nodes|lighting|LightingNode.js
@CLASS
Class } from '../core/Node.js';  class LightingNode extends Node {
@CLASS
class LightingNode extends Node {
@FILENAME
addons|nodes|lighting|LightNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class LightNode extends Node {
@FILENAME
addons|nodes|lighting|LightsNode.js
@EXPORT
export default LightsNode;  export const lights = ( lights ) => nodeObject( new LightsNode().fromLights( lights ) ); export const lightsWithoutWrap = nodeProxy( LightsNode );  export function addLightNode( lightClass, lightNodeClass ) {  	if ( LightNodes.has( lightClass ) ) throw new Error( |Redefinition of light node | lightNodeClass.name }
@EXPORT
export const lights = ( lights ) => nodeObject( new LightsNode().fromLights( lights ) ); export const lightsWithoutWrap = nodeProxy( LightsNode );  export function addLightNode( lightClass, lightNodeClass ) {  	if ( LightNodes.has( lightClass ) ) throw new Error( |Redefinition of light node | lightNodeClass.name }
@EXPORT
export const lightsWithoutWrap = nodeProxy( LightsNode );  export function addLightNode( lightClass, lightNodeClass ) {  	if ( LightNodes.has( lightClass ) ) throw new Error( |Redefinition of light node | lightNodeClass.name }
@EXPORT
export function addLightNode( lightClass, lightNodeClass ) {  	if ( LightNodes.has( lightClass ) ) throw new Error( |Redefinition of light node | lightNodeClass.name }
@CLASS
class LightsNode extends Node {
@CLASS
Class = light.constructor; 				const lightNodeClass = LightNodes.has( lightClass ) ? LightNodes.get( lightClass ) : AnalyticLightNode;  				lightNode = nodeObject( new lightNodeClass( light ) );  			}  			lightNodes.push( lightNode );  		}  		this.lightNodes = lightNodes; 		this._hash = null;  		return this;  	}  }  export default LightsNode;  export const lights = ( lights ) => nodeObject( new LightsNode().fromLights( lights ) ); export const lightsWithoutWrap = nodeProxy( LightsNode );  export function addLightNode( lightClass, lightNodeClass ) {
@CLASS
Class = LightNodes.has( lightClass ) ? LightNodes.get( lightClass ) : AnalyticLightNode;  				lightNode = nodeObject( new lightNodeClass( light ) );  			}  			lightNodes.push( lightNode );  		}  		this.lightNodes = lightNodes; 		this._hash = null;  		return this;  	}  }  export default LightsNode;  export const lights = ( lights ) => nodeObject( new LightsNode().fromLights( lights ) ); export const lightsWithoutWrap = nodeProxy( LightsNode );  export function addLightNode( lightClass, lightNodeClass ) {
@CLASS
Class ) ? LightNodes.get( lightClass ) : AnalyticLightNode;  				lightNode = nodeObject( new lightNodeClass( light ) );  			}  			lightNodes.push( lightNode );  		}  		this.lightNodes = lightNodes; 		this._hash = null;  		return this;  	}  }  export default LightsNode;  export const lights = ( lights ) => nodeObject( new LightsNode().fromLights( lights ) ); export const lightsWithoutWrap = nodeProxy( LightsNode );  export function addLightNode( lightClass, lightNodeClass ) {
@CLASS
Class ) : AnalyticLightNode;  				lightNode = nodeObject( new lightNodeClass( light ) );  			}  			lightNodes.push( lightNode );  		}  		this.lightNodes = lightNodes; 		this._hash = null;  		return this;  	}  }  export default LightsNode;  export const lights = ( lights ) => nodeObject( new LightsNode().fromLights( lights ) ); export const lightsWithoutWrap = nodeProxy( LightsNode );  export function addLightNode( lightClass, lightNodeClass ) {
@CLASS
Class( light ) );  			}  			lightNodes.push( lightNode );  		}  		this.lightNodes = lightNodes; 		this._hash = null;  		return this;  	}  }  export default LightsNode;  export const lights = ( lights ) => nodeObject( new LightsNode().fromLights( lights ) ); export const lightsWithoutWrap = nodeProxy( LightsNode );  export function addLightNode( lightClass, lightNodeClass ) {
@CLASS
Class, lightNodeClass ) {
@CLASS
Class ) {
@FILENAME
addons|nodes|lighting|LightUtils.js
@EXPORT
export const getDistanceAttenuation = tslFn( ( inputs ) => {  	const { lightDistance, cutoffDistance, decayExponent }
@FILENAME
addons|nodes|lighting|PointLightNode.js
@CLASS
Class } from '../core/Node.js';  import {
@CLASS
class PointLightNode extends AnalyticLightNode {
@FILENAME
addons|nodes|lighting|SpotLightNode.js
@CLASS
Class } from '../core/Node.js';  import {
@CLASS
class SpotLightNode extends AnalyticLightNode {
@FILENAME
addons|nodes|loaders|NodeLoader.js
@CLASS
class NodeLoader extends Loader {
@FILENAME
addons|nodes|loaders|NodeMaterialLoader.js
@CLASS
class NodeMaterialLoader extends MaterialLoader {
@FILENAME
addons|nodes|loaders|NodeObjectLoader.js
@CLASS
class NodeObjectLoader extends ObjectLoader {
@FILENAME
addons|nodes|materials|LineBasicNodeMaterial.js
@CLASS
class LineBasicNodeMaterial extends NodeMaterial {
@FILENAME
addons|nodes|materials|LineDashedNodeMaterial.js
@CLASS
class LineDashedNodeMaterial extends NodeMaterial {
@FILENAME
addons|nodes|materials|Materials.js
@EXPORT
export { default as SomeNode, other, exports }
@EXPORT
exports }
@EXPORT
export * from '...'" if we will use only named exports  export { default as NodeMaterial, addNodeMaterial, createNodeMaterialFromType }
@EXPORT
exports  export { default as NodeMaterial, addNodeMaterial, createNodeMaterialFromType }
@EXPORT
export { default as NodeMaterial, addNodeMaterial, createNodeMaterialFromType }
@EXPORT
export { default as LineBasicNodeMaterial }
@EXPORT
export { default as LineDashedNodeMaterial }
@EXPORT
export { default as MeshNormalNodeMaterial }
@EXPORT
export { default as MeshBasicNodeMaterial }
@EXPORT
export { default as MeshLambertNodeMaterial }
@EXPORT
export { default as MeshPhongNodeMaterial }
@EXPORT
export { default as MeshStandardNodeMaterial }
@EXPORT
export { default as MeshPhysicalNodeMaterial }
@EXPORT
export { default as PointsNodeMaterial }
@EXPORT
export { default as SpriteNodeMaterial }
@FILENAME
addons|nodes|materials|MeshBasicNodeMaterial.js
@CLASS
class MeshBasicNodeMaterial extends NodeMaterial {
@FILENAME
addons|nodes|materials|MeshLambertNodeMaterial.js
@CLASS
class MeshLambertNodeMaterial extends NodeMaterial {
@FILENAME
addons|nodes|materials|MeshNormalNodeMaterial.js
@CLASS
class MeshNormalNodeMaterial extends NodeMaterial {
@FILENAME
addons|nodes|materials|MeshPhongNodeMaterial.js
@CLASS
class MeshPhongNodeMaterial extends NodeMaterial {
@FILENAME
addons|nodes|materials|MeshPhysicalNodeMaterial.js
@CLASS
class MeshPhysicalNodeMaterial extends MeshStandardNodeMaterial {
@FILENAME
addons|nodes|materials|MeshStandardNodeMaterial.js
@CLASS
class MeshStandardNodeMaterial extends NodeMaterial {
@FILENAME
addons|nodes|materials|NodeMaterial.js
@EXPORT
export default NodeMaterial;  export function addNodeMaterial( nodeMaterial ) {  	if ( typeof nodeMaterial !== 'function' || ! nodeMaterial.name ) throw new Error( |Node material | nodeMaterial.name }
@EXPORT
export function addNodeMaterial( nodeMaterial ) {  	if ( typeof nodeMaterial !== 'function' || ! nodeMaterial.name ) throw new Error( |Node material | nodeMaterial.name }
@EXPORT
export function createNodeMaterialFromType( type ) {  	const Material = NodeMaterials.get( type );  	if ( Material !== undefined ) {  		return new Material();  	}
@CLASS
class NodeMaterial extends ShaderMaterial {
@CLASS
class| ); 	if ( NodeMaterials.has( nodeMaterial.name ) ) throw new Error( |Redefinition of node material | nodeMaterial.name }| );  	NodeMaterials.set( nodeMaterial.name, nodeMaterial );  }  export function createNodeMaterialFromType( type ) {
@FILENAME
addons|nodes|materials|PointsNodeMaterial.js
@CLASS
class PointsNodeMaterial extends NodeMaterial {
@FILENAME
addons|nodes|materials|SpriteNodeMaterial.js
@CLASS
class SpriteNodeMaterial extends NodeMaterial {
@FILENAME
addons|nodes|materialx|MaterialXNodes.js
@EXPORT
export const mx_aastep = ( threshold, value ) => {  	threshold = float( threshold ); 	value = float( value );  	const afwidth = vec2( value.dFdx(), value.dFdy() ).length().mul( 0.70710678118654757 );  	return smoothstep( threshold.sub( afwidth ), threshold.add( afwidth ), value );  }
@EXPORT
export const mx_ramplr = ( valuel, valuer, texcoord = uv() ) => _ramp( valuel, valuer, texcoord, 'x' ); export const mx_ramptb = ( valuet, valueb, texcoord = uv() ) => _ramp( valuet, valueb, texcoord, 'y' );  const _split = ( a, b, center, uv, p ) => mix( a, b, mx_aastep( center, uv[ p ] ) ); export const mx_splitlr = ( valuel, valuer, center, texcoord = uv() ) => _split( valuel, valuer, center, texcoord, 'x' ); export const mx_splittb = ( valuet, valueb, center, texcoord = uv() ) => _split( valuet, valueb, center, texcoord, 'y' );  export const mx_transform_uv = ( uv_scale = 1, uv_offset = 0, uv_geo = uv() ) => uv_geo.mul( uv_scale ).add( uv_offset );  export const mx_safepower = ( in1, in2 = 1 ) => {  	in1 = float( in1 );  	return in1.abs().pow( in2 ).mul( in1.sign() );  }
@EXPORT
export const mx_ramptb = ( valuet, valueb, texcoord = uv() ) => _ramp( valuet, valueb, texcoord, 'y' );  const _split = ( a, b, center, uv, p ) => mix( a, b, mx_aastep( center, uv[ p ] ) ); export const mx_splitlr = ( valuel, valuer, center, texcoord = uv() ) => _split( valuel, valuer, center, texcoord, 'x' ); export const mx_splittb = ( valuet, valueb, center, texcoord = uv() ) => _split( valuet, valueb, center, texcoord, 'y' );  export const mx_transform_uv = ( uv_scale = 1, uv_offset = 0, uv_geo = uv() ) => uv_geo.mul( uv_scale ).add( uv_offset );  export const mx_safepower = ( in1, in2 = 1 ) => {  	in1 = float( in1 );  	return in1.abs().pow( in2 ).mul( in1.sign() );  }
@EXPORT
export const mx_splitlr = ( valuel, valuer, center, texcoord = uv() ) => _split( valuel, valuer, center, texcoord, 'x' ); export const mx_splittb = ( valuet, valueb, center, texcoord = uv() ) => _split( valuet, valueb, center, texcoord, 'y' );  export const mx_transform_uv = ( uv_scale = 1, uv_offset = 0, uv_geo = uv() ) => uv_geo.mul( uv_scale ).add( uv_offset );  export const mx_safepower = ( in1, in2 = 1 ) => {  	in1 = float( in1 );  	return in1.abs().pow( in2 ).mul( in1.sign() );  }
@EXPORT
export const mx_splittb = ( valuet, valueb, center, texcoord = uv() ) => _split( valuet, valueb, center, texcoord, 'y' );  export const mx_transform_uv = ( uv_scale = 1, uv_offset = 0, uv_geo = uv() ) => uv_geo.mul( uv_scale ).add( uv_offset );  export const mx_safepower = ( in1, in2 = 1 ) => {  	in1 = float( in1 );  	return in1.abs().pow( in2 ).mul( in1.sign() );  }
@EXPORT
export const mx_transform_uv = ( uv_scale = 1, uv_offset = 0, uv_geo = uv() ) => uv_geo.mul( uv_scale ).add( uv_offset );  export const mx_safepower = ( in1, in2 = 1 ) => {  	in1 = float( in1 );  	return in1.abs().pow( in2 ).mul( in1.sign() );  }
@EXPORT
export const mx_safepower = ( in1, in2 = 1 ) => {  	in1 = float( in1 );  	return in1.abs().pow( in2 ).mul( in1.sign() );  }
@EXPORT
export const mx_contrast = ( input, amount = 1, pivot = .5 ) => float( input ).sub( pivot ).mul( amount ).add( pivot );  export const mx_noise_float = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => mx_perlin_noise_float( texcoord.convert( 'vec2|vec3' ) ).mul( amplitude ).add( pivot ); export const mx_noise_vec2 = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => mx_perlin_noise_vec2( texcoord.convert( 'vec2|vec3' ) ).mul( amplitude ).add( pivot ); export const mx_noise_vec3 = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => mx_perlin_noise_vec3( texcoord.convert( 'vec2|vec3' ) ).mul( amplitude ).add( pivot ); export const mx_noise_vec4 = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => {  	texcoord = texcoord.convert( 'vec2|vec3' ); // overloading type  	const noise_vec4 = vec4( mx_perlin_noise_vec3( texcoord ), mx_perlin_noise_float( texcoord.add( vec2( 19, 73 ) ) ) );  	return noise_vec4.mul( amplitude ).add( pivot );  }
@EXPORT
export const mx_noise_float = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => mx_perlin_noise_float( texcoord.convert( 'vec2|vec3' ) ).mul( amplitude ).add( pivot ); export const mx_noise_vec2 = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => mx_perlin_noise_vec2( texcoord.convert( 'vec2|vec3' ) ).mul( amplitude ).add( pivot ); export const mx_noise_vec3 = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => mx_perlin_noise_vec3( texcoord.convert( 'vec2|vec3' ) ).mul( amplitude ).add( pivot ); export const mx_noise_vec4 = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => {  	texcoord = texcoord.convert( 'vec2|vec3' ); // overloading type  	const noise_vec4 = vec4( mx_perlin_noise_vec3( texcoord ), mx_perlin_noise_float( texcoord.add( vec2( 19, 73 ) ) ) );  	return noise_vec4.mul( amplitude ).add( pivot );  }
@EXPORT
export const mx_noise_vec2 = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => mx_perlin_noise_vec2( texcoord.convert( 'vec2|vec3' ) ).mul( amplitude ).add( pivot ); export const mx_noise_vec3 = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => mx_perlin_noise_vec3( texcoord.convert( 'vec2|vec3' ) ).mul( amplitude ).add( pivot ); export const mx_noise_vec4 = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => {  	texcoord = texcoord.convert( 'vec2|vec3' ); // overloading type  	const noise_vec4 = vec4( mx_perlin_noise_vec3( texcoord ), mx_perlin_noise_float( texcoord.add( vec2( 19, 73 ) ) ) );  	return noise_vec4.mul( amplitude ).add( pivot );  }
@EXPORT
export const mx_noise_vec3 = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => mx_perlin_noise_vec3( texcoord.convert( 'vec2|vec3' ) ).mul( amplitude ).add( pivot ); export const mx_noise_vec4 = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => {  	texcoord = texcoord.convert( 'vec2|vec3' ); // overloading type  	const noise_vec4 = vec4( mx_perlin_noise_vec3( texcoord ), mx_perlin_noise_float( texcoord.add( vec2( 19, 73 ) ) ) );  	return noise_vec4.mul( amplitude ).add( pivot );  }
@EXPORT
export const mx_noise_vec4 = ( texcoord = uv(), amplitude = 1, pivot = 0 ) => {  	texcoord = texcoord.convert( 'vec2|vec3' ); // overloading type  	const noise_vec4 = vec4( mx_perlin_noise_vec3( texcoord ), mx_perlin_noise_float( texcoord.add( vec2( 19, 73 ) ) ) );  	return noise_vec4.mul( amplitude ).add( pivot );  }
@EXPORT
export const mx_worley_noise_float = ( texcoord = uv(), jitter = 1 ) => worley_noise_float( texcoord.convert( 'vec2|vec3' ), jitter, 1 ); export const mx_worley_noise_vec2 = ( texcoord = uv(), jitter = 1 ) => worley_noise_vec2( texcoord.convert( 'vec2|vec3' ), jitter, 1 ); export const mx_worley_noise_vec3 = ( texcoord = uv(), jitter = 1 ) => worley_noise_vec3( texcoord.convert( 'vec2|vec3' ), jitter, 1 );  export const mx_cell_noise_float = ( texcoord = uv() ) => cell_noise_float( texcoord.convert( 'vec2|vec3' ) );  export const mx_fractal_noise_float = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_float( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec2 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec2( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec3 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec3( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec4 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec4( position, octaves, lacunarity, diminish ).mul( amplitude );  export { mx_hsvtorgb, mx_rgbtohsv, mx_srgb_texture_to_lin_rec709 }
@EXPORT
export const mx_worley_noise_vec2 = ( texcoord = uv(), jitter = 1 ) => worley_noise_vec2( texcoord.convert( 'vec2|vec3' ), jitter, 1 ); export const mx_worley_noise_vec3 = ( texcoord = uv(), jitter = 1 ) => worley_noise_vec3( texcoord.convert( 'vec2|vec3' ), jitter, 1 );  export const mx_cell_noise_float = ( texcoord = uv() ) => cell_noise_float( texcoord.convert( 'vec2|vec3' ) );  export const mx_fractal_noise_float = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_float( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec2 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec2( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec3 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec3( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec4 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec4( position, octaves, lacunarity, diminish ).mul( amplitude );  export { mx_hsvtorgb, mx_rgbtohsv, mx_srgb_texture_to_lin_rec709 }
@EXPORT
export const mx_worley_noise_vec3 = ( texcoord = uv(), jitter = 1 ) => worley_noise_vec3( texcoord.convert( 'vec2|vec3' ), jitter, 1 );  export const mx_cell_noise_float = ( texcoord = uv() ) => cell_noise_float( texcoord.convert( 'vec2|vec3' ) );  export const mx_fractal_noise_float = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_float( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec2 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec2( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec3 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec3( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec4 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec4( position, octaves, lacunarity, diminish ).mul( amplitude );  export { mx_hsvtorgb, mx_rgbtohsv, mx_srgb_texture_to_lin_rec709 }
@EXPORT
export const mx_cell_noise_float = ( texcoord = uv() ) => cell_noise_float( texcoord.convert( 'vec2|vec3' ) );  export const mx_fractal_noise_float = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_float( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec2 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec2( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec3 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec3( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec4 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec4( position, octaves, lacunarity, diminish ).mul( amplitude );  export { mx_hsvtorgb, mx_rgbtohsv, mx_srgb_texture_to_lin_rec709 }
@EXPORT
export const mx_fractal_noise_float = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_float( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec2 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec2( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec3 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec3( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec4 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec4( position, octaves, lacunarity, diminish ).mul( amplitude );  export { mx_hsvtorgb, mx_rgbtohsv, mx_srgb_texture_to_lin_rec709 }
@EXPORT
export const mx_fractal_noise_vec2 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec2( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec3 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec3( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec4 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec4( position, octaves, lacunarity, diminish ).mul( amplitude );  export { mx_hsvtorgb, mx_rgbtohsv, mx_srgb_texture_to_lin_rec709 }
@EXPORT
export const mx_fractal_noise_vec3 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec3( position, octaves, lacunarity, diminish ).mul( amplitude ); export const mx_fractal_noise_vec4 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec4( position, octaves, lacunarity, diminish ).mul( amplitude );  export { mx_hsvtorgb, mx_rgbtohsv, mx_srgb_texture_to_lin_rec709 }
@EXPORT
export const mx_fractal_noise_vec4 = ( position = uv(), octaves = 3, lacunarity = 2, diminish = .5, amplitude = 1 ) => fractal_noise_vec4( position, octaves, lacunarity, diminish ).mul( amplitude );  export { mx_hsvtorgb, mx_rgbtohsv, mx_srgb_texture_to_lin_rec709 }
@EXPORT
export { mx_hsvtorgb, mx_rgbtohsv, mx_srgb_texture_to_lin_rec709 }
@FILENAME
addons|nodes|materialx|lib|mx_hsv.js
@EXPORT
export const mx_hsvtorgb = glslFn( |vec3 mx_hsvtorgb(vec3 hsv) {     // Reference for this technique: Foley & van Dam     float h = hsv.x; float s = hsv.y; float v = hsv.z;     if (s < 0.0001f) {       return vec3 (v, v, v);     }
@EXPORT
export const mx_rgbtohsv = glslFn( |vec3 mx_rgbtohsv(vec3 c) {     // See Foley & van Dam     float r = c.x; float g = c.y; float b = c.z;     float mincomp = min (r, min(g, b));     float maxcomp = max (r, max(g, b));     float delta = maxcomp - mincomp;  // chroma     float h, s, v;     v = maxcomp;     if (maxcomp > 0.0f)         s = delta / maxcomp;     else s = 0.0f;     if (s <= 0.0f)         h = 0.0f;     else {         if      (r >= maxcomp) h = (g-b) / delta;         else if (g >= maxcomp) h = 2.0f + (b-r) / delta;         else                   h = 4.0f + (r-g) / delta;         h *= (1.0f/6.0f);         if (h < 0.0f)             h += 1.0f;     }
@FILENAME
addons|nodes|materialx|lib|mx_noise.js
@EXPORT
export const mx_noise = glsl( |float mx_select(bool b, float t, float f) {     return b ? t : f; }
@FILENAME
addons|nodes|materialx|lib|mx_transform_color.js
@EXPORT
export const mx_transform_color = glsl( |#define M_AP1_TO_REC709 mat3(1.705079555511475, -0.1297005265951157, -0.02416634373366833, -0.6242334842681885, 1.138468623161316, -0.1246141716837883, -0.0808461606502533, -0.008768022060394287, 1.148780584335327)  vec3 mx_srgb_texture_to_lin_rec709(vec3 color) {     bvec3 isAbove = greaterThan(color, vec3(0.04045));     vec3 linSeg = color / 12.92;     vec3 powSeg = pow(max(color + vec3(0.055), vec3(0.0)) / 1.055, vec3(2.4));     return mix(linSeg, powSeg, isAbove); }
@FILENAME
addons|nodes|math|CondNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class CondNode extends Node {
@FILENAME
addons|nodes|math|HashNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class HashNode extends Node {
@FILENAME
addons|nodes|math|MathNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class MathNode extends TempNode {
@FILENAME
addons|nodes|math|OperatorNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class OperatorNode extends TempNode {
@FILENAME
addons|nodes|parsers|GLSLNodeFunction.js
@CLASS
class GLSLNodeFunction extends NodeFunction {
@FILENAME
addons|nodes|parsers|GLSLNodeParser.js
@CLASS
class GLSLNodeParser extends NodeParser {
@FILENAME
addons|nodes|procedural|CheckerNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class CheckerNode extends TempNode {
@FILENAME
addons|nodes|shadernode|ShaderNode.js
@EXPORT
export function addNodeElement( name, nodeElement ) {  	if ( NodeElements.has( name ) ) throw new Error( |Redefinition of node element | name }
@EXPORT
exports  // utils  export const getConstNodeType = ( value ) => ( value !== undefined && value !== null ) ? ( value.nodeType || value.convertTo || ( typeof value === 'string' ? value : null ) ) : null;  // shader node base  export function ShaderNode( jsFunc ) {  	return new Proxy( new ShaderNodeInternal( jsFunc ), shaderNodeHandler );  }
@EXPORT
export const getConstNodeType = ( value ) => ( value !== undefined && value !== null ) ? ( value.nodeType || value.convertTo || ( typeof value === 'string' ? value : null ) ) : null;  // shader node base  export function ShaderNode( jsFunc ) {  	return new Proxy( new ShaderNodeInternal( jsFunc ), shaderNodeHandler );  }
@EXPORT
export function ShaderNode( jsFunc ) {  	return new Proxy( new ShaderNodeInternal( jsFunc ), shaderNodeHandler );  }
@EXPORT
export const nodeObject = ( val, altType = null ) => /* new */ ShaderNodeObject( val, altType ); export const nodeObjects = ( val, altType = null ) => new ShaderNodeObjects( val, altType ); export const nodeArray = ( val, altType = null ) => new ShaderNodeArray( val, altType ); export const nodeProxy = ( ...params ) => new ShaderNodeProxy( ...params ); export const nodeImmutable = ( ...params ) => new ShaderNodeImmutable( ...params );  export const shader = ( jsFunc ) => { // @deprecated, r154  	console.warn( 'TSL: shader() is deprecated. Use tslFn() instead.' );  	return new ShaderNode( jsFunc );  }
@EXPORT
export const nodeObjects = ( val, altType = null ) => new ShaderNodeObjects( val, altType ); export const nodeArray = ( val, altType = null ) => new ShaderNodeArray( val, altType ); export const nodeProxy = ( ...params ) => new ShaderNodeProxy( ...params ); export const nodeImmutable = ( ...params ) => new ShaderNodeImmutable( ...params );  export const shader = ( jsFunc ) => { // @deprecated, r154  	console.warn( 'TSL: shader() is deprecated. Use tslFn() instead.' );  	return new ShaderNode( jsFunc );  }
@EXPORT
export const nodeArray = ( val, altType = null ) => new ShaderNodeArray( val, altType ); export const nodeProxy = ( ...params ) => new ShaderNodeProxy( ...params ); export const nodeImmutable = ( ...params ) => new ShaderNodeImmutable( ...params );  export const shader = ( jsFunc ) => { // @deprecated, r154  	console.warn( 'TSL: shader() is deprecated. Use tslFn() instead.' );  	return new ShaderNode( jsFunc );  }
@EXPORT
export const nodeProxy = ( ...params ) => new ShaderNodeProxy( ...params ); export const nodeImmutable = ( ...params ) => new ShaderNodeImmutable( ...params );  export const shader = ( jsFunc ) => { // @deprecated, r154  	console.warn( 'TSL: shader() is deprecated. Use tslFn() instead.' );  	return new ShaderNode( jsFunc );  }
@EXPORT
export const nodeImmutable = ( ...params ) => new ShaderNodeImmutable( ...params );  export const shader = ( jsFunc ) => { // @deprecated, r154  	console.warn( 'TSL: shader() is deprecated. Use tslFn() instead.' );  	return new ShaderNode( jsFunc );  }
@EXPORT
export const shader = ( jsFunc ) => { // @deprecated, r154  	console.warn( 'TSL: shader() is deprecated. Use tslFn() instead.' );  	return new ShaderNode( jsFunc );  }
@EXPORT
export const tslFn = ( jsFunc ) => {  	let shaderNode = null;  	return ( ...params ) => {  		if ( shaderNode === null ) shaderNode = new ShaderNode( jsFunc );  		return shaderNode.call( ...params );  	}
@CLASS
Class } from '../core/Node.js'; import ArrayElementNode from '../utils/ArrayElementNode.js'; import ConvertNode from '../utils/ConvertNode.js'; import JoinNode from '../utils/JoinNode.js'; import SplitNode from '../utils/SplitNode.js'; import ConstNode from '../core/ConstNode.js'; import {
@CLASS
Class, scope = null, factor = null, settings = null ) {
@CLASS
Class( ...nodeArray( params ) ) );  		};  	} else if ( factor !== null ) {
@CLASS
Class( scope, ...nodeArray( params ), factor ) );  		};  	} else {
@CLASS
Class( scope, ...nodeArray( params ) ) );  		};  	}  };  const ShaderNodeImmutable = function ( NodeClass, ...params ) {
@CLASS
Class, ...params ) {
@CLASS
Class( ...nodeArray( params ) ) );  };  class ShaderNodeInternal extends Node {
@CLASS
class ShaderNodeInternal extends Node {
@FILENAME
addons|nodes|utils|ArrayElementNode.js
@CLASS
Class } from '../core/Node.js';  class ArrayElementNode extends Node {
@CLASS
class ArrayElementNode extends Node {
@FILENAME
addons|nodes|utils|ConvertNode.js
@CLASS
Class } from '../core/Node.js';  class ConvertNode extends Node {
@CLASS
class ConvertNode extends Node {
@FILENAME
addons|nodes|utils|DiscardNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class DiscardNode extends CondNode {
@FILENAME
addons|nodes|utils|EquirectUVNode.js
@CLASS
Class } from '../core/Node.js';  class EquirectUVNode extends TempNode {
@CLASS
class EquirectUVNode extends TempNode {
@FILENAME
addons|nodes|utils|JoinNode.js
@CLASS
Class } from '../core/Node.js'; import TempNode from '../core/TempNode.js';  class JoinNode extends TempNode {
@CLASS
class JoinNode extends TempNode {
@FILENAME
addons|nodes|utils|LoopNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class LoopNode extends Node {
@FILENAME
addons|nodes|utils|MatcapUVNode.js
@CLASS
Class } from '../core/Node.js';  class MatcapUVNode extends TempNode {
@CLASS
class MatcapUVNode extends TempNode {
@FILENAME
addons|nodes|utils|MaxMipLevelNode.js
@CLASS
Class } from '../core/Node.js';  class MaxMipLevelNode extends UniformNode {
@CLASS
class MaxMipLevelNode extends UniformNode {
@FILENAME
addons|nodes|utils|OscNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class OscNode extends Node {
@FILENAME
addons|nodes|utils|PackingNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class PackingNode extends TempNode {
@FILENAME
addons|nodes|utils|RemapNode.js
@EXPORT
export default RemapNode;  export const remap = nodeProxy( RemapNode, null, null, { doClamp: false }
@EXPORT
export const remap = nodeProxy( RemapNode, null, null, { doClamp: false }
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class RemapNode extends Node {
@FILENAME
addons|nodes|utils|RotateUVNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class RotateUVNode extends TempNode {
@FILENAME
addons|nodes|utils|SpecularMIPLevelNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class SpecularMIPLevelNode extends Node {
@FILENAME
addons|nodes|utils|SplitNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class SplitNode extends Node {
@FILENAME
addons|nodes|utils|SpriteSheetUVNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class SpriteSheetUVNode extends Node {
@FILENAME
addons|nodes|utils|TimerNode.js
@CLASS
Class } from '../core/Node.js';  class TimerNode extends UniformNode {
@CLASS
class TimerNode extends UniformNode {
@FILENAME
addons|nodes|utils|TriplanarTexturesNode.js
@CLASS
Class } from '../core/Node.js'; import {
@CLASS
class TriplanarTexturesNode extends Node {
@FILENAME
addons|objects|GroundProjectedSkybox.js
@EXPORT
export { GroundProjectedSkybox }
@CLASS
class GroundProjectedSkybox extends Mesh {
@FILENAME
addons|objects|Lensflare.js
@EXPORT
export { Lensflare, LensflareElement }
@CLASS
class Lensflare extends Mesh {
@CLASS
class LensflareElement {
@FILENAME
addons|objects|MarchingCubes.js
@EXPORT
export { MarchingCubes, edgeTable, triTable }
@CLASS
class MarchingCubes extends Mesh {
@FILENAME
addons|objects|Reflector.js
@EXPORT
export { Reflector }
@CLASS
class Reflector extends Mesh {
@FILENAME
addons|objects|ReflectorForSSRPass.js
@EXPORT
export { ReflectorForSSRPass }
@CLASS
class ReflectorForSSRPass extends Mesh {
@FILENAME
addons|objects|Refractor.js
@EXPORT
export { Refractor }
@CLASS
class Refractor extends Mesh {
@FILENAME
addons|objects|ShadowMesh.js
@EXPORT
export { ShadowMesh }
@CLASS
class ShadowMesh extends Mesh {
@FILENAME
addons|objects|Sky.js
@EXPORT
export { Sky }
@CLASS
class Sky extends Mesh {
@FILENAME
addons|objects|Water.js
@EXPORT
export { Water }
@CLASS
class Water extends Mesh {
@FILENAME
addons|objects|Water2.js
@EXPORT
export { Water }
@CLASS
class Water extends Mesh {
@FILENAME
addons|offscreen|jank.js
@FILENAME
addons|offscreen|offscreen.js
@FILENAME
addons|offscreen|scene.js
@FILENAME
addons|physics|AmmoPhysics.js
@EXPORT
export { AmmoPhysics }
@FILENAME
addons|physics|RapierPhysics.js
@EXPORT
export { RapierPhysics }
@FILENAME
addons|postprocessing|AfterimagePass.js
@EXPORT
export { AfterimagePass }
@CLASS
class AfterimagePass extends Pass {
@FILENAME
addons|postprocessing|BloomPass.js
@EXPORT
export { BloomPass }
@CLASS
class BloomPass extends Pass {
@FILENAME
addons|postprocessing|BokehPass.js
@EXPORT
export { BokehPass }
@CLASS
class BokehPass extends Pass {
@FILENAME
addons|postprocessing|ClearPass.js
@EXPORT
export { ClearPass }
@CLASS
class ClearPass extends Pass {
@FILENAME
addons|postprocessing|CubeTexturePass.js
@EXPORT
export { CubeTexturePass }
@CLASS
class CubeTexturePass extends Pass {
@FILENAME
addons|postprocessing|DotScreenPass.js
@EXPORT
export { DotScreenPass }
@CLASS
class DotScreenPass extends Pass {
@FILENAME
addons|postprocessing|EffectComposer.js
@EXPORT
export { EffectComposer }
@CLASS
class EffectComposer {
@FILENAME
addons|postprocessing|FilmPass.js
@EXPORT
export { FilmPass }
@CLASS
class FilmPass extends Pass {
@FILENAME
addons|postprocessing|GlitchPass.js
@EXPORT
export { GlitchPass }
@CLASS
class GlitchPass extends Pass {
@FILENAME
addons|postprocessing|HalftonePass.js
@EXPORT
export { HalftonePass }
@CLASS
class HalftonePass extends Pass {
@FILENAME
addons|postprocessing|LUTPass.js
@EXPORT
export { LUTPass }
@CLASS
class LUTPass extends ShaderPass {
@FILENAME
addons|postprocessing|MaskPass.js
@EXPORT
export { MaskPass, ClearMaskPass }
@CLASS
class MaskPass extends Pass {
@CLASS
class ClearMaskPass extends Pass {
@FILENAME
addons|postprocessing|OutlinePass.js
@EXPORT
export { OutlinePass }
@CLASS
class OutlinePass extends Pass {
@FILENAME
addons|postprocessing|OutputPass.js
@EXPORT
export { OutputPass }
@CLASS
class OutputPass extends Pass {
@FILENAME
addons|postprocessing|Pass.js
@EXPORT
export { Pass, FullScreenQuad }
@CLASS
class Pass {
@CLASS
class FullScreenQuad {
@FILENAME
addons|postprocessing|RenderPass.js
@EXPORT
export { RenderPass }
@CLASS
class RenderPass extends Pass {
@FILENAME
addons|postprocessing|RenderPixelatedPass.js
@EXPORT
export { RenderPixelatedPass }
@CLASS
class RenderPixelatedPass extends Pass {
@FILENAME
addons|postprocessing|SAOPass.js
@EXPORT
export { SAOPass }
@CLASS
class SAOPass extends Pass {
@FILENAME
addons|postprocessing|SavePass.js
@EXPORT
export { SavePass }
@CLASS
class SavePass extends Pass {
@FILENAME
addons|postprocessing|ShaderPass.js
@EXPORT
export { ShaderPass }
@CLASS
class ShaderPass extends Pass {
@FILENAME
addons|postprocessing|SMAAPass.js
@EXPORT
export { SMAAPass }
@CLASS
class SMAAPass extends Pass {
@FILENAME
addons|postprocessing|SSAARenderPass.js
@EXPORT
export { SSAARenderPass }
@CLASS
class SSAARenderPass extends Pass {
@FILENAME
addons|postprocessing|SSAOPass.js
@EXPORT
export { SSAOPass }
@CLASS
class SSAOPass extends Pass {
@FILENAME
addons|postprocessing|SSRPass.js
@EXPORT
export { SSRPass }
@CLASS
class SSRPass extends Pass {
@FILENAME
addons|postprocessing|TAARenderPass.js
@EXPORT
export { TAARenderPass }
@CLASS
class TAARenderPass extends SSAARenderPass {
@FILENAME
addons|postprocessing|TexturePass.js
@EXPORT
export { TexturePass }
@CLASS
class TexturePass extends Pass {
@FILENAME
addons|postprocessing|UnrealBloomPass.js
@EXPORT
export { UnrealBloomPass }
@CLASS
class UnrealBloomPass extends Pass {
@FILENAME
addons|renderers|CSS2DRenderer.js
@EXPORT
export { CSS2DObject, CSS2DRenderer }
@CLASS
class CSS2DObject extends Object3D {
@CLASS
class CSS2DRenderer {
@FILENAME
addons|renderers|CSS3DRenderer.js
@EXPORT
export { CSS3DObject, CSS3DSprite, CSS3DRenderer }
@CLASS
class CSS3DObject extends Object3D {
@CLASS
class CSS3DSprite extends CSS3DObject {
@CLASS
class CSS3DRenderer {
@FILENAME
addons|renderers|Projector.js
@EXPORT
export { RenderableObject, RenderableFace, RenderableVertex, RenderableLine, RenderableSprite, Projector }
@CLASS
class RenderableObject {
@CLASS
class RenderableFace {
@CLASS
class RenderableVertex {
@CLASS
class RenderableLine {
@CLASS
class RenderableSprite {
@CLASS
class Projector {
@FILENAME
addons|renderers|SVGRenderer.js
@EXPORT
export { SVGObject, SVGRenderer }
@CLASS
class SVGObject extends Object3D {
@CLASS
class SVGRenderer {
@FILENAME
addons|renderers|common|Animation.js
@CLASS
class Animation {
@FILENAME
addons|renderers|common|Attributes.js
@CLASS
class Attributes extends DataMap {
@FILENAME
addons|renderers|common|Backend.js
@CLASS
class Backend {
@FILENAME
addons|renderers|common|Background.js
@CLASS
class Background extends DataMap {
@FILENAME
addons|renderers|common|Binding.js
@CLASS
class Binding {
@FILENAME
addons|renderers|common|Bindings.js
@CLASS
class Bindings extends DataMap {
@FILENAME
addons|renderers|common|Buffer.js
@CLASS
class Buffer extends Binding {
@FILENAME
addons|renderers|common|BufferUtils.js
@EXPORT
export { 	getFloatLength, 	getVectorLength, 	getStrideLength }
@FILENAME
addons|renderers|common|ChainMap.js
@EXPORT
export default class ChainMap {  	constructor() {  		this.weakMap = new WeakMap();  	}
@CLASS
class ChainMap {
@FILENAME
addons|renderers|common|ComputePipeline.js
@CLASS
class ComputePipeline extends Pipeline {
@FILENAME
addons|renderers|common|Constants.js
@EXPORT
export const AttributeType = { 	VERTEX: 1, 	INDEX: 2, 	STORAGE: 4 }
@FILENAME
addons|renderers|common|CubeRenderTarget.js
@CLASS
class CubeRenderTarget extends WebGLCubeRenderTarget {
@FILENAME
addons|renderers|common|DataMap.js
@CLASS
class DataMap {
@FILENAME
addons|renderers|common|Geometries.js
@CLASS
class Geometries extends DataMap {
@FILENAME
addons|renderers|common|Info.js
@CLASS
class Info {
@FILENAME
addons|renderers|common|Pipeline.js
@CLASS
class Pipeline {
@FILENAME
addons|renderers|common|Pipelines.js
@CLASS
class Pipelines extends DataMap {
@FILENAME
addons|renderers|common|ProgrammableStage.js
@CLASS
class ProgrammableStage {
@FILENAME
addons|renderers|common|RenderContext.js
@CLASS
class RenderContext {
@FILENAME
addons|renderers|common|RenderContexts.js
@CLASS
class RenderContexts {
@FILENAME
addons|renderers|common|Renderer.js
@CLASS
class Renderer {
@FILENAME
addons|renderers|common|RenderList.js
@CLASS
class RenderList {
@FILENAME
addons|renderers|common|RenderLists.js
@CLASS
class RenderLists {
@FILENAME
addons|renderers|common|RenderObject.js
@EXPORT
export default class RenderObject {  	constructor( nodes, geometries, renderer, object, material, scene, camera, lightsNode, renderContext ) {  		this._nodes = nodes; 		this._geometries = geometries;  		this.id = id ++;  		this.renderer = renderer; 		this.object = object; 		this.material = material; 		this.scene = scene; 		this.camera = camera; 		this.lightsNode = lightsNode; 		this.context = renderContext;  		this.geometry = object.geometry;  		this.attributes = null; 		this.pipeline = null; 		this.vertexBuffers = null;  		this._nodeBuilder = null; 		this._bindings = null; 		this._materialVersion = - 1; 		this._materialCacheKey = '';  		this.onDispose = null;  		this.isRenderObject = true;  		this.onMaterialDispose = () => {  			this.dispose();  		}
@CLASS
class RenderObject {
@FILENAME
addons|renderers|common|RenderObjects.js
@CLASS
class RenderObjects {
@FILENAME
addons|renderers|common|RenderPipeline.js
@CLASS
class RenderPipeline extends Pipeline {
@FILENAME
addons|renderers|common|SampledTexture.js
@EXPORT
export { SampledTexture, SampledArrayTexture, Sampled3DTexture, SampledCubeTexture }
@CLASS
class SampledTexture extends Binding {
@CLASS
class SampledArrayTexture extends SampledTexture {
@CLASS
class Sampled3DTexture extends SampledTexture {
@CLASS
class SampledCubeTexture extends SampledTexture {
@FILENAME
addons|renderers|common|Sampler.js
@CLASS
class Sampler extends Binding {
@FILENAME
addons|renderers|common|StorageBuffer.js
@CLASS
class StorageBuffer extends Buffer {
@FILENAME
addons|renderers|common|Textures.js
@CLASS
class Textures extends DataMap {
@FILENAME
addons|renderers|common|Uniform.js
@EXPORT
export { 	FloatUniform, 	Vector2Uniform, Vector3Uniform, Vector4Uniform, ColorUniform, 	Matrix3Uniform, Matrix4Uniform }
@CLASS
class Uniform {
@CLASS
class FloatUniform extends Uniform {
@CLASS
class Vector2Uniform extends Uniform {
@CLASS
class Vector3Uniform extends Uniform {
@CLASS
class Vector4Uniform extends Uniform {
@CLASS
class ColorUniform extends Uniform {
@CLASS
class Matrix3Uniform extends Uniform {
@CLASS
class Matrix4Uniform extends Uniform {
@FILENAME
addons|renderers|common|UniformBuffer.js
@CLASS
class UniformBuffer extends Buffer {
@FILENAME
addons|renderers|common|UniformsGroup.js
@CLASS
class UniformsGroup extends UniformBuffer {
@FILENAME
addons|renderers|common|nodes|Nodes.js
@CLASS
class Nodes extends DataMap {
@FILENAME
addons|renderers|common|nodes|NodeSampledTexture.js
@EXPORT
export { NodeSampledTexture, NodeSampledCubeTexture }
@CLASS
class NodeSampledTexture extends SampledTexture {
@CLASS
class NodeSampledCubeTexture extends SampledCubeTexture {
@FILENAME
addons|renderers|common|nodes|NodeSampler.js
@CLASS
class NodeSampler extends Sampler {
@FILENAME
addons|renderers|common|nodes|NodeUniform.js
@EXPORT
export { 	FloatNodeUniform, Vector2NodeUniform, Vector3NodeUniform, Vector4NodeUniform, 	ColorNodeUniform, Matrix3NodeUniform, Matrix4NodeUniform }
@CLASS
class FloatNodeUniform extends FloatUniform {
@CLASS
class Vector2NodeUniform extends Vector2Uniform {
@CLASS
class Vector3NodeUniform extends Vector3Uniform {
@CLASS
class Vector4NodeUniform extends Vector4Uniform {
@CLASS
class ColorNodeUniform extends ColorUniform {
@CLASS
class Matrix3NodeUniform extends Matrix3Uniform {
@CLASS
class Matrix4NodeUniform extends Matrix4Uniform {
@FILENAME
addons|renderers|webgl|WebGLBackend.js
@CLASS
class WebGLBackend extends Backend {
@CLASS
class.' );  	}  	updateViewport( renderContext ) {
@CLASS
class.' );  	}  	beginCompute( /*computeGroup*/ ) {
@CLASS
class.' );  	}  	compute( /*computeGroup, computeNode, bindings, pipeline*/ ) {
@CLASS
class.' );  	}  	finishCompute( /*computeGroup*/ ) {
@CLASS
class.' );  	}  	draw( renderObject, info ) {
@CLASS
class.' );  	}  	destroySampler( /*texture*/ ) {
@CLASS
class.' );  	}  	createDefaultTexture( texture ) {
@CLASS
class.' );  	}  	copyTextureToBuffer( /*texture, x, y, width, height*/ ) {
@CLASS
class.' );  	}  	// node builder  	createNodeBuilder( object, renderer, scene = null ) {
@CLASS
class.' );  	}  	createRenderPipeline( renderObject ) {
@CLASS
class.' );  	}  	createBindings( bindings ) {
@CLASS
class.' );  	}  	updateAttribute( /*attribute*/ ) {
@CLASS
class.' );  	}  	destroyAttribute( /*attribute*/ ) {
@CLASS
class.' );  	}  	updateSize() {
@CLASS
class.' );  	}  	hasFeature( name ) {
@FILENAME
addons|renderers|webgl|nodes|GLSLNodeBuilder.js
@CLASS
class GLSLNodeBuilder extends NodeBuilder {
@FILENAME
addons|renderers|webgl|utils|WebGLAttributeUtils.js
@CLASS
class WebGLAttributeUtils {
@FILENAME
addons|renderers|webgl|utils|WebGLExtensions.js
@CLASS
class WebGLExtensions {
@FILENAME
addons|renderers|webgl|utils|WebGLState.js
@CLASS
class WebGLState {
@FILENAME
addons|renderers|webgl|utils|WebGLTextureUtils.js
@CLASS
class WebGLTextureUtils {
@FILENAME
addons|renderers|webgl|utils|WebGLUtils.js
@CLASS
class WebGLUtils {
@FILENAME
addons|renderers|webgl-legacy|nodes|GLSL1NodeBuilder.js
@CLASS
class GLSL1NodeBuilder extends NodeBuilder {
@FILENAME
addons|renderers|webgl-legacy|nodes|SlotNode.js
@CLASS
class SlotNode extends Node {
@FILENAME
addons|renderers|webgl-legacy|nodes|WebGLNodeBuilder.js
@EXPORT
export { WebGLNodeBuilder }
@CLASS
class WebGLNodeBuilder extends NodeBuilder {
@FILENAME
addons|renderers|webgl-legacy|nodes|WebGLNodes.js
@EXPORT
export const nodeFrame = new NodeFrame();  Material.prototype.onBuild = function ( object, parameters, renderer ) {  	if ( object.material.isNodeMaterial === true ) {  		builders.set( this, new WebGLNodeBuilder( object, renderer, parameters ).build() );  	}
@FILENAME
addons|renderers|webgpu|WebGPUBackend.js
@CLASS
class WebGPUBackend extends Backend {
@FILENAME
addons|renderers|webgpu|WebGPURenderer.js
@CLASS
class WebGPURenderer extends Renderer {
@CLASS
Class;  		if ( WebGPU.isAvailable() ) {
@CLASS
Class = WebGPUBackend;  		} else {
@FILENAME
addons|renderers|webgpu|nodes|WGSLNodeBuilder.js
@CLASS
class WGSLNodeBuilder extends NodeBuilder {
@CLASS
Class = type === 'storageBuffer' ? StorageBuffer : UniformBuffer; 				const buffer = new bufferClass( 'NodeBuffer_' + node.id, node.value ); 				buffer.setVisibility( gpuShaderStageLib[ shaderStage ] );  				// add first textures in sequence and group for last 				const lastBinding = bindings[ bindings.length - 1 ]; 				const index = lastBinding && lastBinding.isUniformsGroup ? bindings.length - 1 : bindings.length;  				bindings.splice( index, 0, buffer );  				uniformGPU = buffer;  			} else {
@CLASS
Class( 'NodeBuffer_' + node.id, node.value ); 				buffer.setVisibility( gpuShaderStageLib[ shaderStage ] );  				// add first textures in sequence and group for last 				const lastBinding = bindings[ bindings.length - 1 ]; 				const index = lastBinding && lastBinding.isUniformsGroup ? bindings.length - 1 : bindings.length;  				bindings.splice( index, 0, buffer );  				uniformGPU = buffer;  			} else {
@FILENAME
addons|renderers|webgpu|nodes|WGSLNodeFunction.js
@CLASS
class WGSLNodeFunction extends NodeFunction {
@FILENAME
addons|renderers|webgpu|nodes|WGSLNodeParser.js
@CLASS
class WGSLNodeParser extends NodeParser {
@FILENAME
addons|renderers|webgpu|utils|WebGPUAttributeUtils.js
@CLASS
class WebGPUAttributeUtils {
@FILENAME
addons|renderers|webgpu|utils|WebGPUBindingUtils.js
@CLASS
class WebGPUBindingUtils {
@FILENAME
addons|renderers|webgpu|utils|WebGPUConstants.js
@EXPORT
export const GPUPrimitiveTopology = { 	PointList: 'point-list', 	LineList: 'line-list', 	LineStrip: 'line-strip', 	TriangleList: 'triangle-list', 	TriangleStrip: 'triangle-strip', }
@EXPORT
export const GPUCompareFunction = { 	Never: 'never', 	Less: 'less', 	Equal: 'equal', 	LessEqual: 'less-equal', 	Greater: 'greater', 	NotEqual: 'not-equal', 	GreaterEqual: 'greater-equal', 	Always: 'always' }
@EXPORT
export const GPUStoreOp = { 	Store: 'store', 	Discard: 'discard' }
@EXPORT
export const GPULoadOp = { 	Load: 'load', 	Clear: 'clear' }
@EXPORT
export const GPUFrontFace = { 	CCW: 'ccw', 	CW: 'cw' }
@EXPORT
export const GPUCullMode = { 	None: 'none', 	Front: 'front', 	Back: 'back' }
@EXPORT
export const GPUIndexFormat = { 	Uint16: 'uint16', 	Uint32: 'uint32' }
@EXPORT
export const GPUVertexFormat = { 	Uint8x2: 'uint8x2', 	Uint8x4: 'uint8x4', 	Sint8x2: 'sint8x2', 	Sint8x4: 'sint8x4', 	Unorm8x2: 'unorm8x2', 	Unorm8x4: 'unorm8x4', 	Snorm8x2: 'snorm8x2', 	Snorm8x4: 'snorm8x4', 	Uint16x2: 'uint16x2', 	Uint16x4: 'uint16x4', 	Sint16x2: 'sint16x2', 	Sint16x4: 'sint16x4', 	Unorm16x2: 'unorm16x2', 	Unorm16x4: 'unorm16x4', 	Snorm16x2: 'snorm16x2', 	Snorm16x4: 'snorm16x4', 	Float16x2: 'float16x2', 	Float16x4: 'float16x4', 	Float32: 'float32', 	Float32x2: 'float32x2', 	Float32x3: 'float32x3', 	Float32x4: 'float32x4', 	Uint32: 'uint32', 	Uint32x2: 'uint32x2', 	Uint32x3: 'uint32x3', 	Uint32x4: 'uint32x4', 	Sint32: 'sint32', 	Sint32x2: 'sint32x2', 	Sint32x3: 'sint32x3', 	Sint32x4: 'sint32x4' }
@EXPORT
export const GPUTextureFormat = {  	// 8-bit formats  	R8Unorm: 'r8unorm', 	R8Snorm: 'r8snorm', 	R8Uint: 'r8uint', 	R8Sint: 'r8sint',  	// 16-bit formats  	R16Uint: 'r16uint', 	R16Sint: 'r16sint', 	R16Float: 'r16float', 	RG8Unorm: 'rg8unorm', 	RG8Snorm: 'rg8snorm', 	RG8Uint: 'rg8uint', 	RG8Sint: 'rg8sint',  	// 32-bit formats  	R32Uint: 'r32uint', 	R32Sint: 'r32sint', 	R32Float: 'r32float', 	RG16Uint: 'rg16uint', 	RG16Sint: 'rg16sint', 	RG16Float: 'rg16float', 	RGBA8Unorm: 'rgba8unorm', 	RGBA8UnormSRGB: 'rgba8unorm-srgb', 	RGBA8Snorm: 'rgba8snorm', 	RGBA8Uint: 'rgba8uint', 	RGBA8Sint: 'rgba8sint', 	BGRA8Unorm: 'bgra8unorm', 	BGRA8UnormSRGB: 'bgra8unorm-srgb', 	// Packed 32-bit formats 	RGB9E5UFloat: 'rgb9e5ufloat', 	RGB10A2Unorm: 'rgb10a2unorm', 	RG11B10uFloat: 'rgb10a2unorm',  	// 64-bit formats  	RG32Uint: 'rg32uint', 	RG32Sint: 'rg32sint', 	RG32Float: 'rg32float', 	RGBA16Uint: 'rgba16uint', 	RGBA16Sint: 'rgba16sint', 	RGBA16Float: 'rgba16float',  	// 128-bit formats  	RGBA32Uint: 'rgba32uint', 	RGBA32Sint: 'rgba32sint', 	RGBA32Float: 'rgba32float',  	// Depth and stencil formats  	Stencil8: 'stencil8', 	Depth16Unorm: 'depth16unorm', 	Depth24Plus: 'depth24plus', 	Depth24PlusStencil8: 'depth24plus-stencil8', 	Depth32Float: 'depth32float',  	// 'depth32float-stencil8' extension  	Depth32FloatStencil8: 'depth32float-stencil8',  	// BC compressed formats usable if 'texture-compression-bc' is both 	// supported by the device/user agent and enabled in requestDevice.  	BC1RGBAUnorm: 'bc1-rgba-unorm', 	BC1RGBAUnormSRGB: 'bc1-rgba-unorm-srgb', 	BC2RGBAUnorm: 'bc2-rgba-unorm', 	BC2RGBAUnormSRGB: 'bc2-rgba-unorm-srgb', 	BC3RGBAUnorm: 'bc3-rgba-unorm', 	BC3RGBAUnormSRGB: 'bc3-rgba-unorm-srgb', 	BC4RUnorm: 'bc4-r-unorm', 	BC4RSnorm: 'bc4-r-snorm', 	BC5RGUnorm: 'bc5-rg-unorm', 	BC5RGSnorm: 'bc5-rg-snorm', 	BC6HRGBUFloat: 'bc6h-rgb-ufloat', 	BC6HRGBFloat: 'bc6h-rgb-float', 	BC7RGBAUnorm: 'bc7-rgba-unorm', 	BC7RGBAUnormSRGB: 'bc7-rgba-srgb',  	// ETC2 compressed formats usable if 'texture-compression-etc2' is both 	// supported by the device/user agent and enabled in requestDevice.  	ETC2RGB8Unorm: 'etc2-rgb8unorm', 	ETC2RGB8UnormSRGB: 'etc2-rgb8unorm-srgb', 	ETC2RGB8A1Unorm: 'etc2-rgb8a1unorm', 	ETC2RGB8A1UnormSRGB: 'etc2-rgb8a1unorm-srgb', 	ETC2RGBA8Unorm: 'etc2-rgba8unorm', 	ETC2RGBA8UnormSRGB: 'etc2-rgba8unorm-srgb', 	EACR11Unorm: 'eac-r11unorm', 	EACR11Snorm: 'eac-r11snorm', 	EACRG11Unorm: 'eac-rg11unorm', 	EACRG11Snorm: 'eac-rg11snorm',  	// ASTC compressed formats usable if 'texture-compression-astc' is both 	// supported by the device/user agent and enabled in requestDevice.  	ASTC4x4Unorm: 'astc-4x4-unorm', 	ASTC4x4UnormSRGB: 'astc-4x4-unorm-srgb', 	ASTC5x4Unorm: 'astc-5x4-unorm', 	ASTC5x4UnormSRGB: 'astc-5x4-unorm-srgb', 	ASTC5x5Unorm: 'astc-5x5-unorm', 	ASTC5x5UnormSRGB: 'astc-5x5-unorm-srgb', 	ASTC6x5Unorm: 'astc-6x5-unorm', 	ASTC6x5UnormSRGB: 'astc-6x5-unorm-srgb', 	ASTC6x6Unorm: 'astc-6x6-unorm', 	ASTC6x6UnormSRGB: 'astc-6x6-unorm-srgb', 	ASTC8x5Unorm: 'astc-8x5-unorm', 	ASTC8x5UnormSRGB: 'astc-8x5-unorm-srgb', 	ASTC8x6Unorm: 'astc-8x6-unorm', 	ASTC8x6UnormSRGB: 'astc-8x6-unorm-srgb', 	ASTC8x8Unorm: 'astc-8x8-unorm', 	ASTC8x8UnormSRGB: 'astc-8x8-unorm-srgb', 	ASTC10x5Unorm: 'astc-10x5-unorm', 	ASTC10x5UnormSRGB: 'astc-10x5-unorm-srgb', 	ASTC10x6Unorm: 'astc-10x6-unorm', 	ASTC10x6UnormSRGB: 'astc-10x6-unorm-srgb', 	ASTC10x8Unorm: 'astc-10x8-unorm', 	ASTC10x8UnormSRGB: 'astc-10x8-unorm-srgb', 	ASTC10x10Unorm: 'astc-10x10-unorm', 	ASTC10x10UnormSRGB: 'astc-10x10-unorm-srgb', 	ASTC12x10Unorm: 'astc-12x10-unorm', 	ASTC12x10UnormSRGB: 'astc-12x10-unorm-srgb', 	ASTC12x12Unorm: 'astc-12x12-unorm', 	ASTC12x12UnormSRGB: 'astc-12x12-unorm-srgb',  }
@EXPORT
export const GPUAddressMode = { 	ClampToEdge: 'clamp-to-edge', 	Repeat: 'repeat', 	MirrorRepeat: 'mirror-repeat' }
@EXPORT
export const GPUFilterMode = { 	Linear: 'linear', 	Nearest: 'nearest' }
@EXPORT
export const GPUBlendFactor = { 	Zero: 'zero', 	One: 'one', 	Src: 'src', 	OneMinusSrc: 'one-minus-src', 	SrcAlpha: 'src-alpha', 	OneMinusSrcAlpha: 'one-minus-src-alpha', 	Dst: 'dst', 	OneMinusDstColor: 'one-minus-dst', 	DstAlpha: 'dst-alpha', 	OneMinusDstAlpha: 'one-minus-dst-alpha', 	SrcAlphaSaturated: 'src-alpha-saturated', 	Constant: 'constant', 	OneMinusConstant: 'one-minus-constant' }
@EXPORT
export const GPUBlendOperation = { 	Add: 'add', 	Subtract: 'subtract', 	ReverseSubtract: 'reverse-subtract', 	Min: 'min', 	Max: 'max' }
@EXPORT
export const GPUColorWriteFlags = { 	None: 0, 	Red: 0x1, 	Green: 0x2, 	Blue: 0x4, 	Alpha: 0x8, 	All: 0xF }
@EXPORT
export const GPUStencilOperation = { 	Keep: 'keep', 	Zero: 'zero', 	Replace: 'replace', 	Invert: 'invert', 	IncrementClamp: 'increment-clamp', 	DecrementClamp: 'decrement-clamp', 	IncrementWrap: 'increment-wrap', 	DecrementWrap: 'decrement-wrap' }
@EXPORT
export const GPUBufferBindingType = { 	Uniform: 'uniform', 	Storage: 'storage', 	ReadOnlyStorage: 'read-only-storage' }
@EXPORT
export const GPUSamplerBindingType = { 	Filtering: 'filtering', 	NonFiltering: 'non-filtering', 	Comparison: 'comparison' }
@EXPORT
export const GPUTextureSampleType = { 	Float: 'float', 	UnfilterableFloat: 'unfilterable-float', 	Depth: 'depth', 	SInt: 'sint', 	UInt: 'uint' }
@EXPORT
export const GPUTextureDimension = { 	OneD: '1d', 	TwoD: '2d', 	ThreeD: '3d' }
@EXPORT
export const GPUTextureViewDimension = { 	OneD: '1d', 	TwoD: '2d', 	TwoDArray: '2d-array', 	Cube: 'cube', 	CubeArray: 'cube-array', 	ThreeD: '3d' }
@EXPORT
export const GPUTextureAspect = { 	All: 'all', 	StencilOnly: 'stencil-only', 	DepthOnly: 'depth-only' }
@EXPORT
export const GPUInputStepMode = { 	Vertex: 'vertex', 	Instance: 'instance' }
@EXPORT
export const GPUFeatureName = { 	DepthClipControl: 'depth-clip-control', 	Depth32FloatStencil8: 'depth32float-stencil8', 	TextureCompressionBC: 'texture-compression-bc', 	TextureCompressionETC2: 'texture-compression-etc2', 	TextureCompressionASTC: 'texture-compression-astc', 	TimestampQuery: 'timestamp-query', 	IndirectFirstInstance: 'indirect-first-instance', 	ShaderF16: 'shader-f16', 	RG11B10UFloat: 'rg11b10ufloat-renderable', 	BGRA8UNormStorage: 'bgra8unorm-storage', 	Float32Filterable: 'float32-filterable' }
@FILENAME
addons|renderers|webgpu|utils|WebGPUPipelineUtils.js
@CLASS
class WebGPUPipelineUtils {
@FILENAME
addons|renderers|webgpu|utils|WebGPUTextureMipmapUtils.js
@CLASS
class WebGPUTextureMipmapUtils {
@FILENAME
addons|renderers|webgpu|utils|WebGPUTextureUtils.js
@CLASS
class WebGPUTextureUtils {
@FILENAME
addons|renderers|webgpu|utils|WebGPUUtils.js
@CLASS
class WebGPUUtils {
@FILENAME
addons|shaders|ACESFilmicToneMappingShader.js
@EXPORT
export { ACESFilmicToneMappingShader }
@FILENAME
addons|shaders|AfterimageShader.js
@EXPORT
export { AfterimageShader }
@FILENAME
addons|shaders|BasicShader.js
@EXPORT
export { BasicShader }
@FILENAME
addons|shaders|BleachBypassShader.js
@EXPORT
export { BleachBypassShader }
@FILENAME
addons|shaders|BlendShader.js
@EXPORT
export { BlendShader }
@FILENAME
addons|shaders|BokehShader.js
@EXPORT
export { BokehShader }
@FILENAME
addons|shaders|BokehShader2.js
@EXPORT
export { BokehShader, BokehDepthShader }
@FILENAME
addons|shaders|BrightnessContrastShader.js
@EXPORT
export { BrightnessContrastShader }
@FILENAME
addons|shaders|ColorCorrectionShader.js
@EXPORT
export { ColorCorrectionShader }
@FILENAME
addons|shaders|ColorifyShader.js
@EXPORT
export { ColorifyShader }
@FILENAME
addons|shaders|ConvolutionShader.js
@EXPORT
export { ConvolutionShader }
@FILENAME
addons|shaders|CopyShader.js
@EXPORT
export { CopyShader }
@FILENAME
addons|shaders|DepthLimitedBlurShader.js
@EXPORT
export { DepthLimitedBlurShader, BlurShaderUtils }
@FILENAME
addons|shaders|DigitalGlitch.js
@EXPORT
export { DigitalGlitch }
@FILENAME
addons|shaders|DOFMipMapShader.js
@EXPORT
export { DOFMipMapShader }
@FILENAME
addons|shaders|DotScreenShader.js
@EXPORT
export { DotScreenShader }
@FILENAME
addons|shaders|ExposureShader.js
@EXPORT
export { ExposureShader }
@FILENAME
addons|shaders|FilmShader.js
@EXPORT
export { FilmShader }
@FILENAME
addons|shaders|FocusShader.js
@EXPORT
export { FocusShader }
@FILENAME
addons|shaders|FreiChenShader.js
@EXPORT
export { FreiChenShader }
@FILENAME
addons|shaders|FXAAShader.js
@EXPORT
export { FXAAShader }
@FILENAME
addons|shaders|GammaCorrectionShader.js
@EXPORT
export { GammaCorrectionShader }
@FILENAME
addons|shaders|GodRaysShader.js
@EXPORT
export { GodRaysDepthMaskShader, GodRaysGenerateShader, GodRaysCombineShader, GodRaysFakeSunShader }
@FILENAME
addons|shaders|HalftoneShader.js
@EXPORT
export { HalftoneShader }
@FILENAME
addons|shaders|HorizontalBlurShader.js
@EXPORT
export { HorizontalBlurShader }
@FILENAME
addons|shaders|HorizontalTiltShiftShader.js
@EXPORT
export { HorizontalTiltShiftShader }
@FILENAME
addons|shaders|HueSaturationShader.js
@EXPORT
export { HueSaturationShader }
@FILENAME
addons|shaders|KaleidoShader.js
@EXPORT
export { KaleidoShader }
@FILENAME
addons|shaders|LuminosityHighPassShader.js
@EXPORT
export { LuminosityHighPassShader }
@FILENAME
addons|shaders|LuminosityShader.js
@EXPORT
export { LuminosityShader }
@FILENAME
addons|shaders|MirrorShader.js
@EXPORT
export { MirrorShader }
@FILENAME
addons|shaders|MMDToonShader.js
@EXPORT
export { MMDToonShader }
@FILENAME
addons|shaders|NormalMapShader.js
@EXPORT
export { NormalMapShader }
@FILENAME
addons|shaders|OutputShader.js
@EXPORT
export { OutputShader }
@FILENAME
addons|shaders|RGBShiftShader.js
@EXPORT
export { RGBShiftShader }
@FILENAME
addons|shaders|SAOShader.js
@EXPORT
export { SAOShader }
@FILENAME
addons|shaders|SepiaShader.js
@EXPORT
export { SepiaShader }
@FILENAME
addons|shaders|SMAAShader.js
@EXPORT
export { SMAAEdgesShader, SMAAWeightsShader, SMAABlendShader }
@FILENAME
addons|shaders|SobelOperatorShader.js
@EXPORT
export { SobelOperatorShader }
@FILENAME
addons|shaders|SSAOShader.js
@EXPORT
export { SSAOShader, SSAODepthShader, SSAOBlurShader }
@FILENAME
addons|shaders|SSRShader.js
@EXPORT
export { SSRShader, SSRDepthShader, SSRBlurShader }
@CLASS
Classes/CalcIII/EqnsOfLines.aspx 					float t=(-cameraNear-viewPosition.z)/viewReflectDir.z; 					d1viewPosition=viewPosition+viewReflectDir*t; 				} 			#endif 			d1=viewPositionToXY(d1viewPosition);  			float totalLen=length(d1-d0); 			float xLen=d1.x-d0.x; 			float yLen=d1.y-d0.y; 			float totalStep=max(abs(xLen),abs(yLen)); 			float xSpan=xLen/totalStep; 			float ySpan=yLen/totalStep; 			for(float i=0.;i<float(MAX_STEP);i++){
@FILENAME
addons|shaders|SubsurfaceScatteringShader.js
@EXPORT
export { SubsurfaceScatteringShader }
@FILENAME
addons|shaders|TechnicolorShader.js
@EXPORT
export { TechnicolorShader }
@FILENAME
addons|shaders|ToonShader.js
@EXPORT
export { ToonShader1, ToonShader2, ToonShaderHatching, ToonShaderDotted }
@FILENAME
addons|shaders|TriangleBlurShader.js
@EXPORT
export { TriangleBlurShader }
@FILENAME
addons|shaders|UnpackDepthRGBAShader.js
@EXPORT
export { UnpackDepthRGBAShader }
@FILENAME
addons|shaders|VelocityShader.js
@EXPORT
export { VelocityShader }
@FILENAME
addons|shaders|VerticalBlurShader.js
@EXPORT
export { VerticalBlurShader }
@FILENAME
addons|shaders|VerticalTiltShiftShader.js
@EXPORT
export { VerticalTiltShiftShader }
@FILENAME
addons|shaders|VignetteShader.js
@EXPORT
export { VignetteShader }
@FILENAME
addons|shaders|VolumeShader.js
@EXPORT
export { VolumeRenderShader1 }
@FILENAME
addons|shaders|WaterRefractionShader.js
@EXPORT
export { WaterRefractionShader }
@FILENAME
addons|textures|FlakesTexture.js
@EXPORT
export { FlakesTexture }
@CLASS
class FlakesTexture {
@FILENAME
addons|utils|BufferGeometryUtils.js
@EXPORT
export function deepCloneAttribute( attribute ) {  	if ( attribute.isInstancedInterleavedBufferAttribute || attribute.isInterleavedBufferAttribute ) {  		return deinterleaveAttribute( attribute );  	}
@EXPORT
export function deinterleaveAttribute( attribute ) {  	const cons = attribute.data.array.constructor; 	const count = attribute.count; 	const itemSize = attribute.itemSize; 	const normalized = attribute.normalized;  	const array = new cons( count * itemSize ); 	let newAttribute; 	if ( attribute.isInstancedInterleavedBufferAttribute ) {  		newAttribute = new InstancedBufferAttribute( array, itemSize, normalized, attribute.meshPerAttribute );  	}
@EXPORT
export function deinterleaveGeometry( geometry ) {  	const attributes = geometry.attributes; 	const morphTargets = geometry.morphTargets; 	const attrMap = new Map();  	for ( const key in attributes ) {  		const attr = attributes[ key ]; 		if ( attr.isInterleavedBufferAttribute ) {  			if ( ! attrMap.has( attr ) ) {  				attrMap.set( attr, deinterleaveAttribute( attr ) );  			}
@EXPORT
export { 	computeMikkTSpaceTangents, 	mergeGeometries, 	mergeBufferGeometries, 	mergeAttributes, 	mergeBufferAttributes, 	interleaveAttributes, 	estimateBytesUsed, 	mergeVertices, 	toTrianglesDrawMode, 	computeMorphedAttributes, 	mergeGroups, 	toCreasedNormals }
@FILENAME
addons|utils|CameraUtils.js
@EXPORT
export { frameCorners }
@FILENAME
addons|utils|GeometryCompressionUtils.js
@EXPORT
export { 	compressNormals, 	compressPositions, 	compressUvs, }
@FILENAME
addons|utils|GeometryUtils.js
@EXPORT
export { 	hilbert2D, 	hilbert3D, 	gosper, }
@FILENAME
addons|utils|GPUStatsPanel.js
@EXPORT
export class GPUStatsPanel extends Stats.Panel {  	constructor( context, name = 'GPU MS' ) {  		super( name, '#f90', '#210' );  		let isWebGL2 = true; 		let extension = context.getExtension( 'EXT_disjoint_timer_query_webgl2' ); 		if ( extension === null ) {  			isWebGL2 = false; 			extension = context.getExtension( 'EXT_disjoint_timer_query' );  			if ( extension === null ) {  				console.warn( 'GPUStatsPanel: disjoint_time_query extension not available.' );  			}
@CLASS
class GPUStatsPanel extends Stats.Panel {
@FILENAME
addons|utils|LDrawUtils.js
@EXPORT
export { LDrawUtils }
@CLASS
class LDrawUtils {
@FILENAME
addons|utils|PackedPhongMaterial.js
@EXPORT
export { PackedPhongMaterial }
@CLASS
class PackedPhongMaterial extends MeshPhongMaterial {
@FILENAME
addons|utils|SceneUtils.js
@EXPORT
export { 	createMeshesFromInstancedMesh, 	createMeshesFromMultiMaterialMesh, 	createMultiMaterialObject, 	reduceVertices, 	sortInstancedMesh }
@FILENAME
addons|utils|ShadowMapViewer.js
@EXPORT
export { ShadowMapViewer }
@CLASS
class ShadowMapViewer {
@FILENAME
addons|utils|SkeletonUtils.js
@EXPORT
export { 	retarget, 	retargetClip, 	clone, }
@FILENAME
addons|utils|TextureUtils.js
@EXPORT
export function decompress( texture, maxTextureSize = Infinity, renderer = null ) {  	if ( ! fullscreenQuadGeometry ) fullscreenQuadGeometry = new PlaneGeometry( 2, 2, 1, 1 ); 	if ( ! fullscreenQuadMaterial ) fullscreenQuadMaterial = new ShaderMaterial( { 		uniforms: { blitTexture: new Uniform( texture ) }
@FILENAME
addons|utils|UVsDebug.js
@EXPORT
export { UVsDebug }
@FILENAME
addons|utils|WorkerPool.js
@EXPORT
export class WorkerPool {  	constructor( pool = 4 ) {  		this.pool = pool; 		this.queue = []; 		this.workers = []; 		this.workersResolve = []; 		this.workerStatus = 0;  	}
@CLASS
class WorkerPool {
@FILENAME
addons|webxr|ARButton.js
@EXPORT
export { ARButton }
@CLASS
class ARButton {
@FILENAME
addons|webxr|OculusHandModel.js
@EXPORT
export { OculusHandModel }
@CLASS
class OculusHandModel extends Object3D {
@FILENAME
addons|webxr|OculusHandPointerModel.js
@EXPORT
export { OculusHandPointerModel }
@CLASS
class OculusHandPointerModel extends THREE.Object3D {
@FILENAME
addons|webxr|Text2D.js
@EXPORT
export { createText }
@FILENAME
addons|webxr|VRButton.js
@EXPORT
export { VRButton }
@CLASS
class VRButton {
@FILENAME
addons|webxr|XRButton.js
@EXPORT
export { XRButton }
@CLASS
class XRButton {
@FILENAME
addons|webxr|XRControllerModelFactory.js
@EXPORT
export { XRControllerModelFactory }
@CLASS
class XRControllerModel extends Object3D {
@CLASS
class XRControllerModelFactory {
@FILENAME
addons|webxr|XREstimatedLight.js
@EXPORT
export class XREstimatedLight extends Group {  	constructor( renderer, environmentEstimation = true ) {  		super();  		this.lightProbe = new LightProbe(); 		this.lightProbe.intensity = 0; 		this.add( this.lightProbe );  		this.directionalLight = new DirectionalLight(); 		this.directionalLight.intensity = 0; 		this.add( this.directionalLight );  		// Will be set to a cube map in the SessionLightProbe is environment estimation is 		// available and requested. 		this.environment = null;  		let sessionLightProbe = null; 		let estimationStarted = false; 		renderer.xr.addEventListener( 'sessionstart', () => {  			const session = renderer.xr.getSession();  			if ( 'requestLightProbe' in session ) {  				session.requestLightProbe( {  					reflectionFormat: session.preferredReflectionFormat  				}
@CLASS
class SessionLightProbe {
@CLASS
class is available then we can also query an 		// estimated reflection cube map. 		if ( environmentEstimation && 'XRWebGLBinding' in window ) {
@CLASS
class XREstimatedLight extends Group {
@FILENAME
addons|webxr|XRHandMeshModel.js
@EXPORT
export { XRHandMeshModel }
@CLASS
class XRHandMeshModel {
@FILENAME
addons|webxr|XRHandModelFactory.js
@EXPORT
export { XRHandModelFactory }
@CLASS
class XRHandModel extends Object3D {
@CLASS
class XRHandModelFactory {
@FILENAME
addons|webxr|XRHandPrimitiveModel.js
@EXPORT
export { XRHandPrimitiveModel }
@CLASS
class XRHandPrimitiveModel {
@FILENAME
addons|webxr|XRPlanes.js
@EXPORT
export { XRPlanes }
@CLASS
class XRPlanes extends Object3D {
`; 
