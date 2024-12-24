const randomNumber = Math.floor(Math.random() * 100) + 1;
alert("Bem vindo ao jogo!\nTente adivinhar um número inteiro positivo de 1 a 100\nVocê tem 5 chances");

let chances = 5;

while(chances > 0) {
    
    const userNumber = Number(prompt("Digite seu palpite: "));

    if(typeof(userNumber) !== 'string' && userNumber > 0) {

        if(userNumber === randomNumber) {
            alert(`Parabéns você acertou!\n ${userNumber} é realmente o número secreto!`);
            i = false
        } else {
            chances --
            alert(`Você errou!\nVocê tem ${chances} chances de acertar`);
        }

    } else {
        alert('Você deve Digitar um inteiro positivo maior que 0');
    }

}


