
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


// Random audios - nunca repetir
var uniqueRandoms = [];
var numRandoms = 6;
function moanUniqueRandom() {
  // refill the array if needed
  if (!uniqueRandoms.length) {
    for (var i = 0; i < numRandoms; i++) {
      uniqueRandoms.push(i);
    }
  }
  var index = Math.floor(Math.random() * uniqueRandoms.length);
  var val = uniqueRandoms[index];

  // now remove that value from the array
  uniqueRandoms.splice(index, 1);
  return val;
}


// Play audios on hover
// 23 moans - 1 fart
var moan = 0;
$('.anus span').on('mouseover', function() {

  var fartTotal = Math.floor(Math.random() * 2) + 1;
  if (moan > 23) {
    
    audioFart = $('#fart-0' + (fartTotal))[0].play();
    moan = null;

  } else {
    audio = $('#audio-0' + (moanUniqueRandom() + 1) )[0].play();
  }
  moan++
});


// Hover download
$('section').hover(function() {
  $('body').addClass('on');
}, function() {
  $('body').removeClass('on');
});


$(document).ready(function () {

  // Random duet
  duetTotal = 6;
  randomNumber = Math.round(Math.random() * (duetTotal - 1)) + 1;
  $('.hand span').addClass('icon-duetos-0' + randomNumber + '-01');
  $('.anus span').addClass('icon-duetos-0' + randomNumber + '-02');


  // Fart interval
  setInterval(fart, 180000);
  totalFart = 2;
  function fart(){
    $('#fart-0' + (Math.round(Math.random() * (totalFart - 1)) + 1) )[0].play();
  }
});


$(window).load(function() {

  // Song volume
  var song = $('#song')[0];
  song.volume = 0.2;
  song.play();
});