

		var wins = 0;
		var losses = 0;
		var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
		var guesses_remain = 10;
		var computerGuess = options[Math.floor(Math.random()*options.length)];
		console.log(computerGuess);
		var guesses_array = [];
function StartGame () {
		guesses_remain = 10;
		computerGuess = options[Math.floor(Math.random()*options.length)];
		console.log(computerGuess);
		guesses_array = [];
			
		
			
}
		
		document.onkeyup = function(event) {
			guesses_remain--;
			
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userGuess);

                
            				
			if (userGuess == computerGuess) {
			
				wins++;
				StartGame();
			} else {
				guesses_array.push(userGuess);
			}
			
			for (var i = guesses_array.length-2; i >=0; i--) {
			
				if ((guesses_array[i] == userGuess)&&(userGuess !== computerGuess)) {
					guesses_array.pop();
					guesses_remain++;
				}
			}
			if ((guesses_remain == 0) && (userGuess !== computerGuess)) {
				losses++;
				StartGame();
			}
            
			console.log(guesses_array);
					document.querySelector('#game').innerHTML = 'Your guesses so far: ' + guesses_array +'<br>' +'<br>' + 'Guesses remaining: ' + guesses_remain +'<br><br>' + 'Wins = ' + wins + '<br>' + 'Losses = ' + losses;
		}
					
		
				
			