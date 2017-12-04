const findElement = require('../findElement.js');
describe('Test for findElement\n', function(){
  it('should return 8', function(){
    test = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
    expect(test).toEqual(8);
  });
})