function repeatStrNumTimes(str, num) {

  if (num < 0){
    return "";
  }else {
    var varArray =[];
      
    for (var i = 0; i < num; i++){
      varArray.push(str);
    }
  }
  console.log(varArray)
  return varArray.join("");
}

repeatStrNumTimes("repeatedString", 3);
