// JavaScript Document
var canvas = document.getElementById("theCanvas");

if(canvas.getContext){
	var ctx = document.getElementById('theCanvas').getContext('2d');
        var background = new Image();
        background.src = 'http://i246.photobucket.com/albums/gg93/micintexp/Pixel_Art%20Training/64_64_zps7bdeaf29.jpg';
        //background
        background.onload = function(){//don't do anytihng until bacground is loaded
            console.log("background image loaded"); 
            //keep track of bf coordinates
            var backgroundInfo = {
                'x':0,
                'y':0
            };

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(background, 64, 64);
            backgroundInfo.x = 64;
            backgroundInfo.y = 64;

            function move(x,y) {
                    //console.log("moving");
                    var loopTimer;
                    xGoal = backgroundInfo.x + x;
                    console.log("xGoal: " + xGoal);
                    yGoal = backgroundInfo.y + y;
                    console.log("yGoal: " + yGoal);
                    
                    //if animation has not completed
                    function animate(){
                        if(backgroundInfo.x === xGoal && backgroundInfo.y === yGoal){//if we hit the distance goal
                            clearTimeout(loopTimer);
                            console.log("congratulations, the animation completed!");
                        }
                        //else
                        else {
                            //save, do something, restore
                            ctx.save();
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            //console.log("background started at: " + backgroundInfo.x + " " + backgroundInfo.y);
                            backgroundInfo.x += x/32;
                            backgroundInfo.y += y/32;
                            console.log("background at: " + backgroundInfo.x + " " + backgroundInfo.y);
                            //TODO: if the backgrond is going to start moing off-screen, we need to do something idfferent
                            ctx.drawImage(background, backgroundInfo.x, backgroundInfo.y);//draw the background to the new location
                            ctx.restore();//restore canvas back to original location
                            var loopTimer = setTimeout(animate, 1);//function to call to iterate through the animation, and the speed at which the animation will take to complete
                       }
                    };
                    
                    animate();
            };

            //event listener for key press
            document.addEventListener('keydown', keyDownAction, false);

            function keyDownAction(e) {//handle directions
                e = e || window.event;

                switch (e.keyCode) {
                    case 37://left arrow
                        console.log("left");
                        //document.removeEventListener('keydown', keyDownAction, false);
                        move(-64,0);
                        break;
                    case 38://up arrow
                        //document.removeEventListener('keydown', keyDownAction, false);
                        move(0, -64);
                        break;
                    case 39://right arrow
                        //document.removeEventListener('keydown', keyDownAction, false);
                        move(64, 0);
                        break;
                    case 40://down arrow
                        //document.removeEventListener('keydown', keyDownAction, false);
                        move(0, 64);
                        break;
                    default:
                        break;
                }
            };
        };
        
       
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
