function resizeMap(){
	canvas = $('#map');
	if(canvas == []){
		return;
	}
	canvas.width(window.innerWidth);
	canvas.height(window.innerHeight-147);
};

function drawRoomToRoom(){
	var c = document.getElementById("map");
	if(c==null){
		return;
	}
	c.width = c.width; // clears prior drawings
	var ctx = c.getContext("2d");
	ctx.strokeStyle="#FF0000";
	ctx.beginPath();
	ctx.lineCap="round";
	ctx.lineWidth=10;
	ctx.moveTo(80,456);
	ctx.lineTo(525,456);
	ctx.lineTo(525,725);
	ctx.lineTo(545,725);
	ctx.stroke();

}

function drawRoomToStairs(endFloor){
	var c = document.getElementById("map");
	if(c==null){
		return;
	}
	c.width = c.width; // clears prior drawings
	var ctx = c.getContext("2d");
	ctx.strokeStyle="#FF0000";
	ctx.beginPath();
	ctx.lineCap="round";
	ctx.lineWidth=10;
	ctx.moveTo(80,456);
	ctx.lineTo(100,456);
	ctx.lineTo(100,579);
	ctx.lineTo(140,579);
	ctx.stroke();
	ctx.font="24px Arial";
	ctx.fillText('To Floor '+endFloor, 150,579);
}

function drawStairsToRoom(startFloor){
	var c = document.getElementById("map");
	if(c==null){
		return;
	}
	c.width = c.width; // clears prior drawings
	var ctx = c.getContext("2d");
	ctx.strokeStyle="#FF0000";
	ctx.beginPath();
	ctx.lineCap="round";
	ctx.lineWidth=10;
	ctx.moveTo(140,558);
	ctx.lineTo(100,558);
	ctx.lineTo(100,640);
	ctx.lineTo(208,640);
	ctx.lineTo(208,815);
	ctx.lineTo(328,815);
	ctx.lineTo(328,795);
	ctx.stroke();
	ctx.font="24px Arial";
	ctx.fillText('From Floor '+startFloor, 150, 579);
}

 $(document).ready(function() {
 	$('.subject').click(function(){
 		var output = $(this).html();
		$("#chosenClass").html(output);
 	});

 	$("#classSubmit").click(function(){
 		
 	})
	
	drawRoomToStairs(4);
	drawStairsToRoom(3);
	resizeMap();
	window.addEventListener('resize', resizeMap, false); // will resize map canvas when window size changes


 });
