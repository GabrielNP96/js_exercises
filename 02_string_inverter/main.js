//inversor de strings
alert('Vamos inverter uma string')

let userStr = prompt('Digite uma palavra')
function stringIverter(str) {
    if(str.length === 0) {
        return 'valor inválido'
    }

    return str.split('').reverse().join('')

    
}

alert(stringIverter(userStr))