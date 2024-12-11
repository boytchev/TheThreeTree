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

for( var i in nodes ) nodes[i].idx = i;

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
		console.error(`Node ${nodeName} is not found in its parent's children` );
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


// raise zone children vertically as a flower

function flowerNode( idx, n=3, maxLevels=100 )
{
	var node = nodes[idx];
	
	flowerNodeHelper( node, n, maxLevels );
}

function flowerNodeHelper( node, n, maxLevels )
{
	if( maxLevels < 1 ) return;
	
	var k=0; // keep the first k and the last k on the same level
	
	if( node.children.length>2*n ) k = n;
//	else
//	if( node.children.length>5 ) k = 2;
		
	if( k > 0 )
	{		
		var	zone = new ZoneClass( );
		zone.parent = node;
		zone.isCore = node.isCore;
		zone.idx = nodes.length;
		nodes.push( zone );
		
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
	node.children.forEach( e => flowerNodeHelper(e, n, maxLevels-1) );
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


// manual adjust of the tree hierarchy

function manualAdjust()
{
	if( INCLUDE_ADDONS )
	{
		
		raiseNode( 1, 7 );
		shiftNode( 169, -1 );
		raiseNode( 169 );
		shiftNode( 166, -1 );
		rangeNode( 141, 154 );
		shiftNode( 137, 1 );
	}
	else
	{
		liftNode( 98, 12 );
		liftNode( 382, 8 );
		liftNode( 465, 6 );
		shiftNode( 75, -3 );
		liftNode( 75, 5 );
		shiftNode( 85, -2 );
		//flowerNode( 75, 3, 1 );
		shiftNode( 508, -5 );
		shiftNode( 516, -21 );
		shiftNode( 496, 5 );
		shiftNode( 409, -5 );
		shiftNode( 62, 5 );
		shiftNode( 520, 4 );
		shiftNode( 36, 6 );
		shiftNode( 520, -7 );
		shiftNode( 524, -3 );
		
		shiftNode( 273, 4 );
		shiftNode( 127, -1 );
		shiftNode( 145, 2 );
		shiftNode( 123, 1 );
		shiftNode( 162, -3 );
		shiftNode( 114, 8 );
		shiftNode( 117, 7 );
		shiftNode( 113, 9 );
		shiftNode( 116, 7 );
		shiftNode( 152, -3 );
		shiftNode( 204, 6 );
		shiftNode( 188, -12 );
		liftNode( 188, 1 );
		flowerNode( 188, 6, 1 );
		shiftNode( 118, 20 );
		shiftNode( 176, -3 );
		shiftNode( 177, -2 );
		shiftNode( 178, -1 );
		shiftNode( 181, -1 );
		shiftNode( 167, -14 );
		shiftNode( 170, -15 );
		shiftNode( 109, 29 );
		shiftNode( 101, 37 );
		shiftNode( 99, 23 );
		flowerNode( 98, 10, 1 );
		
		shiftNode( 382, 1 );
		shiftNode( 323, -2 );
		shiftNode( 275, 3 );
		
		flowerNode( 75, 4 );
		flowerNode( 314, 2, 1 );
		flowerNode( 273, 3, 1 );
		
		shiftNode( 363, 4 );
		shiftNode( 358, -2 );
		flowerNode( 355, 5, 1 );
		shiftNode( 355, 3 );
		shiftNode( 335, 1 );
		shiftNode( 348, -11 );
		shiftNode( 345, -10 );
		shiftNode( 347, -9 );
//		flowerNode( 335, 4 );
		
		liftNode( 349, 8 );
		liftNode( 347, 9 );
		liftNode( 346, 8 );
		
		shiftNode( 309, 2 );
		shiftNode( 334, -4 );
		shiftNode( 273, -4 );
		flowerNode( 335, 3, 1 );
		flowerNode( 559, 2, 1 );
		shiftNode( 559, 2 );
		
		shiftNode( 72, -1 );
		shiftNode( 63, 7 );
		shiftNode( 94, -3 );
		flowerNode( 62, 4, 1 );
		shiftNode( 266, 1 );
		
		shiftNode( 256, 4 );
		shiftNode( 262, -1 );
		shiftNode( 243, -3 );
		shiftNode( 220, 10 );
		shiftNode( 224, 7 );
		shiftNode( 230, 5 );
		shiftNode( 223, 3 );
		shiftNode( 221, 3 );
		
		shiftNode( 406, -5 );
		shiftNode( 383, 4 );
		shiftNode( 309, -3 );
		shiftNode( 417, -4 );
		shiftNode( 432, -1 );
		shiftNode( 413, -1 );
		shiftNode( 294, 1 );
		liftNode( 296, 8 );
		liftNode( 298, 8 );
		liftNode( 300, 8 );
		liftNode( 302, 8 );
		liftNode( 304, 8 );
		liftNode( 306, 8 );
		liftNode( 308, 8 );
	}
} // manualAdjust

manualAdjust();


//console.table( classes )

export {classes, rootClass, nodes /*, findNode*/};