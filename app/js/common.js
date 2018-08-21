$(function() {
	$(window).on('load', function() {
		$('#preloader').find('div').delay(1000).fadeOut().end().delay(1000).fadeOut('slow');
		console.log(1);
		setTimeout(function() {
			console.log(2);
			$('#preloader').css('display', 'none');
		}, 1000);
	});

	$(".open-link").click(function(e) {
		e.preventDefault();
		$(".mobile-menu").toggleClass("opened");
	});
	$(".main").click(function(e) {
		$(".mobile-menu").removeClass("opened");
	});

	$(document).ready(function() {
		$(".owl-pictures").owlCarousel({
			items:1,
			loop: true,
			dots: true,
			autoplay: true
		});
	});

	$("#form").submit(function() {
        var th = $(this);
        $.ajax({type: "POST", url: "../mail.php", data: th.serialize()}).done(function() {
            alert("Спасибо!");
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
