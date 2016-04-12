// Business Logic
var getOnWith = function(phrase){
  if(phrase === "get on with it"){
    return true
  } else {
    return false
  }
}
var rant = 1

// UI Logic


$(document).ready(function() {

  setTimeout(function()
  { $(".rant").slideDown(); }, 2000);

  setTimeout(function()
  { $(".get-on-moose").slideDown(); }, 4000);

  $("#get-on-moose").keypress(function(event) {
    if (event.which == 13) {
        $(".get-on-moose").submit(event);
        event.preventDefault();

    var getOn = $("#get-on-moose").val();
    console.log(getOn);
    getOn = getOnWith(getOn);
    if(getOn === true){
      $(".rant-hide").hide();
      $(".apology").show();
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
