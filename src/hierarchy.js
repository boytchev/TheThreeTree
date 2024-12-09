//
// The Three Tree project
//
// Module for buuildig hierarcy of classes



import {sorter,ZoneClass} from "./globals.js";
import classes from "./classes.js";

var nodes = [];


var rootClass = classes.filter( e=>e.isRoot )[0],
	originalClassesCount = classes.length;



function matchString( s1, s2 )
{
	for( var i=0; i<Math.min(s1.length,s2.length); i++ )
		if( s1[i]!=s2[i] ) break;
	
	var match = i/s2.length;

	//console.log(s1,s2,match);
	
	return match;
}


	
// build hierarcy

console.groupCollapsed( 'Hierarcy building warnings' );

for( var i=0; i<classes.length; i++ ) if (!classes[i].isRoot)
{
	if( classes[i].parentName )
	{
		var parents = classes.filter( e=>e.name==classes[i].parentName );
		if( parents.length == 0 )
		{
			// in r168 this happens with: 
			// GPUStatsPanel [addons|utils|GPUStatsPanel.js] -> Stats.Panel
			console.warn( `class ${classes[i].info} has parent ${classes[i].parent} which is unkown, assume the root class as a parent` );
			classes[i].setParent( rootClass );
		}
		else
		if( parents.length > 1 )
		{
			let str = `class ${classes[i].info} has ${parents.length} potential parents: \n\t${parents.map(e=>e.info).join('\n\t')}`;
			// sort parents according to file name similarity
			parents.sort( (a,b)=>matchString(classes[i].fileName,b.fileName)-matchString(classes[i].fileName,a.fileName) );
			
			console.warn( `${str}\n\t-->picking ${parents[0].info}` );

			classes[i].setParent( parents[0] );
		}
		else
		{
			classes[i].setParent( parents[0] );
		}
			
	} // if has parent
	else
	{
		// no parent, use the first root (ThreeJS) as a parent
		classes[i].setParent( rootClass );
	} // if has no parent
	
} // for i

console.groupEnd( 'Hierarcy building warnings' );



function addZones( node )
{
	
	next_child:
	for( var i in node.children )
	{
		if( !node.children[i].isZone && node.children[i].path.length>0 )
		{
			var zone,
				zoneName = node.children[i].path.shift(),
				zoneIndex = node.children.findIndex( e=>e && e.isZone && e.name==zoneName );
			
			if( zoneIndex>=0 )
			{
				zone = node.children[zoneIndex];
			}
			else
			{
				// is zoneName already exists in parents, skip it
				for( var p = node; p; p = p.parent )
					if( zoneName == p.name ) continue next_child;

				zone = new ZoneClass( zoneName );
				zone.setParent( node );
				//zone.isZoneJS = zoneName.split('.js').length>1; // it was JS file, not folder
				//zone.isZone = !zone.isZoneJS;
			} // if-else
			node.children[i].setParent( zone );
		} // if !node.children[i].isZone
	} // for

	// remove zones with single child, if the name matches (e.g.   file Abc.js defines class Abc)
	node.children.forEach( e => {
		if(e.isZone/*JS*/ && e.children.length==1 && e.name==e.children[0].name+'.js')
		{
			e.children[0].parent = node;
			e.children = [];
			e.parent = null;
		}
	} );
	
	// remove all ex-children that have moved to a new parent
	node.children = node.children.filter( e => e.parent==node );
	
	node.children.sort( sorter );
	
	// recursively process children
	node.children.forEach( e => addZones(e) );
}



// if a zone has one child which is zone, then merge both zones and merge their names
function compactZones( node )
{
	
	// recursively process children
	node.children.forEach( e => compactZones(e) );

	if( !node.isZone ) return;
	if( node.children.length != 1 ) return;
	
	var child = node.children[0];
	
	if( !child.isZone ) return;

	// merge zone with its child
	node.name = node.name + ' / ' + child.name;
	node.children = child.children;
	for( var c of node.children ) c.parent = node;
}





// check whether the number of classes is the same
function calculateCount( node )
{
	var count = node.isZone ? 0 : 1;
	
	for( var i=0; i<node.children.length; i++ )
		count += calculateCount( node.children[i] );
	
	return count;
}


addZones( rootClass );
compactZones( rootClass );







if( originalClassesCount != calculateCount(rootClass) )
{
	console.error(`The number of classes has changed. The original count before hierarcy building was ${originalClassesCount}, while after building it is ${calculateCount(rootClass)}`);
}


rootClass.sort();


