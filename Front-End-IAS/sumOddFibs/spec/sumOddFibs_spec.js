const sumOddFibs = require("../sumOddFibs.js")
let test;

describe("Sum of odd fib numbers", function(){
  it("1) Should return a number\n", function(){
    test = sumOddFibs(10);
    expect(test).toEqual(jasmine.any(Number));
  });

  it("2) 1000 should return 1785\n", function(){
    test = sumOddFibs(1000);
    expect(test).toEqual(1785);
  });

  it("3) 4000000 should return 4613732\n", function(){
    test = sumOddFibs(4000000);
    expect(test).toEqual(4613732);
  });

  it("4) 4 should return 5 \n", function(){
    test = sumOddFibs(4);
    expect(test).toEqual(5);
  });

  it("5) 75024 should return 60696\n", function(){
    test = sumOddFibs(75024)
    expect(test).toEqual(60696);
  });

  it("6) 75025 should return 135721\n", function(){
    test = sumOddFibs(75025)
    expect(test).toEqual(135721);
  });
  
})