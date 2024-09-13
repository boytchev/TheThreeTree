//
// The Three Tree project
//
// Module for collecting a flat list of exports



import {sorter, isClassName, Export} from './globals.js';

import {DATA_SRC} from "./data/data-src.js";
import {DATA_ADDONS} from "./data/data-addons.js";



var exports = [];



function processExports( data, fileName )
{
	fileName = fileName.replaceAll('\n','');
	data = data.replaceAll('\n',' ').replaceAll(',',' ').split(' ').filter( e=>e );
	for( var i=0; i<data.length-1; i++ ) if( data[i]=='export' )
	{
		//[i]   [i+1] 
		//export const
		//export *
		//export function
		//export format
		if( ['const','*','function','format'].indexOf(data[i+1])>-1 )
		{
			// do nothing
		}
		else
		// [i]    [i+1]   [i+2] [i+3]
		// export default /*    glsl
		if( data[i+1]=='default' && data[i+3]=='glsl' )
		{
			// do nothing
		}
		else
		// [i]    [i+1]   [i+2]
		// export default <name>;
		if( data[i+1]=='default' && isClassName( data[i+2] ) && data[i+2][data[i+2].length-1]==';' )
		{
			exports.push( new Export(data[i+2].split(';')[0],fileName) );
		}
		else
		// [i]    [i+1]   [i+2] [i+3]
		// export default class <name>;
		if( data[i+1]=='default' && data[i+2]=='class' && isClassName( data[i+3] ))
		{
			exports.push( new Export(data[i+3],fileName) );
		}
		else
		//[i]   [i+1]  [i+2]
		//export {    <name> ... }
		if( data[i+1]=='{' )
		{
			i++;
			i++;
			//[i]     [i+1]  [i+2]
			//default as     <name> ...
			//<name>  as     <name> ...
			//<name>  <name> <name> ...
			for( ; data[i][0]!='}' && i<data.length-1; i++ )
			{
				if( data[i+1]=='as' && isClassName(data[i+2]) )
				{
					exports.push( new Export(data[i+2],fileName) );
					i++;
					i++;
				}
				else
				if( isClassName(data[i]) )
				{
					exports.push( new Export(data[i],fileName) );
				}
			}			
		}
		else
		//[i]    [i+1]  [i+2]
		//export class   <name>
		if( data[i+1]=='class' && isClassName( data[i+2] ))
		{
			exports.push( new Export(data[i+2],fileName) );
		}
		else
		{
			console.log('Ignored export:',data[i],data[i+1],data[i+2],data[i+3],data[i+4],`[${fileName}]`);
		}
	}
}



function processFile( data )
{
	data = data.split( '^..^ CONTENTS ^..^' );
	if( data.length == 2 )
	{
		processExports( data[1], data[0] );
	}
}



function processFolder( data )
{
	data = data.split( '^..^ FILENAME ^..^' );
	for( var i=0; i<data.length; i++ )
	{
		processFile(data[i]);
	}
}


console.groupCollapsed( 'Exports warnings' );
processFolder( DATA_SRC );
processFolder( DATA_ADDONS );

exports.sort( sorter );

console.groupEnd()



console.groupCollapsed('EXPORTS: '+exports.length);
console.table( exports );
console.groupEnd('EXPORTS: '+exports.length);


export default exports;

