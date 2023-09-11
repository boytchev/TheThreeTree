DATA_SRC = ` 
animation|AnimationAction.js:class AnimationAction {
animation|AnimationClip.js:class AnimationClip {
animation|AnimationMixer.js:class AnimationMixer extends EventDispatcher {
animation|AnimationObjectGroup.js:class AnimationObjectGroup {
animation|KeyframeTrack.js:class KeyframeTrack {
animation|PropertyBinding.js:class Composite {
animation|PropertyBinding.js:class PropertyBinding {
animation|PropertyMixer.js:class PropertyMixer {
animation|tracks|BooleanKeyframeTrack.js:class BooleanKeyframeTrack extends KeyframeTrack {}
animation|tracks|ColorKeyframeTrack.js:class ColorKeyframeTrack extends KeyframeTrack {}
animation|tracks|NumberKeyframeTrack.js:class NumberKeyframeTrack extends KeyframeTrack {}
animation|tracks|QuaternionKeyframeTrack.js:class QuaternionKeyframeTrack extends KeyframeTrack {
animation|tracks|StringKeyframeTrack.js:class StringKeyframeTrack extends KeyframeTrack {}
animation|tracks|VectorKeyframeTrack.js:class VectorKeyframeTrack extends KeyframeTrack {}
audio|Audio.js:class Audio extends Object3D {
audio|AudioAnalyser.js:class AudioAnalyser {
audio|AudioContext.js:class AudioContext {
audio|AudioListener.js:class AudioListener extends Object3D {
audio|PositionalAudio.js:class PositionalAudio extends Audio {
cameras|ArrayCamera.js:class ArrayCamera extends PerspectiveCamera {
cameras|Camera.js:class Camera extends Object3D {
cameras|CubeCamera.js:class CubeCamera extends Object3D {
cameras|OrthographicCamera.js:class OrthographicCamera extends Camera {
cameras|PerspectiveCamera.js:class PerspectiveCamera extends Camera {
cameras|StereoCamera.js:class StereoCamera {
core|BufferAttribute.js:class BufferAttribute {
core|BufferAttribute.js:class Int8BufferAttribute extends BufferAttribute {
core|BufferAttribute.js:class Uint8BufferAttribute extends BufferAttribute {
core|BufferAttribute.js:class Uint8ClampedBufferAttribute extends BufferAttribute {
core|BufferAttribute.js:class Int16BufferAttribute extends BufferAttribute {
core|BufferAttribute.js:class Uint16BufferAttribute extends BufferAttribute {
core|BufferAttribute.js:class Int32BufferAttribute extends BufferAttribute {
core|BufferAttribute.js:class Uint32BufferAttribute extends BufferAttribute {
core|BufferAttribute.js:class Float16BufferAttribute extends BufferAttribute {
core|BufferAttribute.js:class Float32BufferAttribute extends BufferAttribute {
core|BufferAttribute.js:class Float64BufferAttribute extends BufferAttribute {
core|BufferGeometry.js:class BufferGeometry extends EventDispatcher {
core|Clock.js:class Clock {
core|EventDispatcher.js:class EventDispatcher {
core|GLBufferAttribute.js:class GLBufferAttribute {
core|InstancedBufferAttribute.js:class InstancedBufferAttribute extends BufferAttribute {
core|InstancedBufferGeometry.js:class InstancedBufferGeometry extends BufferGeometry {
core|InstancedInterleavedBuffer.js:class InstancedInterleavedBuffer extends InterleavedBuffer {
core|InterleavedBuffer.js:class InterleavedBuffer {
core|InterleavedBufferAttribute.js:class InterleavedBufferAttribute {
core|Layers.js:class Layers {
core|Object3D.js:class Object3D extends EventDispatcher {
core|Raycaster.js:class Raycaster {
core|RenderTarget.js:class RenderTarget extends EventDispatcher {
core|Uniform.js:class Uniform {
core|UniformsGroup.js:class UniformsGroup extends EventDispatcher {
extras|core|Curve.js:class Curve {
extras|core|CurvePath.js:class CurvePath extends Curve {
extras|core|Path.js:class Path extends CurvePath {
extras|core|Shape.js:class Shape extends Path {
extras|core|ShapePath.js:class ShapePath {
extras|curves|ArcCurve.js:class ArcCurve extends EllipseCurve {
extras|curves|CatmullRomCurve3.js:class CatmullRomCurve3 extends Curve {
extras|curves|CubicBezierCurve.js:class CubicBezierCurve extends Curve {
extras|curves|CubicBezierCurve3.js:class CubicBezierCurve3 extends Curve {
extras|curves|EllipseCurve.js:class EllipseCurve extends Curve {
extras|curves|LineCurve.js:class LineCurve extends Curve {
extras|curves|LineCurve3.js:class LineCurve3 extends Curve {
extras|curves|QuadraticBezierCurve.js:class QuadraticBezierCurve extends Curve {
extras|curves|QuadraticBezierCurve3.js:class QuadraticBezierCurve3 extends Curve {
extras|curves|SplineCurve.js:class SplineCurve extends Curve {
extras|ImageUtils.js:class ImageUtils {
extras|PMREMGenerator.js:class PMREMGenerator {
extras|ShapeUtils.js:class ShapeUtils {
geometries|BoxGeometry.js:class BoxGeometry extends BufferGeometry {
geometries|CapsuleGeometry.js:class CapsuleGeometry extends LatheGeometry {
geometries|CircleGeometry.js:class CircleGeometry extends BufferGeometry {
geometries|ConeGeometry.js:class ConeGeometry extends CylinderGeometry {
geometries|CylinderGeometry.js:class CylinderGeometry extends BufferGeometry {
geometries|DodecahedronGeometry.js:class DodecahedronGeometry extends PolyhedronGeometry {
geometries|EdgesGeometry.js:class EdgesGeometry extends BufferGeometry {
geometries|ExtrudeGeometry.js:class ExtrudeGeometry extends BufferGeometry {
geometries|IcosahedronGeometry.js:class IcosahedronGeometry extends PolyhedronGeometry {
geometries|LatheGeometry.js:class LatheGeometry extends BufferGeometry {
geometries|OctahedronGeometry.js:class OctahedronGeometry extends PolyhedronGeometry {
geometries|PlaneGeometry.js:class PlaneGeometry extends BufferGeometry {
geometries|PolyhedronGeometry.js:class PolyhedronGeometry extends BufferGeometry {
geometries|RingGeometry.js:class RingGeometry extends BufferGeometry {
geometries|ShapeGeometry.js:class ShapeGeometry extends BufferGeometry {
geometries|SphereGeometry.js:class SphereGeometry extends BufferGeometry {
geometries|TetrahedronGeometry.js:class TetrahedronGeometry extends PolyhedronGeometry {
geometries|TorusGeometry.js:class TorusGeometry extends BufferGeometry {
geometries|TorusKnotGeometry.js:class TorusKnotGeometry extends BufferGeometry {
geometries|TubeGeometry.js:class TubeGeometry extends BufferGeometry {
geometries|WireframeGeometry.js:class WireframeGeometry extends BufferGeometry {
helpers|ArrowHelper.js:class ArrowHelper extends Object3D {
helpers|AxesHelper.js:class AxesHelper extends LineSegments {
helpers|Box3Helper.js:class Box3Helper extends LineSegments {
helpers|BoxHelper.js:class BoxHelper extends LineSegments {
helpers|CameraHelper.js:class CameraHelper extends LineSegments {
helpers|DirectionalLightHelper.js:class DirectionalLightHelper extends Object3D {
helpers|GridHelper.js:class GridHelper extends LineSegments {
helpers|HemisphereLightHelper.js:class HemisphereLightHelper extends Object3D {
helpers|PlaneHelper.js:class PlaneHelper extends Line {
helpers|PointLightHelper.js:class PointLightHelper extends Mesh {
helpers|PolarGridHelper.js:class PolarGridHelper extends LineSegments {
helpers|SkeletonHelper.js:class SkeletonHelper extends LineSegments {
helpers|SpotLightHelper.js:class SpotLightHelper extends Object3D {
lights|AmbientLight.js:class AmbientLight extends Light {
lights|AmbientLightProbe.js:class AmbientLightProbe extends LightProbe {
lights|DirectionalLight.js:class DirectionalLight extends Light {
lights|DirectionalLightShadow.js:class DirectionalLightShadow extends LightShadow {
lights|HemisphereLight.js:class HemisphereLight extends Light {
lights|HemisphereLightProbe.js:class HemisphereLightProbe extends LightProbe {
lights|Light.js:class Light extends Object3D {
lights|LightProbe.js:class LightProbe extends Light {
lights|LightShadow.js:class LightShadow {
lights|PointLight.js:class PointLight extends Light {
lights|PointLightShadow.js:class PointLightShadow extends LightShadow {
lights|RectAreaLight.js:class RectAreaLight extends Light {
lights|SpotLight.js:class SpotLight extends Light {
lights|SpotLightShadow.js:class SpotLightShadow extends LightShadow {
loaders|AnimationLoader.js:class AnimationLoader extends Loader {
loaders|AudioLoader.js:class AudioLoader extends Loader {
loaders|BufferGeometryLoader.js:class BufferGeometryLoader extends Loader {
loaders|CompressedTextureLoader.js:class CompressedTextureLoader extends Loader {
loaders|CubeTextureLoader.js:class CubeTextureLoader extends Loader {
loaders|DataTextureLoader.js:class DataTextureLoader extends Loader {
loaders|FileLoader.js:class HttpError extends Error {
loaders|FileLoader.js:class FileLoader extends Loader {
loaders|ImageBitmapLoader.js:class ImageBitmapLoader extends Loader {
loaders|ImageLoader.js:class ImageLoader extends Loader {
loaders|Loader.js:class Loader {
loaders|LoaderUtils.js:class LoaderUtils {
loaders|LoadingManager.js:class LoadingManager {
loaders|MaterialLoader.js:class MaterialLoader extends Loader {
loaders|ObjectLoader.js:class ObjectLoader extends Loader {
loaders|TextureLoader.js:class TextureLoader extends Loader {
materials|LineBasicMaterial.js:class LineBasicMaterial extends Material {
materials|LineDashedMaterial.js:class LineDashedMaterial extends LineBasicMaterial {
materials|Material.js:class Material extends EventDispatcher {
materials|MeshBasicMaterial.js:class MeshBasicMaterial extends Material {
materials|MeshDepthMaterial.js:class MeshDepthMaterial extends Material {
materials|MeshDistanceMaterial.js:class MeshDistanceMaterial extends Material {
materials|MeshLambertMaterial.js:class MeshLambertMaterial extends Material {
materials|MeshMatcapMaterial.js:class MeshMatcapMaterial extends Material {
materials|MeshNormalMaterial.js:class MeshNormalMaterial extends Material {
materials|MeshPhongMaterial.js:class MeshPhongMaterial extends Material {
materials|MeshPhysicalMaterial.js:class MeshPhysicalMaterial extends MeshStandardMaterial {
materials|MeshStandardMaterial.js:class MeshStandardMaterial extends Material {
materials|MeshToonMaterial.js:class MeshToonMaterial extends Material {
materials|PointsMaterial.js:class PointsMaterial extends Material {
materials|RawShaderMaterial.js:class RawShaderMaterial extends ShaderMaterial {
materials|ShaderMaterial.js:class ShaderMaterial extends Material {
materials|ShadowMaterial.js:class ShadowMaterial extends Material {
materials|SpriteMaterial.js:class SpriteMaterial extends Material {
math|Box2.js:class Box2 {
math|Box3.js:class Box3 {
math|Color.js:class Color {
math|Cylindrical.js:class Cylindrical {
math|Euler.js:class Euler {
math|Frustum.js:class Frustum {
math|Interpolant.js:class Interpolant {
math|interpolants|CubicInterpolant.js:class CubicInterpolant extends Interpolant {
math|interpolants|DiscreteInterpolant.js:class DiscreteInterpolant extends Interpolant {
math|interpolants|LinearInterpolant.js:class LinearInterpolant extends Interpolant {
math|interpolants|QuaternionLinearInterpolant.js:class QuaternionLinearInterpolant extends Interpolant {
math|Line3.js:class Line3 {
math|Matrix3.js:class Matrix3 {
math|Matrix4.js:class Matrix4 {
math|Plane.js:class Plane {
math|Quaternion.js:class Quaternion {
math|Ray.js:class Ray {
math|Sphere.js:class Sphere {
math|Spherical.js:class Spherical {
math|SphericalHarmonics3.js:class SphericalHarmonics3 {
math|Triangle.js:class Triangle {
math|Vector2.js:class Vector2 {
math|Vector3.js:class Vector3 {
math|Vector4.js:class Vector4 {
objects|Bone.js:class Bone extends Object3D {
objects|Group.js:class Group extends Object3D {
objects|InstancedMesh.js:class InstancedMesh extends Mesh {
objects|Line.js:class Line extends Object3D {
objects|LineLoop.js:class LineLoop extends Line {
objects|LineSegments.js:class LineSegments extends Line {
objects|LOD.js:class LOD extends Object3D {
objects|Mesh.js:class Mesh extends Object3D {
objects|Points.js:class Points extends Object3D {
objects|Skeleton.js:class Skeleton {
objects|SkinnedMesh.js:class SkinnedMesh extends Mesh {
objects|Sprite.js:class Sprite extends Object3D {
renderers|webgl|WebGLShaderCache.js:class WebGLShaderCache {
renderers|webgl|WebGLShaderCache.js:class WebGLShaderStage {
renderers|webgl|WebGLUniforms.js:class SingleUniform {
renderers|webgl|WebGLUniforms.js:class PureArrayUniform {
renderers|webgl|WebGLUniforms.js:class StructuredUniform {
renderers|webgl|WebGLUniforms.js:class WebGLUniforms {
renderers|WebGL1Renderer.js:class WebGL1Renderer extends WebGLRenderer {}
renderers|WebGL3DRenderTarget.js:class WebGL3DRenderTarget extends WebGLRenderTarget {
renderers|WebGLArrayRenderTarget.js:class WebGLArrayRenderTarget extends WebGLRenderTarget {
renderers|WebGLCubeRenderTarget.js:class WebGLCubeRenderTarget extends WebGLRenderTarget {
renderers|WebGLMultipleRenderTargets.js:class WebGLMultipleRenderTargets extends WebGLRenderTarget {
renderers|WebGLRenderer.js:class WebGLRenderer {
renderers|WebGLRenderTarget.js:class WebGLRenderTarget extends RenderTarget {
renderers|webxr|WebXRController.js:class WebXRController {
renderers|webxr|WebXRManager.js:class WebXRManager extends EventDispatcher {
scenes|Fog.js:class Fog {
scenes|FogExp2.js:class FogExp2 {
scenes|Scene.js:class Scene extends Object3D {
textures|CanvasTexture.js:class CanvasTexture extends Texture {
textures|CompressedArrayTexture.js:class CompressedArrayTexture extends CompressedTexture {
textures|CompressedCubeTexture.js:class CompressedCubeTexture extends CompressedTexture {
textures|CompressedTexture.js:class CompressedTexture extends Texture {
textures|CubeTexture.js:class CubeTexture extends Texture {
textures|Data3DTexture.js:class Data3DTexture extends Texture {
textures|DataArrayTexture.js:class DataArrayTexture extends Texture {
textures|DataTexture.js:class DataTexture extends Texture {
textures|DepthTexture.js:class DepthTexture extends Texture {
textures|FramebufferTexture.js:class FramebufferTexture extends Texture {
textures|Source.js:class Source {
textures|Texture.js:class Texture extends EventDispatcher {
textures|VideoTexture.js:class VideoTexture extends Texture {
`; 
