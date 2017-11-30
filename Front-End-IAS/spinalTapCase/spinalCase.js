
function spinalCase(str) {
  str = str.split(/[\s,_,-]/);
  str = str.join("-");
    for(i = 1; i < str.length; i++){
      if(str[i] == str[i].toUpperCase() && str[i] != "-" && str[i -1] != "-"){
       str = str.substring(0, i) + `-${str[i].toLowerCase()}` + str.substring(i + 1, str.length)
       i++;
      }   
    }
  return str.toLowerCase();
}

module.exports = spinalCase;

// && str[i -1] != "-"