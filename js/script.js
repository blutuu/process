$(document).ready(function() {

	// Adding 'active' class to the clicked card.
	$(".oe_card").find('.ben_logo').on('click', function(){
		$(this).toggleClass('active');
	});


});