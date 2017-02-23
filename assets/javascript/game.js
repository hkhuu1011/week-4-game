var crystalsCollector = {
	wins: 0,
	losses: 0,
	randomNumber: "",

	startGame: function() {

//Generate random number
	crystalsCollector.randomNumber = Math.floor((Math.random() * 120) + 19);
	

	$('.randomNumberGen').html(this.randomNumber);
	console.log("random number");




	}
}

crystalsCollector.startGame();

//Generate random number for crystal


//Your total score


//Wins and Losses
