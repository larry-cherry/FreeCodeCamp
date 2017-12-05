const binaryAgent = require('./binaryAgent.js');
const prompt = require('prompt');

prompt.get(['binaryNumber'], function(err, result){
  console.log(
    binaryAgent(result.binaryNumber)
  )
});