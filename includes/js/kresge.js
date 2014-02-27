var classes = new Array(['101 (Smith)', '101 (Jones)', '105 (Henry)'], ['101 (Friedrich)', '110 (Grief)', '115 (Saxton)', '220 (Simon)'], ['101 (Stein)', '101 (Pechter)', '101 (Felton)', '310 (Hi)'], ['101 (Google)', '215 (Kresge)', 'Purple Monkey Dishwasher']);
var depts = new Array('English', 'German', 'Spanish', 'Swahili');
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

 	$(".iconButt").click(function(){
 		$(this).toggleClass("active btn-link btn-primary navbar-btn");
 	});

	drawRoomToRoom();
	resizeMap();
	window.addEventListener('resize', resizeMap, false); // will resize map canvas when window size changes

	$("#dept").change(function(){
		var dept = $("#dept option:selected").attr('value');
		console.log(dept);
		var i = depts.indexOf(dept);
		var bus = classes[i];
		var select = $("#classnum");
		select.empty();
		for (var x in bus)
		{
			select[0].add(new Option(bus[x],bus[x]));
		}
	});


 });


