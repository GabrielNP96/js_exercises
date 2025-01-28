function findLongestWordLength(str) {
    const wordsArr = str.split(' ').sort((a,b) =>  a.length - b.length);
    
    const lastIndexOfWordsArr = wordsArr[wordsArr.length - 1];
    return lastIndexOfWordsArr.length;

  }
  
  console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));