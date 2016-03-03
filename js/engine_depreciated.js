var engine = {};   // create the engine object

		   
engine.width = 
engine.outhnd = document.getElementById('output');   // handle to the output div
engine.canvas = document.getElementById('canvas');   // handle to the canvas element
engine.handle = engine.canvas.getContext('2d');      // handle canvas drawing functions

engine.screen = {};
engine.screen.width  =  engine.canvas.width;
engine.screen.height = engine.canvas.height;

engine.screen.tilesX = engine.canvas.width / 32;
engine.screen.tilesy = engine.canvas.height / 16;

engine.viewport = {};
engine.viewport.x = 0;
engine.viewport.y = 0;


engine.map = {};

engine.map.draw = function(mapData)
{
    var y,x;
	var mapX = 0;
	var mapY = 0;
	var tile;
	
	engine.output('drawing map from ' + engine.viewport.x + ',' + engine.viewport.y + ' to ' +
                 (engine.viewport.x + engine.screen.tilesX) + ',' + (engine.viewport.y + engine.screen.tilesY));

    for(y=0; y<engine.screen.tilesY; y++){
		for(x=0; x<engine.screen.tilesX; x++){
			mapX = x+ engine.viewport.x;
			mapY = y+ engine.viewport.y;
			
			tile = (mapData[mapY] && mapData[mapY][mapX]) ? mapData[mapY][mapX] : ' ';
		}
	}
};


engine.output = function(message)
{
   engine.outhnd.innerHTML += '<br />' + message;   // print a message to the output div
};