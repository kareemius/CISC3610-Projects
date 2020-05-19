// JavaScript fruitCanvas
// Stores names of fruits and their values in an array of objects and draws rectangles corresponding to these objects 

	
	var fruits = [{name: "Apple", quantity:20, color: "#FF0000"},
				  {name: "Orange", quantity: 10, color: "#FF6A00"},
				  {name: "Banana", quantity: 15, color: "#FFD800"},
				  {name: "Kiwi", quantity: 3, color: "#B6FF00"},
				  {name: "Blueberry", quantity: 5, color: "#00137F"},
				  {name: "Grapes", quantity: 8, color: "#57007F"}];
		console.log(fruits[4].name);
	
			
	
// draw rectangles representing the fruits

	function drawRectangles() {
		var canvas = document.getElementById('canvas');
			if (canvas.getContext) {
				var ctx = canvas.getContext('2d');
				
				// Data for Apple - Quantity 20 - Color Red
				ctx.fillStyle = fruits[0].color;
				ctx.fillRect(100, 100, fruits[0].quantity*50, 50);
				ctx.font = "50px Georgia";
				ctx.fillText(fruits[0].name ,1125, 150);	
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(fruits[0].quantity, fruits[0].quantity*50, 150);
				
				//Data for Orange - Quantity 10, color Orange
				ctx.fillStyle = fruits[1].color;
				ctx.fillRect (100,200, fruits[1].quantity*50, 50); 
				ctx.font = "50px Georgia";
				ctx.fillText(fruits[1].name, 1125, 250);
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(fruits[1].quantity, fruits[1].quantity*50, 250);
				
				//Data for Banana - Quantity 15, color Yellow
				ctx.fillStyle = fruits[2].color;
				ctx.fillRect (100,300, fruits[2].quantity*50, 50);
				ctx.font = "50px Georgia";
				ctx.fillText(fruits[2].name, 1125, 350);
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(fruits[2].quantity, fruits[2].quantity*50, 350);
				
				//Data for Kiwi - Quantity 3 - Color Green
				ctx.fillStyle = fruits[3].color;
				ctx.fillRect (100,400, fruits[3].quantity*50, 50);
				ctx.font = "50px Georgia";
				ctx.fillText(fruits[3].name, 1125, 450);
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(fruits[3].quantity, fruits[3].quantity*50, 450);
				
				//Data for Blueberry - Quantity 5 - Color Blue
				ctx.fillStyle = fruits[4].color;
				ctx.fillRect (100,500, fruits[4].quantity*50, 50);
				ctx.font = "50px Georgia";
				ctx.fillText(fruits[4].name, 1125, 550);
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(fruits[4].quantity, fruits[4].quantity*50, 550);	
				
				//Data for Grape - Quantity 8 - Color Magenta
				ctx.fillStyle = fruits[5].color;
				ctx.fillRect (100,600, fruits[5].quantity*50, 50);
				ctx.font = "50px Georgia";
				ctx.fillText(fruits[5].name, 1125, 650);
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(fruits[5].quantity, fruits[5].quantity*50, 650);
			}
	} 