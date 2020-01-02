$(document).ready(function() {

function loadStyleSheet(src) {
	if(document.createStylesheet) {
		document.createStylesheet(src);
	}
	else {
		var stylesheet = document.createElement('link');
		stylesheet.href	= src;
		stylesheet.type = 'text/css';
		stylesheet.rel = 'stylesheet';
		document.getElementsByTagName('head')[0].appendChild(stylesheet);
	}
}

// Below the fold loading.
window.onload = function() {
	console.log('window done!');
	loadStyleSheet('/css/style2.css');
};



/*================================
=            Benefits            =
================================*/
	var card_image,
		card_name;

	// Removes the ".no-transition" class when the page loads.
	$('.no-transition').each(function(index, el) {

		setTimeout(function() {
			$(el).removeClass('no-transition').removeClass('hide');
		}, 1000);

	});

	// Clicking anywhere on the screen will deactivate the cards.
	$(document).on('click', function() {
		$('.oe_card, .more_modal, .dimmer').removeClass('active');
		
		// Dectivating the tooltip
		$('.cust_tooltip').addClass('inactive');
	});

	// Clicking the card logo will activate the card.
	$('.oe_card').find('.ben_logo').on('click', function(){
		event.stopPropagation();
		
		card_image = $(this).parent('.oe_card').find('.ben_logo').css('background-image');
		card_name = $(this).parent('.oe_card').attr('name');

		// Activates the clicked card and deactivates the rest.
		$('.oe_card').removeClass('active');
		$(this).parent('.oe_card').toggleClass('active');

		// Adding the title to the modal.
		$('.more_modal').find('.more_header').html(card_name);

		// Adding the logo to the modal.
		$('.more_modal').find('.more_logo').css('background-image', card_image);

		// Activating the dimmer and opening the modal.
		$('.more_modal, .dimmer').addClass('active');

		// Activating the tooltip after a delay.
		setTimeout(function() {
			$('.cust_tooltip').removeClass('inactive');

			// Deactivating the tooltip after a delay.
			setTimeout(function() {
				$('.cust_tooltip').addClass('inactive');
			}, 5000);
		}, 3000);

	});

	// Click the "More" link will activate the card.
	$('.seemore').on('click', function() {
		event.stopPropagation();

		card_image = $(this).parent('.oe_card').find('.ben_logo').css('background-image');
		card_name = $(this).parent('.oe_card').attr('name');

		// Activates the clicked card and deactivates the rest.
		$('.oe_card').removeClass('active');
		$(this).parent('.oe_card').toggleClass('active');

		// Adding the title to the modal.
		$('.more_modal').find('.more_header').html(card_name);

		// Adding the logo to the modal.
		$('.more_modal').find('.more_logo').css('background-image', card_image);

		// Activating the dimmer and opening the modal.
		$('.more_modal, .dimmer').addClass('active');

		// Activating the tooltip after a delay.
		setTimeout(function() {
			$('.cust_tooltip').removeClass('inactive');

			// Deactivating the tooltip after a delay.
			setTimeout(function() {
				$('.cust_tooltip').addClass('inactive');
			}, 5000);
		}, 3000);
		
	});

	// Keep 'more_modal' from closing when clicking within.
	$('.more_modal').on('click', function() {
		event.stopPropagation();
	});

	
});