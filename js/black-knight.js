//Bidness

//Setting up opponent...
var blackKnight = {
	clicks: [], attparins: 1, insattpar: 1, parinsatt: 1, parattins: 1, stage: 1,

	insult: function() {
		// console.log("You fight like a dairy farmer");
		var list = ["insult1", "insult2", "insult3", "insult4", "insult5"];
		console.log(list[Math.floor(Math.random() * 5)]);
	},
	dismember: function() {
		console.log("dismembering knight...");
		// check button presses against list of acceptible answers.
		var clickString = this.clicks.join(", ");
		console.log(clickString);
		if (clickString === "Attack, Parry, Insult" && this.hasOwnProperty("attparins")) {
			delete this.attparins;
			this.stage += 1;
			console.log("proceed one stage");
		} else if ( clickString === "Insult, Attack, Parry" && this.hasOwnProperty("insattpar")) {
			delete this.insattpar;
			this.stage += 1;
			console.log("proceed one stage");
		} else if ( clickString === "Parry, Insult, Attack" && this.hasOwnProperty("parinsatt")) {
			delete this.parinsatt;
			this.stage += 1;
			console.log("proceed one stage");
		} else if ( clickString === "Parry, Attack, Insult" && this.hasOwnProperty("parattins")) {
			delete this.parattins;
			this.stage += 1;
			console.log("proceed one stage");
		} else {
			this.insult(); // change this maybe.
		}
		// if it matches one, proceed to next dismemberment stage.
		// remove response from list so that you can only do each one once.
		// else, throw the player an insult.
		this.clicks = [];
		return clickString;
	}
};

// //UI Logic

$(document).ready(function() {
	function proceed () {
		if (blackKnight.clicks.length === 3) {
			$("#combos ul").append("<li>" + blackKnight.dismember() + "</li>");
			$(".knightStatus").hide();
			$("#stage" + blackKnight.stage).show();
		}
	};

	$("#attack").click(function() {
		blackKnight.clicks.push("Attack");
		proceed();
	});
	$("#parry").click(function() {
		blackKnight.clicks.push("Parry");
		proceed();
	});
	$("#insult").click(function() {
		blackKnight.clicks.push("Insult");
		proceed();
	});
});