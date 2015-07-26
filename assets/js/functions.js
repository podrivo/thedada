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
var audio = $('audio')[0];
$('.anus').hover(function() {
  audio.play();
  $('body').addClass('on');
}, function() {
  audio.load();
  $('body').removeClass('on');
});