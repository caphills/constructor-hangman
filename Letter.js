 // constructor Letter: should be able to either display an underlying character or  an underscore, 
 // depending on whether or not the user has guessed the letter. That means the constructor should define:

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
 
// Contains a constructor, Letter constructor should be able to either display a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 

function Letter(value) {
	this.value = value;
  	this.show = false;
}

// compare the guessed letter to the letter stored in value. if true, change the value of show to true
Letter.prototype.compareLtr = function(ltr){
	if(this.value === ltr){	
		this.show = true;
	}
}

// if the show value is true, return the letter otherwise, return underscore
Letter.prototype.printInfo = function() {
	if(this.show) {
		return this.value;
	}
	return "_";
}


//exporting the letter file
module.exports = Letter;
