//encontrar os maiores números de cada sub-array

const userNumbersArr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

function biggestNumbers(numberArr) {
    const ArrOfNumbers = numberArr
    const bigNumbers = []

    for (const i in ArrOfNumbers) {
            ArrOfNumbers[i].sort((a, b) => {
                return a - b
            })
        bigNumbers.push(ArrOfNumbers[i][ArrOfNumbers.length - 1])
        
    }

    console.log(`Os ultimos elemento de cada array são: ${bigNumbers}.`)
    
}


biggestNumbers(userNumbersArr);
