$(function () {


$("#directory ul").hide();

$(".bars").click(function() {
  $('.files').slideUp(500);
  $(this).find('ul').show()
});



});
