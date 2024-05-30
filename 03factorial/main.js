alert('Vamos calcular o fatorial de um número')
let userNumber = prompt('Digite um número')
    userNumber = Number(userNumber)
function factorial(number) {
    factorial = 1

    for(let i = number; i > 0; i--) {
        factorial *= i
    }

    alert(factorial)
}

if(isNaN(userNumber) === true) {
    alert("Valor digitado não é um número!")
} else {
    factorial(userNumber)
}