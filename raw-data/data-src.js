DATA_SRC = ` 
@FILENAME
src|constants.js
@EXPORT
export const REVISION = '156';  export const MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }
@EXPORT
export const MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }
@EXPORT
export const TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }
@FILENAME
src|Three.js
@EXPORT
export { WebGLArrayRenderTarget }
@EXPORT
export { WebGL3DRenderTarget }
@EXPORT
export { WebGLMultipleRenderTargets }
@EXPORT
export { WebGLCubeRenderTarget }
@EXPORT
export { WebGLRenderTarget }
@EXPORT
export { WebGLRenderer }
@EXPORT
export { WebGL1Renderer }
@EXPORT
export { ShaderLib }
@EXPORT
export { UniformsLib }
@EXPORT
export { UniformsUtils }
@EXPORT
export { ShaderChunk }
@EXPORT
export { FogExp2 }
@EXPORT
export { Fog }
@EXPORT
export { Scene }
@EXPORT
export { Sprite }
@EXPORT
export { LOD }
@EXPORT
export { SkinnedMesh }
@EXPORT
export { Skeleton }
@EXPORT
export { Bone }
@EXPORT
export { Mesh }
@EXPORT
export { InstancedMesh }
@EXPORT
export { LineSegments }
@EXPORT
export { LineLoop }
@EXPORT
export { Line }
@EXPORT
export { Points }
@EXPORT
export { Group }
@EXPORT
export { VideoTexture }
@EXPORT
export { FramebufferTexture }
@EXPORT
export { Source }
@EXPORT
export { DataTexture }
@EXPORT
export { DataArrayTexture }
@EXPORT
export { Data3DTexture }
@EXPORT
export { CompressedTexture }
@EXPORT
export { CompressedArrayTexture }
@EXPORT
export { CompressedCubeTexture }
@EXPORT
export { CubeTexture }
@EXPORT
export { CanvasTexture }
@EXPORT
export { DepthTexture }
@EXPORT
export { Texture }
@EXPORT
export * from './geometries/Geometries.js'; export * from './materials/Materials.js'; export { AnimationLoader }
@EXPORT
export * from './materials/Materials.js'; export { AnimationLoader }
@EXPORT
export { AnimationLoader }
@EXPORT
export { CompressedTextureLoader }
@EXPORT
export { CubeTextureLoader }
@EXPORT
export { DataTextureLoader }
@EXPORT
export { TextureLoader }
@EXPORT
export { ObjectLoader }
@EXPORT
export { MaterialLoader }
@EXPORT
export { BufferGeometryLoader }
@EXPORT
export { DefaultLoadingManager, LoadingManager }
@EXPORT
export { ImageLoader }
@EXPORT
export { ImageBitmapLoader }
@EXPORT
export { FileLoader }
@EXPORT
export { Loader }
@EXPORT
export { LoaderUtils }
@EXPORT
export { Cache }
@EXPORT
export { AudioLoader }
@EXPORT
export { SpotLight }
@EXPORT
export { PointLight }
@EXPORT
export { RectAreaLight }
@EXPORT
export { HemisphereLight }
@EXPORT
export { HemisphereLightProbe }
@EXPORT
export { DirectionalLight }
@EXPORT
export { AmbientLight }
@EXPORT
export { AmbientLightProbe }
@EXPORT
export { Light }
@EXPORT
export { LightProbe }
@EXPORT
export { StereoCamera }
@EXPORT
export { PerspectiveCamera }
@EXPORT
export { OrthographicCamera }
@EXPORT
export { CubeCamera }
@EXPORT
export { ArrayCamera }
@EXPORT
export { Camera }
@EXPORT
export { AudioListener }
@EXPORT
export { PositionalAudio }
@EXPORT
export { AudioContext }
@EXPORT
export { AudioAnalyser }
@EXPORT
export { Audio }
@EXPORT
export { VectorKeyframeTrack }
@EXPORT
export { StringKeyframeTrack }
@EXPORT
export { QuaternionKeyframeTrack }
@EXPORT
export { NumberKeyframeTrack }
@EXPORT
export { ColorKeyframeTrack }
@EXPORT
export { BooleanKeyframeTrack }
@EXPORT
export { PropertyMixer }
@EXPORT
export { PropertyBinding }
@EXPORT
export { KeyframeTrack }
@EXPORT
export { AnimationUtils }
@EXPORT
export { AnimationObjectGroup }
@EXPORT
export { AnimationMixer }
@EXPORT
export { AnimationClip }
@EXPORT
export { AnimationAction }
@EXPORT
export { RenderTarget }
@EXPORT
export { Uniform }
@EXPORT
export { UniformsGroup }
@EXPORT
export { InstancedBufferGeometry }
@EXPORT
export { BufferGeometry }
@EXPORT
export { InterleavedBufferAttribute }
@EXPORT
export { InstancedInterleavedBuffer }
@EXPORT
export { InterleavedBuffer }
@EXPORT
export { InstancedBufferAttribute }
@EXPORT
export { GLBufferAttribute }
@EXPORT
export * from './core/BufferAttribute.js'; export { Object3D }
@EXPORT
export { Object3D }
@EXPORT
export { Raycaster }
@EXPORT
export { Layers }
@EXPORT
export { EventDispatcher }
@EXPORT
export { Clock }
@EXPORT
export { QuaternionLinearInterpolant }
@EXPORT
export { LinearInterpolant }
@EXPORT
export { DiscreteInterpolant }
@EXPORT
export { CubicInterpolant }
@EXPORT
export { Interpolant }
@EXPORT
export { Triangle }
@EXPORT
export { MathUtils }
@EXPORT
export { Spherical }
@EXPORT
export { Cylindrical }
@EXPORT
export { Plane }
@EXPORT
export { Frustum }
@EXPORT
export { Sphere }
@EXPORT
export { Ray }
@EXPORT
export { Matrix4 }
@EXPORT
export { Matrix3 }
@EXPORT
export { Box3 }
@EXPORT
export { Box2 }
@EXPORT
export { Line3 }
@EXPORT
export { Euler }
@EXPORT
export { Vector4 }
@EXPORT
export { Vector3 }
@EXPORT
export { Vector2 }
@EXPORT
export { Quaternion }
@EXPORT
export { Color }
@EXPORT
export { ColorManagement }
@EXPORT
export { SphericalHarmonics3 }
@EXPORT
export { SpotLightHelper }
@EXPORT
export { SkeletonHelper }
@EXPORT
export { PointLightHelper }
@EXPORT
export { HemisphereLightHelper }
@EXPORT
export { GridHelper }
@EXPORT
export { PolarGridHelper }
@EXPORT
export { DirectionalLightHelper }
@EXPORT
export { CameraHelper }
@EXPORT
export { BoxHelper }
@EXPORT
export { Box3Helper }
@EXPORT
export { PlaneHelper }
@EXPORT
export { ArrowHelper }
@EXPORT
export { AxesHelper }
@EXPORT
export * from './extras/curves/Curves.js'; export { Shape }
@EXPORT
export { Shape }
@EXPORT
export { Path }
@EXPORT
export { ShapePath }
@EXPORT
export { CurvePath }
@EXPORT
export { Curve }
@EXPORT
export { DataUtils }
@EXPORT
export { ImageUtils }
@EXPORT
export { ShapeUtils }
@EXPORT
export { PMREMGenerator }
@EXPORT
export { WebGLUtils }
@EXPORT
export { createCanvasElement }
@EXPORT
export * from './constants.js'; export * from './Three.Legacy.js';  if ( typeof __THREE_DEVTOOLS__ !== 'undefined' ) {  	__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent( 'register', { detail: { 		revision: REVISION, 	}
@EXPORT
export * from './Three.Legacy.js';  if ( typeof __THREE_DEVTOOLS__ !== 'undefined' ) {  	__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent( 'register', { detail: { 		revision: REVISION, 	}
@FILENAME
src|Three.Legacy.js
@FILENAME
src|utils.js
@EXPORT
export { arrayMin, arrayMax, arrayNeedsUint32, getTypedArray, createElementNS, createCanvasElement, warnOnce }
@FILENAME
src|animation|AnimationAction.js
@EXPORT
export { AnimationAction }
@CLASS
class AnimationAction {
@FILENAME
src|animation|AnimationClip.js
@EXPORT
export { AnimationClip }
@CLASS
class AnimationClip {
@CLASS
classes can define a static parse method 	if ( trackType.parse !== undefined ) {
@FILENAME
src|animation|AnimationMixer.js
@EXPORT
export { AnimationMixer }
@CLASS
class AnimationMixer extends EventDispatcher {
@FILENAME
src|animation|AnimationObjectGroup.js
@EXPORT
export { AnimationObjectGroup }
@CLASS
class appear as one object to the mixer,  *    so cache control of the individual objects must be done  *    on the group.  *  * Limitation:  *  *  - The animated properties must be compatible among the  *    all objects in the group.  *  *  - A single property can either be controlled through a  *    target group or directly, but not both.  */  class AnimationObjectGroup {
@CLASS
class AnimationObjectGroup {
@FILENAME
src|animation|AnimationUtils.js
@EXPORT
export { 	arraySlice, 	convertArray, 	isTypedArray, 	getKeyframeOrder, 	sortedArray, 	flattenJSON, 	subclip, 	makeClipAdditive, 	AnimationUtils }
@FILENAME
src|animation|KeyframeTrack.js
@EXPORT
export { KeyframeTrack }
@CLASS
class KeyframeTrack {
@CLASS
classes can define a static toJSON method 		if ( trackType.toJSON !== this.toJSON ) {
@FILENAME
src|animation|PropertyBinding.js
@EXPORT
export { PropertyBinding }
@CLASS
class Composite {
@CLASS
class uses a State pattern on a per-method basis: // 'bind' sets 'this.getValue' / 'setValue' and shadows the // prototype version of these methods with one that represents // the bound state. When the property is not found, the methods // become no-ops. class PropertyBinding {
@CLASS
class PropertyBinding {
@FILENAME
src|animation|PropertyMixer.js
@EXPORT
export { PropertyMixer }
@CLASS
class PropertyMixer {
@FILENAME
src|animation|tracks|BooleanKeyframeTrack.js
@EXPORT
export { BooleanKeyframeTrack }
@CLASS
class BooleanKeyframeTrack extends KeyframeTrack {
@FILENAME
src|animation|tracks|ColorKeyframeTrack.js
@EXPORT
export { ColorKeyframeTrack }
@CLASS
class ColorKeyframeTrack extends KeyframeTrack {
@FILENAME
src|animation|tracks|NumberKeyframeTrack.js
@EXPORT
export { NumberKeyframeTrack }
@CLASS
class NumberKeyframeTrack extends KeyframeTrack {
@FILENAME
src|animation|tracks|QuaternionKeyframeTrack.js
@EXPORT
export { QuaternionKeyframeTrack }
@CLASS
class QuaternionKeyframeTrack extends KeyframeTrack {
@FILENAME
src|animation|tracks|StringKeyframeTrack.js
@EXPORT
export { StringKeyframeTrack }
@CLASS
class StringKeyframeTrack extends KeyframeTrack {
@FILENAME
src|animation|tracks|VectorKeyframeTrack.js
@EXPORT
export { VectorKeyframeTrack }
@CLASS
class VectorKeyframeTrack extends KeyframeTrack {
@FILENAME
src|audio|Audio.js
@EXPORT
export { Audio }
@CLASS
class Audio extends Object3D {
@FILENAME
src|audio|AudioAnalyser.js
@EXPORT
export { AudioAnalyser }
@CLASS
class AudioAnalyser {
@FILENAME
src|audio|AudioContext.js
@EXPORT
export { AudioContext }
@CLASS
class AudioContext {
@FILENAME
src|audio|AudioListener.js
@EXPORT
export { AudioListener }
@CLASS
class AudioListener extends Object3D {
@FILENAME
src|audio|PositionalAudio.js
@EXPORT
export { PositionalAudio }
@CLASS
class PositionalAudio extends Audio {
@FILENAME
src|cameras|ArrayCamera.js
@EXPORT
export { ArrayCamera }
@CLASS
class ArrayCamera extends PerspectiveCamera {
@FILENAME
src|cameras|Camera.js
@EXPORT
export { Camera }
@CLASS
class Camera extends Object3D {
@FILENAME
src|cameras|CubeCamera.js
@EXPORT
export { CubeCamera }
@CLASS
class CubeCamera extends Object3D {
@FILENAME
src|cameras|OrthographicCamera.js
@EXPORT
export { OrthographicCamera }
@CLASS
class OrthographicCamera extends Camera {
@FILENAME
src|cameras|PerspectiveCamera.js
@EXPORT
export { PerspectiveCamera }
@CLASS
class PerspectiveCamera extends Camera {
@FILENAME
src|cameras|StereoCamera.js
@EXPORT
export { StereoCamera }
@CLASS
class StereoCamera {
@FILENAME
src|core|BufferAttribute.js
@EXPORT
export { 	Float64BufferAttribute, 	Float32BufferAttribute, 	Float16BufferAttribute, 	Uint32BufferAttribute, 	Int32BufferAttribute, 	Uint16BufferAttribute, 	Int16BufferAttribute, 	Uint8ClampedBufferAttribute, 	Uint8BufferAttribute, 	Int8BufferAttribute, 	BufferAttribute }
@CLASS
class BufferAttribute {
@CLASS
class Int8BufferAttribute extends BufferAttribute {
@CLASS
class Uint8BufferAttribute extends BufferAttribute {
@CLASS
class Uint8ClampedBufferAttribute extends BufferAttribute {
@CLASS
class Int16BufferAttribute extends BufferAttribute {
@CLASS
class Uint16BufferAttribute extends BufferAttribute {
@CLASS
class Int32BufferAttribute extends BufferAttribute {
@CLASS
class Uint32BufferAttribute extends BufferAttribute {
@CLASS
class Float16BufferAttribute extends BufferAttribute {
@CLASS
class Float32BufferAttribute extends BufferAttribute {
@CLASS
class Float64BufferAttribute extends BufferAttribute {
@FILENAME
src|core|BufferGeometry.js
@EXPORT
export { BufferGeometry }
@CLASS
class BufferGeometry extends EventDispatcher {
@FILENAME
src|core|Clock.js
@EXPORT
export { Clock }
@CLASS
class Clock {
@FILENAME
src|core|EventDispatcher.js
@EXPORT
export { EventDispatcher }
@CLASS
class EventDispatcher {
@FILENAME
src|core|GLBufferAttribute.js
@EXPORT
export { GLBufferAttribute }
@CLASS
class GLBufferAttribute {
@FILENAME
src|core|InstancedBufferAttribute.js
@EXPORT
export { InstancedBufferAttribute }
@CLASS
class InstancedBufferAttribute extends BufferAttribute {
@FILENAME
src|core|InstancedBufferGeometry.js
@EXPORT
export { InstancedBufferGeometry }
@CLASS
class InstancedBufferGeometry extends BufferGeometry {
@FILENAME
src|core|InstancedInterleavedBuffer.js
@EXPORT
export { InstancedInterleavedBuffer }
@CLASS
class InstancedInterleavedBuffer extends InterleavedBuffer {
@FILENAME
src|core|InterleavedBuffer.js
@EXPORT
export { InterleavedBuffer }
@CLASS
class InterleavedBuffer {
@FILENAME
src|core|InterleavedBufferAttribute.js
@EXPORT
export { InterleavedBufferAttribute }
@CLASS
class InterleavedBufferAttribute {
@FILENAME
src|core|Layers.js
@EXPORT
export { Layers }
@CLASS
class Layers {
@FILENAME
src|core|Object3D.js
@EXPORT
export { Object3D }
@CLASS
class Object3D extends EventDispatcher {
@FILENAME
src|core|Raycaster.js
@EXPORT
export { Raycaster }
@CLASS
class Raycaster {
@FILENAME
src|core|RenderTarget.js
@EXPORT
export { RenderTarget }
@CLASS
class RenderTarget extends EventDispatcher {
@FILENAME
src|core|Uniform.js
@EXPORT
export { Uniform }
@CLASS
class Uniform {
@FILENAME
src|core|UniformsGroup.js
@EXPORT
export { UniformsGroup }
@CLASS
class UniformsGroup extends EventDispatcher {
@FILENAME
src|extras|DataUtils.js
@EXPORT
export { 	toHalfFloat, 	fromHalfFloat, 	DataUtils }
@FILENAME
src|extras|Earcut.js
@EXPORT
export { Earcut }
@FILENAME
src|extras|ImageUtils.js
@EXPORT
export { ImageUtils }
@CLASS
class ImageUtils {
@FILENAME
src|extras|PMREMGenerator.js
@EXPORT
export { PMREMGenerator }
@CLASS
class generates a Prefiltered, Mipmapped Radiance Environment Map  * (PMREM) from a cubeMap environment texture. This allows different levels of  * blur to be quickly accessed based on material roughness. It is packed into a  * special CubeUV format that allows us to perform custom interpolation so that  * we can support nonlinear formats such as RGBE. Unlike a traditional mipmap  * chain, it only goes down to the LOD_MIN level (above), and then creates extra  * even more filtered 'mips' at the same LOD_MIN resolution, associated with  * higher roughness levels. In this way we maintain resolution to smoothly  * interpolate diffuse lighting while limiting sampling computation.  *  * Paper: Fast, Accurate Image-Based Lighting  * https://drive.google.com/file/d/15y8r_UpKlU9SvV4ILb0C3qCPecS8pvLz/view */  class PMREMGenerator {
@CLASS
class PMREMGenerator {
@CLASS
class, 	 * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on 	 * one of them will cause any others to also become unusable. 	 */ 	dispose() {
@FILENAME
src|extras|ShapeUtils.js
@EXPORT
export { ShapeUtils }
@CLASS
class ShapeUtils {
@FILENAME
src|extras|core|Curve.js
@EXPORT
export { Curve }
@CLASS
class Curve {
@CLASS
class method to overwrite and implement in subclasses 	//	- t [0 .. 1]  	getPoint( /* t, optionalTarget */ ) {
@CLASS
classes 	//	- t [0 .. 1]  	getPoint( /* t, optionalTarget */ ) {
@FILENAME
src|extras|core|CurvePath.js
@EXPORT
export { CurvePath }
@CLASS
class CurvePath extends Curve {
@FILENAME
src|extras|core|Interpolations.js
@EXPORT
export { CatmullRom, QuadraticBezier, CubicBezier }
@FILENAME
src|extras|core|Path.js
@EXPORT
export { Path }
@CLASS
class Path extends CurvePath {
@FILENAME
src|extras|core|Shape.js
@EXPORT
export { Shape }
@CLASS
class Shape extends Path {
@FILENAME
src|extras|core|ShapePath.js
@EXPORT
export { ShapePath }
@CLASS
class ShapePath {
@FILENAME
src|extras|curves|ArcCurve.js
@EXPORT
export { ArcCurve }
@CLASS
class ArcCurve extends EllipseCurve {
@FILENAME
src|extras|curves|CatmullRomCurve3.js
@EXPORT
export { CatmullRomCurve3 }
@CLASS
class could be used for reusing some variables and calculations, but for three.js curve use, it could be possible inlined and flatten into a single function call which can be placed in CurveUtils. */  function CubicPoly() {
@CLASS
class CatmullRomCurve3 extends Curve {
@FILENAME
src|extras|curves|CubicBezierCurve.js
@EXPORT
export { CubicBezierCurve }
@CLASS
class CubicBezierCurve extends Curve {
@FILENAME
src|extras|curves|CubicBezierCurve3.js
@EXPORT
export { CubicBezierCurve3 }
@CLASS
class CubicBezierCurve3 extends Curve {
@FILENAME
src|extras|curves|Curves.js
@EXPORT
export { ArcCurve }
@EXPORT
export { CatmullRomCurve3 }
@EXPORT
export { CubicBezierCurve }
@EXPORT
export { CubicBezierCurve3 }
@EXPORT
export { EllipseCurve }
@EXPORT
export { LineCurve }
@EXPORT
export { LineCurve3 }
@EXPORT
export { QuadraticBezierCurve }
@EXPORT
export { QuadraticBezierCurve3 }
@EXPORT
export { SplineCurve }
@FILENAME
src|extras|curves|EllipseCurve.js
@EXPORT
export { EllipseCurve }
@CLASS
class EllipseCurve extends Curve {
@FILENAME
src|extras|curves|LineCurve.js
@EXPORT
export { LineCurve }
@CLASS
class LineCurve extends Curve {
@FILENAME
src|extras|curves|LineCurve3.js
@EXPORT
export { LineCurve3 }
@CLASS
class LineCurve3 extends Curve {
@FILENAME
src|extras|curves|QuadraticBezierCurve.js
@EXPORT
export { QuadraticBezierCurve }
@CLASS
class QuadraticBezierCurve extends Curve {
@FILENAME
src|extras|curves|QuadraticBezierCurve3.js
@EXPORT
export { QuadraticBezierCurve3 }
@CLASS
class QuadraticBezierCurve3 extends Curve {
@FILENAME
src|extras|curves|SplineCurve.js
@EXPORT
export { SplineCurve }
@CLASS
class SplineCurve extends Curve {
@FILENAME
src|geometries|BoxGeometry.js
@EXPORT
export { BoxGeometry }
@CLASS
class BoxGeometry extends BufferGeometry {
@FILENAME
src|geometries|CapsuleGeometry.js
@EXPORT
export { CapsuleGeometry }
@CLASS
class CapsuleGeometry extends LatheGeometry {
@FILENAME
src|geometries|CircleGeometry.js
@EXPORT
export { CircleGeometry }
@CLASS
class CircleGeometry extends BufferGeometry {
@FILENAME
src|geometries|ConeGeometry.js
@EXPORT
export { ConeGeometry }
@CLASS
class ConeGeometry extends CylinderGeometry {
@FILENAME
src|geometries|CylinderGeometry.js
@EXPORT
export { CylinderGeometry }
@CLASS
class CylinderGeometry extends BufferGeometry {
@FILENAME
src|geometries|DodecahedronGeometry.js
@EXPORT
export { DodecahedronGeometry }
@CLASS
class DodecahedronGeometry extends PolyhedronGeometry {
@FILENAME
src|geometries|EdgesGeometry.js
@EXPORT
export { EdgesGeometry }
@CLASS
class EdgesGeometry extends BufferGeometry {
@FILENAME
src|geometries|ExtrudeGeometry.js
@EXPORT
export { ExtrudeGeometry }
@CLASS
class ExtrudeGeometry extends BufferGeometry {
@FILENAME
src|geometries|Geometries.js
@FILENAME
src|geometries|IcosahedronGeometry.js
@EXPORT
export { IcosahedronGeometry }
@CLASS
class IcosahedronGeometry extends PolyhedronGeometry {
@FILENAME
src|geometries|LatheGeometry.js
@EXPORT
export { LatheGeometry }
@CLASS
class LatheGeometry extends BufferGeometry {
@FILENAME
src|geometries|OctahedronGeometry.js
@EXPORT
export { OctahedronGeometry }
@CLASS
class OctahedronGeometry extends PolyhedronGeometry {
@FILENAME
src|geometries|PlaneGeometry.js
@EXPORT
export { PlaneGeometry }
@CLASS
class PlaneGeometry extends BufferGeometry {
@FILENAME
src|geometries|PolyhedronGeometry.js
@EXPORT
export { PolyhedronGeometry }
@CLASS
class PolyhedronGeometry extends BufferGeometry {
@FILENAME
src|geometries|RingGeometry.js
@EXPORT
export { RingGeometry }
@CLASS
class RingGeometry extends BufferGeometry {
@FILENAME
src|geometries|ShapeGeometry.js
@EXPORT
export { ShapeGeometry }
@CLASS
class ShapeGeometry extends BufferGeometry {
@FILENAME
src|geometries|SphereGeometry.js
@EXPORT
export { SphereGeometry }
@CLASS
class SphereGeometry extends BufferGeometry {
@FILENAME
src|geometries|TetrahedronGeometry.js
@EXPORT
export { TetrahedronGeometry }
@CLASS
class TetrahedronGeometry extends PolyhedronGeometry {
@FILENAME
src|geometries|TorusGeometry.js
@EXPORT
export { TorusGeometry }
@CLASS
class TorusGeometry extends BufferGeometry {
@FILENAME
src|geometries|TorusKnotGeometry.js
@EXPORT
export { TorusKnotGeometry }
@CLASS
class TorusKnotGeometry extends BufferGeometry {
@FILENAME
src|geometries|TubeGeometry.js
@EXPORT
export { TubeGeometry }
@CLASS
class TubeGeometry extends BufferGeometry {
@FILENAME
src|geometries|WireframeGeometry.js
@EXPORT
export { WireframeGeometry }
@CLASS
class WireframeGeometry extends BufferGeometry {
@FILENAME
src|helpers|ArrowHelper.js
@EXPORT
export { ArrowHelper }
@CLASS
class ArrowHelper extends Object3D {
@FILENAME
src|helpers|AxesHelper.js
@EXPORT
export { AxesHelper }
@CLASS
class AxesHelper extends LineSegments {
@FILENAME
src|helpers|Box3Helper.js
@EXPORT
export { Box3Helper }
@CLASS
class Box3Helper extends LineSegments {
@FILENAME
src|helpers|BoxHelper.js
@EXPORT
export { BoxHelper }
@CLASS
class BoxHelper extends LineSegments {
@FILENAME
src|helpers|CameraHelper.js
@EXPORT
export { CameraHelper }
@CLASS
class CameraHelper extends LineSegments {
@FILENAME
src|helpers|DirectionalLightHelper.js
@EXPORT
export { DirectionalLightHelper }
@CLASS
class DirectionalLightHelper extends Object3D {
@FILENAME
src|helpers|GridHelper.js
@EXPORT
export { GridHelper }
@CLASS
class GridHelper extends LineSegments {
@FILENAME
src|helpers|HemisphereLightHelper.js
@EXPORT
export { HemisphereLightHelper }
@CLASS
class HemisphereLightHelper extends Object3D {
@FILENAME
src|helpers|PlaneHelper.js
@EXPORT
export { PlaneHelper }
@CLASS
class PlaneHelper extends Line {
@FILENAME
src|helpers|PointLightHelper.js
@EXPORT
export { PointLightHelper }
@CLASS
class PointLightHelper extends Mesh {
@FILENAME
src|helpers|PolarGridHelper.js
@EXPORT
export { PolarGridHelper }
@CLASS
class PolarGridHelper extends LineSegments {
@FILENAME
src|helpers|SkeletonHelper.js
@EXPORT
export { SkeletonHelper }
@CLASS
class SkeletonHelper extends LineSegments {
@FILENAME
src|helpers|SpotLightHelper.js
@EXPORT
export { SpotLightHelper }
@CLASS
class SpotLightHelper extends Object3D {
@FILENAME
src|lights|AmbientLight.js
@EXPORT
export { AmbientLight }
@CLASS
class AmbientLight extends Light {
@FILENAME
src|lights|AmbientLightProbe.js
@EXPORT
export { AmbientLightProbe }
@CLASS
class AmbientLightProbe extends LightProbe {
@FILENAME
src|lights|DirectionalLight.js
@EXPORT
export { DirectionalLight }
@CLASS
class DirectionalLight extends Light {
@FILENAME
src|lights|DirectionalLightShadow.js
@EXPORT
export { DirectionalLightShadow }
@CLASS
class DirectionalLightShadow extends LightShadow {
@FILENAME
src|lights|HemisphereLight.js
@EXPORT
export { HemisphereLight }
@CLASS
class HemisphereLight extends Light {
@FILENAME
src|lights|HemisphereLightProbe.js
@EXPORT
export { HemisphereLightProbe }
@CLASS
class HemisphereLightProbe extends LightProbe {
@FILENAME
src|lights|Light.js
@EXPORT
export { Light }
@CLASS
class Light extends Object3D {
@CLASS
class; some subclasses override.  	}  	copy( source, recursive ) {
@CLASS
classes override.  	}  	copy( source, recursive ) {
@FILENAME
src|lights|LightProbe.js
@EXPORT
export { LightProbe }
@CLASS
class LightProbe extends Light {
@FILENAME
src|lights|LightShadow.js
@EXPORT
export { LightShadow }
@CLASS
class LightShadow {
@FILENAME
src|lights|PointLight.js
@EXPORT
export { PointLight }
@CLASS
class PointLight extends Light {
@FILENAME
src|lights|PointLightShadow.js
@EXPORT
export { PointLightShadow }
@CLASS
class PointLightShadow extends LightShadow {
@FILENAME
src|lights|RectAreaLight.js
@EXPORT
export { RectAreaLight }
@CLASS
class RectAreaLight extends Light {
@FILENAME
src|lights|SpotLight.js
@EXPORT
export { SpotLight }
@CLASS
class SpotLight extends Light {
@FILENAME
src|lights|SpotLightShadow.js
@EXPORT
export { SpotLightShadow }
@CLASS
class SpotLightShadow extends LightShadow {
@FILENAME
src|loaders|AnimationLoader.js
@EXPORT
export { AnimationLoader }
@CLASS
class AnimationLoader extends Loader {
@FILENAME
src|loaders|AudioLoader.js
@EXPORT
export { AudioLoader }
@CLASS
class AudioLoader extends Loader {
@FILENAME
src|loaders|BufferGeometryLoader.js
@EXPORT
export { BufferGeometryLoader }
@CLASS
class BufferGeometryLoader extends Loader {
@FILENAME
src|loaders|Cache.js
@EXPORT
export { Cache }
@FILENAME
src|loaders|CompressedTextureLoader.js
@EXPORT
export { CompressedTextureLoader }
@CLASS
class to block based textures loader (dds, pvr, ...)  *  * Sub classes have to implement the parse() method which will be used in load().  */  class CompressedTextureLoader extends Loader {
@CLASS
classes have to implement the parse() method which will be used in load().  */  class CompressedTextureLoader extends Loader {
@CLASS
class CompressedTextureLoader extends Loader {
@FILENAME
src|loaders|CubeTextureLoader.js
@EXPORT
export { CubeTextureLoader }
@CLASS
class CubeTextureLoader extends Loader {
@FILENAME
src|loaders|DataTextureLoader.js
@EXPORT
export { DataTextureLoader }
@CLASS
class to load generic binary textures formats (rgbe, hdr, ...)  *  * Sub classes have to implement the parse() method which will be used in load().  */  class DataTextureLoader extends Loader {
@CLASS
classes have to implement the parse() method which will be used in load().  */  class DataTextureLoader extends Loader {
@CLASS
class DataTextureLoader extends Loader {
@FILENAME
src|loaders|FileLoader.js
@EXPORT
export { FileLoader }
@CLASS
class HttpError extends Error {
@CLASS
class FileLoader extends Loader {
@FILENAME
src|loaders|ImageBitmapLoader.js
@EXPORT
export { ImageBitmapLoader }
@CLASS
class ImageBitmapLoader extends Loader {
@FILENAME
src|loaders|ImageLoader.js
@EXPORT
export { ImageLoader }
@CLASS
class ImageLoader extends Loader {
@FILENAME
src|loaders|Loader.js
@EXPORT
export { Loader }
@CLASS
class Loader {
@FILENAME
src|loaders|LoaderUtils.js
@EXPORT
export { LoaderUtils }
@CLASS
class LoaderUtils {
@FILENAME
src|loaders|LoadingManager.js
@EXPORT
export { DefaultLoadingManager, LoadingManager }
@CLASS
class LoadingManager {
@FILENAME
src|loaders|MaterialLoader.js
@EXPORT
exporter used to export a scalar. See #7459  				normalScale = [ normalScale, normalScale ];  			}
@EXPORT
export a scalar. See #7459  				normalScale = [ normalScale, normalScale ];  			}
@EXPORT
export { MaterialLoader }
@CLASS
class MaterialLoader extends Loader {
@FILENAME
src|loaders|ObjectLoader.js
@EXPORT
export { ObjectLoader }
@CLASS
class ObjectLoader extends Loader {
@FILENAME
src|loaders|TextureLoader.js
@EXPORT
export { TextureLoader }
@CLASS
class TextureLoader extends Loader {
@FILENAME
src|materials|LineBasicMaterial.js
@EXPORT
export { LineBasicMaterial }
@CLASS
class LineBasicMaterial extends Material {
@FILENAME
src|materials|LineDashedMaterial.js
@EXPORT
export { LineDashedMaterial }
@CLASS
class LineDashedMaterial extends LineBasicMaterial {
@FILENAME
src|materials|Material.js
@EXPORT
export { Material }
@CLASS
class Material extends EventDispatcher {
@FILENAME
src|materials|Materials.js
@EXPORT
export { 	ShadowMaterial, 	SpriteMaterial, 	RawShaderMaterial, 	ShaderMaterial, 	PointsMaterial, 	MeshPhysicalMaterial, 	MeshStandardMaterial, 	MeshPhongMaterial, 	MeshToonMaterial, 	MeshNormalMaterial, 	MeshLambertMaterial, 	MeshDepthMaterial, 	MeshDistanceMaterial, 	MeshBasicMaterial, 	MeshMatcapMaterial, 	LineDashedMaterial, 	LineBasicMaterial, 	Material }
@FILENAME
src|materials|MeshBasicMaterial.js
@EXPORT
export { MeshBasicMaterial }
@CLASS
class MeshBasicMaterial extends Material {
@FILENAME
src|materials|MeshDepthMaterial.js
@EXPORT
export { MeshDepthMaterial }
@CLASS
class MeshDepthMaterial extends Material {
@FILENAME
src|materials|MeshDistanceMaterial.js
@EXPORT
export { MeshDistanceMaterial }
@CLASS
class MeshDistanceMaterial extends Material {
@FILENAME
src|materials|MeshLambertMaterial.js
@EXPORT
export { MeshLambertMaterial }
@CLASS
class MeshLambertMaterial extends Material {
@FILENAME
src|materials|MeshMatcapMaterial.js
@EXPORT
export { MeshMatcapMaterial }
@CLASS
class MeshMatcapMaterial extends Material {
@FILENAME
src|materials|MeshNormalMaterial.js
@EXPORT
export { MeshNormalMaterial }
@CLASS
class MeshNormalMaterial extends Material {
@FILENAME
src|materials|MeshPhongMaterial.js
@EXPORT
export { MeshPhongMaterial }
@CLASS
class MeshPhongMaterial extends Material {
@FILENAME
src|materials|MeshPhysicalMaterial.js
@EXPORT
export { MeshPhysicalMaterial }
@CLASS
class MeshPhysicalMaterial extends MeshStandardMaterial {
@FILENAME
src|materials|MeshStandardMaterial.js
@EXPORT
export { MeshStandardMaterial }
@CLASS
class MeshStandardMaterial extends Material {
@FILENAME
src|materials|MeshToonMaterial.js
@EXPORT
export { MeshToonMaterial }
@CLASS
class MeshToonMaterial extends Material {
@FILENAME
src|materials|PointsMaterial.js
@EXPORT
export { PointsMaterial }
@CLASS
class PointsMaterial extends Material {
@FILENAME
src|materials|RawShaderMaterial.js
@EXPORT
export { RawShaderMaterial }
@CLASS
class RawShaderMaterial extends ShaderMaterial {
@FILENAME
src|materials|ShaderMaterial.js
@EXPORT
export { ShaderMaterial }
@CLASS
class ShaderMaterial extends Material {
@FILENAME
src|materials|ShadowMaterial.js
@EXPORT
export { ShadowMaterial }
@CLASS
class ShadowMaterial extends Material {
@FILENAME
src|materials|SpriteMaterial.js
@EXPORT
export { SpriteMaterial }
@CLASS
class SpriteMaterial extends Material {
@FILENAME
src|math|Box2.js
@EXPORT
export { Box2 }
@CLASS
class Box2 {
@FILENAME
src|math|Box3.js
@EXPORT
export { Box3 }
@CLASS
class Box3 {
@FILENAME
src|math|Color.js
@EXPORT
export { Color }
@CLASS
class Color {
@FILENAME
src|math|ColorManagement.js
@EXPORT
export function SRGBToLinear( c ) {  	return ( c < 0.04045 ) ? c * 0.0773993808 : Math.pow( c * 0.9478672986 + 0.0521327014, 2.4 );  }
@EXPORT
export function LinearToSRGB( c ) {  	return ( c < 0.0031308 ) ? c * 12.92 : 1.055 * ( Math.pow( c, 0.41666 ) ) - 0.055;  }
@EXPORT
export const ColorManagement = {  	enabled: true,  	get legacyMode() {  		console.warn( 'THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150.' );  		return ! this.enabled;  	}
@FILENAME
src|math|Cylindrical.js
@EXPORT
export { Cylindrical }
@CLASS
class Cylindrical {
@FILENAME
src|math|Euler.js
@EXPORT
export { Euler }
@CLASS
class Euler {
@FILENAME
src|math|Frustum.js
@EXPORT
export { Frustum }
@CLASS
class Frustum {
@FILENAME
src|math|Interpolant.js
@EXPORT
export { Interpolant }
@CLASS
class of interpolants over parametric samples.  *  * The parameter domain is one dimensional, typically the time or a path  * along a curve defined by the data.  *  * The sample values can have any dimensionality and derived classes may  * apply special interpretations to the data.  *  * This class provides the interval seek in a Template Method, deferring  * the actual interpolation to derived classes.  *  * Time complexity is O(1) for linear access crossing at most two points  * and O(log N) for random access, where N is the number of positions.  *  * References:  *  * 		http://www.oodesign.com/template-method-pattern.html  *  */  class Interpolant {
@CLASS
classes may  * apply special interpretations to the data.  *  * This class provides the interval seek in a Template Method, deferring  * the actual interpolation to derived classes.  *  * Time complexity is O(1) for linear access crossing at most two points  * and O(log N) for random access, where N is the number of positions.  *  * References:  *  * 		http://www.oodesign.com/template-method-pattern.html  *  */  class Interpolant {
@CLASS
class provides the interval seek in a Template Method, deferring  * the actual interpolation to derived classes.  *  * Time complexity is O(1) for linear access crossing at most two points  * and O(log N) for random access, where N is the number of positions.  *  * References:  *  * 		http://www.oodesign.com/template-method-pattern.html  *  */  class Interpolant {
@CLASS
classes.  *  * Time complexity is O(1) for linear access crossing at most two points  * and O(log N) for random access, where N is the number of positions.  *  * References:  *  * 		http://www.oodesign.com/template-method-pattern.html  *  */  class Interpolant {
@CLASS
class Interpolant {
@CLASS
classes:  	interpolate_( /* i1, t0, t, t1 */ ) {
@FILENAME
src|math|Line3.js
@EXPORT
export { Line3 }
@CLASS
class Line3 {
@FILENAME
src|math|MathUtils.js
@EXPORT
export { 	DEG2RAD, 	RAD2DEG, 	generateUUID, 	clamp, 	euclideanModulo, 	mapLinear, 	inverseLerp, 	lerp, 	damp, 	pingpong, 	smoothstep, 	smootherstep, 	randInt, 	randFloat, 	randFloatSpread, 	seededRandom, 	degToRad, 	radToDeg, 	isPowerOfTwo, 	ceilPowerOfTwo, 	floorPowerOfTwo, 	setQuaternionFromProperEuler, 	normalize, 	denormalize, 	MathUtils }
@FILENAME
src|math|Matrix3.js
@EXPORT
export { Matrix3 }
@CLASS
class Matrix3 {
@FILENAME
src|math|Matrix4.js
@EXPORT
export { Matrix4 }
@CLASS
class Matrix4 {
@FILENAME
src|math|Plane.js
@EXPORT
export { Plane }
@CLASS
class Plane {
@FILENAME
src|math|Quaternion.js
@EXPORT
export { Quaternion }
@CLASS
class Quaternion {
@FILENAME
src|math|Ray.js
@EXPORT
export { Ray }
@CLASS
class Ray {
@FILENAME
src|math|Sphere.js
@EXPORT
export { Sphere }
@CLASS
class Sphere {
@FILENAME
src|math|Spherical.js
@EXPORT
export { Spherical }
@CLASS
class Spherical {
@FILENAME
src|math|SphericalHarmonics3.js
@EXPORT
export { SphericalHarmonics3 }
@CLASS
class SphericalHarmonics3 {
@FILENAME
src|math|Triangle.js
@EXPORT
export { Triangle }
@CLASS
class Triangle {
@FILENAME
src|math|Vector2.js
@EXPORT
export { Vector2 }
@CLASS
class Vector2 {
@FILENAME
src|math|Vector3.js
@EXPORT
export { Vector3 }
@CLASS
class Vector3 {
@FILENAME
src|math|Vector4.js
@EXPORT
export { Vector4 }
@CLASS
class Vector4 {
@FILENAME
src|math|interpolants|CubicInterpolant.js
@EXPORT
export { CubicInterpolant }
@CLASS
class CubicInterpolant extends Interpolant {
@FILENAME
src|math|interpolants|DiscreteInterpolant.js
@EXPORT
export { DiscreteInterpolant }
@CLASS
class DiscreteInterpolant extends Interpolant {
@FILENAME
src|math|interpolants|LinearInterpolant.js
@EXPORT
export { LinearInterpolant }
@CLASS
class LinearInterpolant extends Interpolant {
@FILENAME
src|math|interpolants|QuaternionLinearInterpolant.js
@EXPORT
export { QuaternionLinearInterpolant }
@CLASS
class QuaternionLinearInterpolant extends Interpolant {
@FILENAME
src|objects|Bone.js
@EXPORT
export { Bone }
@CLASS
class Bone extends Object3D {
@FILENAME
src|objects|Group.js
@EXPORT
export { Group }
@CLASS
class Group extends Object3D {
@FILENAME
src|objects|InstancedMesh.js
@EXPORT
export { InstancedMesh }
@CLASS
class InstancedMesh extends Mesh {
@FILENAME
src|objects|Line.js
@EXPORT
export { Line }
@CLASS
class Line extends Object3D {
@FILENAME
src|objects|LineLoop.js
@EXPORT
export { LineLoop }
@CLASS
class LineLoop extends Line {
@FILENAME
src|objects|LineSegments.js
@EXPORT
export { LineSegments }
@CLASS
class LineSegments extends Line {
@FILENAME
src|objects|LOD.js
@EXPORT
export { LOD }
@CLASS
class LOD extends Object3D {
@FILENAME
src|objects|Mesh.js
@EXPORT
export { Mesh }
@CLASS
class Mesh extends Object3D {
@FILENAME
src|objects|Points.js
@EXPORT
export { Points }
@CLASS
class Points extends Object3D {
@FILENAME
src|objects|Skeleton.js
@EXPORT
export { Skeleton }
@CLASS
class Skeleton {
@FILENAME
src|objects|SkinnedMesh.js
@EXPORT
export { SkinnedMesh }
@CLASS
class SkinnedMesh extends Mesh {
@FILENAME
src|objects|Sprite.js
@EXPORT
export { Sprite }
@CLASS
class Sprite extends Object3D {
@FILENAME
src|renderers|WebGL1Renderer.js
@EXPORT
export { WebGL1Renderer }
@CLASS
class WebGL1Renderer extends WebGLRenderer {
@FILENAME
src|renderers|WebGL3DRenderTarget.js
@EXPORT
export { WebGL3DRenderTarget }
@CLASS
class WebGL3DRenderTarget extends WebGLRenderTarget {
@FILENAME
src|renderers|WebGLArrayRenderTarget.js
@EXPORT
export { WebGLArrayRenderTarget }
@CLASS
class WebGLArrayRenderTarget extends WebGLRenderTarget {
@FILENAME
src|renderers|WebGLCubeRenderTarget.js
@EXPORT
export { WebGLCubeRenderTarget }
@CLASS
class WebGLCubeRenderTarget extends WebGLRenderTarget {
@FILENAME
src|renderers|WebGLMultipleRenderTargets.js
@EXPORT
export { WebGLMultipleRenderTargets }
@CLASS
class WebGLMultipleRenderTargets extends WebGLRenderTarget {
@FILENAME
src|renderers|WebGLRenderer.js
@EXPORT
export { WebGLRenderer }
@CLASS
class WebGLRenderer {
@FILENAME
src|renderers|WebGLRenderTarget.js
@EXPORT
export { WebGLRenderTarget }
@CLASS
class WebGLRenderTarget extends RenderTarget {
@FILENAME
src|renderers|shaders|ShaderChunk.js
@EXPORT
export const ShaderChunk = { 	alphahash_fragment: alphahash_fragment, 	alphahash_pars_fragment: alphahash_pars_fragment, 	alphamap_fragment: alphamap_fragment, 	alphamap_pars_fragment: alphamap_pars_fragment, 	alphatest_fragment: alphatest_fragment, 	alphatest_pars_fragment: alphatest_pars_fragment, 	aomap_fragment: aomap_fragment, 	aomap_pars_fragment: aomap_pars_fragment, 	begin_vertex: begin_vertex, 	beginnormal_vertex: beginnormal_vertex, 	bsdfs: bsdfs, 	iridescence_fragment: iridescence_fragment, 	bumpmap_pars_fragment: bumpmap_pars_fragment, 	clipping_planes_fragment: clipping_planes_fragment, 	clipping_planes_pars_fragment: clipping_planes_pars_fragment, 	clipping_planes_pars_vertex: clipping_planes_pars_vertex, 	clipping_planes_vertex: clipping_planes_vertex, 	color_fragment: color_fragment, 	color_pars_fragment: color_pars_fragment, 	color_pars_vertex: color_pars_vertex, 	color_vertex: color_vertex, 	common: common, 	cube_uv_reflection_fragment: cube_uv_reflection_fragment, 	defaultnormal_vertex: defaultnormal_vertex, 	displacementmap_pars_vertex: displacementmap_pars_vertex, 	displacementmap_vertex: displacementmap_vertex, 	emissivemap_fragment: emissivemap_fragment, 	emissivemap_pars_fragment: emissivemap_pars_fragment, 	colorspace_fragment: colorspace_fragment, 	colorspace_pars_fragment: colorspace_pars_fragment, 	envmap_fragment: envmap_fragment, 	envmap_common_pars_fragment: envmap_common_pars_fragment, 	envmap_pars_fragment: envmap_pars_fragment, 	envmap_pars_vertex: envmap_pars_vertex, 	envmap_physical_pars_fragment: envmap_physical_pars_fragment, 	envmap_vertex: envmap_vertex, 	fog_vertex: fog_vertex, 	fog_pars_vertex: fog_pars_vertex, 	fog_fragment: fog_fragment, 	fog_pars_fragment: fog_pars_fragment, 	gradientmap_pars_fragment: gradientmap_pars_fragment, 	lightmap_fragment: lightmap_fragment, 	lightmap_pars_fragment: lightmap_pars_fragment, 	lights_lambert_fragment: lights_lambert_fragment, 	lights_lambert_pars_fragment: lights_lambert_pars_fragment, 	lights_pars_begin: lights_pars_begin, 	lights_toon_fragment: lights_toon_fragment, 	lights_toon_pars_fragment: lights_toon_pars_fragment, 	lights_phong_fragment: lights_phong_fragment, 	lights_phong_pars_fragment: lights_phong_pars_fragment, 	lights_physical_fragment: lights_physical_fragment, 	lights_physical_pars_fragment: lights_physical_pars_fragment, 	lights_fragment_begin: lights_fragment_begin, 	lights_fragment_maps: lights_fragment_maps, 	lights_fragment_end: lights_fragment_end, 	logdepthbuf_fragment: logdepthbuf_fragment, 	logdepthbuf_pars_fragment: logdepthbuf_pars_fragment, 	logdepthbuf_pars_vertex: logdepthbuf_pars_vertex, 	logdepthbuf_vertex: logdepthbuf_vertex, 	map_fragment: map_fragment, 	map_pars_fragment: map_pars_fragment, 	map_particle_fragment: map_particle_fragment, 	map_particle_pars_fragment: map_particle_pars_fragment, 	metalnessmap_fragment: metalnessmap_fragment, 	metalnessmap_pars_fragment: metalnessmap_pars_fragment, 	morphcolor_vertex: morphcolor_vertex, 	morphnormal_vertex: morphnormal_vertex, 	morphtarget_pars_vertex: morphtarget_pars_vertex, 	morphtarget_vertex: morphtarget_vertex, 	normal_fragment_begin: normal_fragment_begin, 	normal_fragment_maps: normal_fragment_maps, 	normal_pars_fragment: normal_pars_fragment, 	normal_pars_vertex: normal_pars_vertex, 	normal_vertex: normal_vertex, 	normalmap_pars_fragment: normalmap_pars_fragment, 	clearcoat_normal_fragment_begin: clearcoat_normal_fragment_begin, 	clearcoat_normal_fragment_maps: clearcoat_normal_fragment_maps, 	clearcoat_pars_fragment: clearcoat_pars_fragment, 	iridescence_pars_fragment: iridescence_pars_fragment, 	opaque_fragment: opaque_fragment, 	packing: packing, 	premultiplied_alpha_fragment: premultiplied_alpha_fragment, 	project_vertex: project_vertex, 	dithering_fragment: dithering_fragment, 	dithering_pars_fragment: dithering_pars_fragment, 	roughnessmap_fragment: roughnessmap_fragment, 	roughnessmap_pars_fragment: roughnessmap_pars_fragment, 	shadowmap_pars_fragment: shadowmap_pars_fragment, 	shadowmap_pars_vertex: shadowmap_pars_vertex, 	shadowmap_vertex: shadowmap_vertex, 	shadowmask_pars_fragment: shadowmask_pars_fragment, 	skinbase_vertex: skinbase_vertex, 	skinning_pars_vertex: skinning_pars_vertex, 	skinning_vertex: skinning_vertex, 	skinnormal_vertex: skinnormal_vertex, 	specularmap_fragment: specularmap_fragment, 	specularmap_pars_fragment: specularmap_pars_fragment, 	tonemapping_fragment: tonemapping_fragment, 	tonemapping_pars_fragment: tonemapping_pars_fragment, 	transmission_fragment: transmission_fragment, 	transmission_pars_fragment: transmission_pars_fragment, 	uv_pars_fragment: uv_pars_fragment, 	uv_pars_vertex: uv_pars_vertex, 	uv_vertex: uv_vertex, 	worldpos_vertex: worldpos_vertex,  	background_vert: background.vertex, 	background_frag: background.fragment, 	backgroundCube_vert: backgroundCube.vertex, 	backgroundCube_frag: backgroundCube.fragment, 	cube_vert: cube.vertex, 	cube_frag: cube.fragment, 	depth_vert: depth.vertex, 	depth_frag: depth.fragment, 	distanceRGBA_vert: distanceRGBA.vertex, 	distanceRGBA_frag: distanceRGBA.fragment, 	equirect_vert: equirect.vertex, 	equirect_frag: equirect.fragment, 	linedashed_vert: linedashed.vertex, 	linedashed_frag: linedashed.fragment, 	meshbasic_vert: meshbasic.vertex, 	meshbasic_frag: meshbasic.fragment, 	meshlambert_vert: meshlambert.vertex, 	meshlambert_frag: meshlambert.fragment, 	meshmatcap_vert: meshmatcap.vertex, 	meshmatcap_frag: meshmatcap.fragment, 	meshnormal_vert: meshnormal.vertex, 	meshnormal_frag: meshnormal.fragment, 	meshphong_vert: meshphong.vertex, 	meshphong_frag: meshphong.fragment, 	meshphysical_vert: meshphysical.vertex, 	meshphysical_frag: meshphysical.fragment, 	meshtoon_vert: meshtoon.vertex, 	meshtoon_frag: meshtoon.fragment, 	points_vert: points.vertex, 	points_frag: points.fragment, 	shadow_vert: shadow.vertex, 	shadow_frag: shadow.fragment, 	sprite_vert: sprite.vertex, 	sprite_frag: sprite.fragment }
@FILENAME
src|renderers|shaders|ShaderLib.js
@EXPORT
export { ShaderLib }
@FILENAME
src|renderers|shaders|UniformsLib.js
@EXPORT
export { UniformsLib }
@FILENAME
src|renderers|shaders|UniformsUtils.js
@EXPORT
export function cloneUniforms( src ) {  	const dst = {}
@EXPORT
export function mergeUniforms( uniforms ) {  	const merged = {}
@EXPORT
export function cloneUniformsGroups( src ) {  	const dst = [];  	for ( let u = 0; u < src.length; u ++ ) {  		dst.push( src[ u ].clone() );  	}
@EXPORT
export function getUnlitUniformColorSpace( renderer ) {  	if ( renderer.getRenderTarget() === null ) {  		// https://github.com/mrdoob/three.js/pull/23937#issuecomment-1111067398 		return renderer.outputColorSpace;  	}
@EXPORT
export { UniformsUtils }
@FILENAME
src|renderers|shaders|ShaderChunk|alphahash_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|alphahash_pars_fragment.glsl.js
@EXPORT
export default /* glsl */| #ifdef USE_ALPHAHASH  	/** 	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html 	 */  	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.  	float hash2D( vec2 value ) {  		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );  	}
@FILENAME
src|renderers|shaders|ShaderChunk|alphamap_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|alphamap_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|alphatest_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|alphatest_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|aomap_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|aomap_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|beginnormal_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|begin_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|bsdfs.glsl.js
@EXPORT
export default /* glsl */|  float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {  	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v) 	return 0.25;  }
@FILENAME
src|renderers|shaders|ShaderChunk|bumpmap_pars_fragment.glsl.js
@EXPORT
export default /* glsl */| #ifdef USE_BUMPMAP  	uniform sampler2D bumpMap; 	uniform float bumpScale;  	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen 	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf  	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)  	vec2 dHdxy_fwd() {  		vec2 dSTdx = dFdx( vBumpMapUv ); 		vec2 dSTdy = dFdy( vBumpMapUv );  		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x; 		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll; 		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;  		return vec2( dBx, dBy );  	}
@FILENAME
src|renderers|shaders|ShaderChunk|clearcoat_normal_fragment_begin.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|clearcoat_normal_fragment_maps.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|clearcoat_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|clipping_planes_fragment.glsl.js
@EXPORT
export default /* glsl */| #if NUM_CLIPPING_PLANES > 0  	vec4 plane;  	#pragma unroll_loop_start 	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {  		plane = clippingPlanes[ i ]; 		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;  	}
@FILENAME
src|renderers|shaders|ShaderChunk|clipping_planes_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|clipping_planes_pars_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|clipping_planes_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|colorspace_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|colorspace_pars_fragment.glsl.js
@EXPORT
export default /* glsl */|  vec4 LinearToLinear( in vec4 value ) { 	return value; }
@FILENAME
src|renderers|shaders|ShaderChunk|color_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|color_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|color_pars_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|color_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|common.glsl.js
@EXPORT
export default /* glsl */| #define PI 3.141592653589793 #define PI2 6.283185307179586 #define PI_HALF 1.5707963267948966 #define RECIPROCAL_PI 0.3183098861837907 #define RECIPROCAL_PI2 0.15915494309189535 #define EPSILON 1e-6  #ifndef saturate // <tonemapping_pars_fragment> may have defined saturate() already #define saturate( a ) clamp( a, 0.0, 1.0 ) #endif #define whiteComplement( a ) ( 1.0 - saturate( a ) )  float pow2( const in float x ) { return x*x; }
@FILENAME
src|renderers|shaders|ShaderChunk|cube_uv_reflection_fragment.glsl.js
@EXPORT
export default /* glsl */| #ifdef ENVMAP_TYPE_CUBE_UV  	#define cubeUV_minMipLevel 4.0 	#define cubeUV_minTileSize 16.0  	// These shader functions convert between the UV coordinates of a single face of 	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for 	// sampling a textureCube (not generally normalized ).  	float getFace( vec3 direction ) {  		vec3 absDirection = abs( direction );  		float face = - 1.0;  		if ( absDirection.x > absDirection.z ) {  			if ( absDirection.x > absDirection.y )  				face = direction.x > 0.0 ? 0.0 : 3.0;  			else  				face = direction.y > 0.0 ? 1.0 : 4.0;  		}
@FILENAME
src|renderers|shaders|ShaderChunk|defaultnormal_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|default_fragment.glsl.js
@EXPORT
export default /* glsl */| void main() { 	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 ); }
@FILENAME
src|renderers|shaders|ShaderChunk|default_vertex.glsl.js
@EXPORT
export default /* glsl */| void main() { 	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
@FILENAME
src|renderers|shaders|ShaderChunk|displacementmap_pars_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|displacementmap_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|dithering_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|dithering_pars_fragment.glsl.js
@EXPORT
export default /* glsl */| #ifdef DITHERING  	// based on https://www.shadertoy.com/view/MslGR8 	vec3 dithering( vec3 color ) { 		//Calculate grid position 		float grid_position = rand( gl_FragCoord.xy );  		//Shift the individual colors differently, thus making it even harder to see the dithering pattern 		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );  		//modify shift according to grid position. 		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );  		//shift the color by dither_shift 		return color + dither_shift_RGB; 	}
@FILENAME
src|renderers|shaders|ShaderChunk|emissivemap_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|emissivemap_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|envmap_common_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|envmap_fragment.glsl.js
@EXPORT
export default /* glsl */| #ifdef USE_ENVMAP  	#ifdef ENV_WORLDPOS  		vec3 cameraToFrag;  		if ( isOrthographic ) {  			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );  		}
@FILENAME
src|renderers|shaders|ShaderChunk|envmap_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|envmap_pars_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|envmap_physical_pars_fragment.glsl.js
@EXPORT
export default /* glsl */| #ifdef USE_ENVMAP  	vec3 getIBLIrradiance( const in vec3 normal ) {  		#ifdef ENVMAP_TYPE_CUBE_UV  			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );  			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );  			return PI * envMapColor.rgb * envMapIntensity;  		#else  			return vec3( 0.0 );  		#endif  	}
@FILENAME
src|renderers|shaders|ShaderChunk|envmap_vertex.glsl.js
@EXPORT
export default /* glsl */| #ifdef USE_ENVMAP  	#ifdef ENV_WORLDPOS  		vWorldPosition = worldPosition.xyz;  	#else  		vec3 cameraToVertex;  		if ( isOrthographic ) {  			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );  		}
@FILENAME
src|renderers|shaders|ShaderChunk|fog_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|fog_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|fog_pars_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|fog_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|gradientmap_pars_fragment.glsl.js
@EXPORT
export default /* glsl */|  #ifdef USE_GRADIENTMAP  	uniform sampler2D gradientMap;  #endif  vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {  	// dotNL will be from -1.0 to 1.0 	float dotNL = dot( normal, lightDirection ); 	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );  	#ifdef USE_GRADIENTMAP  		return vec3( texture2D( gradientMap, coord ).r );  	#else  		vec2 fw = fwidth( coord ) * 0.5; 		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );  	#endif  }
@FILENAME
src|renderers|shaders|ShaderChunk|iridescence_fragment.glsl.js
@EXPORT
export default /* glsl */|  #ifdef USE_IRIDESCENCE  	// XYZ to linear-sRGB color space 	const mat3 XYZ_TO_REC709 = mat3( 		 3.2404542, -0.9692660,  0.0556434, 		-1.5371385,  1.8760108, -0.2040259, 		-0.4985314,  0.0415560,  1.0572252 	);  	// Assume air interface for top 	// Note: We don't handle the case fresnel0 == 1 	vec3 Fresnel0ToIor( vec3 fresnel0 ) {  		vec3 sqrtF0 = sqrt( fresnel0 ); 		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );  	}
@FILENAME
src|renderers|shaders|ShaderChunk|iridescence_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|lightmap_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|lightmap_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|lights_fragment_begin.glsl.js
@EXPORT
export default /* glsl */| /**  * This is a template that can be used to light a material, it uses pluggable  * RenderEquations (RE)for specific lighting scenarios.  *  * Instructions for use:  * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined  * - Create a material parameter that is to be passed as the third parameter to your lighting functions.  *  * TODO:  * - Add area light support.  * - Add sphere light support.  * - Add diffuse light probe (irradiance cubemap) support.  */  GeometricContext geometry;  geometry.position = - vViewPosition; geometry.normal = normal; geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );  #ifdef USE_CLEARCOAT  	geometry.clearcoatNormal = clearcoatNormal;  #endif  #ifdef USE_IRIDESCENCE  	float dotNVi = saturate( dot( normal, geometry.viewDir ) );  	if ( material.iridescenceThickness == 0.0 ) {  		material.iridescence = 0.0;  	}
@FILENAME
src|renderers|shaders|ShaderChunk|lights_fragment_end.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|lights_fragment_maps.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|lights_lambert_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|lights_lambert_pars_fragment.glsl.js
@EXPORT
export default /* glsl */| varying vec3 vViewPosition;  struct LambertMaterial {  	vec3 diffuseColor; 	float specularStrength;  }
@FILENAME
src|renderers|shaders|ShaderChunk|lights_pars_begin.glsl.js
@EXPORT
export default /* glsl */| uniform bool receiveShadow; uniform vec3 ambientLightColor; uniform vec3 lightProbe[ 9 ];  // get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere // source: https://graphics.stanford.edu/papers/envmap/envmap.pdf vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {  	// normal is assumed to have unit length  	float x = normal.x, y = normal.y, z = normal.z;  	// band 0 	vec3 result = shCoefficients[ 0 ] * 0.886227;  	// band 1 	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y; 	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z; 	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;  	// band 2 	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y; 	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z; 	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 ); 	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z; 	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );  	return result;  }
@FILENAME
src|renderers|shaders|ShaderChunk|lights_phong_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|lights_phong_pars_fragment.glsl.js
@EXPORT
export default /* glsl */| varying vec3 vViewPosition;  struct BlinnPhongMaterial {  	vec3 diffuseColor; 	vec3 specularColor; 	float specularShininess; 	float specularStrength;  }
@FILENAME
src|renderers|shaders|ShaderChunk|lights_physical_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|lights_physical_pars_fragment.glsl.js
@EXPORT
export default /* glsl */|  struct PhysicalMaterial {  	vec3 diffuseColor; 	float roughness; 	vec3 specularColor; 	float specularF90;  	#ifdef USE_CLEARCOAT 		float clearcoat; 		float clearcoatRoughness; 		vec3 clearcoatF0; 		float clearcoatF90; 	#endif  	#ifdef USE_IRIDESCENCE 		float iridescence; 		float iridescenceIOR; 		float iridescenceThickness; 		vec3 iridescenceFresnel; 		vec3 iridescenceF0; 	#endif  	#ifdef USE_SHEEN 		vec3 sheenColor; 		float sheenRoughness; 	#endif  	#ifdef IOR 		float ior; 	#endif  	#ifdef USE_TRANSMISSION 		float transmission; 		float transmissionAlpha; 		float thickness; 		float attenuationDistance; 		vec3 attenuationColor; 	#endif  	#ifdef USE_ANISOTROPY 		float anisotropy; 		float alphaT; 		vec3 anisotropyT; 		vec3 anisotropyB; 	#endif  }
@FILENAME
src|renderers|shaders|ShaderChunk|lights_toon_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|lights_toon_pars_fragment.glsl.js
@EXPORT
export default /* glsl */| varying vec3 vViewPosition;  struct ToonMaterial {  	vec3 diffuseColor;  }
@FILENAME
src|renderers|shaders|ShaderChunk|logdepthbuf_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|logdepthbuf_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|logdepthbuf_pars_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|logdepthbuf_vertex.glsl.js
@EXPORT
export default /* glsl */| #ifdef USE_LOGDEPTHBUF  	#ifdef USE_LOGDEPTHBUF_EXT  		vFragDepth = 1.0 + gl_Position.w; 		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );  	#else  		if ( isPerspectiveMatrix( projectionMatrix ) ) {  			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;  			gl_Position.z *= gl_Position.w;  		}
@FILENAME
src|renderers|shaders|ShaderChunk|map_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|map_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|map_particle_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|map_particle_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|metalnessmap_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|metalnessmap_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|morphcolor_vertex.glsl.js
@EXPORT
export default /* glsl */| #if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )  	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value: 	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence) 	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting 	vColor *= morphTargetBaseInfluence;  	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {  		#if defined( USE_COLOR_ALPHA )  			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];  		#elif defined( USE_COLOR )  			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];  		#endif  	}
@FILENAME
src|renderers|shaders|ShaderChunk|morphnormal_vertex.glsl.js
@EXPORT
export default /* glsl */| #ifdef USE_MORPHNORMALS  	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value: 	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence) 	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting 	objectNormal *= morphTargetBaseInfluence;  	#ifdef MORPHTARGETS_TEXTURE  		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {  			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];  		}
@FILENAME
src|renderers|shaders|ShaderChunk|morphtarget_pars_vertex.glsl.js
@EXPORT
export default /* glsl */| #ifdef USE_MORPHTARGETS  	uniform float morphTargetBaseInfluence;  	#ifdef MORPHTARGETS_TEXTURE  		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ]; 		uniform sampler2DArray morphTargetsTexture; 		uniform ivec2 morphTargetsTextureSize;  		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {  			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset; 			int y = texelIndex / morphTargetsTextureSize.x; 			int x = texelIndex - y * morphTargetsTextureSize.x;  			ivec3 morphUV = ivec3( x, y, morphTargetIndex ); 			return texelFetch( morphTargetsTexture, morphUV, 0 );  		}
@FILENAME
src|renderers|shaders|ShaderChunk|morphtarget_vertex.glsl.js
@EXPORT
export default /* glsl */| #ifdef USE_MORPHTARGETS  	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value: 	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence) 	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting 	transformed *= morphTargetBaseInfluence;  	#ifdef MORPHTARGETS_TEXTURE  		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {  			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];  		}
@FILENAME
src|renderers|shaders|ShaderChunk|normalmap_pars_fragment.glsl.js
@EXPORT
export default /* glsl */| #ifdef USE_NORMALMAP  	uniform sampler2D normalMap; 	uniform vec2 normalScale;  #endif  #ifdef USE_NORMALMAP_OBJECTSPACE  	uniform mat3 normalMatrix;  #endif  #if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )  	// Normal Mapping Without Precomputed Tangents 	// http://www.thetenthplanet.de/archives/1180  	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {  		vec3 q0 = dFdx( eye_pos.xyz ); 		vec3 q1 = dFdy( eye_pos.xyz ); 		vec2 st0 = dFdx( uv.st ); 		vec2 st1 = dFdy( uv.st );  		vec3 N = surf_norm; // normalized  		vec3 q1perp = cross( q1, N ); 		vec3 q0perp = cross( N, q0 );  		vec3 T = q1perp * st0.x + q0perp * st1.x; 		vec3 B = q1perp * st0.y + q0perp * st1.y;  		float det = max( dot( T, T ), dot( B, B ) ); 		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );  		return mat3( T * scale, B * scale, N );  	}
@FILENAME
src|renderers|shaders|ShaderChunk|normal_fragment_begin.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|normal_fragment_maps.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|normal_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|normal_pars_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|normal_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|opaque_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|packing.glsl.js
@EXPORT
export default /* glsl */| vec3 packNormalToRGB( const in vec3 normal ) { 	return normalize( normal ) * 0.5 + 0.5; }
@FILENAME
src|renderers|shaders|ShaderChunk|premultiplied_alpha_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|project_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|roughnessmap_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|roughnessmap_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|shadowmap_pars_fragment.glsl.js
@EXPORT
export default /* glsl */| #if NUM_SPOT_LIGHT_COORDS > 0  	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];  #endif  #if NUM_SPOT_LIGHT_MAPS > 0  	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];  #endif  #ifdef USE_SHADOWMAP  	#if NUM_DIR_LIGHT_SHADOWS > 0  		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ]; 		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];  		struct DirectionalLightShadow { 			float shadowBias; 			float shadowNormalBias; 			float shadowRadius; 			vec2 shadowMapSize; 		}
@FILENAME
src|renderers|shaders|ShaderChunk|shadowmap_pars_vertex.glsl.js
@EXPORT
export default /* glsl */|  #if NUM_SPOT_LIGHT_COORDS > 0  	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ]; 	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];  #endif  #ifdef USE_SHADOWMAP  	#if NUM_DIR_LIGHT_SHADOWS > 0  		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ]; 		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];  		struct DirectionalLightShadow { 			float shadowBias; 			float shadowNormalBias; 			float shadowRadius; 			vec2 shadowMapSize; 		}
@FILENAME
src|renderers|shaders|ShaderChunk|shadowmap_vertex.glsl.js
@EXPORT
export default /* glsl */|  #if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )  	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne. 	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix ); 	vec4 shadowWorldPosition;  #endif  #if defined( USE_SHADOWMAP )  	#if NUM_DIR_LIGHT_SHADOWS > 0  		#pragma unroll_loop_start 		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {  			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 ); 			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;  		}
@FILENAME
src|renderers|shaders|ShaderChunk|shadowmask_pars_fragment.glsl.js
@EXPORT
export default /* glsl */| float getShadowMask() {  	float shadow = 1.0;  	#ifdef USE_SHADOWMAP  	#if NUM_DIR_LIGHT_SHADOWS > 0  	DirectionalLightShadow directionalLight;  	#pragma unroll_loop_start 	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {  		directionalLight = directionalLightShadows[ i ]; 		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;  	}
@FILENAME
src|renderers|shaders|ShaderChunk|skinbase_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|skinning_pars_vertex.glsl.js
@EXPORT
export default /* glsl */| #ifdef USE_SKINNING  	uniform mat4 bindMatrix; 	uniform mat4 bindMatrixInverse;  	uniform highp sampler2D boneTexture; 	uniform int boneTextureSize;  	mat4 getBoneMatrix( const in float i ) {  		float j = i * 4.0; 		float x = mod( j, float( boneTextureSize ) ); 		float y = floor( j / float( boneTextureSize ) );  		float dx = 1.0 / float( boneTextureSize ); 		float dy = 1.0 / float( boneTextureSize );  		y = dy * ( y + 0.5 );  		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) ); 		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) ); 		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) ); 		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );  		mat4 bone = mat4( v1, v2, v3, v4 );  		return bone;  	}
@FILENAME
src|renderers|shaders|ShaderChunk|skinning_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|skinnormal_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|specularmap_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|specularmap_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|tonemapping_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|tonemapping_pars_fragment.glsl.js
@EXPORT
export default /* glsl */| #ifndef saturate // <common> may have defined saturate() already #define saturate( a ) clamp( a, 0.0, 1.0 ) #endif  uniform float toneMappingExposure;  // exposure only vec3 LinearToneMapping( vec3 color ) {  	return saturate( toneMappingExposure * color );  }
@FILENAME
src|renderers|shaders|ShaderChunk|transmission_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|transmission_pars_fragment.glsl.js
@EXPORT
export default /* glsl */| #ifdef USE_TRANSMISSION  	// Transmission code is based on glTF-Sampler-Viewer 	// https://github.com/KhronosGroup/glTF-Sample-Viewer  	uniform float transmission; 	uniform float thickness; 	uniform float attenuationDistance; 	uniform vec3 attenuationColor;  	#ifdef USE_TRANSMISSIONMAP  		uniform sampler2D transmissionMap;  	#endif  	#ifdef USE_THICKNESSMAP  		uniform sampler2D thicknessMap;  	#endif  	uniform vec2 transmissionSamplerSize; 	uniform sampler2D transmissionSamplerMap;  	uniform mat4 modelMatrix; 	uniform mat4 projectionMatrix;  	varying vec3 vWorldPosition;  	// Mipped Bicubic Texture Filtering by N8 	// https://www.shadertoy.com/view/Dl2SDW  	float w0( float a ) {  		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );  	}
@FILENAME
src|renderers|shaders|ShaderChunk|uv_pars_fragment.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|uv_pars_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|uv_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderChunk|worldpos_vertex.glsl.js
@FILENAME
src|renderers|shaders|ShaderLib|background.glsl.js
@EXPORT
export const vertex = /* glsl */| varying vec2 vUv; uniform mat3 uvTransform;  void main() {  	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;  	gl_Position = vec4( position.xy, 1.0, 1.0 );  }
@EXPORT
export const fragment = /* glsl */| uniform sampler2D t2D; uniform float backgroundIntensity;  varying vec2 vUv;  void main() {  	vec4 texColor = texture2D( t2D, vUv );  	#ifdef DECODE_VIDEO_TEXTURE  		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures  		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );  	#endif  	texColor.rgb *= backgroundIntensity;  	gl_FragColor = texColor;  	#include <tonemapping_fragment> 	#include <colorspace_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|backgroundCube.glsl.js
@EXPORT
export const vertex = /* glsl */| varying vec3 vWorldDirection;  #include <common>  void main() {  	vWorldDirection = transformDirection( position, modelMatrix );  	#include <begin_vertex> 	#include <project_vertex>  	gl_Position.z = gl_Position.w; // set z to camera.far  }
@EXPORT
export const fragment = /* glsl */|  #ifdef ENVMAP_TYPE_CUBE  	uniform samplerCube envMap;  #elif defined( ENVMAP_TYPE_CUBE_UV )  	uniform sampler2D envMap;  #endif  uniform float flipEnvMap; uniform float backgroundBlurriness; uniform float backgroundIntensity;  varying vec3 vWorldDirection;  #include <cube_uv_reflection_fragment>  void main() {  	#ifdef ENVMAP_TYPE_CUBE  		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );  	#elif defined( ENVMAP_TYPE_CUBE_UV )  		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );  	#else  		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );  	#endif  	texColor.rgb *= backgroundIntensity;  	gl_FragColor = texColor;  	#include <tonemapping_fragment> 	#include <colorspace_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|cube.glsl.js
@EXPORT
export const vertex = /* glsl */| varying vec3 vWorldDirection;  #include <common>  void main() {  	vWorldDirection = transformDirection( position, modelMatrix );  	#include <begin_vertex> 	#include <project_vertex>  	gl_Position.z = gl_Position.w; // set z to camera.far  }
@EXPORT
export const fragment = /* glsl */| uniform samplerCube tCube; uniform float tFlip; uniform float opacity;  varying vec3 vWorldDirection;  void main() {  	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );  	gl_FragColor = texColor; 	gl_FragColor.a *= opacity;  	#include <tonemapping_fragment> 	#include <colorspace_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|depth.glsl.js
@EXPORT
export const vertex = /* glsl */| #include <common> #include <uv_pars_vertex> #include <displacementmap_pars_vertex> #include <morphtarget_pars_vertex> #include <skinning_pars_vertex> #include <logdepthbuf_pars_vertex> #include <clipping_planes_pars_vertex>  // This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible. // Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for // depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1. varying vec2 vHighPrecisionZW;  void main() {  	#include <uv_vertex>  	#include <skinbase_vertex>  	#ifdef USE_DISPLACEMENTMAP  		#include <beginnormal_vertex> 		#include <morphnormal_vertex> 		#include <skinnormal_vertex>  	#endif  	#include <begin_vertex> 	#include <morphtarget_vertex> 	#include <skinning_vertex> 	#include <displacementmap_vertex> 	#include <project_vertex> 	#include <logdepthbuf_vertex> 	#include <clipping_planes_vertex>  	vHighPrecisionZW = gl_Position.zw;  }
@EXPORT
export const fragment = /* glsl */| #if DEPTH_PACKING == 3200  	uniform float opacity;  #endif  #include <common> #include <packing> #include <uv_pars_fragment> #include <map_pars_fragment> #include <alphamap_pars_fragment> #include <alphatest_pars_fragment> #include <alphahash_pars_fragment> #include <logdepthbuf_pars_fragment> #include <clipping_planes_pars_fragment>  varying vec2 vHighPrecisionZW;  void main() {  	#include <clipping_planes_fragment>  	vec4 diffuseColor = vec4( 1.0 );  	#if DEPTH_PACKING == 3200  		diffuseColor.a = opacity;  	#endif  	#include <map_fragment> 	#include <alphamap_fragment> 	#include <alphatest_fragment> 	#include <alphahash_fragment>  	#include <logdepthbuf_fragment>  	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values. 	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;  	#if DEPTH_PACKING == 3200  		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );  	#elif DEPTH_PACKING == 3201  		gl_FragColor = packDepthToRGBA( fragCoordZ );  	#endif  }
@FILENAME
src|renderers|shaders|ShaderLib|distanceRGBA.glsl.js
@EXPORT
export const vertex = /* glsl */| #define DISTANCE  varying vec3 vWorldPosition;  #include <common> #include <uv_pars_vertex> #include <displacementmap_pars_vertex> #include <morphtarget_pars_vertex> #include <skinning_pars_vertex> #include <clipping_planes_pars_vertex>  void main() {  	#include <uv_vertex>  	#include <skinbase_vertex>  	#ifdef USE_DISPLACEMENTMAP  		#include <beginnormal_vertex> 		#include <morphnormal_vertex> 		#include <skinnormal_vertex>  	#endif  	#include <begin_vertex> 	#include <morphtarget_vertex> 	#include <skinning_vertex> 	#include <displacementmap_vertex> 	#include <project_vertex> 	#include <worldpos_vertex> 	#include <clipping_planes_vertex>  	vWorldPosition = worldPosition.xyz;  }
@EXPORT
export const fragment = /* glsl */| #define DISTANCE  uniform vec3 referencePosition; uniform float nearDistance; uniform float farDistance; varying vec3 vWorldPosition;  #include <common> #include <packing> #include <uv_pars_fragment> #include <map_pars_fragment> #include <alphamap_pars_fragment> #include <alphatest_pars_fragment> #include <alphahash_pars_fragment> #include <clipping_planes_pars_fragment>  void main () {  	#include <clipping_planes_fragment>  	vec4 diffuseColor = vec4( 1.0 );  	#include <map_fragment> 	#include <alphamap_fragment> 	#include <alphatest_fragment> 	#include <alphahash_fragment>  	float dist = length( vWorldPosition - referencePosition ); 	dist = ( dist - nearDistance ) / ( farDistance - nearDistance ); 	dist = saturate( dist ); // clamp to [ 0, 1 ]  	gl_FragColor = packDepthToRGBA( dist );  }
@FILENAME
src|renderers|shaders|ShaderLib|equirect.glsl.js
@EXPORT
export const vertex = /* glsl */| varying vec3 vWorldDirection;  #include <common>  void main() {  	vWorldDirection = transformDirection( position, modelMatrix );  	#include <begin_vertex> 	#include <project_vertex>  }
@EXPORT
export const fragment = /* glsl */| uniform sampler2D tEquirect;  varying vec3 vWorldDirection;  #include <common>  void main() {  	vec3 direction = normalize( vWorldDirection );  	vec2 sampleUV = equirectUv( direction );  	gl_FragColor = texture2D( tEquirect, sampleUV );  	#include <tonemapping_fragment> 	#include <colorspace_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|linedashed.glsl.js
@EXPORT
export const vertex = /* glsl */| uniform float scale; attribute float lineDistance;  varying float vLineDistance;  #include <common> #include <uv_pars_vertex> #include <color_pars_vertex> #include <fog_pars_vertex> #include <morphtarget_pars_vertex> #include <logdepthbuf_pars_vertex> #include <clipping_planes_pars_vertex>  void main() {  	vLineDistance = scale * lineDistance;  	#include <uv_vertex> 	#include <color_vertex> 	#include <morphcolor_vertex> 	#include <begin_vertex> 	#include <morphtarget_vertex> 	#include <project_vertex> 	#include <logdepthbuf_vertex> 	#include <clipping_planes_vertex> 	#include <fog_vertex>  }
@EXPORT
export const fragment = /* glsl */| uniform vec3 diffuse; uniform float opacity;  uniform float dashSize; uniform float totalSize;  varying float vLineDistance;  #include <common> #include <color_pars_fragment> #include <uv_pars_fragment> #include <map_pars_fragment> #include <fog_pars_fragment> #include <logdepthbuf_pars_fragment> #include <clipping_planes_pars_fragment>  void main() {  	#include <clipping_planes_fragment>  	if ( mod( vLineDistance, totalSize ) > dashSize ) {  		discard;  	}
@FILENAME
src|renderers|shaders|ShaderLib|meshbasic.glsl.js
@EXPORT
export const vertex = /* glsl */| #include <common> #include <uv_pars_vertex> #include <envmap_pars_vertex> #include <color_pars_vertex> #include <fog_pars_vertex> #include <morphtarget_pars_vertex> #include <skinning_pars_vertex> #include <logdepthbuf_pars_vertex> #include <clipping_planes_pars_vertex>  void main() {  	#include <uv_vertex> 	#include <color_vertex> 	#include <morphcolor_vertex>  	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )  		#include <beginnormal_vertex> 		#include <morphnormal_vertex> 		#include <skinbase_vertex> 		#include <skinnormal_vertex> 		#include <defaultnormal_vertex>  	#endif  	#include <begin_vertex> 	#include <morphtarget_vertex> 	#include <skinning_vertex> 	#include <project_vertex> 	#include <logdepthbuf_vertex> 	#include <clipping_planes_vertex>  	#include <worldpos_vertex> 	#include <envmap_vertex> 	#include <fog_vertex>  }
@EXPORT
export const fragment = /* glsl */| uniform vec3 diffuse; uniform float opacity;  #ifndef FLAT_SHADED  	varying vec3 vNormal;  #endif  #include <common> #include <dithering_pars_fragment> #include <color_pars_fragment> #include <uv_pars_fragment> #include <map_pars_fragment> #include <alphamap_pars_fragment> #include <alphatest_pars_fragment> #include <alphahash_pars_fragment> #include <aomap_pars_fragment> #include <lightmap_pars_fragment> #include <envmap_common_pars_fragment> #include <envmap_pars_fragment> #include <fog_pars_fragment> #include <specularmap_pars_fragment> #include <logdepthbuf_pars_fragment> #include <clipping_planes_pars_fragment>  void main() {  	#include <clipping_planes_fragment>  	vec4 diffuseColor = vec4( diffuse, opacity );  	#include <logdepthbuf_fragment> 	#include <map_fragment> 	#include <color_fragment> 	#include <alphamap_fragment> 	#include <alphatest_fragment> 	#include <alphahash_fragment> 	#include <specularmap_fragment>  	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );  	// accumulation (baked indirect lighting only) 	#ifdef USE_LIGHTMAP  		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv ); 		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;  	#else  		reflectedLight.indirectDiffuse += vec3( 1.0 );  	#endif  	// modulation 	#include <aomap_fragment>  	reflectedLight.indirectDiffuse *= diffuseColor.rgb;  	vec3 outgoingLight = reflectedLight.indirectDiffuse;  	#include <envmap_fragment>  	#include <opaque_fragment> 	#include <tonemapping_fragment> 	#include <colorspace_fragment> 	#include <fog_fragment> 	#include <premultiplied_alpha_fragment> 	#include <dithering_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|meshlambert.glsl.js
@EXPORT
export const vertex = /* glsl */| #define LAMBERT  varying vec3 vViewPosition;  #include <common> #include <uv_pars_vertex> #include <displacementmap_pars_vertex> #include <envmap_pars_vertex> #include <color_pars_vertex> #include <fog_pars_vertex> #include <normal_pars_vertex> #include <morphtarget_pars_vertex> #include <skinning_pars_vertex> #include <shadowmap_pars_vertex> #include <logdepthbuf_pars_vertex> #include <clipping_planes_pars_vertex>  void main() {  	#include <uv_vertex> 	#include <color_vertex> 	#include <morphcolor_vertex>  	#include <beginnormal_vertex> 	#include <morphnormal_vertex> 	#include <skinbase_vertex> 	#include <skinnormal_vertex> 	#include <defaultnormal_vertex> 	#include <normal_vertex>  	#include <begin_vertex> 	#include <morphtarget_vertex> 	#include <skinning_vertex> 	#include <displacementmap_vertex> 	#include <project_vertex> 	#include <logdepthbuf_vertex> 	#include <clipping_planes_vertex>  	vViewPosition = - mvPosition.xyz;  	#include <worldpos_vertex> 	#include <envmap_vertex> 	#include <shadowmap_vertex> 	#include <fog_vertex>  }
@EXPORT
export const fragment = /* glsl */| #define LAMBERT  uniform vec3 diffuse; uniform vec3 emissive; uniform float opacity;  #include <common> #include <packing> #include <dithering_pars_fragment> #include <color_pars_fragment> #include <uv_pars_fragment> #include <map_pars_fragment> #include <alphamap_pars_fragment> #include <alphatest_pars_fragment> #include <alphahash_pars_fragment> #include <aomap_pars_fragment> #include <lightmap_pars_fragment> #include <emissivemap_pars_fragment> #include <envmap_common_pars_fragment> #include <envmap_pars_fragment> #include <fog_pars_fragment> #include <bsdfs> #include <lights_pars_begin> #include <normal_pars_fragment> #include <lights_lambert_pars_fragment> #include <shadowmap_pars_fragment> #include <bumpmap_pars_fragment> #include <normalmap_pars_fragment> #include <specularmap_pars_fragment> #include <logdepthbuf_pars_fragment> #include <clipping_planes_pars_fragment>  void main() {  	#include <clipping_planes_fragment>  	vec4 diffuseColor = vec4( diffuse, opacity ); 	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) ); 	vec3 totalEmissiveRadiance = emissive;  	#include <logdepthbuf_fragment> 	#include <map_fragment> 	#include <color_fragment> 	#include <alphamap_fragment> 	#include <alphatest_fragment> 	#include <alphahash_fragment> 	#include <specularmap_fragment> 	#include <normal_fragment_begin> 	#include <normal_fragment_maps> 	#include <emissivemap_fragment>  	// accumulation 	#include <lights_lambert_fragment> 	#include <lights_fragment_begin> 	#include <lights_fragment_maps> 	#include <lights_fragment_end>  	// modulation 	#include <aomap_fragment>  	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;  	#include <envmap_fragment> 	#include <opaque_fragment> 	#include <tonemapping_fragment> 	#include <colorspace_fragment> 	#include <fog_fragment> 	#include <premultiplied_alpha_fragment> 	#include <dithering_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|meshmatcap.glsl.js
@EXPORT
export const vertex = /* glsl */| #define MATCAP  varying vec3 vViewPosition;  #include <common> #include <uv_pars_vertex> #include <color_pars_vertex> #include <displacementmap_pars_vertex> #include <fog_pars_vertex> #include <normal_pars_vertex> #include <morphtarget_pars_vertex> #include <skinning_pars_vertex>  #include <logdepthbuf_pars_vertex> #include <clipping_planes_pars_vertex>  void main() {  	#include <uv_vertex> 	#include <color_vertex> 	#include <morphcolor_vertex> 	#include <beginnormal_vertex> 	#include <morphnormal_vertex> 	#include <skinbase_vertex> 	#include <skinnormal_vertex> 	#include <defaultnormal_vertex> 	#include <normal_vertex>  	#include <begin_vertex> 	#include <morphtarget_vertex> 	#include <skinning_vertex> 	#include <displacementmap_vertex> 	#include <project_vertex>  	#include <logdepthbuf_vertex> 	#include <clipping_planes_vertex> 	#include <fog_vertex>  	vViewPosition = - mvPosition.xyz;  }
@EXPORT
export const fragment = /* glsl */| #define MATCAP  uniform vec3 diffuse; uniform float opacity; uniform sampler2D matcap;  varying vec3 vViewPosition;  #include <common> #include <dithering_pars_fragment> #include <color_pars_fragment> #include <uv_pars_fragment> #include <map_pars_fragment> #include <alphamap_pars_fragment> #include <alphatest_pars_fragment> #include <alphahash_pars_fragment> #include <fog_pars_fragment> #include <normal_pars_fragment> #include <bumpmap_pars_fragment> #include <normalmap_pars_fragment> #include <logdepthbuf_pars_fragment> #include <clipping_planes_pars_fragment>  void main() {  	#include <clipping_planes_fragment>  	vec4 diffuseColor = vec4( diffuse, opacity );  	#include <logdepthbuf_fragment> 	#include <map_fragment> 	#include <color_fragment> 	#include <alphamap_fragment> 	#include <alphatest_fragment> 	#include <alphahash_fragment> 	#include <normal_fragment_begin> 	#include <normal_fragment_maps>  	vec3 viewDir = normalize( vViewPosition ); 	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) ); 	vec3 y = cross( viewDir, x ); 	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks  	#ifdef USE_MATCAP  		vec4 matcapColor = texture2D( matcap, uv );  	#else  		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing  	#endif  	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;  	#include <opaque_fragment> 	#include <tonemapping_fragment> 	#include <colorspace_fragment> 	#include <fog_fragment> 	#include <premultiplied_alpha_fragment> 	#include <dithering_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|meshnormal.glsl.js
@EXPORT
export const vertex = /* glsl */| #define NORMAL  #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )  	varying vec3 vViewPosition;  #endif  #include <common> #include <uv_pars_vertex> #include <displacementmap_pars_vertex> #include <normal_pars_vertex> #include <morphtarget_pars_vertex> #include <skinning_pars_vertex> #include <logdepthbuf_pars_vertex> #include <clipping_planes_pars_vertex>  void main() {  	#include <uv_vertex>  	#include <beginnormal_vertex> 	#include <morphnormal_vertex> 	#include <skinbase_vertex> 	#include <skinnormal_vertex> 	#include <defaultnormal_vertex> 	#include <normal_vertex>  	#include <begin_vertex> 	#include <morphtarget_vertex> 	#include <skinning_vertex> 	#include <displacementmap_vertex> 	#include <project_vertex> 	#include <logdepthbuf_vertex> 	#include <clipping_planes_vertex>  #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )  	vViewPosition = - mvPosition.xyz;  #endif  }
@EXPORT
export const fragment = /* glsl */| #define NORMAL  uniform float opacity;  #if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )  	varying vec3 vViewPosition;  #endif  #include <packing> #include <uv_pars_fragment> #include <normal_pars_fragment> #include <bumpmap_pars_fragment> #include <normalmap_pars_fragment> #include <logdepthbuf_pars_fragment> #include <clipping_planes_pars_fragment>  void main() {  	#include <clipping_planes_fragment> 	#include <logdepthbuf_fragment> 	#include <normal_fragment_begin> 	#include <normal_fragment_maps>  	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );  	#ifdef OPAQUE  		gl_FragColor.a = 1.0;  	#endif  }
@FILENAME
src|renderers|shaders|ShaderLib|meshphong.glsl.js
@EXPORT
export const vertex = /* glsl */| #define PHONG  varying vec3 vViewPosition;  #include <common> #include <uv_pars_vertex> #include <displacementmap_pars_vertex> #include <envmap_pars_vertex> #include <color_pars_vertex> #include <fog_pars_vertex> #include <normal_pars_vertex> #include <morphtarget_pars_vertex> #include <skinning_pars_vertex> #include <shadowmap_pars_vertex> #include <logdepthbuf_pars_vertex> #include <clipping_planes_pars_vertex>  void main() {  	#include <uv_vertex> 	#include <color_vertex> 	#include <morphcolor_vertex>  	#include <beginnormal_vertex> 	#include <morphnormal_vertex> 	#include <skinbase_vertex> 	#include <skinnormal_vertex> 	#include <defaultnormal_vertex> 	#include <normal_vertex>  	#include <begin_vertex> 	#include <morphtarget_vertex> 	#include <skinning_vertex> 	#include <displacementmap_vertex> 	#include <project_vertex> 	#include <logdepthbuf_vertex> 	#include <clipping_planes_vertex>  	vViewPosition = - mvPosition.xyz;  	#include <worldpos_vertex> 	#include <envmap_vertex> 	#include <shadowmap_vertex> 	#include <fog_vertex>  }
@EXPORT
export const fragment = /* glsl */| #define PHONG  uniform vec3 diffuse; uniform vec3 emissive; uniform vec3 specular; uniform float shininess; uniform float opacity;  #include <common> #include <packing> #include <dithering_pars_fragment> #include <color_pars_fragment> #include <uv_pars_fragment> #include <map_pars_fragment> #include <alphamap_pars_fragment> #include <alphatest_pars_fragment> #include <alphahash_pars_fragment> #include <aomap_pars_fragment> #include <lightmap_pars_fragment> #include <emissivemap_pars_fragment> #include <envmap_common_pars_fragment> #include <envmap_pars_fragment> #include <fog_pars_fragment> #include <bsdfs> #include <lights_pars_begin> #include <normal_pars_fragment> #include <lights_phong_pars_fragment> #include <shadowmap_pars_fragment> #include <bumpmap_pars_fragment> #include <normalmap_pars_fragment> #include <specularmap_pars_fragment> #include <logdepthbuf_pars_fragment> #include <clipping_planes_pars_fragment>  void main() {  	#include <clipping_planes_fragment>  	vec4 diffuseColor = vec4( diffuse, opacity ); 	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) ); 	vec3 totalEmissiveRadiance = emissive;  	#include <logdepthbuf_fragment> 	#include <map_fragment> 	#include <color_fragment> 	#include <alphamap_fragment> 	#include <alphatest_fragment> 	#include <alphahash_fragment> 	#include <specularmap_fragment> 	#include <normal_fragment_begin> 	#include <normal_fragment_maps> 	#include <emissivemap_fragment>  	// accumulation 	#include <lights_phong_fragment> 	#include <lights_fragment_begin> 	#include <lights_fragment_maps> 	#include <lights_fragment_end>  	// modulation 	#include <aomap_fragment>  	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;  	#include <envmap_fragment> 	#include <opaque_fragment> 	#include <tonemapping_fragment> 	#include <colorspace_fragment> 	#include <fog_fragment> 	#include <premultiplied_alpha_fragment> 	#include <dithering_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|meshphysical.glsl.js
@EXPORT
export const vertex = /* glsl */| #define STANDARD  varying vec3 vViewPosition;  #ifdef USE_TRANSMISSION  	varying vec3 vWorldPosition;  #endif  #include <common> #include <uv_pars_vertex> #include <displacementmap_pars_vertex> #include <color_pars_vertex> #include <fog_pars_vertex> #include <normal_pars_vertex> #include <morphtarget_pars_vertex> #include <skinning_pars_vertex> #include <shadowmap_pars_vertex> #include <logdepthbuf_pars_vertex> #include <clipping_planes_pars_vertex>  void main() {  	#include <uv_vertex> 	#include <color_vertex> 	#include <morphcolor_vertex>  	#include <beginnormal_vertex> 	#include <morphnormal_vertex> 	#include <skinbase_vertex> 	#include <skinnormal_vertex> 	#include <defaultnormal_vertex> 	#include <normal_vertex>  	#include <begin_vertex> 	#include <morphtarget_vertex> 	#include <skinning_vertex> 	#include <displacementmap_vertex> 	#include <project_vertex> 	#include <logdepthbuf_vertex> 	#include <clipping_planes_vertex>  	vViewPosition = - mvPosition.xyz;  	#include <worldpos_vertex> 	#include <shadowmap_vertex> 	#include <fog_vertex>  #ifdef USE_TRANSMISSION  	vWorldPosition = worldPosition.xyz;  #endif }
@EXPORT
export const fragment = /* glsl */| #define STANDARD  #ifdef PHYSICAL 	#define IOR 	#define USE_SPECULAR #endif  uniform vec3 diffuse; uniform vec3 emissive; uniform float roughness; uniform float metalness; uniform float opacity;  #ifdef IOR 	uniform float ior; #endif  #ifdef USE_SPECULAR 	uniform float specularIntensity; 	uniform vec3 specularColor;  	#ifdef USE_SPECULAR_COLORMAP 		uniform sampler2D specularColorMap; 	#endif  	#ifdef USE_SPECULAR_INTENSITYMAP 		uniform sampler2D specularIntensityMap; 	#endif #endif  #ifdef USE_CLEARCOAT 	uniform float clearcoat; 	uniform float clearcoatRoughness; #endif  #ifdef USE_IRIDESCENCE 	uniform float iridescence; 	uniform float iridescenceIOR; 	uniform float iridescenceThicknessMinimum; 	uniform float iridescenceThicknessMaximum; #endif  #ifdef USE_SHEEN 	uniform vec3 sheenColor; 	uniform float sheenRoughness;  	#ifdef USE_SHEEN_COLORMAP 		uniform sampler2D sheenColorMap; 	#endif  	#ifdef USE_SHEEN_ROUGHNESSMAP 		uniform sampler2D sheenRoughnessMap; 	#endif #endif  #ifdef USE_ANISOTROPY 	uniform vec2 anisotropyVector;  	#ifdef USE_ANISOTROPYMAP 		uniform sampler2D anisotropyMap; 	#endif #endif  varying vec3 vViewPosition;  #include <common> #include <packing> #include <dithering_pars_fragment> #include <color_pars_fragment> #include <uv_pars_fragment> #include <map_pars_fragment> #include <alphamap_pars_fragment> #include <alphatest_pars_fragment> #include <alphahash_pars_fragment> #include <aomap_pars_fragment> #include <lightmap_pars_fragment> #include <emissivemap_pars_fragment> #include <iridescence_fragment> #include <cube_uv_reflection_fragment> #include <envmap_common_pars_fragment> #include <envmap_physical_pars_fragment> #include <fog_pars_fragment> #include <lights_pars_begin> #include <normal_pars_fragment> #include <lights_physical_pars_fragment> #include <transmission_pars_fragment> #include <shadowmap_pars_fragment> #include <bumpmap_pars_fragment> #include <normalmap_pars_fragment> #include <clearcoat_pars_fragment> #include <iridescence_pars_fragment> #include <roughnessmap_pars_fragment> #include <metalnessmap_pars_fragment> #include <logdepthbuf_pars_fragment> #include <clipping_planes_pars_fragment>  void main() {  	#include <clipping_planes_fragment>  	vec4 diffuseColor = vec4( diffuse, opacity ); 	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) ); 	vec3 totalEmissiveRadiance = emissive;  	#include <logdepthbuf_fragment> 	#include <map_fragment> 	#include <color_fragment> 	#include <alphamap_fragment> 	#include <alphatest_fragment> 	#include <alphahash_fragment> 	#include <roughnessmap_fragment> 	#include <metalnessmap_fragment> 	#include <normal_fragment_begin> 	#include <normal_fragment_maps> 	#include <clearcoat_normal_fragment_begin> 	#include <clearcoat_normal_fragment_maps> 	#include <emissivemap_fragment>  	// accumulation 	#include <lights_physical_fragment> 	#include <lights_fragment_begin> 	#include <lights_fragment_maps> 	#include <lights_fragment_end>  	// modulation 	#include <aomap_fragment>  	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse; 	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;  	#include <transmission_fragment>  	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;  	#ifdef USE_SHEEN  		// Sheen energy compensation approximation calculation can be found at the end of 		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing 		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );  		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;  	#endif  	#ifdef USE_CLEARCOAT  		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );  		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );  		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;  	#endif  	#include <opaque_fragment> 	#include <tonemapping_fragment> 	#include <colorspace_fragment> 	#include <fog_fragment> 	#include <premultiplied_alpha_fragment> 	#include <dithering_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|meshtoon.glsl.js
@EXPORT
export const vertex = /* glsl */| #define TOON  varying vec3 vViewPosition;  #include <common> #include <uv_pars_vertex> #include <displacementmap_pars_vertex> #include <color_pars_vertex> #include <fog_pars_vertex> #include <normal_pars_vertex> #include <morphtarget_pars_vertex> #include <skinning_pars_vertex> #include <shadowmap_pars_vertex> #include <logdepthbuf_pars_vertex> #include <clipping_planes_pars_vertex>  void main() {  	#include <uv_vertex> 	#include <color_vertex> 	#include <morphcolor_vertex>  	#include <beginnormal_vertex> 	#include <morphnormal_vertex> 	#include <skinbase_vertex> 	#include <skinnormal_vertex> 	#include <defaultnormal_vertex> 	#include <normal_vertex>  	#include <begin_vertex> 	#include <morphtarget_vertex> 	#include <skinning_vertex> 	#include <displacementmap_vertex> 	#include <project_vertex> 	#include <logdepthbuf_vertex> 	#include <clipping_planes_vertex>  	vViewPosition = - mvPosition.xyz;  	#include <worldpos_vertex> 	#include <shadowmap_vertex> 	#include <fog_vertex>  }
@EXPORT
export const fragment = /* glsl */| #define TOON  uniform vec3 diffuse; uniform vec3 emissive; uniform float opacity;  #include <common> #include <packing> #include <dithering_pars_fragment> #include <color_pars_fragment> #include <uv_pars_fragment> #include <map_pars_fragment> #include <alphamap_pars_fragment> #include <alphatest_pars_fragment> #include <alphahash_pars_fragment> #include <aomap_pars_fragment> #include <lightmap_pars_fragment> #include <emissivemap_pars_fragment> #include <gradientmap_pars_fragment> #include <fog_pars_fragment> #include <bsdfs> #include <lights_pars_begin> #include <normal_pars_fragment> #include <lights_toon_pars_fragment> #include <shadowmap_pars_fragment> #include <bumpmap_pars_fragment> #include <normalmap_pars_fragment> #include <logdepthbuf_pars_fragment> #include <clipping_planes_pars_fragment>  void main() {  	#include <clipping_planes_fragment>  	vec4 diffuseColor = vec4( diffuse, opacity ); 	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) ); 	vec3 totalEmissiveRadiance = emissive;  	#include <logdepthbuf_fragment> 	#include <map_fragment> 	#include <color_fragment> 	#include <alphamap_fragment> 	#include <alphatest_fragment> 	#include <alphahash_fragment> 	#include <normal_fragment_begin> 	#include <normal_fragment_maps> 	#include <emissivemap_fragment>  	// accumulation 	#include <lights_toon_fragment> 	#include <lights_fragment_begin> 	#include <lights_fragment_maps> 	#include <lights_fragment_end>  	// modulation 	#include <aomap_fragment>  	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;  	#include <opaque_fragment> 	#include <tonemapping_fragment> 	#include <colorspace_fragment> 	#include <fog_fragment> 	#include <premultiplied_alpha_fragment> 	#include <dithering_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|points.glsl.js
@EXPORT
export const vertex = /* glsl */| uniform float size; uniform float scale;  #include <common> #include <color_pars_vertex> #include <fog_pars_vertex> #include <morphtarget_pars_vertex> #include <logdepthbuf_pars_vertex> #include <clipping_planes_pars_vertex>  #ifdef USE_POINTS_UV  	varying vec2 vUv; 	uniform mat3 uvTransform;  #endif  void main() {  	#ifdef USE_POINTS_UV  		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;  	#endif  	#include <color_vertex> 	#include <morphcolor_vertex> 	#include <begin_vertex> 	#include <morphtarget_vertex> 	#include <project_vertex>  	gl_PointSize = size;  	#ifdef USE_SIZEATTENUATION  		bool isPerspective = isPerspectiveMatrix( projectionMatrix );  		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );  	#endif  	#include <logdepthbuf_vertex> 	#include <clipping_planes_vertex> 	#include <worldpos_vertex> 	#include <fog_vertex>  }
@EXPORT
export const fragment = /* glsl */| uniform vec3 diffuse; uniform float opacity;  #include <common> #include <color_pars_fragment> #include <map_particle_pars_fragment> #include <alphatest_pars_fragment> #include <alphahash_pars_fragment> #include <fog_pars_fragment> #include <logdepthbuf_pars_fragment> #include <clipping_planes_pars_fragment>  void main() {  	#include <clipping_planes_fragment>  	vec3 outgoingLight = vec3( 0.0 ); 	vec4 diffuseColor = vec4( diffuse, opacity );  	#include <logdepthbuf_fragment> 	#include <map_particle_fragment> 	#include <color_fragment> 	#include <alphatest_fragment> 	#include <alphahash_fragment>  	outgoingLight = diffuseColor.rgb;  	#include <opaque_fragment> 	#include <tonemapping_fragment> 	#include <colorspace_fragment> 	#include <fog_fragment> 	#include <premultiplied_alpha_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|shadow.glsl.js
@EXPORT
export const vertex = /* glsl */| #include <common> #include <fog_pars_vertex> #include <morphtarget_pars_vertex> #include <skinning_pars_vertex> #include <logdepthbuf_pars_vertex> #include <shadowmap_pars_vertex>  void main() {  	#include <beginnormal_vertex> 	#include <morphnormal_vertex> 	#include <skinbase_vertex> 	#include <skinnormal_vertex> 	#include <defaultnormal_vertex>  	#include <begin_vertex> 	#include <morphtarget_vertex> 	#include <skinning_vertex> 	#include <project_vertex> 	#include <logdepthbuf_vertex>  	#include <worldpos_vertex> 	#include <shadowmap_vertex> 	#include <fog_vertex>  }
@EXPORT
export const fragment = /* glsl */| uniform vec3 color; uniform float opacity;  #include <common> #include <packing> #include <fog_pars_fragment> #include <bsdfs> #include <lights_pars_begin> #include <logdepthbuf_pars_fragment> #include <shadowmap_pars_fragment> #include <shadowmask_pars_fragment>  void main() {  	#include <logdepthbuf_fragment>  	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );  	#include <tonemapping_fragment> 	#include <colorspace_fragment> 	#include <fog_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|sprite.glsl.js
@EXPORT
export const vertex = /* glsl */| uniform float rotation; uniform vec2 center;  #include <common> #include <uv_pars_vertex> #include <fog_pars_vertex> #include <logdepthbuf_pars_vertex> #include <clipping_planes_pars_vertex>  void main() {  	#include <uv_vertex>  	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );  	vec2 scale; 	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) ); 	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );  	#ifndef USE_SIZEATTENUATION  		bool isPerspective = isPerspectiveMatrix( projectionMatrix );  		if ( isPerspective ) scale *= - mvPosition.z;  	#endif  	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;  	vec2 rotatedPosition; 	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y; 	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;  	mvPosition.xy += rotatedPosition;  	gl_Position = projectionMatrix * mvPosition;  	#include <logdepthbuf_vertex> 	#include <clipping_planes_vertex> 	#include <fog_vertex>  }
@EXPORT
export const fragment = /* glsl */| uniform vec3 diffuse; uniform float opacity;  #include <common> #include <uv_pars_fragment> #include <map_pars_fragment> #include <alphamap_pars_fragment> #include <alphatest_pars_fragment> #include <alphahash_pars_fragment> #include <fog_pars_fragment> #include <logdepthbuf_pars_fragment> #include <clipping_planes_pars_fragment>  void main() {  	#include <clipping_planes_fragment>  	vec3 outgoingLight = vec3( 0.0 ); 	vec4 diffuseColor = vec4( diffuse, opacity );  	#include <logdepthbuf_fragment> 	#include <map_fragment> 	#include <alphamap_fragment> 	#include <alphatest_fragment> 	#include <alphahash_fragment>  	outgoingLight = diffuseColor.rgb;  	#include <opaque_fragment> 	#include <tonemapping_fragment> 	#include <colorspace_fragment> 	#include <fog_fragment>  }
@FILENAME
src|renderers|shaders|ShaderLib|vsm.glsl.js
@EXPORT
export const vertex = /* glsl */| void main() {  	gl_Position = vec4( position, 1.0 );  }
@EXPORT
export const fragment = /* glsl */| uniform sampler2D shadow_pass; uniform vec2 resolution; uniform float radius;  #include <packing>  void main() {  	const float samples = float( VSM_SAMPLES );  	float mean = 0.0; 	float squared_mean = 0.0;  	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 ); 	float uvStart = samples <= 1.0 ? 0.0 : - 1.0; 	for ( float i = 0.0; i < samples; i ++ ) {  		float uvOffset = uvStart + i * uvStride;  		#ifdef HORIZONTAL_PASS  			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) ); 			mean += distribution.x; 			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;  		#else  			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) ); 			mean += depth; 			squared_mean += depth * depth;  		#endif  	}
@FILENAME
src|renderers|webgl|WebGLAnimation.js
@EXPORT
export { WebGLAnimation }
@FILENAME
src|renderers|webgl|WebGLAttributes.js
@EXPORT
export { WebGLAttributes }
@FILENAME
src|renderers|webgl|WebGLBackground.js
@EXPORT
export { WebGLBackground }
@FILENAME
src|renderers|webgl|WebGLBindingStates.js
@EXPORT
export { WebGLBindingStates }
@FILENAME
src|renderers|webgl|WebGLBufferRenderer.js
@EXPORT
export { WebGLBufferRenderer }
@FILENAME
src|renderers|webgl|WebGLCapabilities.js
@EXPORT
export { WebGLCapabilities }
@FILENAME
src|renderers|webgl|WebGLClipping.js
@EXPORT
export { WebGLClipping }
@FILENAME
src|renderers|webgl|WebGLCubeMaps.js
@EXPORT
export { WebGLCubeMaps }
@FILENAME
src|renderers|webgl|WebGLCubeUVMaps.js
@EXPORT
export { WebGLCubeUVMaps }
@FILENAME
src|renderers|webgl|WebGLExtensions.js
@EXPORT
export { WebGLExtensions }
@FILENAME
src|renderers|webgl|WebGLGeometries.js
@EXPORT
export { WebGLGeometries }
@FILENAME
src|renderers|webgl|WebGLIndexedBufferRenderer.js
@EXPORT
export { WebGLIndexedBufferRenderer }
@FILENAME
src|renderers|webgl|WebGLInfo.js
@EXPORT
export { WebGLInfo }
@FILENAME
src|renderers|webgl|WebGLLights.js
@EXPORT
export { WebGLLights }
@FILENAME
src|renderers|webgl|WebGLMaterials.js
@EXPORT
export { WebGLMaterials }
@FILENAME
src|renderers|webgl|WebGLMorphtargets.js
@EXPORT
export { WebGLMorphtargets }
@FILENAME
src|renderers|webgl|WebGLObjects.js
@EXPORT
export { WebGLObjects }
@FILENAME
src|renderers|webgl|WebGLProgram.js
@EXPORT
export { WebGLProgram }
@FILENAME
src|renderers|webgl|WebGLPrograms.js
@EXPORT
export { WebGLPrograms }
@FILENAME
src|renderers|webgl|WebGLProperties.js
@EXPORT
export { WebGLProperties }
@FILENAME
src|renderers|webgl|WebGLRenderLists.js
@EXPORT
export { WebGLRenderLists, WebGLRenderList }
@FILENAME
src|renderers|webgl|WebGLRenderStates.js
@EXPORT
export { WebGLRenderStates }
@FILENAME
src|renderers|webgl|WebGLShader.js
@EXPORT
export { WebGLShader }
@FILENAME
src|renderers|webgl|WebGLShaderCache.js
@EXPORT
export { WebGLShaderCache }
@CLASS
class WebGLShaderCache {
@CLASS
class WebGLShaderStage {
@FILENAME
src|renderers|webgl|WebGLShadowMap.js
@EXPORT
export { WebGLShadowMap }
@FILENAME
src|renderers|webgl|WebGLState.js
@EXPORT
export { WebGLState }
@FILENAME
src|renderers|webgl|WebGLTextures.js
@EXPORT
export { WebGLTextures }
@FILENAME
src|renderers|webgl|WebGLUniforms.js
@EXPORT
export { WebGLUniforms }
@CLASS
Classes ---  class SingleUniform {
@CLASS
class SingleUniform {
@CLASS
class PureArrayUniform {
@CLASS
class StructuredUniform {
@CLASS
class WebGLUniforms {
@FILENAME
src|renderers|webgl|WebGLUniformsGroups.js
@EXPORT
export { WebGLUniformsGroups }
@FILENAME
src|renderers|webgl|WebGLUtils.js
@EXPORT
export { WebGLUtils }
@FILENAME
src|renderers|webxr|WebXRController.js
@EXPORT
export { WebXRController }
@CLASS
class WebXRController {
@FILENAME
src|renderers|webxr|WebXRManager.js
@EXPORT
export { WebXRManager }
@CLASS
class WebXRManager extends EventDispatcher {
@FILENAME
src|scenes|Fog.js
@EXPORT
export { Fog }
@CLASS
class Fog {
@FILENAME
src|scenes|FogExp2.js
@EXPORT
export { FogExp2 }
@CLASS
class FogExp2 {
@FILENAME
src|scenes|Scene.js
@EXPORT
export { Scene }
@CLASS
class Scene extends Object3D {
@FILENAME
src|textures|CanvasTexture.js
@EXPORT
export { CanvasTexture }
@CLASS
class CanvasTexture extends Texture {
@FILENAME
src|textures|CompressedArrayTexture.js
@EXPORT
export { CompressedArrayTexture }
@CLASS
class CompressedArrayTexture extends CompressedTexture {
@FILENAME
src|textures|CompressedCubeTexture.js
@EXPORT
export { CompressedCubeTexture }
@CLASS
class CompressedCubeTexture extends CompressedTexture {
@FILENAME
src|textures|CompressedTexture.js
@EXPORT
export { CompressedTexture }
@CLASS
class CompressedTexture extends Texture {
@FILENAME
src|textures|CubeTexture.js
@EXPORT
export { CubeTexture }
@CLASS
class CubeTexture extends Texture {
@FILENAME
src|textures|Data3DTexture.js
@EXPORT
export { Data3DTexture }
@CLASS
class Data3DTexture extends Texture {
@FILENAME
src|textures|DataArrayTexture.js
@EXPORT
export { DataArrayTexture }
@CLASS
class DataArrayTexture extends Texture {
@FILENAME
src|textures|DataTexture.js
@EXPORT
export { DataTexture }
@CLASS
class DataTexture extends Texture {
@FILENAME
src|textures|DepthTexture.js
@EXPORT
export { DepthTexture }
@CLASS
class DepthTexture extends Texture {
@FILENAME
src|textures|FramebufferTexture.js
@EXPORT
export { FramebufferTexture }
@CLASS
class FramebufferTexture extends Texture {
@FILENAME
src|textures|Source.js
@EXPORT
export { Source }
@CLASS
class Source {
@FILENAME
src|textures|Texture.js
@EXPORT
export { Texture }
@CLASS
class Texture extends EventDispatcher {
@FILENAME
src|textures|VideoTexture.js
@EXPORT
export { VideoTexture }
@CLASS
class VideoTexture extends Texture {
`; 
