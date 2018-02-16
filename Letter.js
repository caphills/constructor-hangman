 // constructor Letter: should be able to either display an underlying character or  an underscore, 
 // depending on whether or not the user has guessed the letter. That means the constructor should define:

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
 
// Contains a constructor, Letter constructor should be able to either display a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 

function letter(value) {
	this.value = value;
  	this.show = false;
  	if(this.value === ""){
  		this.value === true;
}

letter.prototype.printInfo = function() {
	if(this.show) {
		return this.value;
	}
	console.log("_");
}

}
 // var letter1 = new letter("a");
 // letter1.printInfo();
  

//exporting the letter file
module.exports = letter;
