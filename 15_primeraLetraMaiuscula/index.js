function titleCase(str) {
    const strArr = str.split(' ');
    const strArrUpper = [];

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i]) {
            strArrUpper.push(strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase());
        }
    }

    return strArrUpper.join(' ');
}

console.log(titleCase("I'm a little tea pot")); 
console.log(titleCase("  I'm a  little tea pot  "));