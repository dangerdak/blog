$(document).ready(function() {
  $('.info').each(function(element) {
    $(this).click(function() {
      $(this).parent().prev().prev().toggle('slow');
      $(this).toggleClass('info-color');
    });
  });

    var sections = $('section');
    var sectionIds = sections.map(function() {
      return this.id;
    });
  var menuItems = $('.nav-main a');
  var menuHeight = $('.nav-main').outerHeight();
  $(document).scroll(function() {
    var cutoff = $(window).scrollTop() + menuHeight - 5;
    var currentSection = sections.filter(function() {
      return $(this).offset().top < cutoff + $(window).height() / 4;
    }).last();
    var menuItem = $('a[href="#' + currentSection.attr('id') + '"]');
    menuItems.removeClass('current');
    menuItem.addClass('current');
  });

  $('.nav-main a').click(function(el) {
    var id = $(this).attr('href').slice(1);
    var offset = $('#' + id).offset().top;
    $('html, body').animate({
      scrollTop: offset
    }, 200);
    return false;
  });

})
