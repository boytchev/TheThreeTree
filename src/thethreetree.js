
var hierarchy = {};
var classNodes = [];

var ignoredClasses = [];
var ignoredExports = [];

function processExport( data )
{
	var exp = data.shift( ),
		word = exp.split(' ').filter(x=>x!=''),
		words = word.length,
		result = [];

	// not: export
	if( word[0]!='export' )
	{
		//console.warn(exp)
	}
	// ignore: export *
	//		   export const
	//		   export function
	//		   export default
	else if( word[1]=='*' || word[1]=='const' || word[1]=='function' || word[1]=='default' )
	{
		ignoredExports.push( exp );
	}
	else
	// export class ‹classname› extends ‹parentclass› {
	if( words>=6 && word[1]=='class' && word[3]=='extends' && word[5]=='{' )
	{
		result.push( word[2] );
	}
	else
	// export class ‹classname› {
	if( words>=4 && word[1]=='class' && word[3]=='{' )
	{
		result.push( word[2] );
	}
	else
	// export { ‹classname› }
	if( words==4 && word[1]=='{' && word[3]=='}' )
	{
		result.push( word[2] );
	}
	else
	// export { default as ‹classname› }
	if( words==6 && word[1]=='{' && word[2]=='default' && word[3]=='as' && word[5]=='}' )
	{
		result.push( word[4] );
	}
	else
	// export { ‹classname›, ‹classname›, ... }
	if( words>=4 && word[1]=='{' && word[words-1]=='}' )
	{
		for( var i=2; i<words-1; i++ )
		{
			var list = word[i].split('\t').join('');
				list = list.split(',').filter(x=>x!='').map(x=>x.trim());
				list = list.filter(x=>x!='default').filter(x=>x!='as');
			
			result.push( ...list );
		}
	}
	else
	{
		//console.warn( exp );
		ignoredExports.push( exp );
	}

	return result;
}

function processClass( data )
{
	var cls = data.shift( ),
		word = cls.split(' ').filter(x=>x!=''),
		words = word.length,
		result = [];
		
//console.log( cls );

	// not: class
	if( word[0]!='class' )
	{

	}
	// ignore: class *
	else if( word[1]=='*' )
	{
		ignoredClasses.push( cls );
	}
	else
	// class ‹classname› {
	if( words==3 && word[2]=='{' )
	{
		result.push( [word[1]] );
	}
	else
	// class ‹classname› extends ‹parentclass› {
	if( words==5 && word[2]=='extends' && word[4]=='{' )
	{
		result.push( [word[1],word[3]] );
	}
	else
	{
		ignoredClasses.push( cls );
	}
	return result;
}


function createClassNode( name, hierarcyNode, path, file, parentName )
{
	var node = {};
	node.name = name;
	
	if( hierarcyNode )
		node.hierarcyNode = hierarcyNode;
	
	if( (path || file) && node.filename )
		console.error( 'Node already exists', node );

	if( path || file )
		node.filename = path.join('/')+'/'+file;

	if( parentName )
	{
		node.parentName = parentName;
	}
	
	classNodes.push( node );
	return node;
}


function processFileName( data )
{
	if( !data.length ) return;
	
	while( data[0]!='@FILENAME' )
		if( data.length )
			data.shift( );
		else
			return;
	
	data.shift( ); // remove @FILENAME

	var path = data.shift( ).split( '|' ), // path without the filename
		file = path.pop( );
		
	var node = hierarchy;
	for( var folder of path )
	{
		if( node[folder] == undefined )
			node[folder] = {};
		node = node[folder];
	}

//	console.group( file );
	var classes = [],
		exports = [];
		
	while( data.length && data[0]!='@FILENAME' )
	{
		var cmd = data.shift( );
		if( cmd == '@EXPORT' )
			exports.push( ...processExport( data ) );
		else if( cmd == '@CLASS' )
			classes.push( ...processClass( data ) );
		else if( cmd == '' )
			{ } // ignore empty lines
		else
			console.error( 'Unknown @-command', '|'+cmd+'|' );
	}
	//console.log( classes );
	//console.log( exports );
	
	for( var classGroup of classes )
	{
		var name = classGroup[0],
			parentName = classGroup[1];

		// because there is one parent name THREE.Object3D
		if( parentName )
			parentName = parentName.split('.').filter(x=>x!='THREE').join('.')
			
		// if( parentName )
			// console.log( parentName,'->',name );
		// else
			// console.log( name );
		if( exports.indexOf(name)>=0 )
		{
			createClassNode( name, node, path, file, parentName );
		}
		else
			console.warn('Class that is not exported',name);
	}
	
//	if( classes.length==0 && exports.length>0 )
//		console.log( exports );
//	console.groupEnd( );
}

function process( data )
{
	data = data.split( '\n' );
	while( data.length )
		processFileName( data ); 
}


process( DATA_SRC );
process( DATA_ADDONS );

// check whether parents are unique
for( var node of classNodes ) if( node.parentName )
{
	if( classNodes.filter(n=>n.name==node.parentName).length>1 )
		console.error( 'Parent names not unique',node.parentName );
}

// check whether parents are existing
for( var node of classNodes ) if( node.parentName )
{
	if( !classNodes.find(n=>n.name==node.parentName) )
		console.error( 'Parent is not existing, child',node );
}





console.groupCollapsed( `Ignored classes (${ignoredClasses.length})` );
console.log( ignoredClasses.sort() );
console.groupEnd( );

console.groupCollapsed( `Ignored exports (${ignoredExports.length})` );
console.log( ignoredExports.sort() );
console.groupEnd( );

console.log( hierarchy );
console.log( classNodes );
