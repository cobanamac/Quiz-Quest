// Creating the canvas / Load img 

var can = document.getElementById('canvas');
var ctx = can.getContext('2d');
canvas.width = 1200;
canvas.height = 800;
//canvas.style.backgroundColor = "blue";

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var enterPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);



var img = new Image();

	img.onload = function(){
    can.width = img.width;
    can.height = img.height;
    ctx.drawImage(img, 0, 0, img.width/2, img.height/2);
}
img.src = 'pic/map.png';


// lvl / stage
var x = 0;
var y = 0;


var player = {
	speed: 5, // movement in px per sec
	x: 50,
	y: 600,
};

// enemy

/*function enemy{

}
*/

// main Player
function totPlayer(){   
    ctx.beginPath();
	ctx.rect(player.x,player.y,50,50);
	ctx.fillStyle = "white";
	ctx.fill();
	ctx.closePath();
}


// Drawing 
function draw(){
	ctx.clearRect(0,0, canvas.width, canvas.height) 
	totPlayer();

	if(rightPressed && player.x < canvas.width - 50){
		player.x += player.speed; 
	}else if(leftPressed && player.x > 0){
		player.x -= player.speed; 
	}else if(upPressed && player.y > 0){
		player.y -= player.speed; 
	}else if(downPressed && player.y < canvas.height - 50){
		player.y += player.speed; 
	}
}
setInterval(draw, 3);	// draw func plays ever 100 millisec


// KeyHandler PressedDown & Releasing 
function keyDownHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = true;
	}else if(e.keyCode == 37) {
		leftPressed = true;
	}else if (e.keyCode == 38) {
		upPressed = true;
	}else if(e.keyCode == 40) {
		downPressed = true;
	}else if(e.keyCode == 13){
		alert("enter was pressed!");
	}
}

function keyUpHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = false;
	}else if(e.keyCode == 37) {
		leftPressed = false;
	}else if (e.keyCode == 38) {
		upPressed = false;
	}else if(e.keyCode == 40) {
		downPressed = false;
	} 
}

// Collision











/*
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1920;
canvas.height = 1080;
canvas.fill = black;
document.body.appendChild(canvas);

// Graphic

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
	bgReady = true;
}
bgImage.src = "pic/map.png";

// Render objects

var render = function() {

	if (bgReady){
		ctx.drawImage(bgImage, 0 , 0);
	}
ctx.fillStyle = "rgb(250, 250, 250)";

}



//  

https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame


*/

