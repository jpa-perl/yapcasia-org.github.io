
$(document).ready(function() {

	// Smooth scroll
	$('a[href^=#top]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#top" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

	// Toggle MENU
	$('.btn-menu a').on('click', function(e) {
		e.preventDefault();
		$('ul.dropdown').toggleClass('active');
		$('ul.dropdown').slideToggle(300);
	});

	// PAGE TOP
	var topBtn = $('#page-top');
	$('#pagetop').hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#pagetop').fadeIn();
		} else {
			$('#pagetop').fadeOut();
		}
	});

	// Carousel
	$('#carousel').carousel({
		interval: 4000
	})

    // Got to Mobile View
    var agent = navigator.userAgent;
    if(agent.search(/iPhone|iPad|Android/) != -1){
      $('#goto-mobile').show();
    }

});

$(window).scroll(function() {

	// Scroll Flow
	if ($(this).scrollTop() > 200) {
		$('#header-navi').css({ 'position': 'fixed', 'top': '0px', 'opacity': '1' });
	} else {
		$('#header-navi').css({ 'position': 'relative', 'top': '0px', 'opacity': '1' });
	}

});

$(window).resize(function() {

	var w = window.innerWidth ? window.innerWidth: $(window).width();
	if (w > 1000) {
		$('ul.dropdown').fadeIn();
	} else {
		$('ul.dropdown').fadeOut();
	}

});
