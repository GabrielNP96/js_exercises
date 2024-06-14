/*
 Desenvolva uma função que recebe um número como parâmetro e retorne "par" se o número for par,
 ou "ímpar" se for ímpar.
*/

function evenOrOdd(num) {
    if(Number.isInteger(num / 2) === true) {
        return console.log(`${num} é um número par.`)
    }

    return console.log(`${num} é um número ímpar.`)
}

evenOrOdd(4)
evenOrOdd(7)
evenOrOdd(10)
evenOrOdd(25)