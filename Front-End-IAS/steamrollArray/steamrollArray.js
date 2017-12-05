function steamrollArray(arr) {
  let result = [];
  do {
    if(!Array.isArray(arr[0])) {
      result.push(arr[0]);
      arr.shift();
    }
    else {
      arr = [].concat.apply([], arr);
    }
  }
  while(arr.length > 0);
  return result
}

module.exports = steamrollArray;