// JavaScript Document
var canvas = document.getElementById("theCanvas");


if(canvas.getContext){
	var ctx = document.getElementById('theCanvas').getContext('2d');
	//ctx.drawImage(background, 50, 50);
	
	var velocity = 100;
	var background = new Image();
	background.addEventListener('load', drawImage, false);
	background.src = 'http://i246.photobucket.com/albums/gg93/micintexp/Pixel_Art%20Training/64_64_zps7bdeaf29.jpg';
	
	function drawImage(time) {
		var framegap = time-lastRepaintTime;
		lastRepaintTime = time;
		
		var translateX = velocity*(framegap/1000);
		ctx.clearRect(0, 0, canvas.width, canvas.height);	
		
		var pattern = ctx.createPattern(background, "repeat-x");
		ctx.fillStyle = pattern;
		ctx.rect(translateX, 0, background.width, background.height);
		ctx.fill();
		ctx.translate(-translateX, 0);
		requestAnimationFrame(drawImage);
	}
	
	var lastRepaintTime = window.performance.now();
	
}
else console.log("not compatible with canvas");


	

//event listener for ess
/*
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
*/

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
