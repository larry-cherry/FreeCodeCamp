function sumPrimes(num) {
  arr = [];
  for(i = 2; i <= num; i ++){
    let temp = [];
    let x = i;
    while(x > 0){
      if(i % x == 0){
        temp.push(x);
      }
      x--
    }
    if(temp.length <= 2){
      
      arr.push(i);
    }
  }
  return arr.reduce( (x, y) => {
    return x + y;
  })
}

module.exports = sumPrimes;