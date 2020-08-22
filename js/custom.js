(function ($) {

  "use strict";

  window.onload = async () => {
    if (window.localStorage.darkMode === "true") {
      $('.color-mode-icon').toggleClass('active')
      $('body').toggleClass('dark-mode')
    }
  }

    // COLOR MODE
    $('.color-mode').click(function(){
      if (window.localStorage.darkMode === "true") window.localStorage.darkMode = "false";
      else window.localStorage.darkMode = "true";
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
