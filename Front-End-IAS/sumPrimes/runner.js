const sumPrimes = require('./sumPrimes.js');
const prompt = require('prompt');

prompt.start
console.log('Please enter a number to get the sum of all primes to that number...');
prompt.get(['number'], function (err, result) {
  console.log(sumPrimes(result.number));
});
