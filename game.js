
		//creating variable with array computerChoice which has letter
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    // creating variable 
		 var wins = 0;
		 var losses = 0;
		 var countGuesses = 9;
		 var userChoices = [];

		 document.onkeyup = function(event) {

		 	var userGuess = event.key;

		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	

			if (options.indexOf(userGuess) > -1) {

				if (userGuess === computerGuess) {
					wins++;
					countGuesses = 9;
					guessChoices = [];
				}

				if (userGuess != computerGuess) {
					countGuesses --;
					userChoices.push(userGuess);
				}

				if (countGuesses === 0) {
			  countGuesses = 9;
				losses ++;   
				userChoices = [];

				
			}

			var html = 
			"<h1> The Psychic Game </h1>" +
			"<strong>Guess what letter I'm thinking of!</strong>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + countGuesses + "</p>" +
			"<p>Your Guesses so far: " + userChoices.join(", ") + "</p>";

			document.getElementById("game").innerHTML = html;

			
			}
		};

	