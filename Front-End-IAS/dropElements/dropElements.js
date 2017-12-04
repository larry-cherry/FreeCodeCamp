function dropElement(arr, func) {
  for(i = 0; i < arr.length; i++){
    if(func(arr[i])){
      return arr.slice(i, arr.length);
    }else if(i == arr.length - 1){
      return [];
    }
  }
}

module.exports = dropElement;