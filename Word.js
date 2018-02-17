// requiring our letter module exported from Letter.js
var LetterObj = require("./Letter.js");  

// Contains a constructor, Word that depends on the Letter constructor. 
// An array of new Letter objects representing the letters of the underlying Word

function Word(value){
	// console.log('the word passed in is '+value);
	this.value = value;
	this.letterArray = [];
	this.alphaGuessed = [];
	var arrayOfLetters = value.split("");
	for (i=0; i<arrayOfLetters.length; i++){
		// console.log("The letter is "+arrayOfLetters[i]);
		this.letterObj = new LetterObj(arrayOfLetters[i]);
		this.letterArray.push(this.letterObj);
		// console.log('letter object value is ' + this.letterArray[i].value);
	}
};
// if this letter has not been guessed yet, add it to the alphaguessed array, and return true
Word.prototype.newGuess = function(ltr) {
	if(this.alphaGuessed.indexOf(ltr)=== -1) {
		this.alphaGuessed.push(ltr);
		return true;
	}

}

Word.prototype.isComplete = function(){
	// console.log('the letter array in isComplete is '+this.letterArray);
	for(var i=0; i<this.letterArray.length;i++){
		if(!this.letterArray[i].show) return false;
	}
	return true;
}

Word.prototype.findLetter = function(input){
	// console.log('the letter array in findLetter is '+this.letterArray);
	for(var i=0; i<this.letterArray.length;i++){
		this.letterArray[i].compareLtr(input);
	}
};

// make a string from the object in letters array.  
Word.prototype.toString = function(){
  var string = "";

  for(var i=0; i<this.letterArray.length; i++){
    string = string + " " + this.letterArray[i].printInfo();
  }
//   console.log('the string is '+string);
  return string;
}

// exporting our Word constructor. we will require it in index.js
module.exports = Word;



