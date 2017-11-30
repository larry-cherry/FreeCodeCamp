
const spinalCase = require("../spinalCase.js");

describe("Spinal Case Script\n", function() {
  let test;

  it("1) Is it a string?", function() {
    test = spinalCase("Spinal Case");
    expect(test).toEqual(jasmine.any(String));
  });

  it("2) This Is Spinal Tap", function() {
    test = spinalCase("This Is Spinal Tap");
    expect(test).toEqual("this-is-spinal-tap");
  });

  it("3) The_Andy_Griffith_Show", function() {
    test = spinalCase("The_Andy_Griffith_Show");
    expect(test).toEqual("the-andy-griffith-show");
  });

  it("4) Teletubbies say Eh-oh", function() {
    test = spinalCase("Teletubbies say Eh-oh");
    expect(test).toEqual("teletubbies-say-eh-oh");
  });

  it("5) AllThe-small Things", function() {
    test = spinalCase("AllThe-small Things");
    expect(test).toEqual("all-the-small-things");
  })
});