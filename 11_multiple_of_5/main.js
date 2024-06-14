//Desenvolva uma função que recebe um número como parâmetro e retorne se o número é múltiplo de 5

function multipleOf5 (num) {
    if (Number.isInteger(num / 5) === true) {
        return console.log(`${num} é múltiplo de 5.`)
    }
    
    return console.log(`${num} não é multiplo de 5.`)
}

multipleOf5(4)
multipleOf5(15)