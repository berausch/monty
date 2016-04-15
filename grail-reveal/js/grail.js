// Business Logic


// UI Logic
$(document).ready(function() {

  $(".play").click(function(){
      $(".grail").show(),

    setTimeout(function()
    { $(".shrub2").show(),
      $(".grail").hide();
     }, 2000);
     setTimeout(function()
     { $(".shrub1").addClass("shrubbery1"),
      $(".shrub2").addClass("shrubbery2"),
      $(".shrub3").addClass("shrubbery3")
     }, 2500);


  });
});
