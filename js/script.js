$(document).ready(function() {

	// Clicking anywhere on the screen will deactivate the cards.
	$(document).on('click', function() {
		$('.oe_card').removeClass('active');
	});

	// Clicking the card logo will activate the card.
	$('.oe_card').find('.ben_logo').on('click', function(){
		event.stopPropagation();

		$('.oe_card').removeClass('active');
		$(this).parent('.oe_card').toggleClass('active');

	});

	// Click the "More" link will activate the card.
	$('.seemore').on('click', function() {
		event.stopPropagation();

		$('.oe_card').removeClass('active');
		$(this).parent('.oe_card').toggleClass('active');
		
	});
});