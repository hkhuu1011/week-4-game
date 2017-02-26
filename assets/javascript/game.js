var crystals = {
	crystal1: {
	name: "crystal1",
	value: 0,
	},
	crystal2: {
		name: "crystal2",
		value: 0,
	},
	crystal3: {
		name: "crystal3",
		value: 0,
	},
	crystal4: {
		name: "crystal4",
		value: 0,
	}
}
console.log(crystals);

var currentScore = 0;
var yourScore = 0;
var wins = 0;
var losses = 0;

//Generate random number for Current Score and Crystals
var getRandom = function(min, max) {
	
	var targetScore = Math.floor((Math.random() * max) + min);
	console.log("random number: ", targetScore);
	return targetScore;
};

//Display random numer for Current Score and Crystals
	var startGame = function() {
		currentScore = getRandom(9,120);

		crystals.crystal1.value = getRandom(1,12);
		crystals.crystal2.value = getRandom(1,12);
		crystals.crystal3.value = getRandom(1,12);
		crystals.crystal4.value = getRandom(1,12);

		// Display random number Current Score
		$('.currentScore').html(currentScore);
		console.log("display current score: " + currentScore);

		//Click crystal1 to display
		$('.crystals').on("click", ".crystal1", function () {
			yourScore = crystals.crystal1.value + yourScore;
			$('.yourScore').html(yourScore);
			console.log("your score: " + yourScore);
		})

		//Click crystal2 to display
		$('.crystals').on("click", ".crystal2", function () {
			yourScore = crystals.crystal2.value + yourScore;
			$('.yourScore').html(yourScore);
			console.log("your score: " + yourScore);
		})

		//Click crystal3 to display
		$('.crystals').on("click", ".crystal3", function () {
			yourScore = crystals.crystal3.value + yourScore;
			$('.yourScore').html(yourScore);
			console.log("your score: " + yourScore);
		})

		//Click crystal4 to display
		$('.crystals').on("click", ".crystal4", function () {
			yourScore = crystals.crystal4.value + yourScore;
			$('.yourScore').html(yourScore);
			console.log("your score: " + yourScore);
		})	

		//Wins and Losses
		if (yourScore === currentScore) {
			wins++;
			console.log("wins: " + wins);
		} else if (yourScore > currentScore) {
			losses++;
			console.log("losses: " + losses);
		}

	
	}



startGame();



