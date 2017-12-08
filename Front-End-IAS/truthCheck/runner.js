const truthCheck = require('./truthCheck.js');
const prompt = require('prompt');

// prompt.get(['object', 'truth'], function(err, result) {
//   console.log(
//     truthCheck(eval(result.object), result.truth)
//   )
// });
prompt.get(['arrayOfObjects', 'whatToCheck'], function(err, result){
  console.log(
    truthCheck(eval(result['arrayOfObjects']), result['whatToCheck'])
  )
});