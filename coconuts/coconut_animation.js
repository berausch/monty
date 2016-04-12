$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'coconut-pop.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    //audioElement.load()

    $.get();

    audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);

    $('.play').click(function() {
        audioElement.play();
    });

    $('.pause').click(function() {
        audioElement.pause();
    });

    setTimeout(function()
    { $(".bang").slideDown(); }, 2000);
});
// Business Logic
var getOnWith = function(phrase){
  if(phrase === "get on with it"){
    return true
  } else {
    return false
  }
}
var bang = 1

// UI Logic


$(document).ready(function() {

  setTimeout(function()
  { $(".bang").slideDown(); }, 2000);

  setTimeout(function()
  { $(".get-on-moose").slideDown(); }, 4000);


      setTimeout(function()
      { $(".camelot-go").show(); }, 2000);
    } else if(getOn === false){
      rant += 1
      if(rant < 5){
      $(".rant"+rant).show();

    }};
    }
});
});