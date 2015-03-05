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

Calculator.prototype.actionButton = function(action) {
  this.workingNumber = this.screenDisplay;
  this.screenDisplay = 0;
  this.workingOPerator = action;
};

Calculator.prototype.equalsButton = function() {
  if (this.workingOPerator === "plus") {
    this.screenDisplay = this.workingNumber+this.screenDisplay;
  }
  else if(this.workingOPerator === "minus") {
    this.screenDisplay = this.workingNumber-this.screenDisplay;
  }
  else if(this.workingOPerator === "times") {
    this.screenDisplay = this.workingNumber*this.screenDisplay;
  }
  else if(this.workingOPerator === "divide") {
    this.screenDisplay = this.workingNumber/this.screenDisplay;
  }
};

