// are we exporting this then since we will not be requiring any file
exports.letter = letter;

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
  