// add fake zones to node with too many children
/*
function addFakeZones( node )
{
	var k=0; // keep the first k and the last k on the same level
	
	if( node.children.length>18 ) k = 6;
//	else
//	if( node.children.length>5 ) k = 2;
		
	if( k > 0 )
	{		
		var	zone = new ZoneClass( '' );
		zone.parent = node;
		
		for( var i=k; i<node.children.length-k; i++ )
		{
			node.children[i].setParent( zone );
		} // for
		
		// remove all ex-children that have moved to a new parent
		//node.children = node.children.filter( e => e.parent==node );
		// remove all ex-children that have moved to a new parent
		node.children = node.children.filter( e => e.parent==node );
		node.children.splice( k, 0, zone );
		
//		node.children.sort( sorter );
	}
	
	// recursively process children
	node.children.forEach( e => addFakeZones(e) );
}

addFakeZones( rootClass );
*/


// complete isCore -- because there are some classes with unset isCore
function completeIsCore( node )
{
	for( var i=0; i<node.children.length; i++ )
	{
		if( node.children[i].isCore == null )
			node.children[i].isCore = node.isCore;
		
		completeIsCore(node.children[i] );
	}
}

completeIsCore( rootClass );


// collect all nodes
function collectNodes( node )
{
	nodes.push( node );
		
	for( var i=0; i<node.children.length; i++ )
		collectNodes(node.children[i] );
}

collectNodes( rootClass );



// find a node (incl. zones) by its properties

function findNode( nodeName, parentName=null, grandparentName=null )
{
	var foundNodes = nodes.filter( x=>x.name==nodeName && (parentName==null || parentName==x.parent?.name) && (grandparentName==null || grandparentName==x.parent?.parent?.name) );
	if( foundNodes.length==0 )
	{
		console.error(`Node ${nodeName} is not found` );
		return null;
	}
	if( foundNodes.length>1 )
	{
		console.error(`Node ${nodeName} is not unique` );
		console.error(foundNodes );
		return null;
	}
	return foundNodes[0];
} // findNode


// shift node to the righт jumping over n siblings

function shiftNode( nodeName, n, parentName=null, grandparentName=null )
{
	var node = findNode( nodeName, parentName, grandparentName );
	if( node==null ) return;

	var i = node.parent.children.indexOf( node );
	if( i<0 )
	{
		console.error(`Node ${nodeName} is not found in its parent's children` );
		return;
	}
	
	node.parent.children.splice( i, 1 );
	node.parent.children.splice( i+n, 0, node );
}


// raise node upwards by adding fake zone

function raiseNode( nodeName, parentName=null, grandparentName=null )
{
	var node = findNode( nodeName, parentName, grandparentName );
	if( node==null ) return;
	
	var	zone = new ZoneClass( '' );
	zone.parent = node;
	zone.isCore = node.isCore;

	for( var child of node.children ) child.setParent( zone );
	
	node.children = [zone];
}


// raise zone children vertically as a flower

function flowerZone( nodeName, n=3, parentName=null, grandparentName=null, maxLevels=100 )
{
	var node = findNode( nodeName, parentName, grandparentName );
	if( node==null ) return;
	
	flowerZoneHelper( node, n, maxLevels );
}

function flowerZoneHelper( node, n, maxLevels )
{
	if( maxLevels < 1 ) return;
	
	var k=0; // keep the first k and the last k on the same level
	
	if( node.children.length>3*n ) k = n;
//	else
//	if( node.children.length>5 ) k = 2;
		
	if( k > 0 )
	{		
		var	zone = new ZoneClass( '' );
		zone.parent = node;
		zone.isCore = node.isCore;
		
		for( var i=k; i<node.children.length-k; i++ )
		{
			node.children[i].setParent( zone );
		} // for
		
		// remove all ex-children that have moved to a new parent
		//node.children = node.children.filter( e => e.parent==node );
		// remove all ex-children that have moved to a new parent
		node.children = node.children.filter( e => e.parent==node );
		node.children.splice( k, 0, zone );
		
//		node.children.sort( sorter );
	}
	
	// recursively process children
	node.children.forEach( e => flowerZoneHelper(e, n, maxLevels-1) );
}


// manual adjust of the tree hierarchy

