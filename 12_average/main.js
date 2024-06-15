//calcular a media

function average(arr) {
    const numberArr = arr
    let numberSum = 0

    for(let i = 0; i < numberArr.length; i++) {
        numberSum += numberArr[i] 
    }

    console.log(`A soma dos números do array é igual a : ${numberSum}.`)
}

average([1,4,5])