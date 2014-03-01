// Global Variables
var classes = new Array(['101 (Smith)', '101 (Jones)', '105 (Henry)'], ['101 (Friedrich)', '110 (Grief)', '115 (Saxton)', '220 (Simon)'], ['101 (Stein)', '101 (Pechter)', '101 (Felton)', '310 (Hi)'], ['101 (Google)', '215 (Kresge)', 'Purple Monkey Dishwasher']);
var depts = new Array('English', 'German', 'Spanish', 'Swahili');
var startingFloor = 0;
var goalFloor = 0;
var activeSearch = '';
var startError = false;
var endError = false;

// Global Functions
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

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
	ctx.moveTo(95,456);
	ctx.lineTo(560,456);
	ctx.lineTo(560,605);
	ctx.lineTo(580,605);
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
	ctx.lineTo(110,456);
	ctx.lineTo(110,579);
	ctx.lineTo(140,579);
	ctx.stroke();
	ctx.font="24px Arial";
	ctx.fillText('To Floor '+endFloor, 160,579);
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
	ctx.lineTo(110,558);
	ctx.lineTo(110,640);
	ctx.lineTo(318,640);
	ctx.lineTo(318,620);
	ctx.stroke();
	ctx.font="24px Arial";
	ctx.fillText('From Floor '+startFloor, 160, 579);
}

function drawStartPoint(){
	var c = document.getElementById("map");
	if(c==null){
		return;
	}
	c.width = c.width;
	var ctx = c.getContext("2d");
	ctx.strokeStyle="#FF0000";
	ctx.beginPath();
	ctx.lineCap="round";
	ctx.lineWidth=20;
	ctx.moveTo(80,456);
	ctx.lineTo(90,456);
	ctx.stroke();
}

function drawEndPoint(){
	var c = document.getElementById("map");
	if(c==null){
		return;
	}
	c.width = c.width;
	var ctx = c.getContext("2d");
	ctx.strokeStyle="#FF0000";
	ctx.beginPath();
	ctx.lineCap="round";
	ctx.lineWidth=20;
	ctx.moveTo(318,620);
	ctx.lineTo(328,620);
	ctx.stroke();
}
function selectFloor(floor){
	$(".currFloor").toggleClass("active btn-primary btn-link currFloor");
	$("#floor"+floor).toggleClass("active btn-primary btn-link currFloor");
	$("#map").css("background", "url(includes/img/floor" + floor + ".jpg) no-repeat");
	resizeMap();
}

