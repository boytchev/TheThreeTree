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
	
	constructor ( name, fileName, parentName='', children=[], isCore=null )
	{
		this.name = name;
		this.fileName = fileName;
		this.path = (fileName??'').split('|');
		this.parentName = deprefix(parentName);
		this.parent = null;
		this.children = children;
		this.isRoot = false;
		this.isZone = false;		// a folder containing files with classes
		this.isCore = isCore;
		this.hasDocs = false;
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
	
	get wrappedName()
	{
		function lower(x) { return ('a'<=x && x<='z')}
		function upper(x) { return !lower(x) }
		function split(name, limit) {
			var cutPos = 0;
			var cutScore = 0;
			if( name.length > limit )
			{
				for( var i=0; i<name.length-1; i++ )
					if( upper(name[i]) && lower(name[i+1]) )
					{
						var score = i/(name.length-1);
						if( score>0.5 ) score = 1-score;
						if( score>cutScore )
						{
							cutScore = score;
							cutPos = i;
						}
					}
				if( cutPos>1 && cutPos<name.length-2 )
					name = split(name.slice(0,cutPos),limit)+'<br>'+split(name.slice(cutPos),limit);
			}

			return name;
		}
		
		return split( this.name, 10 );
	}
	
	get weight()
	{
		var result = 1;

		for( var i=0; i<this.children.length; i++ )
			result += this.children[i].weight;
		
		return result;
	}
	
	
	sort( )
	{
		// sort
		this.children.sort( (a,b)=>{
			if( a.isCore && !b.isCore ) return 1;
			if( !a.isCore && b.isCore ) return -1;
			return a.weight-b.weight;
		} );
		
		// reorder
		var before = this.children.length;		
		var reorderedChildren = [];
		
		for( var i=0; i<this.children.length; i+=2 )
			reorderedChildren.push( this.children[i] );
		i--;
		for( ; i>0; i-=2 ) if( i<this.children.length )
			reorderedChildren.push( this.children[i] );

		this.children = reorderedChildren;
		
		var after = this.children.length;

		if( before != after ) console.error('Reordering children failed');
		
		
		// recurse
		for( i=0; i<this.children.length; i++ )
			this.children[i].sort( );
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
		this.isCore = true;
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
		if( name=='src') this.isCore = true;
		if( name=='addons') this.isCore = false;
	}
	
	get info()
	{		
		return `{${this.name}}`;
	}
	
	get wrappedName()
	{
		return this.name;
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

