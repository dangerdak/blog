$(document).ready(function() {
  $('.info').each(function(element) {
    $(this).click(function() {
      $(this).parent().prev().prev().toggle("slow");
      $(this).toggleClass("info-color");
    });
  });
})
/*
$(document).ready(function() {
  $('#info-quiz').click(function() {
    $('#overlay-quiz').toggle("slow");
    $(this).toggleClass("info-color");
  })
})
*/
/*
$(document).ready(function() {
  $('.info').each(function(element) {
    $(this).click(function() {
      $(this).parent().prev().prev().toggle("size", {
        origin: ["bottom", "right"]
      });
      $(this).toggleClass("info-color");
    });
  });
})
*/
