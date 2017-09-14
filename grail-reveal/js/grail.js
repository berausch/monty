var whichShrub = function(){
    var x = Math.floor((Math.random() * 3) + 1);
    console.log(x);
    return x

}


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

     var shrubNumber = whichShrub()
     if(shrubNumber===1){
       $(".shrub1").click(function(){
         $(".grail").show();
         $(".grail-button").show();
       });
       $(".shrub2").click(function(){
         $(".redX").show(),

       setTimeout(function()
       {$(".redX").hide();
        }, 2000);
       });
       $(".shrub3").click(function(){
         $(".redX").show(),

       setTimeout(function()
       {$(".redX").hide();
        }, 2000);
       });
     }
     if(shrubNumber===2){
       $(".shrub2").click(function(){
         $(".grail").show();
         $(".grail-button").show();
       });
       $(".shrub1").click(function(){
         $(".redX").show(),

       setTimeout(function()
       {$(".redX").hide();
        }, 2000);
       });
       $(".shrub3").click(function(){
         $(".redX").show(),

       setTimeout(function()
       {$(".redX").hide();
        }, 2000);
       });
     }
     if(shrubNumber===3){
       $(".shrub3").click(function(){
         $(".grail").show();
         $(".grail-button").show();
       });
       $(".shrub2").click(function(){
         $(".redX").show(),

       setTimeout(function()
       {$(".redX").hide();
        }, 2000);
       });
       $(".shrub1").click(function(){
         $(".redX").show(),

       setTimeout(function()
       {$(".redX").hide();
        }, 2000);
       });
     }

  });
});
