// require needed files 
var inquirer = require("inquirer");
var word = require("./Word.js");
var randomWordsFx = require("random-words");
var randomWord = randomWordsFx();
var myWord = new word(randomWord);

console.log(myWord.value);

var guessCount = 15;
// start game adding user prompt inputs using inquirer


function game() {
	console.log('You have ' + guessCount + ' left');
	console.log(myWord.toString());
	inquirer
	.prompt([{
		name: "letter",
		type: "input",
		message: "please enter a letter"	
	}])
	.then(function(input){
		// convert all inputs to lowercase because the random word is always lowercase
		input.letter = input.letter.toLowerCase();
		if(myWord.newGuess(input.letter)) {
			myWord.findLetter(input.letter);
			guessCount--;
		}
		
		if(myWord.isComplete()){
			// this means the user guessed all the letters and won
			console.log("You Guessed it right!");
			myWord = randomWordsFx();
			game();
			// end Game

			// return;
			
		}

		// when the user run out of guesses, they lost/end game
		if(guessCount=== 0) {
			console.log("You lost the game!");
			return;
		}
		// get next letter 
		game();
	})
}

game();	