function clearCanvas(){
	var c = document.getElementById("map");
	if(c==null){
		return;
	}
	c.width=c.width;
}

 $(document).ready(function() {
 	$('.subject').click(function(){
 		var output = $(this).html();
		$("#chosenClass").html(output);
 	});

	$('#startingroom').keyup(function(){
		$('#startingroom-help').text('');
		val = $('#startingroom').val();
		if(isNaN(val) || val>4999){
			if(val.length != 5 || val[1] != '-' || val[0]>4 || isNaN(val[0]) || isNaN(val[2]) || isNaN(val[3]) || isNaN(val[4])){
				$('#startingroom-group').addClass('has-error');
				$('#startingroom-group').removeClass('has-success');
				$('#startingroom-help').text('Not a valid room number!');
				startError=true;
			}
			else{
				$('#startingroom-group').addClass('has-success');
				$('#startingroom-group').removeClass('has-error');
				$('#startingroom-help').text('');
				startError=false;
			}
		}
		else if(val.length != 4){
			$('#startingroom-group').addClass('has-error');
			$('#startingroom-group').removeClass('has-success');
			$('#startingroom-help').text('Not a valid room number!');
			startError=true;
		}
		else{
			$('#startingroom-group').addClass('has-success');
			$('#startingroom-group').removeClass('has-error');
			$('#startingroom-help').text('');
			startError=false;
		}
	})

	$('#endingroom').keyup(function(){
		$('#endingroom-help').text('');
		val = $('#endingroom').val();
		if(isNaN(val) || val>4999){
			if(val.length != 5 || val[1] != '-' || val[0]>4 || isNaN(val[0]) || isNaN(val[2]) || isNaN(val[3]) || isNaN(val[4])){
				$('#endingroom-group').addClass('has-error');
				$('#endingroom-group').removeClass('has-success');
				$('#endingroom-help').text('Not a valid room number!');
				endError = true;
			}
			else{
				$('#endingroom-group').addClass('has-success');
				$('#endingroom-group').removeClass('has-error');
				$('#endingroom-help').text('');
				endError = false;
			}
		}
		else if(val.length != 4){
			$('#endingroom-group').addClass('has-error');
			$('#endingroom-group').removeClass('has-success');
			$('#endingroom-help').text('Not a valid room number!');
			endError = true;
		}
		else{
			$('#endingroom-group').addClass('has-success');
			$('#endingroom-group').removeClass('has-error');
			$('#endingroom-help').text('');
			endError = false;
		}
	})

	$('.startingroom-lookup').click(function(){
		activeSearch = 'startingroom';
	})

	$('.endingroom-lookup').click(function(){
		activeSearch = 'endingroom';
	})

 	$("#classSubmit").click(function(){
 		d = $('#dept').val();
 		c = $('#classnum').val();
 		if(activeSearch== 'startingroom'){
 			$('#' + activeSearch).val('2112');
 		}
 		else{
 			$('#' + activeSearch).val('3494');
 		}
		$('#' + activeSearch + '-group').addClass('has-success').removeClass('has-error');
 		$('#' + activeSearch + '-help').text('Room for: ' + d + c);
 	})

	$('.prof').click(function(e){
		if(activeSearch == 'startingroom'){
			$('#' + activeSearch).val('2112');
		}
		else{
			$('#' + activeSearch).val('3494');
		}
		$('#' + activeSearch + '-group').addClass('has-success').removeClass('has-error');
		$('#' + activeSearch + '-help').text("Office of: " + this.text);
	})

	$('#getDir').click(function(e){
		if(endError || startError){
			e.preventDefault();
		}
	})

 	$(".floor").click(function(){
 		floor = $(this).text();
 		selectFloor(floor);
 		if((startingFloor != 0) && (goalFloor != 0)){
 			if(floor == startingFloor){
 				drawRoomToStairs(goalFloor);
 			}
 			else if(floor == goalFloor){
 				drawStairsToRoom(startingFloor);
 			}
			else{
				clearCanvas();
			}
 		}
 		else if(startingFloor != 0){
 			if(floor == startingFloor){
 				drawStartPoint();
 			}
			else{
				clearCanvas();
			}
 		}
 		else if(goalFloor != 0){
 			if(floor == goalFloor){
 				drawEndPoint();
 			}
 			else{
 				clearCanvas();
 			}
 		}
 	});

 	// $(".iconButt").click(function(){
 	// 	// $(this).toggleClass("btn-primary");
 	// 	if($(this).is(".Fbath, .Fbatha") ){
 	// 		$(this).toggleClass("Fbath Fbatha");
 	// 	};
 		// if($(this).css('background', 'url(../img/icon_5.png)')){
   //          $(this).css('background','url(../img/icon_5-Copy.png');
   //        }
  
 	// });

$(".Fbath").click(function(){
	$(this).toggleClass("Fbath Fbatha btn-primary");
});

$(".Fbatha").click(function(){
	$(this).toggleClass("Fbath Fbatha btn-primary");
});
$(".Mbath").click(function(){
	$(this).toggleClass("Mbath Mbatha btn-primary");
});

$(".Mbatha").click(function(){
	$(this).toggleClass("Mbath Mbatha btn-primary");
});
$(".water").click(function(){
	$(this).toggleClass("water watera btn-primary");
});

$(".watera").click(function(){
	$(this).toggleClass("water watera btn-primary");
});
$(".exit").click(function(){
	$(this).toggleClass("exit exita btn-primary");
});

$(".exita").click(function(){
	$(this).toggleClass("exit exita btn-primary");
});

	var gets = getUrlVars();
	if(gets['startingroom'] && gets['endingroom']){
		startingFloor = gets['startingroom'].substr(0,1);
		goalFloor = gets['endingroom'].substr(0,1);
	}
	else if(gets['startingroom']){
		startingFloor = gets['startingroom'].substr(0,1);
	}
	else if(gets['endingroom']){
		goalFloor = gets['endingroom'].substr(0,1);
	}

	if((startingFloor == goalFloor) && (goalFloor != 0)){
		// we should draw a map from room to room
		selectFloor(startingFloor);
		drawRoomToRoom();
	}
	else if((startingFloor != 0) && (goalFloor != 0)){
		// need to go to starting floor and draw map to the stairs
		selectFloor(startingFloor);
		drawRoomToStairs(goalFloor);
	}
	else if(startingFloor != 0){
		selectFloor(startingFloor);
		drawStartPoint();
	}
	else if(goalFloor != 0){
		selectFloor(goalFloor);
		drawEndPoint();
	}

	resizeMap();
	window.addEventListener('resize', resizeMap, false); // will resize map canvas when window size changes

	$("#dept").change(function(){
		var dept = $("#dept option:selected").attr('value');
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


