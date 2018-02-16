// require needed files 
var inquirer = require("inquirer");
var word = require("./Word.js");
var randomWords = require("random-words");
var myWord = randomWords();
console.log(myWord);

var guessCount = 15;

function startGame() {
	// inquirer prompt
	inquirer
	.prompt([{
		name: "letter",
		type: "input",
		message: "please enter a letter"	
	}])
	.then()
}

startGame();	





