function largestOfFour(arr) {
    const numbersArr = arr;
    const largestOfEachArray = [];
    for(let i = 0; i < numbersArr.length; i++) {
        numbersArr[i].sort((a,b) => a- b);
        largestOfEachArray.push(numbersArr[i][numbersArr[i].length -1]);
    }

    console.log(largestOfEachArray);
    return largestOfEachArray;
  }
  
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]);