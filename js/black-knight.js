//Bidness

//Setting up opponent...
var blackKnight = {
	clicks: [], attparins: 1, insattpar: 1, parinsatt: 1, parattins: 1,

	insult: function() {
		console.log("You fight like a dairy farmer");
	},
	dismember: function() {
		if (this.clicks.length === 3) {
			console.log("dismembering knight...");
			// check button presses against list of acceptible answers.
			var clickString = this.clicks.join("");
			if (clickString === "attparins" && this.hasOwnProperty("attparins")) {
				console.log("proceed one stage");
				delete this.attparins;
			} else if ( clickString === "insattpar" && this.hasOwnProperty("insattpar")) {
				console.log("proceed one stage");
				delete this.insattpar;
			} else if ( clickString === "parinsatt" && this.hasOwnProperty("parinsatt")) {
				console.log("proceed one stage");
				delete this.parinsatt;
			} else if ( clickString === "parattins" && this.hasOwnProperty("parattins")) {
				console.log("proceed one stage");
				delete this.parattins;
			} else {
				this.insult();
			}
			// if it matches one, proceed to next dismemberment stage.
			// remove response from list so that you can only do each one once.
			// else, throw the player an insult.
			this.clicks = [];
		}
	}
};

//UI Logic
//functions for invisibility. may or may not need in future.
$.fn.visible = function() {
    return this.css('visibility', 'visible');
};

$.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};
//function for blinking. may or may not be useful for squirting blood effects.
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
		blackKnight.clicks.push("att");
		blackKnight.dismember();
	});
	$("#parry").click(function() {
		blackKnight.clicks.push("par");
		blackKnight.dismember();
	});
	$("#insult").click(function() {
		blackKnight.clicks.push("ins");
		blackKnight.dismember();
	});
});