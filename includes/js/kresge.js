 $(document).ready(function() {
 	$('.sub').click(function(){
 		var output = $(this).html();
		$("#chosenClass").html(output);
 	});

 	var classes=new Array("English", "German", "Spanish", "Swahili");

 });