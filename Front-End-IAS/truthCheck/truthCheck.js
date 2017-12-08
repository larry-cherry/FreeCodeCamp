function truthCheck(obj, check) {
  let result;
  for(i = 0; i < obj.length; i++){
      result = isItFalse(obj[i], check);
      if(result == false) {
        return result;
      }
    }
  return result;
}

function isItFalse(obj, check) {
  if(!obj[check]) {
    return false;
  }else if(obj[check] == 0){
    return false;
  }else if(obj[check] == "") {
    return false;
  }else {
    return true;
  }
}

module.exports = truthCheck;
