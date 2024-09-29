//
// The Three Tree project
//
// Module for buuildig hierarcy of classes



import {sorter,ZoneClass} from "./globals.js";
import classes from "./classes.js";


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
				zone.isZoneJS = zoneName.split('.js').length>1; // it was JS file, not folder
			} // if-else
			node.children[i].setParent( zone );
		} // if !node.children[i].isZone
	} // for

	// remove zones with single child
	node.children.forEach( e => {
		if(e.isZoneJS && e.children.length==1)
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



// check whether the number of classes is the same
function calculateCount( node )
{
	var count = node.isZone ? 0 : 1;
	
	for( var i=0; i<node.children.length; i++ )
		count += calculateCount( node.children[i] );
	
	return count;
}


addZones( rootClass );

if( originalClassesCount != calculateCount(rootClass) )
{
	console.error(`The number of classes has changed. The original count before hierarcy building was ${originalClassesCount}, while after building it is ${calculateCount(rootClass)}`);
}


//console.table( classes )

export {classes, rootClass} ;