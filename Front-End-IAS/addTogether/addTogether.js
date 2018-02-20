const pry = require('pryjs');

function addTogether(x) {

  let args = Object.values(arguments);
  let check = args.map(arg =>typeof arg === 'number');
  if(check.includes(false)){
    return undefined;
  };
  if(args.length < 2){
    return function(y, x = args[0]) {
      if(typeof y === "object"){
        return undefined;
      }else{
        return x + y;
      }
    }
  }
  else {
    return args[0] + args[1];
  }
}

module.exports = addTogether;
