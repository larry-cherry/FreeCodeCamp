const addTogether = require('../addTogether.js')

describe('Test', function() {
  it('Should return a integer', function() {
    test = addTogether(1, 1);
    expect(test).toEqual(jasmine.any(Number));
  });
  it('"addTogether(2, 3)" should return 5', function() {
    test = addTogether(2, 3);
    expect(test).toEqual(5);
  });
  it('"addTogether("http://bit.ly/IqT6zt")" should return undefined', function() {
    test = addTogether("http://bit.ly/IqT6zt");
    expect(test).toBeUndefined();
  });
  it('"addTogether(2, "3")" should return undefined', function() {
    test = addTogether(2, "3");
    expect(test).toBeUndefined();
  });
  it('"addTogether(2)([3])" should return undefined', function() {
    test = addTogether(2)([3])
    expect(test).toBeUndefined();
  })
})