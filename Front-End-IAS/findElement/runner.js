const findElement = require('./findElement.js')

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))