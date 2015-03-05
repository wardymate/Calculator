var Calculator = function() {
  this.screenDisplay = 0;
};

Calculator.prototype.nineButton = function(){
  if (this.screenDisplay === 0){
    this.screenDisplay = 9;}
  else {
    this.screenDisplay = this.screenDisplay*10+9;
  };
};