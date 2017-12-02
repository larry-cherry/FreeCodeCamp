function sumOddFibs(n) {
  let arr = [0];
  for(i = 1; arr[arr.length - 1] < n; i++){
    if(i <= 2 && i != 0){
      arr.push(1);
    }else {
      let temp = arr[i - 1] + arr[i - 2];
      arr.push(temp);
    } 
  }
  var res = arr.map( (x) => {
    if(x % 2 == 0 || x > n){
      return 0;
    }else {
      return x;
    }
    
  });
  return res.reduce( (x, y) => {
    return x + y;
  });
}

module.exports = sumOddFibs;