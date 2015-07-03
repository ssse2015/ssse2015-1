/*Test Comment*/


$(document).ready(function() {
  $('#oysters').click(countClicks);
  
});

var clickCount = 0;
var Pearls = 0;



function countClicks () {
	
	
	
	$('#oysters').children().css("height", 90 );
	$('#oysters').children().css("width", 90 );
	
	clickCount += 1;
	if (clickCount >= 5){
		var chance = Math.round(Math.random() * (1 - 16) * -1);
		if (chance <= 1){
			console.log("Pearl Count: " + (Pearls +1 ) );
			clickCount = 0;
			Pearls += 1;
		}
	}
	
	setTimeout(
	  function() 
	  {
		$('#oysters').children().css("height", 100 );
		$('#oysters').children().css("width", 100 );
	  }, 50);
}



/*
function placeDiv() {
  var d = document.getElementById('oysterF');
  
  /* Generates number between 10 and 100 *//*
  var x = Math.floor((Math.random() * 90) + 10 );
  console.log(x);
  
  var y = Math.floor((Math.random() * 90) + 10 );
  console.log(y);
  
  d.style.position = "absolute";
  d.style.left = x +'px';
  d.style.top = y +'px';
 }

*/