$(document).ready(function() {
  $('.info').each(function() {
    $(this).click(function() {
      $(this).parent().prev().prev().stop().toggle('slow');
      $(this).toggleClass('info-color');
    });
  });
})
