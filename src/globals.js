//
// The Three Tree project
//
// Module for globals, utils and classes



// remove known prefixes
function deprefix( name )
{
	if( name && name.indexOf('THREE.')==0 )
	{
		name = name.substr(6);
	}
	
	return name;
}



// checks a name is a class name (starts with capital letter)
function isClassName( name )
{
	return name && ('A'<=name[0]) && (name[0]<='Z');
}



// compares  two TTT classes or exports, used for sorting
function sorter(a,b) {
	if( a.name==Class.ROOT_NAME ) return -1;
	if( a.name<b.name ) return -1;
	if( a.name>b.name ) return 1;
	if( a.fileName<b.fileName ) return -1;
	if( a.fileName>b.fileName ) return 1;
	return 0;
}



// definition of a TTT class
class Class {
	
	static ROOT_NAME = '%Three.js%';
	
	constructor ( name, fileName, parentName='', children=[] )
	{
		this.name = name;
		this.fileName = fileName;
		this.path = (fileName??'').split('|');
		this.parentName = deprefix(parentName);
		this.parent = null;
		this.children = children;
		this.isRoot = false;
		this.isZone = false;
		this.isZoneJS = false;
	}
	
	get info()
	{		
		var info = `${this.name} [${this.fileName||''}]`;
		if( this.path.length>0 ) info = `${info} [${this.path.join('|')}]`;
		return info;
	}
	
	setParent( parent )
	{
		parent.children.push( this );
		this.parent = parent;
	}
	
	dump( collapsed = true )
	{	
		var str = `${this.info}`;
		
		if( this.children.length>0 )
			str += ` (${this.children.length})`;
		
		if( this.children.length>0 )
			(collapsed?console.groupCollapsed:console.group)( str );
		else
			console.log( str );

		for( var i=0; i<this.children.length; i++ )
			this.children[i].dump( );
		
		if( this.children.length>0 )
			console.groupEnd( str );
	}

}




// definition of a TTT root class
class RootClass extends Class {
	constructor ( )
	{
		super( Class.ROOT_NAME );
		this.isRoot = true;
	}
	
	get info()
	{		
		return `Three.js`;
	}
}



// definition of a TTT zone pseudo-class
class ZoneClass extends Class {
	constructor ( name )
	{
		super( name );
		this.isZone = true;
	}
	
	get info()
	{		
		return `{${this.name}}`;
	}
}



// definition of a TTT export symbol
class Export {
	constructor ( name, fileName )
	{
		if( !isClassName( name ) )
			console.error('Internal error - export name misidentified')
		this.name = name;
		this.fileName = fileName;
	}
}




export {sorter, isClassName, Class, RootClass, ZoneClass, Export};

