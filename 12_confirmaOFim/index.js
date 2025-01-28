function confirmEnding(str, target) {
    if(!str.includes(" ")) {
        if(str[str.length -1] === target) {
            return true;
         } else {
            return false;
         }
    } else {
        const arrStr = str.split(" ");
        if(arrStr[arrStr.length -1] === target) {
            return true;
        } else {
            return false;
        }
    }
    
  }
  
  console.log(confirmEnding('Bastian', 'n'));