function calculator(num1, operator, num2) {
    try {
        if(operator === '/' && num2 === 0) {
            return 'Não é possivel dividir por 0.';
        } else if(typeof(num1) !=='number' || typeof(num2) !== 'number' ) {
            return 'Digite números validos.'
        }
        switch(operator) {
            case '+':
                return `${num1} + ${num2} = ${num1 + num2}`;
            case '-':
                return `${num1} - ${num2} = ${num1 - num2}`;
            case '/':
                return `${num1} / ${num2} = ${num1 / num2}`;
            case '*':
                return `${num1} * ${num2} = ${num1 * num2}`;
            default:
                return 'São aceitos apenas os operadores +, -, /, *';
        }
    } catch(error) {
        return 'Erro...\nAlgo de errado aconteceu!'
    }
}

console.log(calculator(1,'+', 1));
console.log(calculator(4,'-', 1));
console.log(calculator(1,'/', 0));
console.log(calculator(18,'/', 4));
console.log(calculator(25,'*', 5));
console.log(calculator('a','+', 1));
console.log(calculator(1,'p', 1));
console.log(calculator(8,'+', ));
console.log(calculator(1, 1));