//Bidness

//Setting up opponent...
var blackKnight = {
	leftArm: true, rightArm: true, leftLeg: true, rightLeg: true,
};

//Setting up player...
var player = {
	swing: function() {
		console.log("saaaawing battahhhh");
	},
	parry: function() {
		console.log("parry. thrrrust. parry.");
	},

	insult: function() {
		//something
	}
};


//UI Logic
$.fn.visible = function() {
    return this.css('visibility', 'visible');
};

$.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};

$.fn.blink = function(options) {
	var defaults = {delay:500};
	var options = $.extend(defaults, options);
	return this.each(function() {
		var obj = $(this);
		setInterval(function() {
			if ($(obj).css("visibility") == "visible") {
				$(obj).invisible();
			} else {
				$(obj).visible();
			}
		}, options.delay);
	});
}

$(document).ready(function() {
	$("#attack").click(function() {

	});
	$("#parry").click(function() {

	});
	$("#insult").click(function() {

	});


});