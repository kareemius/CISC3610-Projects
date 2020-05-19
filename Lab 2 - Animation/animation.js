"use strict";	// The browser reports an error if a variable is being used before declaration

var Scene = {
	canvas : undefined,
	ctx : undefined,
	sprite : undefined,
};

// Scene.start() is a function which defines all values and sets them to elements of the html file
	Scene.start = function() { 
		Scene.canvas = document.getElementById("canvas");		// Setup 2D Canvas Context
		Scene.ctx = Scene.canvas.getContext("2d");
		Scene.sprite = numbers;									// Setup the numbers image
		Scene.sprite.img = new Image();			    			// Setup new Image object
		Scene.sprite.img.src = Scene.sprite.src;				// Set image object to spritesheet.png
	
//Scene.sprite.img.onload is a function that loads the images befor starting the animation	
		Scene.sprite.img.onload = function() {		
		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
    	Scene.mainLoop();
		}
	};
// Once the basic HTML document is loaded and its parsing has taken place, start the scene. Calls the start function
	document.addEventListener( 'DOMContentLoaded', Scene.start);
	
// Scene.clearCanvas() clears the canvas each time and adds a new color to the canvas using the canvas dimensions
	Scene.clearCanvas = function() {
		Scene.canvasContext.fillStyle = "#FFFFFF";
		Scene.canvasContext.fillRect(0,0, Scene.canvas.width, Scene.canvas.height);
	};

//Scene.mainLoop calls the functions that clear the canvas, sets the location of a sprite, and draws each sprite
	Scene.mainLoop() {
		document.getElementById("Start").disabled = true;
		Scene.clearCanvas();
		Scene.update();
		Scene.draw();
		window.setTimeout(Scene.mainLoop, 1000 /24);
	};
	
//Scene.update modifies the x position of spritesheet to have
	Scene.update = function() {
		Scene.canvas.width = window.innerWidth;
		Scene.sprite.offset+=24;
			if(Scene.sprite.offset>Scene.canvas.width)
				Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
	};

//Scene.draw 
	Scene.draw = function() {
		Scene.canvasContext.drawImage(Scene.sprite.img,Scene.sprite.frames[Scene.sprite.frame].frame.x,Scene.sprite.frames[Scene.sprite.frame].frame.y,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h,Scene.sprite.offset,0,Scene.sprite.frames[Scene.sprite.frame].frame.w,Scene.sprite.frames[Scene.sprite.frame].frame.h);
			if(Scene.sprite.frame==Scene.sprite.frames.length)
				Scene.sprite.frame=0;
	};