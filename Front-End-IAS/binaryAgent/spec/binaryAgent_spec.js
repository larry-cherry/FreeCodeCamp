const binaryAgent = require('../binaryAgent.js')
let test;

describe('Binary Agent', function(){
  it('Should return a String', function() {
    test = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
    expect(test).toEqual(jasmine.any(String));
  });
  it(`Should return "Aren't bonfires fun!?"`, function(){
    expect(test).toEqual("Aren't bonfires fun!?");
  });
  it('', function(){
    test = binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
    expect(test).toEqual("I love FreeCodeCamp!");
  })
})