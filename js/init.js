(function($){
  $(function(){
    $('.button-collapse').sideNav();
    if ($(window).scrollTop() < $('#banner').position().top + $('#banner').height() - $('#navbar').height()) {
        $('#logo-icon').hide();
    }
  });
})(jQuery);

$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(window).scroll(function() {
    if ($(window).scrollTop() < $('#banner').position().top + $('#banner').height() - $('#navbar').height()) {
        $('#logo-icon').fadeOut();
    } else {
        $('#logo-icon').fadeIn();
    }
});