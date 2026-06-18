//
// The Three Tree project
//
// Module for loading data from preprepared files

import { parse } from 'https://cdn.jsdelivr.net/npm/acorn@8.14.1/dist/acorn.mjs';

import { data as DATA_SRC } from "../data/data-src.js";
import { data as DATA_ADDONS } from "../data/data-addons.js";


const INCLUDE_CLASSES = true;
const INCLUDE_FUCTIONS = true;
const INCLUDE_VARIABLES = true;

const DUMP_LOADING = !false;
const DUMP_PARENTING = !false;

const TYPE_ROOT = 'root';
const TYPE_CLASS = 'class';
const TYPE_FUNCTION = 'function';
const TYPE_VARIABLE = 'variable';
const TYPE_FOLDER = 'folder';


class Entity {
	
	constructor( name, parentName, path, type) {
		this.name = name;
		this.parentName = parentName;
		this.parentIndex = null;
		this.path = path;
		this.pathArray = path.split('|');
		this.type = type;
		this.children = [];
	}
	
}


var rootEntity = new Entity( 'Three.js', null, 'Three.js', TYPE_ROOT );

var entities = [rootEntity];


// AI
function walk(node, visitor, level=0) {
	if (!node || typeof node !== 'object') return;
	if( level>2 ) return;
	
	visitor.enter?.(node,level);
	
	for (const key in node) {
		const child = node[key];
		if (Array.isArray(child)) {
			child.forEach(c => walk(c, visitor, level+1));
		} else if (child && typeof child === 'object' && child !== null) {
			walk(child, visitor, level+1);
		}
	}
}


// AI
function parseThreeFile(source) {
	const result = {
		classes: [],
		exports: [],
		imports: [],
		functions: [],
		variables: [],
		defaultExport: null
	};

	let ast;
	try {
		ast = parse(source, { sourceType: 'module', ecmaVersion: 'latest' });
	} catch (err) {
		return { error: err.message };
	}

	walk(ast, {
		enter(node,level) {

			if (node.type === 'ImportDeclaration') {
				result.imports.push({
					from: node.source.value,
					names: node.specifiers.map(s => s.local.name),
				});
			}

			if (node.type === 'FunctionDeclaration') {
				result.functions.push({
					name: node.id.name,
					isExported: false,
				});
			}

			if (node.type === 'VariableDeclaration') {
				result.variables.push({
					name: node.declarations[0].id.name,
					isExported: false,
				});
			}

			if (node.type === 'ClassDeclaration' && node.id) {
				result.classes.push({
					name: node.id.name,
					extends: node.superClass?.type === 'Identifier' ? node.superClass.name : null,
					isExported: false,
				});
			}

			if (node.type === 'ExportNamedDeclaration') {
				if (node.declaration?.id) {
					result.exports.push({ type: 'named', name: node.declaration.id.name });
				} else if (node.specifiers) {
					node.specifiers.forEach(spec => {
						result.exports.push({
							type: 'named',
							name: spec.local.name,
							as: spec.exported?.name,
						});
					});
				}
			}

			if (node.type === 'ExportDefaultDeclaration') {
				if (node.declaration.type === 'Identifier') {
					result.defaultExport = node.declaration.name;
				} else if (node.declaration.type === 'ClassDeclaration' && node.declaration.id) {
					result.defaultExport = node.declaration.id.name;
				}
			}
		}
	});

	// Link exports to classes
	result.exports.forEach(exp => {
		if (exp.type === 'named') {

			var cls = result.classes.find(c => c.name === exp.name);
			if (cls) cls.isExported = true;

			cls = result.functions.find(c => c.name === exp.name);
			if (cls) cls.isExported = true;

			cls = result.variables.find(c => c.name === exp.name);
			if (cls) cls.isExported = true;
		}
	});

	return result;
}

	
	
