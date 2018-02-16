// requiring our letter module exported from Letter.js
var LetterObj = require("./Letter.js");  

// Contains a constructor, Word that depends on the Letter constructor. 
// An array of new Letter objects representing the letters of the underlying word

function word(value){
	this.value = value;
	this.letterArray = [];
	this.alphaGuessed = "";
	for(var i = 0; i < this.value.length; i++) {
		this.letterArray.push(new LetterObj(value.charAt[i]));
	}
};

word.prototype.isComplete = function(){
	for(var i = 0; i < this.letters.length; i++){
		if(!this.letterArray[i].show) return false;
	}
	return true;
}

word.prototype.findLetter = function(input){
	//inputowerLetter = letterArray[].toLowerCase();
	if (this.alphaGuessed.indexOf(input) != -1) {
		return "Duplicate";
	} 
	this.alphaGuessed += lowerLetter; //Record the guess
	for(var i=0; i<this.letters.length;i++){
		if(this.letterArray[i].value.toLowerCase() == lowerLetter){
		this.letters[i].show = true;
		}
	}
};

// make a string from the object in letters array.  
word.prototype.toString = function(){
  var string = "";
  for(var i=0; i<this.letters.length; i++){
    string+= this.letterArray[i].printInfo();
  }
  return string;
}

// exporting our word constructor. we will require it in index.js
module.exports = word;



