/*
    Verifique se uma string (primeiro argumento) termina com a sequência de caracteres de destino fornecida (segundo argumento).
*/

function confirmEnd(str, end) {
    if (str.endsWith(end) === true) {
        return `A palavra ${str} termina com ${end}.`
    }

    return `A palavra ${str} não termina com ${end}.`
}

console.log(confirmEnd('pão', 'aõ'))
console.log(confirmEnd('filme', 'ui'))