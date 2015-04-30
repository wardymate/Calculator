var Calculator = function() {
  SCREEN_RESET = 0;
  BASE_NUMBER = 10;
  this.screenDisplay = 0;
  this.workingNumber = 0;
  this.workingOperator = "";
};

Calculator.prototype.numberButton = function(number){
  if (this.screenDisplay === SCREEN_RESET){
    this.screenDisplay = number;}
  else {
    this.screenDisplay = this.screenDisplay*BASE_NUMBER+number;
  };
};

Calculator.prototype.actionButton = function(action) {
  this.workingNumber = this.screenDisplay;
  this.screenDisplay = SCREEN_RESET;
  this.workingOperator = action;
};

Calculator.prototype.equalsButton = function() {
  if (this.workingOperator === "plus") {
    this.screenDisplay = this.workingNumber+this.screenDisplay;
  }
  else if(this.workingOperator === "minus") {
    this.screenDisplay = this.workingNumber-this.screenDisplay;
  }
  else if(this.workingOperator === "times") {
    this.screenDisplay = this.workingNumber*this.screenDisplay;
  }
  else if(this.workingOperator === "divide") {
    this.screenDisplay = this.workingNumber/this.screenDisplay;
  }
};

