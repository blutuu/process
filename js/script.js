$(document).ready(function() {

	// Adding 'active' class to the clicked card.
	$('.oe_card').find('.ben_logo').on('click', function(){
		$('.oe_card').removeClass('active');
		$(this).parent('.oe_card').toggleClass('active');
	});


});