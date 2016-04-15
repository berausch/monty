var gait = []

//User Logic//

var coconut1 = "<audio autoplay><source src='audio/1-coconut.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>"
var coconut2 = "<audio autoplay><source src='audio/2-coconut.m4a' type='audio/mp4'>Your browser does not support the audio element.</audio>"
var coconut3 = "<audio autoplay><source src='audio/3coconut.m4a' type='audio/mp4'>Your browser does not support the audio element.</audio>"
var coconut1d = "<audio class='coc1'><source src='audio/1-coconut.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>"
var time = 0;
var recorded = function(gaity){
<<<<<<< HEAD
=======
  var time = 0;
>>>>>>> origin/brittany
  for(var ii = 0; ii<3; ii++){
for (var i = 0; i < gait.length; i++){
  if(gaity[i] === 1){
    setTimeout(function()
    { $(".recorded").append(coconut1); }, time);
    console.log(time);
    time += 100;
    console.log(time);
  }
  if(gaity[i] === 2){
    setTimeout(function()
    { $(".recorded").append(coconut2); }, time);
    console.log(time);
    time += 250;
    console.log(time);
  }
  if(gaity[i] === 3){
    setTimeout(function()
    { $(".recorded").append(coconut3); }, time);
    console.log(time);
    time += 400;
    console.log(time);
    }
  }
}
};

$(document).ready(function(){

  $("#button-loop-1").click(function(){
    $(".practice").append(coconut1);
    gait.push(1);

  });
  $("#button-loop-2").click(function(){
    $(".practice").append(coconut2);
    gait.push(2);
  });
  $("#button-loop-3").click(function(){
    $(".practice").append(coconut3);
    gait.push(3);
  });
  $("#play").click(function(){
    console.log(gait);
    recorded(gait);
  });
  $("#rerecord").click(function(){
    gait = [];


  });
});
