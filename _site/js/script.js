$(document).ready(function() {
  $('#landing').particleground({
    dotColor: '#33393d',
    lineColor: '#33393d'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});