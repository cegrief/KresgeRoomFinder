// Global Variables
var classes = new Array(
		['230-60-DIS (Staff)', '230-61-DIS (Staff)', '230-62-DIS (Staff)', '230-63-DIS (Staff)', '355-20-SEM (Smith)', '375-20-LEC (Hesse)', '381-20-LEC (Johnson)', '381-21-LEC (Burchell)', '394-20-LEC (King)'],
		['310-22-SEM (Gealy)'],
		['378-20-LEC (Hoffman)'],
		['111-3-20-LEC (Whitcomb)', '111-3-21-LEC (Whitcomb)', '111-3-21 (Horesh)', '114-2-LEC (Mikhaeel)', '121-3-20-LEC (Khan)', '121-3-22-LEC (Khan)', '211-3-20-LEC (Khan)', '311-3-20-LEC (Mihkaeel)'],
		['120-21-LEC (Falkowski)', '120-22-LEC (Falkowski)', '120-23-LEC (Falkowski)', '120-24-LEC (Falkowski)', '125-20-LEC (Sokolow)', '125-21-LEC (Sokolow)', '125-22-LEC (Sokolow)', '140-21-LEC (Kaczynski)', '140-22-LEC (Knezevic)', '150-20-LEC (Bannos)', '150-21-LEC (Bannos)', '230-20-LEC (Ovalle)', '252-64-LEC (Bannos)', '260-20-LEC (Reinke)', '272-20-LEC (Reinke)','322-2-20-LEC (Legerwood)', '380-20-LEC (Legerwood)', '390-20-LEC (Bannos)', '390-21-LEC (Knezevic)'],
		['385-20-LEC (Thompson)', '390-20-SEM (Bell)'],
		['230-60-DIS (Staff)', '230-61-DIS (Staff)', '230-62-DIS (Staff)', '230-63-DIS (Staff)', '392-22-LEC (Enteen)'],
		['239-20-LEC (Pennington)', '394-26-LEC (Staff)'],
		['CFS 392-21-SEM (Taylor)', '395-1-21-SEM (Butler)', '395-2-21-SEM (Butler)', '398-21-SEM (Staff)'],
		['111-3-21-LEC (Ji)', '111-3-22-LEC (Jiang)', '115-3-20-LEC (Luo)', '115-3-21-LEC (Luo)', '121-3-20-LEC (Sun)', '121-3-21-LEC (Wang)', '121-3-22-LEC (Sun)', '121-3-23-LEC (Sun)', '125-3-21-LEC (Robertson)', '211-3-20-LEC (Chang)', '211-3-21-LEC (Chang)', '311-3-20-LEC (Hsieh)', '311-3-21-LEC (Chang)', '315-3-20-LEC (Gu)'],
		['212-60-DIS (Staff)', '212-61-DIS (Staff)', '212-62-DIS (Staff)', '212-63-DIS (Staff)', '212-64-DIS (Staff)', '260-60-DIS (Staff)', '260-61-DIS (Staff)', '260-62-DIS (Staff)', '260-63-60 (Staff)', '260-64-DIS (Staff)', '320-20-LEC (Wallace)', '350-20-LEC (Hopman)'],
		['396-20-SEM (Mastronardi)', '396-21-SEM (Kelso)'],
		['215-20-LEC (Ray)', '322-20-LEC (Cobb)'],
		['211-21-LEC (Brueck)', '211-60-DIS (Cavanagh)', '274-3-20-LEC (Shen)', '301-20-LEC (Hopman)', '304-21-LEC (Zaperini)', '304-22-LEC (Marti-Lopez)', '383-20-LEC (Deutscher)', '383-60-DIS (Staff)', '383-62-DIS (Staff)'],
		['335-21-LEC'],
		['201-52-DIS (Witte)', '201-55-DIS (Witte)', '202-51-DIS (Kiesling)', '202-54-DIS (Kiesling)', '202-62-DIS (Ogawa)', '281-21-DIS (Walker)', '281-24-DIS (Walker)', '281-25-DIS (Walker)', '281-26-DIS (Walker)', '310-1-21-DIS (Schulz)', '310-1-24-DIS (Schulz)', '310-1-25-DIS (Schulz)', '310-2-21-DIS (Ely)', '325-20-LEC (Matsuyama)', '398-2-20-LEC (Hornsten)'],
		['EECS 203-01-LEC (Zhou)'],
		['101-6-22-LEC (Krienke)', '105-6-21-LEC (Hirsch)', '105-6-22-LEC (Herrick)', '205-22-LEC (Gealy)', '270-2-63-DIS (Staff)', '270-2-64-DIS (Staff)', '385-21-LEC (Froula)', '395-5-20-LEC (Biss)'],
		['390-23-LEC (Woodhouse)']);
var depts = new Array('AM_AM_ST', 'AMER_ST', 'ANTHRO', 'ARABIC', 'ART', 'ART_HIST', 'ASIAN_AM', 'BUS_INST', 'CFS', 'CHINESE', 'CLASSICS', 'CMN', 'COMM_ST', 'COMP_LIT', 'DANCE', 'ECON', 'EECS', 'ENGLISH', 'ENVR_POL');
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
	canvas.width(320);
	canvas.height(420);
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
	ctx.font="36px Arial";
	ctx.fillText('Find the stairs then go to Floor ' + endFloor, 2,40);
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
 		$('#' + activeSearch + '-help').text('Room for: ' + d + ' ' + c);
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

$(".Fbath").click(function(e){
	$(this).toggleClass("Fbath Fbatha ");
	e.stopPropagation();
	e.preventDefault();
});

$(".Fbatha").click(function(e){
	e.stopPropagation();
	$(this).toggleClass("Fbath Fbatha ");
	e.preventDefault();
});
$(".Mbath").click(function(e){
	e.preventDefault();
	$(this).toggleClass("Mbath Mbatha ");
});

$(".Mbatha").click(function(e){
	e.preventDefault();
	$(this).toggleClass("Mbath Mbatha ");
});
$(".water").click(function(){
	$(this).toggleClass("water watera ");
});

$(".watera").click(function(){
	$(this).toggleClass("water watera ");
});
$(".exit").click(function(){
	$(this).toggleClass("exit exita ");
});

$(".exita").click(function(){
	$(this).toggleClass("exit exita ");
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

	var deptSelect = $('#dept');
	deptSelect.empty();
	for (var x in depts){
		deptSelect[0].add(new Option(depts[x], depts[x]));
	}
	var select = $("#classnum");
	select.empty();
	var bus = classes[0];
	for (var x in bus){
		select[0].add(new Option(bus[x], bus[x]));
	}

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


