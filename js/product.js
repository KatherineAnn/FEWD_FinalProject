$(document).ready(function(){
	
		$("#box1,#box2,#box3,#box4,#box5,#box6,#box7,#box8,#box9,#box10,#box11,#box12,#box13,#box14,#box15").mouseenter(function() {
				
			var overlayWidth  = $(this).width() - 9;
			var overlayHeight = $(this).height() - 9;

		 	$(this).find('div.productOverlay').css({"width": overlayWidth, "height" : overlayHeight});
		 	$(this).find('div.productOverlay').fadeTo(300, .7);	

		});

		$("#box1,#box2,#box3,#box4,#box5,#box6,#box7,#box8,#box9,#box10,#box11,#box12,#box13,#box14,#box15").mouseleave(function() {
			 
			$(this).find('div.productOverlay').fadeTo(300, 0);

		});

	
	//get width so we know if we need to change magnify to make it smaller for scale purposes
	var imgWidth = $("#prodImage img").width();

	if (imgWidth == 300) {
		$("#prodImage").zoom({magnify:.75});
	}

	else if (imgWidth == 200) {
		$("#prodImage").zoom({magnify:.4});
	}

	else {
		$("#prodImage").zoom();
	}

		
}); //end of document ready function




