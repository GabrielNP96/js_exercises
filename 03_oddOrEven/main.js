function oddOrEven(number) {

    if(typeof(number) !== 'number') {
        return 'Digite apenas números...'
    }

    if(number % 2 == 0) {
        return `${number} é par.`;
    } else {
        return `${number} é ímpar.`;
    }
}

console.log(oddOrEven(4));
console.log(oddOrEven(1));
console.log(oddOrEven(0));
console.log(oddOrEven('1'));