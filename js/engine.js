// Main Variables

//canvas2d.globalAlpha = 0.5
var oysters = 0;
var pearls = 100;
var pollution = 100;
var grid;
var xClick = 0;
var yClick = 0;
var timer = 0;
var fact = 0;
// 25 facts
var facts=[
	
	"The term oyster actually refers to a few types of clams and mollusks.",
	"A group of oysters is called a bed, colony or reef.",
	"Oysters have super strong adductor muscles to pull their shells closed when threatened.",
	"Oysters are bivalves. This means they have an opening and closing shell connected by a ligament.",
	"Oysters are keystone species in the NY harbor and they are functionally extinct due to pollution and over harvesting.",
	"The Billion Oyster Project has grown 11.5 million oysters in the NY harbor thus far.",
	"Oysters get freaky when they feel a change in water temperature or the biomass of phytoplankton increases.",
	"It only takes one oyster to start the reproduction process to make the rest of them join in.",
	"Oysters reproduce by releasing a Gonad which will be either sperm or eggs into the water.",
	"An oyster egg must be fertilized by both an egg and a sperm in order to develop.",
	"Once an oyster egg is fertilized it drifts away from spawning site due to water currents.",
	"Oyster larvae develop for about two weeks.",
	"When oyster larvae reach that pediveliger stage(larvae with a foot), they find a hard place to attach and grow.",
	"Once oyster larvae are attached to a hard surface they become a spat and begin to metamorphose.",
	"The spat build a shell by secreting calcium carbonate into the water column.",
	"Oysters are considered mature at one year of age.",
	"Oysters are considered adults at three years of age.",
	"Higher salinity in a certain area means that the oysters will grow faster.",
	"One recycled shell can foster 20 baby oysters.",
	"Oysters eat phytoplankton in the sea.",
	"Oysters are very useful because they clean and filter the water they dwell in.",
	"Oysters are useful to the Billion Oyster Project because they clean the New York Harbor.",
	"Many people view oysters as a part of American culture and connect them to patriotism.",
	"An oyster changes its gender at least once throughout its life.",
	"In New York, many restaurants donate their used oyster shells to the Billion Oyster Project so they can grow more oysters"
	];

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
function addOy(x, y){
	temp = new Oy(xClick, yClick, 0, 1);
	placedOysters.push(temp)
	console.log(placedOysters.length);
	var oyImage = document.getElementById("reference");
	ctx.drawImage(oyImage, x, y, 32, 32);	
	console.log("I'M DRAWN TO IT")
}
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
		if((xClick < placedOysters[i].x + 32)&&(yClick < placedOysters[i].y + 32)
			&& (xClick >= placedOysters[i].x) && (yClick >= placedOysters[i].y)){
				pearls++;
				if(fact > 25){
					fact = 0;
				}
				
			}
	}
}
function getWisdom(){
	if(timer == 1800)
		return true;
	else
		return false;
}
function POW(){
	if(getWisdom()){
		console.log("FACTUAL")
		document.getElementById("wisdom").innerHTML =  facts[fact];
		fact++;
	}
}

var update = function (modifier){
	var canPlace = checkClick();
	if (canPlace && (pearls > 0)){
		addOy(xClick, yClick);
		pearls-= 10;
		oysters++;
		pollution -= .0000001;
		/* pollution = pollution.toFixed(4); */
	}
	if(oysters > 0 && timer == 1800){
		pearls += oysters;
	}
	
	document.getElementById("side").innerHTML = "Pollution: %" + pollution;
	
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
		POW();
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