function manualAdjust()
{
	raiseNode( 'Node' );
	raiseNode( 'Node' );
	raiseNode( 'Node' );
	flowerZone( 'Node', 6 );
	shiftNode( 'InputNode', -9 );
	shiftNode( 'TempNode', 5 );
	raiseNode( 'addons / tsl / display', 'TempNode' );
	flowerZone( 'addons / tsl / display', 3, 'TempNode' );
	raiseNode( 'TempNode' );

	flowerZone( 'Loader', 3 );
	raiseNode( 'addons', 'Loader' );
	shiftNode( 'DataTextureLoader', 3 );

	flowerZone( 'math', 2, 'src', null, 2 );
	shiftNode( 'math', 4, 'src' );
	shiftNode( 'Color', 1 );
	
	shiftNode( 'animation', 2, 'src' );
	shiftNode( 'Texture', -1 );
	shiftNode( 'Data3DTexture', 4 );
	flowerZone( 'Texture', 3 );
	shiftNode( 'addons', 13, 'BufferGeometry' );
	shiftNode( 'RenderTarget', -1 );
	shiftNode( 'PolyhedronGeometry', -5 );
	shiftNode( 'ShapeGeometry', -6 );
	shiftNode( 'PlaneGeometry', -5 );
	shiftNode( 'Data3DTexture', -6 );
	shiftNode( 'CanvasTexture', 3 );
	
	shiftNode( 'Light', 7 );
	shiftNode( 'addons', 2, 'Mesh' );

	raiseNode( 'misc / RollerCoaster.js' );
	
	flowerZone( 'NodeMaterial', 3 );
	shiftNode( 'ShaderMaterial', 5 );
	shiftNode( 'LineBasicMaterial', 5 );
	shiftNode( 'MeshStandardMaterial', -3 );
	//raiseNode( 'addons', 'Object3D' );
	shiftNode( 'addons', 2, 'Object3D' );
	shiftNode( 'Camera', 1 );
	
	shiftNode( 'helpers', -2, 'addons', 'Mesh' );
	shiftNode( 'lines', 2, 'addons', 'Mesh' );
//	flowerZone( 'addons', 2, 'Mesh' );
//	raiseNode( 'objects', '', 'addons' );
	
	flowerZone( 'CurveExtras.js', 4 );
	shiftNode( 'CurvePath', 1 );
	shiftNode( 'ChainMap', 7 );
	shiftNode( 'Pipeline', 5 );
	
	flowerZone( 'Pass', 4 );
	flowerZone( 'AST.js', 3 );
	flowerZone( 'math', 2, 'addons' );
	flowerZone( 'exporters', 2, 'addons' );
	flowerZone( 'misc', 2, 'addons', '%Three.js%' );
	shiftNode( 'postprocessing', 1 );
	shiftNode( 'animation', -2, 'addons' );
	raiseNode( 'animation', 'addons' );
	raiseNode( 'effects', 'addons' );
	raiseNode( 'utils', 'addons' );
	raiseNode( 'utils', 'addons' );
	shiftNode( 'interactive', -2, 'addons', '%Three.js%' );
	shiftNode( 'effects', 2, 'addons' );
	shiftNode( 'curves', 7, 'addons' );
	shiftNode( 'lights', 8, 'addons' );
	shiftNode( 'TSLEncoder', 1 );
	shiftNode( 'geometries / DecalGeometry.js', 11 );
	raiseNode( 'webxr', 'addons', '%Three.js%' );
	raiseNode( 'webxr', 'addons', '%Three.js%' );
	shiftNode( 'capabilities', 2 );
	
	shiftNode( 'NodeUniform', -2 );
	shiftNode( 'NodeFrame', -2 );
	shiftNode( 'NodeCache', -1 );
	shiftNode( 'NodeBuilder', -3 );
	shiftNode( 'NodeParser', -2 );
	shiftNode( 'cameras', 3, 'src' );
	
	shiftNode( 'DataMap', -10 );
	shiftNode( 'extras', 3, 'common' );
	shiftNode( 'Backend', -3, 'common' );
	shiftNode( 'Renderer', -2, 'common' );
	shiftNode( 'webxr', -1, 'renderers' );
	shiftNode( 'WebGLBufferRenderer', -1 );
	
	flowerZone( 'BufferAttribute' );
	flowerZone( 'addons / controls', 2 );
	shiftNode( 'Controls', -2 );
	shiftNode( 'webxr', -1, 'addons', 'Object3D' );
	raiseNode( 'webxr', 'addons', 'Object3D' );
	flowerZone( 'LineSegments', 2 );
	
	raiseNode( 'objects', 'addons', 'Mesh' );
	flowerZone( 'objects', 3, 'addons', 'Mesh' );
	shiftNode( 'Scene', -1 );
	
	shiftNode( 'ShadowMaterial', -1 );
	shiftNode( 'MeshDepthMaterial', -6 );
	shiftNode( 'LineBasicMaterial', -1 );

} // manualAdjust

manualAdjust();


//console.table( classes )

export {classes, rootClass, nodes, findNode};