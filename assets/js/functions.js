// Seguir mouse
var hand = $('.hand');
var handCenter = [hand.offset().left+hand.width()/2, hand.offset().top+hand.height()/2];

$(document).mousemove(function(e){
  var angle = Math.atan2(e.pageX- handCenter[0],- (e.pageY- handCenter[1]) )*(180/Math.PI);	    
    
  hand.css({ '-webkit-transform': 'rotate(' + angle + 'deg)'});
  hand.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
  hand.css({ 'transform': 'rotate(' + angle + 'deg)'});
});

$(document).on('mousemove', function(e){
    $('.hand').css({
       left:  e.pageX,
       top:   e.pageY
    });
});


// Play
$('.anus span').hover(function() {
  audio = $('#audio-0' + Math.ceil(Math.random() * 6))[0].play();
  $('body').addClass('on');
}, function() {
  $('body').removeClass('on');
});


$(document).ready(function () {

  // Random duet
  total = 6;
  randomNumber = Math.round(Math.random() * (total - 1)) + 1;
  $('.hand span').addClass('icon-duetos-0' + randomNumber + '-01');
  $('.anus').addClass('icon-duetos-0' + randomNumber + '-02');

});


$(window).load(function() {

  // Song volume
  var song = $('#song')[0];
  song.volume = 0.25;
  song.play();
});