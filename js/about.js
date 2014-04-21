$(document).ready(function(){
	
	//calling slideshow function
	slideshow();


	 $("#picture1").mouseover(function() {
 		 	 
	 	 $("#picture1descTop.photoOverlayTop").stop().slideDown("5000");
	 	 $("#picture1descBottom.photoOverlayBottom").stop().slideDown("5000");
	
	 });

	 $("#picture1").mouseout(function() {
		 
		 $("#picture1descTop.photoOverlayTop").slideUp("5000");
		 $("#picture1descBottom.photoOverlayBottom").slideUp("5000");

	 });

	 $("#picture2").mouseover(function() {
 		 	 
	 	 $("#picture2descTop.photoOverlayTop").stop().slideDown("5000");
	 	 $("#picture2descBottom.photoOverlayBottom").stop().slideDown("5000");
	
	 });

	 $("#picture2").mouseout(function() {
		 
		 $("#picture2descTop.photoOverlayTop").slideUp("5000");
		 $("#picture2descBottom.photoOverlayBottom").slideUp("5000");

	 });

	 $("#picture3").mouseover(function() {
 		 	 
	 	 $("#picture3descTop.photoOverlayTop").stop().slideDown("5000");
	 	 $("#picture3descBottom.photoOverlayBottom").stop().slideDown("5000");
	
	 });

	 $("#picture3").mouseout(function() {
		 
		 $("#picture3descTop.photoOverlayTop").slideUp("5000");
		 $("#picture3descBottom.photoOverlayBottom").slideUp("5000");

	 });

	 $("#picture4").mouseover(function() {
 		 	 
	 	 $("#picture4descTop.photoOverlayTop").stop().slideDown("5000");
	 	 $("#picture4descBottom.photoOverlayBottom").stop().slideDown("5000");
	
	 });

	 $("#picture4").mouseout(function() {
		 
		 $("#picture4descTop.photoOverlayTop").slideUp("5000");
		 $("#picture4descBottom.photoOverlayBottom").slideUp("5000");

	 });  
	

});

function slideshow(){
	
	//back button functionality
	$('#back').click(function() {

		var current = $('img.show');

		if (current.prev('img').length==1){

			var prev = current.prev('img');
		}

		else {

			var prev = current.siblings('img').last();
		}

		current.hide().removeClass('show');

		prev.fadeIn().addClass('show');

	});  //end #back



	//next button functionality
	$('#next').click(function() {

		var current = $('img.show');

		if (current.next('img').length==1){

			var next = current.next('img');
		}

		else {

			var next = current.siblings('img').first();
		}

		current.hide().removeClass('show');

		next.fadeIn().addClass('show');

	});  //end #next

} //end slideshow

