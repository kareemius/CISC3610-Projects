function drawCanvas() {
	var canvasWidth = 1500;
	console.log("javaScript File Loaded");
	var canvas = document.getElementById('canvas');
	
		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');		//|===================|
			ctx.fillStyle = "#06003D";				//|    Background     | 
			ctx.fillRect (0,0,canvasWidth,1300);	//|===================|
			
														//|==================================================================| 
			ctx.fillStyle = "#004A7F";					//|				Water - Drawn with a for Loop						 |		
			for(var i = 0; i <= canvasWidth; i++) {		//|	Set the fillStyle to color of water		 						 |
				ctx.fillRect (i*100,1300,100,100);		//|	Set iteration to length of canvasWidth, less than 15 loops       |
			}											//|	Create a small 100*100 square along each x coordinate on canvas	 | 	
														//|																	 |														
			ctx.fillStyle = "#004A7F";					//|																	 |					
			for(var i = 0; i < 1100; i++) {				//| Does the same loop again for the bottom row of the canvas	  	 |     
				ctx.fillRect (i*100,1400,100,100);		//|																	 |
			}											//|==================================================================|
			
			ctx.beginPath();
			ctx.moveTo(0,1000);
			ctx.lineTo(400,500);
			ctx.lineTo(1100,500);
			ctx.lineTo(1500,1000)
			ctx.lineTo(0,1000);
			ctx.fillStyle = '#260A09';
			ctx.fill();

					
			ctx.fillStyle = '#562200';				//|=============================|
			ctx.fillRect (1300,1400,200,100);		//|								|
			ctx.fillRect (1200,1200,200,200);		//|								|
			ctx.fillRect (1100,1100,200,100);		//|		  Tree Objects			|
			ctx.fillRect (1000,1000,100,100);		//| 	Tree Trunk + Branches	|
			ctx.fillRect (1200,1000,100,100);		//|								|
			ctx.fillRect (1300, 900,100,100);		//|								|
			ctx.fillRect (900, 900,100,100);		//|								|
			ctx.fillStyle = '#FF7FB6';				//|			Pink Leaves			|
			ctx.fillRect (800,800,300,100);			//|								|
			ctx.fillRect (1200,800,300,100);		//|								|
			ctx.fillRect (800,900,100,100);			//|								|
			ctx.fillRect (1000,900,300,100);		//|								|
			ctx.fillRect (1400,900,100,100);		//|								|
			ctx.fillRect (800,1000,200,100);		//|								|
			ctx.fillRect (1100,1000,100,100);		//|								|
			ctx.fillRect (1300,1000,100,100);		//|								|
			ctx.fillStyle = '#D65191';				//|		Pink Leaves Shaded		|
			ctx.fillRect (1400,1000,100,100);		//|								|
			ctx.fillRect (900,1100,200,100);		//|								|
			ctx.fillRect (1100,1200,100,100);		//|								|
			ctx.fillRect (1300,1100,200,100);		//|								|
			ctx.fillRect (1300,1200,100,100);		//|=============================|
			
			ctx.fillStyle ='#2D2D2D';				//|=============================|
			ctx.fillRect (0,1200,1100,100);			//|								|
			ctx.fillRect (0,1100,900,100);			//|								|
			ctx.fillRect (1400,1200,100,100);		//|								|
			ctx.fillRect (0,1000,800,100);			//|		 Building Objects		|
			ctx.fillRect (100 ,700, 100, 300);		//|								|
			ctx.fillRect (100 ,700, 100, 300);		//|								|
			ctx.fillRect (0, 800, 100, 200);		//|								|
			ctx.fillRect (300 ,900, 300, 100);		//|								|
			ctx.fillRect (400, 800, 200, 100);		//|								|
			ctx.fillRect (500 ,700, 100, 100);		//|								|
			ctx.fillRect (1100 ,800, 100, 100);		//|								|
			ctx.fillRect (700 ,700, 200, 100);		//|								|	
			ctx.fillRect (700 ,800, 100, 200);		//|								|
			ctx.fillRect (1100 ,700, 200, 100);		//|=============================|
			
			ctx.beginPath();
			ctx.arc(1250, 350, 200, 0.4, 2 * Math.PI);
			ctx.fillStyle= '#FFD800';
			ctx.fill(); 
			
			ctx.font = "30px Arial";										//|===============|		
			ctx.strokeStyle = '#FFFFFF';									//|  Title Text   |
			ctx.strokeText("Night Over Fuji; by Kareem E.", 1100, 1475);	//|===============|
		}
}