// Main Variables

//canvas2d.globalAlpha = 0.5
var oysters = 0;
var pearls = 100;
var pollution = 100;
var grid;
var xClick = 0;
var yClick = 0;
var timer = 0;
/* var oySprite = new Image();
oySprite.onload = function(){ imgReady = true; };
oySprite.src = 'images/oy.png'; */


// FILL WITH DIRTY BACKGROUND PICTURE FINISH!!!!
/* var dirtyCanvas = document.createElement("canvas");
var dirtyCtx = dirtyCanvas.getContext("2d");
canvas.width = 512;
canvas.height = 562;
document.body.appendChild(dirtyCanvas);
var dirtyWater = document.getElementbyId("dirtyReference");
 */
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 562;
document.body.appendChild(canvas);


function renderDynamics(){
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fillRect(0,0,canvas.width,52);	
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "28px Palatino";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Oysters: " + oysters, 16, 8);
	ctx.fillText("Pearls: " + pearls, canvas.width - 145, 8);
}
/* var oyImage = new Image(); */
function addOy(x, y){
	temp = new Oy(xClick, yClick, 0, 1);
	placedOysters.push(temp)
	console.log(placedOysters.length);
	var oyImage = document.getElementById("reference");
	ctx.drawImage(oyImage, x, y, 32, 32);	
	/* oyImage.style.display = "initial"; */
	/* console.log(x, y); */
	/* ctx.drawImage(oyImage, x, y, 32, 32); */
	console.log("I'M DRAWN TO IT")
}
// Game Objects
var placedOysters = new Array();
function Oy(x, y, age, prod){
	this.x = x;
	this.y = y;
	this.age = age;
	this.prod = prod;
	dy = y +32;
	dx = x + 32;
	
}


canvas.addEventListener("mousedown", getPosition, false);
canvas.addEventListener("mousedown", validateClick, false);

function getPosition(event)
{
  xClick = event.x;
  yClick = event.y;

  console.log("x:" + xClick + " y:" + yClick);
}
function checkClick(){
	if (yClick < 52 || pearls - 10 < 0)
		return false;
	else
		return true;
}
function validateClick(){
	for(i = 0; i < placedOysters.length; i++){
		/* console.log(placedOysters[i].x) */
		if((xClick < placedOysters[i].x + 32)&&(yClick < placedOysters[i].y + 32)
			&& (xClick >= placedOysters[i].x) && (yClick >= placedOysters[i].y)){
				pearls++;
			}
	}
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
	var canPlace = checkClick();
	if (canPlace && (pearls > 0)){
		addOy(xClick, yClick);
		pearls-= 10;
		oysters++;
	}
	if(oysters > 0 && timer == 1800){
		pearls += oysters;
	}
	

	
}
function resetClick(){
	xClick = 0;
	yClick = 0;
}
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	
	renderDynamics();
	then = now;
	console.log('beep');
	resetClick();
	if(timer < 1800){
		timer++;
	}
	else{
		timer = 0;
	}
	requestAnimationFrame(main);
	
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// run the ******* game
var then = Date.now();
main();