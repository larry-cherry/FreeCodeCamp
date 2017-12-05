const steamrollArray = require('../steamrollArray')
describe('Steam Roll Tests...', function() {
  let test;
  it('Should return an array', function() {
    test = steamrollArray([[["a"]], [["b"]]])
    expect(test).toEqual(jasmine.any(Array));
  });
  it('Should return ["a", "b"]', function() {
    expect(test).toEqual(["a", "b"]);
  })
  it('Should return [1, 2, 3, 4]', function() {
    test = steamrollArray([1, [2], [3, [[4]]]]);
    expect(test).toEqual([1, 2, 3, 4]);
  });
  it('Should return [1, {}, 3, 4]', function() {
    test = steamrollArray([1, {}, [3, [[4]]]]);
    expect(test).toEqual([1, {}, 3, 4]);
  })
})