function processOneFile( fileName, fileText ) {
	
	// replace some non ASCII symbols
	fileText = fileText.replace(/[^\x00-\x7F]/g, "");
	
	if( DUMP_LOADING ) console.log( fileName, fileText.length );
	
	var parsed = parseThreeFile( fileText );
	if( DUMP_LOADING ) console.log(parsed)
		
	if( INCLUDE_CLASSES ) {
		for( var exp of parsed.classes )
			if( exp.isExported  ) {
				entities.push( new Entity(exp.name,exp.extends,fileName,TYPE_CLASS) );
				if( DUMP_LOADING ) console.log( '\t',exp.extends,'->',exp.name);
			}
		if( parsed.defaultExport ) {
			var cls = parsed.classes.find( c => c.name===parsed.defaultExport );

			entities.push( new Entity(parsed.defaultExport,cls?.extends,fileName,TYPE_CLASS) );
			if( DUMP_LOADING ) console.log( '\t',cls?.extends,'->',parsed.defaultExport );
		}
	}
		
	if( INCLUDE_FUCTIONS ) {
		for( var exp of parsed.functions )
			if( exp.isExported ) {
				entities.push( new Entity(exp.name,null,fileName,TYPE_FUNCTION) );
				if( DUMP_LOADING ) console.log( '\t',exp.name );
			}
	}
	
	if( INCLUDE_VARIABLES ) {
		for( var exp of parsed.variables )
			if( exp.isExported ) { 
				entities.push( new Entity(exp.name,null,fileName,TYPE_VARIABLE) );
				if( DUMP_LOADING ) console.log( '\t',exp.name );
			}
	}
		
		
}



function processAllFiles( data, groupName ) {

	if( DUMP_LOADING ) console.groupCollapsed( groupName );
	
	for (const [fileName, fileText] of Object.entries(data)) {
	
		processOneFile( fileName, fileText );
	}
	
	if( DUMP_LOADING ) console.groupEnd( groupName );

}

console.time('1. Reading data');
processAllFiles( DATA_SRC, 'Sources' );

processAllFiles( DATA_ADDONS, 'Addons' );
console.timeEnd('1. Reading data');

//!!!!!!!!!! cut for debugger
//entities = entities.slice(0,2);
//console.table( entities,['name','parentName','parentIndex','path','type'] );

/*
// sort entities
//entities = entities.sort( (a,b)=>a.name<b.name || a.name==b.name && a.path<b.path )
*/

entities.forEach( (e,i)=>e.index=i );

function closeness( a, b ) {
	// calculate closes of two strings in format xxx|yyy|...|zzz
	// the more items from the left are equal, the higher the closeness is
	
	a = a.split( '|' );
	b = b.split( '|' );
	
	var n = 0;
	
	for( var i=0; i<Math.min(a.length,b.length); i++ ) {
		
		if( a[i]!=b[i] ) return 10*n - (a.length-i) - (b.length-i);
		n++;
		
	}
	
	return n;
}



// set parent index and locate unknown parents

console.time( '2. Parental links' );
if( DUMP_PARENTING ) console.groupCollapsed( 'Parental links' );
for( var child of entities ) {
	
	if( child == rootEntity ) continue;
	
	var parents = entities.filter( e => e.name == child.parentName );
	
	if( parents.length == 0 ) parents = [rootEntity]; // no parent? rootEntity is parent
	
	if( parents.length >= 2 ) {
		for( var p of parents ) p.closeness = closeness( child.path, p.path );
		if( DUMP_PARENTING ) console.log('Parents of',child.name,'from',child.path);
		parents = parents.sort( (a,b) => b.closeness-a.closeness );
		if( DUMP_PARENTING ) console.table( parents,['name','path','closeness'] );
	}
	
	var parent = parents[0];

	child.parentIndex = parent.index;
	child.parentName = parent.name;

}


for( var child of entities ) {
	
	if( child == rootEntity ) continue;
	
	var node = child;
	var fullPath = [];

	while( node.parentIndex >= 0) {
		var arr = [...node.pathArray];
		if( arr[arr.length-1]==node.name+'.js' ) {
			arr.pop();
		}
		arr.push(node);

		for( var i=0; i<arr.length; i++ ) {
			if( arr[i]==fullPath[0] && !(arr[i] instanceof Entity) )
				fullPath.shift();
			else
				break;
		}
		fullPath = [...arr,...fullPath];
		if( node.parentIndex==rootEntity.index ) break;
		node = entities[node.parentIndex];
	}

	child.fullPath = fullPath//.join('|');
}

if( DUMP_PARENTING ) console.groupEnd( 'Parental links' );
console.timeEnd( '2. Parental links' );

console.groupCollapsed('dumps');
console.table( entities, ['name','path','fullPath'] );
for(var e of entities )
	console.log(e.name,'\n\tfrom',e.path,'\n\tfrom',e.fullPath);
