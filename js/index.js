$(document).ready(function(){
	
	//calling slideshow function
	slideshow();
});

function slideshow(){
	
	var current = $('#photosIndex .show');
	
		
	 if (current.next().length==1){
	 	var next=current.next();
	 }

	 else {
	 	var next=current.siblings().first();
	 }
	
	 current.hide().removeClass('show');

	 next.fadeIn().addClass('show');
	
	 setTimeout(slideshow, 4000); 

}