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
      calculator.nineButton();
      expect(calculator.screenDisplay).toEqual(9);
    });

    it('the 9 button twice changes the display to 99', function() {
      calculator.nineButton();
      calculator.nineButton();
      expect(calculator.screenDisplay).toEqual(99);
    });

    it('the 9 button three times changes the display to 999', function() {
      calculator.nineButton();
      calculator.nineButton();
      calculator.nineButton();
      expect(calculator.screenDisplay).toEqual(999);
    });




  });

  // describe('buttons', function() {

  //   it('', function() {

  //   });

  // });


});