// Everything Logic

$(document).ready(generateInsult);

	function generateInsult() {


	    var Pronoun = [
	        'I blow my nose at you, You ',
	        'Your father was a',
	        'Fechez la vache!',
	        'I fart in your general direction, you',
	        'You are a golden stream of',
	        'Propper',
	        'You come home smelling of',
	        ''

	    ];

	    var Adjective1 = [
	        ' empty headded',
	        ' machiavellian',
	        ' Savage',
	        ' Watery',
	        ' Filthy',
	        ' Rotten',
	        ' Petulant',
	        ' English',
	        ' scurvy',
	        ' devious',
	        ' bat',
	        ' hamwit',
	        ' filthy',
	        ' empty headed animal',
	        ' smelt of',
	        ' little',
	        ' big nosed',
	        ' blaspheming',
	        ' moistened',
	        ' bloody',
	        ' '
	    ];

	    var Adjective2 = [
	        ' sharp pointy toothed',
	        ' stinking',
	        ' prancing',
	        ' deranged',
	        ' demented',
	        ' festering',
	        ' drooling',
	        ' pissing',
	        ' food trough wiper',
	        ' thieving',
	        ' eldeberry, you',
	        ' jailor',
	        ' creul and bad tempered',
	        ' diseased',
	        ' silly little',
	        ' black-hearted',
	        ' '
	    ];

	    var Noun = [
	        ' bastard!',
	        ' swine.',
	        ' git!',
	        ' ratbag.',
	        ' pig-dog!',
	        ' tartlett.',
	        ' pervert!',
	        ' Kn-ig-hts.',
	        ' Pet.',
	        ' Conkface!',
	        ' bint.'
	    ];

	    var randomPronoun = Math.floor(Math.random() * Pronoun.length);

	    var randomAdjective1 = Math.floor(Math.random() * Adjective1.length);

	    var randomAdjective2 = Math.floor(Math.random() * Adjective2.length);

	    var randomNoun = Math.floor(Math.random() * Noun.length);

	    var insult = Pronoun[randomPronoun].concat(Adjective1[randomAdjective1], Adjective2[randomAdjective2], Noun[randomNoun]);

	    document.getElementById("insult-space").innerText = insult;

	};