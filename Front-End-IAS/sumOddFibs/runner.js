const sumOddFibs = require('./sumOddFibs.js')

var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  console.log('Please enter a number...');
  prompt.get(['number'], function (err, result) {
    //
    // Log the results.
    console.log(`The sum of all odd fibonacci numbers under ${result.number} is...`)
    console.log(sumOddFibs(result.number));
  });