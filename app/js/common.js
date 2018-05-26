$(function() {
	$(window).on('load', function() {
		$('#preloader').find('div').delay(1000).fadeOut().end().delay(1000).fadeOut('slow');
	});

	$(".open-link").click(function(e) {
		e.preventDefault();
		$(".mobile-menu").toggleClass("opened");
	});

});
