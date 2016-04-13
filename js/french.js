// Business Logic
// How the hell am I going to go about this?
// You happen upon a castle. You decide it would behoove you to make an ally and strengthen your numbers.

// UI Logic
$(document).ready(function() {
	$("#convo1 .line1").show();

	$("#convo1 button.line1").click(function() {
		$("#convo1 .line1").hide();
		$("#convo1 .line2").slideDown();
	});

	$("#convo1 button.line2").click(function() {
		$("#convo1 .line2").hide();
		$("#convo1 .line3").slideDown();
	});

	$("#convo1 button.line3").click(function() {
		$("#convo1 .line3").hide();
		$("#convo1 p.line4, button.line4").slideDown();
	});

	$("#convo1 button.line4.optional").click(function() {
		$("#convo1 h4.optional").slideDown();
	});

	$("#convo1 button.line4.continue").click(function() {
		$("#convo1 .line4").hide();
		$("#convo1 .line5").slideDown();
	});

});