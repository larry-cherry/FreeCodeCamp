function findElement(arr, func) {
  let num;
  for(i = 0; i < arr.length; i++){
    if(func(arr[i])){
      num =  arr[i];
      return num;
    }
  }
  return num;
}

module.exports = findElement;