$(document).ready(function(){
	
	//calling slideshow function
	slideshow();
});

function slideshow(){
	
	var current = $('#photosIndex .show');
	
	//if the next image exists, take it, otherwise, begin with the first image again
	var next    = current.next().length ? current.next() : current.siblings().first();
	
	current.hide().removeClass('show');
	next.fadeIn().addClass('show');
	
	setTimeout(slideshow, 6000);
}