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
		var card_image = $(this).parent('.oe_card').find('.ben_logo').css('background-image');
		var card_name = $(this).parent('.oe_card').attr('name');
		card_image = card_image.replace('url(', '').replace(')','').replace(/"/g, "");

		$('.oe_card').removeClass('active');
		$(this).parent('.oe_card').toggleClass('active');

		// Adding the title to the modal
		$('.more_modal').find('.more_header').html(card_name);

		// Adding the logo to the modal
		$('.more_modal').find('.more_logo').attr('src', card_image);


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