console.groupEnd('dumps');


console.time( '3. Building tree' );

// build hierarchy
var tree = {entity:rootEntity, children:[]};

function addEntityToTree( entity ) {
	var currentNode = tree;
	//console.log('>>>>>',entity.name,entity.fullPath)
	for( var pathElement of entity.fullPath ) {
		
		//console.log('search',pathElement,'in',currentNode.children);
		var index = null;
		index = currentNode.children.findIndex( x => x.entity==pathElement );
		//console.log('    found at',index,'\n');
		
		var newNode;
		
		if( index < 0 ) {
			//console.log('    create element',pathElement,'as child of',currentNode);
			newNode = {entity:pathElement, children:[]};
			currentNode.children.push( newNode );
		} else {
			//console.log('    go deeper one level');
			newNode = currentNode.children[index];
		}
			
		currentNode = newNode;
	}
	
}

for( var entity of entities ) if( entity!=rootEntity ) {
	addEntityToTree( entity );
}

//console.log(tree)


// reduce hierarcy
function hierarchyReduce( node = tree ) {
	var hadMerged = 0;
	
	if( !(node.entity instanceof Entity) && node.children.length == 1 )
//		if( !(node.children[0].entity instanceof Entity) )
		{
			//console.log('merge',node.entity,'and',node.children[0].entity);
			if( (node.children[0].entity instanceof Entity) ) {
				// merging foler and entity, keep the entity
				node.entity = node.children[0].entity;
			} else {
				// merhing two folder - just combine them
				node.entity += '|'+node.children[0].entity;
			}
			node.children = node.children[0].children;
			hadMerged = 1;
		}

	for( var child of node.children ) hadMerged += hierarchyReduce( child );
	
	return hadMerged;

}

var count = 10;
while (hierarchyReduce()>0 && (count-->0));
console.assert( count>0 );

// show hierarchy
function hierarchyDump( node = tree ) {

	var name = node.entity;
	if( name instanceof Entity ) name='['+name.name+'] '+name.type;
	
	if( node.children.length == 0 ) {
		console.log( name );
		return;
	}

	console.groupCollapsed( name );
	for( var child of node.children ) hierarchyDump( child );
	console.groupEnd( name );

}

console.timeEnd( '3. Building tree' );

console.groupCollapsed('Tree ('+entities.length+')');
hierarchyDump();
console.groupEnd('Tree ('+entities.length+')');


var entitiesCount = 0;
function countEntities( node = tree ) {

	if( node.entity instanceof Entity ) entitiesCount++;
	
	for( var child of node.children ) countEntities( child );

}
countEntities();
console.assert(entities.length==entitiesCount,'array entities '+entities.length+' tree entities '+entitiesCount)


for(var entity of entities) {
	delete entity.parentIndex;
	delete entity.parentName;
	delete entity.pathArray;
	delete entity.fullPath;
	delete entity.index;
}


// special operation - unpack addons, move all children of addons
// as children of three.js, so that the tree is one core trunc
// and addons around it
/*
var srcIndex = tree.children.findIndex( e => e.entity=='src' );

console.assert(srcIndex>=0,'no src found in final tree'); 

tree.children[srcIndex].children.forEach( e => e.entity=tree.children[srcIndex].entity+'|'+e.entity );
tree.children.push(...tree.children[srcIndex].children);
tree.children.splice( srcIndex, 1 );

var addonsIndex = tree.children.findIndex( e => e.entity=='addons' );
console.assert(addonsIndex>=0,'no addons found in final tree'); 

tree.children[addonsIndex].children.forEach( e => e.entity=tree.children[addonsIndex].entity+'|'+e.entity );
tree.children.push(...tree.children[addonsIndex].children);
tree.children.splice( addonsIndex, 1 );
*/

//console.log(tree);

console.groupCollapsed('Final Tree ('+entities.length+')');
hierarchyDump();
console.groupEnd('Final Tree ('+entities.length+')');



var result = 'export const tree = ' + JSON.stringify(tree).replaceAll( ',', ', ' );

document.getElementById( 'result' ).value = result;


// AI
document.getElementById('save').addEventListener('click', () => {

	const blob = new Blob([result], { type: 'application/js' });

	const link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = 'data.js';

	link.click();

	URL.revokeObjectURL(link.href);
});
