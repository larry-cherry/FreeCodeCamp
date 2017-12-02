const pry = require('pryjs');
function sumOddFibs(num) {
  let sum = 0;
  let x = 0
  let y = 0
  for(i = 0; i < num; i++){
    if (i >= 2) {
      sum += x + y;
      x = y
      y = sum;
    }else {
      x += 1
      sum += x
    }
  }
  return sum
}

// module.exports = sumOddFibs;
console.log(sumOddFibs(5))