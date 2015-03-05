describe ('Calculator', function (){
  var calculator;

  beforeEach(function(){
    calculator = new Calculator();
  });

  describe('display', function(){

    it('should have a value of 0 when started', function() {
      expect(calculator.screenDisplay).toEqual(0);
    });

    it('the 9 button changes the last digit of display to 9', function() {
      calculator.numberButton(9);
      expect(calculator.screenDisplay).toEqual(9);
    });

    it('the 9 button twice changes the display to 99', function() {
      calculator.numberButton(9);
      calculator.numberButton(9);
      expect(calculator.screenDisplay).toEqual(99);
    });

    it('the 9 button three times changes the display to 999', function() {
      calculator.numberButton(9);
      calculator.numberButton(9);
      calculator.numberButton(9);
      expect(calculator.screenDisplay).toEqual(999);
    });

    it('displays 123456789 when 123456789 is entered', function() {
      calculator.numberButton(1);
      calculator.numberButton(2);
      calculator.numberButton(3);
      calculator.numberButton(4);
      calculator.numberButton(5);
      calculator.numberButton(6);
      calculator.numberButton(7);
      calculator.numberButton(8);
      calculator.numberButton(9);
      expect(calculator.screenDisplay).toEqual(123456789);
    });

  });

  describe('mathematical buttons', function() {

    it('the plus button resets the display to zero', function() {
      calculator.numberButton(1);
      calculator.actionButton("plus");
      expect(calculator.screenDisplay).toEqual(0);
    });

     it('the equals button diaplays the result of 1 plus 1', function() {
      calculator.numberButton(1);
      calculator.actionButton("plus");
      calculator.numberButton(1);
      calculator.equalsButton();
      expect(calculator.screenDisplay).toEqual(2);
    });

     it('the equals button diaplays the result of 5 minus 3', function() {
      calculator.numberButton(5);
      calculator.actionButton("minus");
      calculator.numberButton(3);
      calculator.equalsButton();
      expect(calculator.screenDisplay).toEqual(2);
    });

     it('the equals button diaplays the result of 5 times 3', function() {
      calculator.numberButton(5);
      calculator.actionButton("times");
      calculator.numberButton(3);
      calculator.equalsButton();
      expect(calculator.screenDisplay).toEqual(15);
    });

     it('the equals button diaplays the result of 15 divide 3', function() {
      calculator.numberButton(15);
      calculator.actionButton("divide");
      calculator.numberButton(3);
      calculator.equalsButton();
      expect(calculator.screenDisplay).toEqual(5);
    });
  });


});