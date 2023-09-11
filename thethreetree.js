
var hierarchy = {
	};

function process( data, root )
{
	data = data.split( '\n' ).filter( e => e.indexOf('class')>-1 );
	for( var i=0; i<data.length; i++ )
	{
		data[i] = data[i].split(':');
		data[i][0] = data[i][0].split('|');
		data[i][1] = data[i][1].split(' ');
		
		if( data[i][1][0] != 'class' )
			console.log( 'error', data[i] );
		
		data[i][1].shift();
		
		var last = data[i][1].pop();
		if( last.indexOf('{') == -1 ) data[i][1].push( last );
	}
	
	for( var i=0; i<data.length; i++ )
	{
		hierarchy[data[i][1][0]] = {file:data[i][0].pop(), location:[root,...data[i][0]], children: []};
	}

	for( var i=0; i<data.length; i++ )
		if( data[i][1].length == 3 )
		if( data[i][1][1] == 'extends' )
	{
		var name = data[i][1][2].split('.');
		if( name[0]=='THREE' )
			name = name[1];
		else
			name = name[0];
		if( hierarchy[name] == undefined )
		{
			console.log('undef',name)
			hierarchy[name] = {file:'', location:['js'], children: []};
		}
	}

	for( var i=0; i<data.length; i++ )
		if( data[i][1].length == 3 )
		if( data[i][1][1] == 'extends' )
	{
		var name = data[i][1][2].split('.');
		if( name[0]=='THREE' )
			name = name[1];
		else
			name = name[0];
		
		hierarchy[name].children.push( data[i][1][0] );
	}
}


function processExports( data )
{
	data = data.split( '\n' ).filter( e => e.indexOf('{')>-1 && e.indexOf('}')>-1 );
	for( var i=0; i<data.length; i++ )
	{
		data[i] = data[i].split('{').pop().split('}').shift().trim();
		if( data[i].indexOf(':')>-1 ) continue;
		
		if( hierarchy[data[i]] )
			console.log(data[i])
		else
			console.warn(data[i])
	}
}


process( DATA_SRC, 'src' );
process( DATA_ADDONS, 'addons' );
processExports( DATA_EXPORTS );

console.log( hierarchy );

//import * as THREE from "three.module.min.js";


