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


// flatten src branch (i.e. make its children direct children of the root)
function flattenSrc( )
{
	// find src
	for( var src of rootClass.children )
	{
		if( !src.isCore ) continue;
		if( src.name != 'src' ) continue;

		rootClass.children = rootClass.children.filter( e => e!=src );
		
		for( var child of src.children )
		{
			child.name = `${src.name} / ${child.name}`;
			child.setParent( rootClass );
		}
	}
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
flattenSrc( );







if( originalClassesCount != calculateCount(rootClass) )
{
	console.error(`The number of classes has changed. The original count before hierarcy building was ${originalClassesCount}, while after building it is ${calculateCount(rootClass)}`);
}


//rootClass.sort();



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

for( let i in nodes ) nodes[i].idx = i;

/* ****************************************

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
*/

// shift node to the righт jumping over n siblings

function shiftNode( idx, n )
{
	var node = nodes[idx];

	var i = node.parent.children.indexOf( node );
	if( i<0 )
	{
		console.error(`Node ${node.name} is not found in its parent's children` );
		return;
	}
	
	node.parent.children.splice( i, 1 );
	node.parent.children.splice( i+n, 0, node );
}


// raise node upwards by adding fake zone on top of it
function raiseNode( idx, n=1 )
{
	for( var i=0; i<n; i++ )
	{
		var node = nodes[idx];
		
		var	zone = new ZoneClass( );
		zone.parent = node;
		zone.isCore = node.isCore;
		zone.idx = nodes.length;
		nodes.push( zone );

		for( var child of node.children ) child.setParent( zone );
		
		node.children = [zone];
	}
}


// lift node upwards by adding fake zone below it
function liftNode( idx, n=1 )
{
	for( var i=0; i<n; i++ )
	{
		var node = nodes[idx];
		
		var	zone = new ZoneClass( );

		for( var j=0; j<node.parent.children.length; j++ )
			if( node.parent.children[j]==node )
				node.parent.children[j] = zone;

		zone.parent = node.parent;
		node.parent = zone;
		zone.children = [node]
		zone.isCore = node.isCore;
		zone.idx = nodes.length;
		nodes.push( zone );
	}
}


function rangeNode( node1, node2 )
{
	node1 = nodes[node1];
	node2 = nodes[node2];
	
	if( node1.parent == node2.parent )
	{		
		var node = node1.parent;
		
		var	zone = new ZoneClass( );
		zone.parent = node;
		zone.isCore = node.isCore;
		zone.idx = nodes.length;
		nodes.push( zone );
		
		var doit = false;
		var k = -1;
		for( var i in node.children )
		{
			var child = node.children[i];
			if( child==node1 ) doit = true;
			if( doit )
			{
				if( k==-1 ) k = i;
				child.setParent( zone );
			}
			if( child==node2 ) doit = false;
		} // for
		
		// remove all ex-children that have moved to a new parent
		node.children = node.children.filter( e => e.parent==node );
		node.children.splice( k, 0, zone );
	}
}


// if there are too many successive children-leaves, flower them vertically
function flowerNodes( node )
{
	function cut( length )
	{
		if( length<=4 ) return -1;
		if( length<=6 ) return 1;
		if( length<=8 ) return 2;
		if( length<=12 ) return 3;
		return 4;
	}
	
	var k, child,
		firstLeaf = null;
		
	for( var i=0; i<node.children.length; i++ )
	{
		child = node.children[i];
		if( child.isLeaf && firstLeaf==null ) firstLeaf = i;
		if( !child.isLeaf )
		{
			k = cut( i-firstLeaf );
			
			if( firstLeaf!=null && k>=0 )
				rangeNode( node.children[firstLeaf+k].idx, node.children[i-1-k].idx );
			firstLeaf = null;
		}
	}
	
	k = cut( i-firstLeaf );

	if( firstLeaf!=null && k>=0 )
		rangeNode( node.children[firstLeaf+k].idx, node.children[i-1-k].idx );

	// recurse
	for( child of node.children ) flowerNodes( child );
	
}

flowerNodes( rootClass )



// manual adjust of the tree hierarchy
function manualAdjust()
{
	liftNode( 317, 6 ); // nodes
//	liftNode( 409, 1 ); // TempNode
	
	shiftNode( 1, 4 ); // addons
	liftNode( 1, 8 ); // addons
	
	liftNode( 94, 1 ); // Pass
	raiseNode( 810, 2 );
	
	// decorations
	
	// branch Node
	shiftNode( 328, -1 );
	shiftNode( 346, -1 );
	shiftNode( 364, 2 );
	
	// branch addons
	shiftNode( 85, 1 );
	shiftNode( 93, 1 );
	shiftNode( 119, 2 );
	shiftNode( 114, 2 );
	shiftNode( 98, 1 );
	
	// buffergeometry
	shiftNode( 221, -1 );
	shiftNode( 247, -3 );
	
	// src/loaders
	shiftNode( 685, 1 );
	shiftNode( 695, 1 );
	
	// src/math
	shiftNode( 764, 3 );
	shiftNode( 954, 1 );
	
} // manualAdjust
 
manualAdjust();


//console.table( classes )

export {classes, rootClass, nodes /*, findNode*/};