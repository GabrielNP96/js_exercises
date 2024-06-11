//Encontrar a palavra mais longa em uma frase.
alert('Bem vindo! Vamos Encontrar a palavra mais longa em uma frase que você vai digitar.')
const userPhrase = prompt('Digite uma frase: ')

function longestWord(phrase) {
    let phraseArr = phrase.split(' ')
    let longestStr = ''
    let longestStrSize = 0
    const answer = []

    for( let i = 0; i < phraseArr.length; i++ ) {
        if(longestStr.length < phraseArr[i].length) {
            longestStr = phraseArr[i]
        }
    }

    longestStrSize = longestStr.length

   return [longestStr, longestStrSize]
}

const answer = longestWord(userPhrase)

alert(`A palvavra mais longa é ${answer[0]} ela tem ${answer[1]} caracteres.`)