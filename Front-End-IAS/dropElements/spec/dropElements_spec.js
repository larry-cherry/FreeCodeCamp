const dropElements = require("../dropElements.js")

describe("Test drop Element", function() {
  let test;
  it("Should return an Array", function() {
    test = dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
    expect(test).toEqual(jasmine.any(Array));
  });
  it("[1, 2, 3, 4] function(n) {return n >= 3;} should return [3, 4]", function() {
    expect(test).toEqual([3, 4]);
  });
  it("[0, 1, 0, 1] function(n) {return n === 1;} should return [1, 0, 1]", function() {
    test = dropElements([0, 1, 0, 1], function(n) {return n === 1;});
    expect(test).toEqual([1, 0, 1]);
  });
  it("[1, 2, 3, 4], function(n) {return n > 5;} should return []", function() {
    test = dropElements([1, 2, 3, 4], function(n) {return n > 5;});
    expect(test).toEqual([]);
  });
  it("[1, 2, 3, 7, 4], function(n) {return n > 3;} should return [7, 4]", function() {
    test = dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});
    expect(test).toEqual([7, 4]);
  });
  it("[1, 2, 3, 9, 2], function(n) {return n > 2;} should return [3, 9, 2]", function() {
    test = dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
    expect(test).toEqual([3, 9, 2]);
  })
})