// Main Variables
var oysters = 0;
var pearls = 0;
var grid;
// Game Map
// 24 columns
// 11 rows
var map = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
           [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		   ];
// Create the Overlay grid


// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Background image
/* var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png"; */



// Draw everything
/* var renderStatics = function () {
	
     if (bgReady) {
		var ptrn = ctx.createPattern(bgImage, 'repeat'); // Create a pattern with this image, and set it to "repeat".
	    ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
	}
	// Black Bar
	

	
	//grid
	
}
renderStatics(); */

function renderDynamics(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fillRect(0,0,canvas.width,52);	
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "28px Palatino";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Oysters: " + oysters, 16, 8);
	ctx.fillText("Pearls: " + pearls, canvas.width - 125, 8);
}

/* var tileWidth = window.innerWidth / 24;
var tileHeight = tileWidth;
function renderGrid(){
	for(y = 0; y < 11; y++){
		ctx.beginPath();
		ctx.moveTo(0,y*(window.innerWidth/24));
		ctx.lineTo(window.innerWidth, y*(window.innerWidth/24));
		ctx.stroke();
		for(x = 0; x < 11; x++){
			
		}
	}
}
renderGrid(); */
var update = function (modifier){
	//map
	//counters
	//oyster's stage
	
}
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	
	renderDynamics();
	then = now;
	console.log('alive')
	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
main();