const sumPrimes = require('../sumPrimes.js');

describe('testing sum of prime numbers \n', function(){
  it('1) Does it return a number', function() {
    test = sumPrimes(9);
    expect(test).toEqual(jasmine.any(Number));
  });
  it('2) 10 should return 17', function(){
    test = sumPrimes(10)
    expect(test).toEqual(17);
  });
  it('977 should return 73156', function() {
    test = sumPrimes(977);
    expect(test).toEqual(73156);
  })
})