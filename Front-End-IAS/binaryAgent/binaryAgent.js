function binaryAgent(str) {
  let result = "";
  str = str.split(" ");
  str.forEach(element => {
    let charCode = 0;
    for(i = 0; i < element.length; i++){
      let num = parseInt(element[i]);
      charCode += decimalConverter(i, num);
    }
    result += String.fromCharCode(charCode);
  });
  return result;
}

function decimalConverter(pos, num) {
  if(pos != 7 && num != 0) {
    return 2**(7 - i)
  }else {
    return num;
  }
}

module.exports = binaryAgent;