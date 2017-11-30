//Runner File for Development
const spinalCase = require("./spinalCase");
const prompt = require('prompt');
// let word;
let x;

  console.log("Please enter a string you would like to convert to spinal case");
  prompt.start();
  prompt.get(['word'], function(err, result){
    console.log(spinalCase(result.word));
  })

