const prompt = require('prompt');
const steamrollArray = require("./steamrollArray.js");
let arr;
console.log("Please enter a nested Array\n example: [1, 2, [3], [1, 3]]");
prompt.start();
prompt.get(['array'], function(err, result) {
  arr = eval(result.array);
  // console.log(arr)
  // console.log(typeof arr)
  console.log(
    steamrollArray(arr)
  );
});
// console.log(
//   steamrollArray(arr)
// );