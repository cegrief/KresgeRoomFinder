function resizeMap(){
	canvas = $('#map');
	if(canvas == []){
		return;
	}
	canvas.width(window.innerWidth);
	canvas.height(window.innerHeight-147);
	console.log(canvas.width())
	console.log(canvas.height())
};

function drawRoomToRoom(){
	var c = document.getElementById("map");
	if(c==null){
		return;
	}
	var ctx = c.getContext("2d");
	ctx.strokeStyle="#FF0000";
	ctx.beginPath();
	ctx.lineCap="round";
	ctx.lineWidth=10;
	ctx.moveTo(93,456);
	ctx.lineTo(193,456);
	ctx.stroke();

}

 $(document).ready(function() {
 	$('.subject').click(function(){
 		var output = $(this).html();
		$("#chosenClass").html(output);
 	});

 	$("#classSubmit").click(function(){
 		
 	})

 	$(".floor").click(function(){
 		floor = $(this).text();
 		$(".currFloor").toggleClass("active btn-primary btn-link currFloor");
 		$(this).toggleClass("active btn-primary btn-link currFloor");
 		$("#map").css("background", "url(includes/img/floor" + floor +".jpg) no-repeat");

 		resizeMap();
 	});

	drawRoomToRoom();
	resizeMap();
	window.addEventListener('resize', resizeMap, false); // will resize map canvas when window size changes


 });


