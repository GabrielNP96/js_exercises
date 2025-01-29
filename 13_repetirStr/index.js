function repeatStringNumTimes(str, num) {
    let newStr = str
    if(num > 0) {
        for(let i = 1; i < num; i++) {
            newStr += str;
        }
    } else {
        newStr = '';
    }

    return newStr;
  }
  
  repeatStringNumTimes('abc', 3);