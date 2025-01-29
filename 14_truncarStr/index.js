function truncateString(str, num) {
    let trucateStr;
    if(str.length > num) {
        return trucateStr = str.slice(0, num) + '...';
    }

    return str;
  }
  
  console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));