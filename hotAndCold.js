// JavaScript Document
var canvas = document.getElementById("theCanvas");

var background = new Image();
background.src = 'http://i246.photobucket.com/albums/gg93/micintexp/Pixel_Art%20Training/64_64_zps7bdeaf29.jpg';

if(canvas.getContext){
	var ctx = document.getElementById('theCanvas').getContext('2d');
	var pattern;
        
        background.onload = function(){
            pattern = ctx.createPattern(background, 'repeat');
        }
	
        
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
		
		
		ctx.rect(backgroundImg.x, backgroundImg.y, backgroundImg.width, backgroundImg.height);
                ctx.fillStyle = pattern;//why is this not working??????????
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
                        
                        /*
                        ctx.save();
                        ctx.translate(backgroundImg['x'], backgroundImg['y']);
                        //ctx.rect(backgroundImg.x, backgroundImg.y, backgroundImg.width, backgroundImg.height);
                        ctx.restore();
			*/
                       
			//if the animation hasn't finished, repeat
			if(progress < 1) requestAnimationFrame(step);
			else document.addEventListener('keydown', keyDownAction, false);
		};
		
		return step();
	};
	
	//event listener for key press
        document.addEventListener('keydown', keyDownAction, false);
        
        function keyDownAction(e) {
            e = e || window.event;

            switch (e.keyCode) {
                case 37://left arrow
                    //console.log("left");
                    document.removeEventListener('keydown', keyDownAction, false);
                    animate('x', backgroundImg['x'] - 64, 1000);
                    break;
                case 38://up arrow
                    document.removeEventListener('keydown', keyDownAction, false);
                    animate('y', backgroundImg['y'] - 64, 1000);
                    break;
                case 39://right arrow
                    document.removeEventListener('keydown', keyDownAction, false);
                    animate('x', backgroundImg['x'] + 64, 1000);
                    break;
                case 40://down arrow
                    document.removeEventListener('keydown', keyDownAction, false);
                    animate('y', backgroundImg['y'] + 64, 1000);
                    break;
                default:
                    break;
            }
        };
        
	//animate('x', 0, 1000);
}
else console.log("not compatible with canvas");


	



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
