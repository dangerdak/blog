$(document).ready(function() {
  $('.info').each(function(element) {
    $(this).click(function() {
      $(this).parent().prev().prev().toggle("slow");
      $(this).toggleClass("info-color");
    });
  });
})
