alert('Vamos converter Celsius para Fahrenheit!');
let celcius = prompt('Digite os graus celius: ');
    celcius = Number(celcius);
let fahrenheit = 0;

function convertToFahrenheit(number) {
    if(isNaN(number) === false ) {
        fahrenheit = (number * 9/5) + 32;
        return `${celcius}° em celsius é igual ${fahrenheit}° em fahrenheit`;
    } else {
        return 'Valor invalido!';
    }
}

alert(convertToFahrenheit(celcius));