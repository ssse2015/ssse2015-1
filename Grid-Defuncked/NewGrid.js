/* x and y are the dimensions of the grid*/

var newOysterF;

$(function CreateSquare (x, y) {

	x = 5;
	y = 5;

	/* Cell arrays */
	var cells = new Array();	

	for (var j = 0; j < y; j++){
		
		for (var i = 0; i < x; i++){
			
			var Z = i + x * j;
			
			cells[Z] = $("<div>").html('<div style = "position: absolute; height: 100px; width: 100px; border-style: solid; border-width: 1px;">  </div>');
			document.body.appendChild(cells[Z]);
			
			/* use cell y and x variables above to determine dimensions of cell */

			
			cells[Z].css ("marginLeft", (100 * i)); 
			
			cells[Z].css ("marginTop", (100 * j)); 
			
		}
	}
	

})


