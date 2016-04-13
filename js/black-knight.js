//Bidness
function hpCheck(character, value) {
	if (character.hp <= value ) {
		//perform some action
		//this will chiefly be used for chopping off the knight's limbs.
	} //there probably won't be an else statement in here...
};

//Setting up opponent...
var blackKnight = {
	hp: 100, leftArm: true, rightArm: true, leftLeg: true, rightLeg: true,
	//This runs when player swings and misses.
	insult: function() {
		console.log("You fight like a dairy farmer.");
	},
	//attack function, argument is the thing being attacked.
	//in this case, it would be blackKnight.swing(player);
	swing: function(opponent) {
		console.log("saaaawing battahhhh");
		var attackRoll = Math.floor(Math.random() * 20 + 1);
		if (attackRoll >= 16) {
			opponent.hp -= (Math.floor(Math.random() * 8 + 1) + 5);
		} else {
			opponent.insult(); // if this is left in, it would mean the player would have a chance to heal.
		}
	}
};

//Setting up player...
var player = {
	hp: 100,
	//attack function, argument is the thing being attacked.
	//in this case, it would be player.swing(blackKnight);
	swing: function(opponent) {
		console.log("saaaawing battahhhh");
		var attackRoll = Math.floor(Math.random() * 20 + 1);
		if (attackRoll >= 12) {
			var damageRoll = (Math.floor(Math.random() * 10 + 1) + 5);
			opponent.hp -= damageRoll;
			console.log("You deal " + damageRoll + " damage.")
		} else {
			console.log("You miss.");
			opponent.insult();
		}
	},
	parry: function() { console.log("parry. thrrrust. parry."); },
	// insulting allows the player to heal.
	insult: function() {
		console.log("How appropriate, you fight like a cow.");
		var healRoll = Math.floor(Math.random() * 20 + 1);
		if (healRoll >= 10) {
			this.hp += (Math.floor(Math.random() * 10 + 1) + 5);
			console.log("Belittling your opponent improves your morale. You now have " + this.hp + " hit-points.");
		} else {
			console.log("...it's not very effective.");
		}
	}
};
// the fight is clearly in the player's favor, as it should be.

//UI Logic
$(document).ready(function() {
	// killing time >:3

});