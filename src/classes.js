//
// The Three Tree project
//
// Module for collecting a flat list of classes



import exports from './exports.js';

import {sorter, isClassName, Class, RootClass} from './globals.js';

import {DATA_SRC} from "./data/data-src.js";
import {DATA_ADDONS} from "./data/data-addons.js";

import {DOCS_SRC} from "./data/docs-src.js";
import {DOCS_ADDONS} from "./data/docs-addons.js";



var classes = [ new RootClass() ];



function processClasses( data, fileName, isCore )
{
	fileName = fileName.replaceAll('\n','');
	data = data.replaceAll('\n',' ').split(' ').filter( e=>e );

	for( var i=0; i<data.length-1; i++ ) if( data[i]=='class' )
	{
		//[i]   [i+1]  [i+2]   [i+3]    [i+4]
		//class <name> extends <parent> {...
		if( isClassName( data[i+1] ) && data[i+2]=='extends' && isClassName( data[i+3] ) && data[i+4][0]=='{' )
		{
			classes.push( new Class( data[i+1], fileName, data[i+3], [], isCore) );
		}
		else
		//[i]   [i+1]  [i+2]
		//class <name> {...
		if( isClassName( data[i+1] ) && data[i+2][0]=='{' )
		{
			classes.push( new Class( data[i+1], fileName, null, [], isCore) );
		}
		else
		{
			console.log('Ignored class:',data[i],data[i+1],data[i+2],data[i+3],data[i+4],`[${fileName}]`);
		}
	}
}



function processFile( data, isCore )
{
	data = data.split( '^..^ CONTENTS ^..^' );
	if( data.length == 2 )
	{
		processClasses( data[1], data[0], isCore );
	}
}



function processFolder( data, isCore )
{
	data = data.split( '^..^ FILENAME ^..^' );
	for( var i=0; i<data.length; i++ )
	{
		processFile(data[i],isCore);
	}
}



console.groupCollapsed( 'Classes warnings' );
processFolder( DATA_SRC, true );
processFolder( DATA_ADDONS, false );
classes.sort( sorter );




// remove all classes for which there is no export
for( let i=classes.length-1; i>=0; i-- ) if( !classes[i].isRoot )
	if( exports.some( e=> e.name==classes[i].name && e.fileName==classes[i].fileName) == false )
	{
		console.log(`Ignored class ${classes[i].info} because there is no export for it`);
		classes.splice(i,1);
	}

console.groupEnd()



function processDocs( data, isCore )
{
	data = data.split( '\n' );
	
	data = data.map( row => {
			if( row.indexOf('.html')>=0 )
				row = row.split( '|en|' ).pop().split('.html')[0];
			else
				row = '';
			return row;
		}
	);
	
	data = data.filter( row => row ); // remove empty rows

	var prefix = isCore ? 'src|' : 'addons|';
	
	for( var c of classes ) if( c.isCore == isCore && c.fileName )
	{
		
		var classPath = c.fileName.split('.js')[0].substring(prefix.length);

		var idx = data.find( docsPath => classPath == docsPath );
		if( idx && c.fileName.indexOf('|'+c.name+'.js')>=0 )
		{
			c.hasDocs = true;
		}
	}
}


processDocs( DOCS_SRC, true );
processDocs( DOCS_ADDONS, false );



// warnings for shared names of classes
var shared = [];

for( let i=0; i<classes.length-1; i++ ) // skip last
{
	if( classes[i].name==classes[i+1].name )
	{
		shared.push( classes[i], classes[i+1] );
	}

}

if( shared.length>0 )
{
	console.groupCollapsed('Shared class warnings');
	console.log('Classes with same names exported from different files');
	console.table( shared );
	console.groupEnd('Shared class warnings');
}


console.groupCollapsed('CLASSES: '+classes.length);
console.table( classes );
console.groupEnd('CLASSES: '+classes.length);

export default classes;

