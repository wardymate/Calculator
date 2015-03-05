var Calculator = function() {
  this.screenDisplay = 0;
  this.workingNumber = 0;
  this.workingOPerator = "";
};

Calculator.prototype.numberButton = function(number){
  if (this.screenDisplay === 0){
    this.screenDisplay = number;}
  else {
    this.screenDisplay = this.screenDisplay*10+number;
  };
};

Calculator.prototype.plusButton = function() {
  this.workingNumber = this.screenDisplay;
  this.screenDisplay = 0;
  this.workingOPerator = "plus";
};

Calculator.prototype.equalsButton = function() {
  if (this.workingOPerator === "plus") {
    this.screenDisplay = this.screenDisplay+this.workingNumber;
  }
};