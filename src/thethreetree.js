
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
			console.warn( `class ${classes[i].info} has ${parents.length} potential parents: \n\t${parents.map(e=>e.info).join('\n\t')}` );
			// sort parents according to file name similarity
			parents.sort( (a,b)=>matchString(classes[i].fileName,b.fileName)-matchString(classes[i].fileName,a.fileName) );
			
			console.warn( `\t-->picking ${parents[0].info}` );

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
				zoneName = node.children[i].path.shift().split('.js')[0],
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
			} // if-else
			node.children[i].setParent( zone );
		} // if !node.children[i].isZone
	} // for

	// remove zones with single child
	node.children.forEach( e => {
		if(e.isZone && e.children.length==1)
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



var dumpCount;
function dump( node, level=0 )
{
	if( !node ) {
		console.log( '  deleted' );
		return;
	}
	
	if( !node.isZone ) dumpCount++;
	
	var str = '';
//	for( var i=0; i<level; i++ ) str += '   ';
	str += `${node.info}`;
	if( node.children.length>0 )
		str += ` (${node.children.length})`;
	
	if( node.children.length>0 )
		console.groupCollapsed( str );
		//console.group( str );
	else
		console.log( str );

	for( var i=0; i<node.children.length; i++ )
		dump( node.children[i], level+1 );
	
	if( node.children.length>0 )
		console.groupEnd( str );
}




dumpCount = 0; // for test whether some class has disappeared
addZones( rootClass );
dump( rootClass );
if( dumpCount != originalClassesCount )
{
	console.error(`The number of classes has changed. The original count before hierarcy building was ${originalClassesCount}, while after building it is ${dumpCount}`);
}


//console.table( classes )