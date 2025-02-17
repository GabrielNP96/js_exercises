//Crie duas variáveis com números e calcule a soma, subtração, multiplicação e divisão entre elas. Exiba os resultados.
function mathOperations(number1,number2) {
    if(typeof(number1) === "number" && typeof(number2) === "number") {
        console.log(`${number1} + ${number2} = ${number1 + number2}`);
        console.log(`${number1} - ${number2} = ${number1 - number2}`);
        console.log(`${number1} * ${number2} = ${number1 * number2}`);

        if(number1 === 0) {
          console.log("Não é possivel dividir por zero");
        } else {
            console.log(`${number1} / ${number2} = ${number1 / number2}`);
        }
    }
}

mathOperations(5,5);
mathOperations(8,7);
mathOperations(-5,2);
mathOperations(0,8)