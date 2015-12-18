// https://github.com/pimolo/scrollspy.js
$(function() {
    $(window).bind('scroll resize', function() {
        var currentSection = null;
        $('.section').each(function() {
          var element = $(this).attr('id');
          if ($(window).scrollTop() >= $('#' + element).offset().top - $('nav').height()) { currentSection = element; }
          $('nav ul li a').removeClass('active').parent().siblings().find('a[href=#' + currentSection + ']').addClass('active');
        });
    });
});
