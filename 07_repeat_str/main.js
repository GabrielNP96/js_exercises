//Repita uma string passada quantas vezes o usuario quiser. 

function repeatStr(str, num) {
    console.log('Repetindo sua string: ')

    const userNum = Number(num)

    for(let i = 0; i < userNum; i++) {
        console.log(`${i + 1}: ${str}`)
    }
}

repeatStr('Hello World', 8)