//exporting the letter file
module.exports = letter;
 
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
 var letter1 = new letter("a");
 letter1.printInfo();
  
