$(document).ready(function() {

	// Removes the ".no-transition" class when the page loads.
	$('.no-transition').each(function(index, el) {

		setTimeout(function() {
			$(el).removeClass('no-transition');
		}, 10);

	});

	// Clicking anywhere on the screen will deactivate the cards.
	$(document).on('click', function() {
		$('.oe_card, .more_modal, .dimmer').removeClass('active');
	});

	// Clicking the card logo will activate the card.
	$('.oe_card').find('.ben_logo').on('click', function(){
		event.stopPropagation();

		$('.oe_card').removeClass('active');
		$(this).parent('.oe_card').toggleClass('active');
		$('.more_modal, .dimmer').addClass('active');

	});

	// Click the "More" link will activate the card.
	$('.seemore').on('click', function() {
		event.stopPropagation();

		$('.oe_card').removeClass('active');
		$(this).parent('.oe_card').toggleClass('active');
		$('.more_modal, .dimmer').addClass('active');
		
	});

	// Keep 'more_modal' from closing when clicking within.
	$('.more_modal').on('click', function() {
		event.stopPropagation();
	});

	
});