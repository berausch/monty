//Bidness

//Setting up opponent...
var blackKnight = {
	clicks: [], attparins: 1, insattpar: 1, parinsatt: 1, parattins: 1, stage: 1,

	insult: function() {
		console.log("You fight like a dairy farmer");
	},
	dismember: function() {
		console.log("dismembering knight...");
		// check button presses against list of acceptible answers.
		var clickString = this.clicks.join("");
		if (clickString === "attparins" && this.hasOwnProperty("attparins")) {
			delete this.attparins;
			this.stage += 1;
			console.log("proceed one stage");
		} else if ( clickString === "insattpar" && this.hasOwnProperty("insattpar")) {
			delete this.insattpar;
			this.stage += 1;
			console.log("proceed one stage");
		} else if ( clickString === "parinsatt" && this.hasOwnProperty("parinsatt")) {
			delete this.parinsatt;
			this.stage += 1;
			console.log("proceed one stage");
		} else if ( clickString === "parattins" && this.hasOwnProperty("parattins")) {
			delete this.parattins;
			this.stage += 1;
			console.log("proceed one stage");
		} else {
			this.insult();
		}
		// if it matches one, proceed to next dismemberment stage.
		// remove response from list so that you can only do each one once.
		// else, throw the player an insult.
		this.clicks = [];
	}
};

// //UI Logic
// //functions for invisibility. may or may not need in future.
// $.fn.visible = function() {
//     return this.css('visibility', 'visible');
// };

// $.fn.invisible = function() {
//     return this.css('visibility', 'hidden');
// };
// //function for blinking. may or may not be useful for squirting blood effects.
// $.fn.blink = function(options) {
// 	var defaults = {delay:500};
// 	var options = $.extend(defaults, options);
// 	return this.each(function() {
// 		var obj = $(this);
// 		setInterval(function() {
// 			if ($(obj).css("visibility") == "visible") {
// 				$(obj).invisible();
// 			} else {
// 				$(obj).visible();
// 			}
// 		}, options.delay);
// 	});
// }

$(document).ready(function() {
	function proceed () {
		if (blackKnight.clicks.length === 3) {
			blackKnight.dismember();
			$(".knightStatus").hide();
			$("#stage" + blackKnight.stage).show();
		}
	};

	$("#attack").click(function() {
		blackKnight.clicks.push("att");
		proceed();
	});
	$("#parry").click(function() {
		blackKnight.clicks.push("par");
		proceed();
	});
	$("#insult").click(function() {
		blackKnight.clicks.push("ins");
		proceed();
	});
});