// JavaScript Document

//event listener for ess
document.onkeydown = function(e) {
	e = e || window.event;
	
	switch (e.keyCode) {
		case 37://left arrow
			console.log("Left arrow was pressed");
			break;
		case 38://up arrow
			console.log("Up arrow was pressed");
			break;
		case 39://right arrow
			console.log("Right arrow was pressed");
			break;
		case 40://down arrow
			console.log("Down arrow was pressed");
			break;
		default:
			console.log("A non-directional key was pressed: " + e.keyCode);
			break;
	}
}