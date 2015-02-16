//player constructor
function Player(spec) {
  var spec = spec || {};
  this.name = spec.name || 'player';
  this.points = 50;
  this.attack = function(move) {
    var kick = this.points + 10;
    var punch = this.points + 10;
    var getHit = this.points - 10;
    move.kick(kick);
    move.punch(punch);
    move.getHit(getHit);
  }

}
//fight constructor
function Move(kick, punch, getHit){
  this.kick = kick;
  this.punch = punch;
  this.getHit = getHit;
}


//


//
//
// Mousetrap.bind('space', function() {
//   console.log('subzero punches');
//     $('.subZeroStance').remove();
//     $('.subZero').addClass('subZeroPunch');
// });



//if play kicks or punches, the opponent gets hit

//math - if you kick or punch your opponent, gain 10 pts. If you get hit, lose 10 points
//at 10 points dizzy action kicks


var game = {
  init: function () {
    game.initStyle();
    game.initEvents();
  },

  initStyle: function () {

  },

  initEvents: function() {
    var subZero = new Player({
      name: subZero,

    });

    Mousetrap.bind('a', function(){
      console.log('SubZero kick');
      $('.subZero').toggleClass('subZeroKick');
      $('.scorpion').toggleClass('scorpGetHit');
      if($('.subZero').hasClass('subZeroKick')) {
        $('.subZeroStance').removeClass('active');
        $('.scorpStance').removeClass('active');
        $('.scorpion').addClass('scorpGetHit');
      } else {
        $('.subZeroStance').addClass('active');
        $('.scorpStance').addClass('active');
        }
    });

    Mousetrap.bind('s', function(){
      console.log('SubZero punch');
      $('.subZero').toggleClass('subZeroPunch');
      $('.scorpion').toggleClass('scorpGetHit');
      if($('.subZero').hasClass('subZeroPunch')) {
        $('.subZeroStance').removeClass('active');
        $('.scorpStance').removeClass('active');
        $('.scorpion').addClass('scorpGetHit');
      } else {
        $('.subZeroStance').addClass('active');
        $('.scorpStance').addClass('active');
        }
    });
  }
}

$(document).ready(function(){
  game.init();
});
