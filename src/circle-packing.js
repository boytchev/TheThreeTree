var canvas = document.getElementById( 'canvas' ),
	context = canvas.getContext( '2d' );
	context.translate( canvas.width/2, canvas.height/2 );
                

var circles = [];


function drawCircle( x, y, r )
{
	context.fillStyle = 'linen';
	context.strokeStyle = 'tomato';
	context.lineWidth = 4;
	
	context.beginPath( );
	context.arc( x, y, r, 0, 2*Math.PI );
	context.fill( );
	context.stroke( );
}
	
function frameCircle( x, y, r )
{
	context.strokeStyle = 'blue';
	context.lineWidth = 1;
	
	context.beginPath( );
	context.arc( x, y, r, 0, 2*Math.PI );
	context.stroke( );
}
	
function distance( i, j )
{
	i = i % circles.length;
	j = j % circles.length;
	
	return Math.sqrt( (circles[i].x-circles[j].x)**2 + (circles[i].y-circles[j].y)**2 );
}

function addCircle( r )
{
	// add first circle
	if( circles.length == 0 )
	{
		circles.push( {x:0,y:0,r:r} );
		drawCircle( 0, 0, r );
		return;
	}

	// add second circle
	if( circles.length == 1 )
	{
		var x = circles[0].x - circles[0].r -r;
		
		circles.push( {x:x,y:0,r:r} );
		drawCircle( x, 0, r );
		return;
	}
	
	// find shortest segment from circle
	// center to next circle center
	var bestIdx = 0,
		bestDist = distance( 0, 1 );
		
	for( var i=1; i<circles.length; i++ )
	{
		var dist = distance( i, i+1 );
		if( dist > bestDist )
		{
			bestDist = dist;
			bestIdx = i;
		}
	}

	bestIdx = (bestIdx) % circles.length;
	var nextIdx = (bestIdx+1) % circles.length;
	
	// triangle between bestIdx, bestIdx+1 and a new midpoint
	var a = circles[bestIdx].r + circles[nextIdx].r,
		b = circles[bestIdx].r + r,
		c = circles[nextIdx].r + r;
		
	var alpha = Math.acos( (a**2+b**2-c**2)/(2*a*b) );
	
	// normalize vector from bestIdx to nextIdx
	var vx = (circles[nextIdx].x - circles[bestIdx].x)*b/a,
		vy = (circles[nextIdx].y - circles[bestIdx].y)*b/a;

	// rotate the vector at angle (-alpha)
	var x = vx*Math.cos(alpha) - vy*Math.sin(alpha) + circles[bestIdx].x,
		y = vx*Math.sin(alpha) + vy*Math.cos(alpha) + circles[bestIdx].y;

	circles.splice( nextIdx, 0, {x:x,y:y,r:r} );
	drawCircle( x, y, r );
	
}



addCircle( 100 );
addCircle( 80 );
addCircle( 70 );
addCircle( 60 );
addCircle( 55 );
addCircle( 55 );
addCircle( 50 );
addCircle( 25 );
addCircle( 20 );
addCircle( 20 );
addCircle( 20 );
addCircle( 20 );

// try to calculate minimal enclosing circle

var minX = 0,
	maxX = 0,
	minY = 0,
	maxY = 0;
	
for( var c of circles )
{
	minX = Math.min( minX, c.x-c.r );
	maxX = Math.max( maxX, c.x+c.r );
	minY = Math.min( minY, c.y-c.r );
	maxY = Math.max( maxY, c.y+c.r );
}

frameCircle( minX, minY, 5 );
frameCircle( minX, maxY, 5 );
frameCircle( maxX, maxY, 5 );
frameCircle( maxX, minY, 5 );
frameCircle( (minX+maxX)/2, (minY+maxY)/2, Math.max((maxX-minX)**2,(maxY-minY)**2)**0.5/2 );
