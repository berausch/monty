// Business Logic
var allDone = 0
var songAble = function(lyric){
var end =  lyric.slice(((lyric.length)-4), (lyric.length));
if(end === "able"){
  allDone += 1
  return true
} else {
  return false
}
};

var songAlot = function(lyric){
var end1 =  lyric.slice(((lyric.length)-4), (lyric.length));
var end2 =  lyric.slice(((lyric.length)-5), (lyric.length));
if(end1 === "alot" || end1 === "elot" || end2 === "e lot" || end2 === "a lot"){
  allDone += 1
  return true
} else {
  return false
}
};


// UI Logic
$(document).ready(function() {

  setTimeout(function()
  { $(".intro2").slideDown(); }, 2000);

  setTimeout(function()
  { $(".intro3").slideDown(); }, 6000);

  setTimeout(function()
  { $(".intro4").slideDown(); }, 8000);

  setTimeout(function()
  { $(".help").slideDown(); }, 10000);

  $(".help").click(function(){
      $(".intro-text").hide();
      $(".parchment").show();
      $(".help").hide();
      $(".button-end").show();
  });
    $("#song-line1").keypress(function(event){
      if (event.which == 13) {
          $("#song-line1").submit(event);
          event.preventDefault();
      var lyric1 = $("#song-line1").val().toLowerCase();
       if (songAble(lyric1) === true){
         $(".music").append("<audio autoplay><source src='camelotTrumpet.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
         $("#song-line1").addClass("win")
         $("#song-line1").removeClass("try")
       } else if (songAble(lyric1) === false){
         $("#song-line1").addClass("try")
       }
       }
    });
    $("#song-line2").keypress(function(event){
      if (event.which == 13) {
          $("#song-line2").submit(event);
          event.preventDefault();
      var lyric1 = $("#song-line2").val().toLowerCase();
       if (songAlot(lyric1) === true){
         $(".music").append("<audio autoplay><source src='camelotTrumpet.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
         $("#song-line2").addClass("win")
         $("#song-line2").removeClass("try")
       } else if (songAble(lyric1) === false){
         $("#song-line2").addClass("try")
       }
       }
    });
    $("#song-line3").keypress(function(event){
      if (event.which == 13) {
          $("#song-line3").submit(event);
          event.preventDefault();
      var lyric1 = $("#song-line3").val().toLowerCase();
       if (songAble(lyric1) === true){
         $(".music").append("<audio autoplay><source src='camelotTrumpet.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
         $("#song-line3").addClass("win")
         $("#song-line3").removeClass("try")
       } else if (songAble(lyric1) === false){
         $("#song-line3").addClass("try")
       }
       }
    });
    $("#song-line4").keypress(function(event){
      if (event.which == 13) {
          $("#song-line4").submit(event);
          event.preventDefault();
      var lyric1 = $("#song-line4").val().toLowerCase();
       if (songAlot(lyric1) === true){
         $(".music").append("<audio autoplay><source src='camelotTrumpet.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
         $("#song-line4").addClass("win")
         $("#song-line4").removeClass("try")
       } else if (songAble(lyric1) === false){
         $("#song-line4").addClass("try")
       }
       }
    });
    $("#song-line5").keypress(function(event){
      if (event.which == 13) {
          $("#song-line5").submit(event);
          event.preventDefault();
      var lyric1 = $("#song-line5").val().toLowerCase();
       if (songAble(lyric1) === true){
         $(".music").append("<audio autoplay><source src='camelotTrumpet.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
         $("#song-line5").addClass("win")
         $("#song-line5").removeClass("try")
       } else if (songAble(lyric1) === false){
         $("#song-line5").addClass("try")
       }
       }
    });
    $("#song-line6").keypress(function(event){
      if (event.which == 13) {
          $("#song-line6").submit(event);
          event.preventDefault();
      var lyric1 = $("#song-line6").val().toLowerCase();
       if (songAble(lyric1) === true){
         $(".music").append("<audio autoplay><source src='camelotTrumpet.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
         $("#song-line6").addClass("win")
         $("#song-line6").removeClass("try")
       } else if (songAble(lyric1) === false){
         $("#song-line6").addClass("try")
       }
       }
    });
    $("#song-line7").keypress(function(event){
      if (event.which == 13) {
          $("#song-line7").submit(event);
          event.preventDefault();
      var lyric1 = $("#song-line7").val().toLowerCase();
       if (songAlot(lyric1) === true){
         $(".music").append("<audio autoplay><source src='camelotTrumpet.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>");
         $("#song-line7").addClass("win")
         $("#song-line7").removeClass("try")
       } else if (songAble(lyric1) === false){
         $("#song-line7").addClass("try")
       }
       }
    });

  });
