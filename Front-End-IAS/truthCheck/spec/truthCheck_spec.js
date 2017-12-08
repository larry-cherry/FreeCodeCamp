const truthCheck = require('../truthCheck.js');
describe('Everything Be True', function() {
  let test;
  it('Should return a boolean', function() {
    test = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
    expect(test).toEqual(jasmine.any(Boolean));
  });
  it('1) Should return True', function() {
    expect(test).toEqual(true);
  });
  it('2) Should return false', function() {
    test = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
    expect(test).toEqual(false);
  });
  it('3) should return false', function() {
    test = truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
    expect(test).toEqual(false);
  });
  it('4) should return false', function() {
    test = truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
    expect(test).toEqual(false);
  });
  it('5) should return true', function() {
    test = truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")
    expect(test).toEqual(true);
  });
  it('6) should return true', function() {
    test = truthCheck([{"single": "yes"}], "single");
    expect(test).toEqual(true);
  });
  it('7) should return false', function() {
    test = truthCheck([{"single": ""}, {"single": "double"}], "single");
    expect(test).toEqual(false);
  });
  it('8) should return false', function() {
    test = truthCheck([{"single": "double"}, {"single": undefined}], "single");
    expect(test).toEqual(false);
  });
  it('9) should return false', function() {
      test = truthCheck([{"single": "double"}, {"single": NaN}], "single");
      expect(test).toEqual(false);
  });
})