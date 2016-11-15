// JavaScript Document
var canvas = document.getElementById("theCanvas");

var background = new Image();
background.src = 'http://i246.photobucket.com/albums/gg93/micintexp/Pixel_Art%20Training/64_64_zps7bdeaf29.jpg';

if(canvas.getContext){
	var ctx = document.getElementById('theCanvas').getContext('2d');
	var pattern = ctx.createPattern(background, 'repeat');
	
	var requestAnimationFrame = function(callback) {
		return setTimeout(callback, 1);
	};
	
	
	
	
	var backgroundImg = {
		'x':50,
		'y':50,
		'width':64,
		'height':64,
		'fillStyle':pattern
	};

	var render = function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		
		ctx.fillStyle = pattern;//why is this not working??????????
		ctx.rect(backgroundImg.x, backgroundImg.y, backgroundImg.width, backgroundImg.height);
		ctx.fill();
		
		requestAnimationFrame(render);	
	}
	render();
	
	
	var animate = function(prop, val, duration){//why are we setting up functions as variables?
		
		//setup calcs for step function
		var start = new Date().getTime();
		var end = start + duration;
		var current = backgroundImg[prop];
		var distance = val - current;
		
		var step = function() {
			//get current progress
			var timestamp = new Date().getTime();
			var progress = Math.min((duration - (end - timestamp))/duration, 1);
			
			//update the background's property
			backgroundImg[prop] = current + (distance*progress);
			
			//if the animation hasn't finished, repeat
			if(progress < 1) requestAnimationFrame(step);
			
		};
		
		return step();
	};
	
	
	animate('x', 0, 1000);
}
else console.log("not compatible with canvas");


	

//event listener for ess
document.onkeydown = function(e) {
	e = e || window.event;
	
	switch (e.keyCode) {
		case 37://left arrow
			move("left");
			break;
		case 38://up arrow
			move("up");
			break;
		case 39://right arrow
			move("right");
			break;
		case 40://down arrow
			move("down");
			break;
		default:
			break;
	}
};

/*
function move(direction) {
	//save, do something, restore
	window.setInterval(
	ctx.save();
	ctx.translate(1, 0);
	ctx.drawImage(background, 0, 0);
	ctx.restore();
}
*/
