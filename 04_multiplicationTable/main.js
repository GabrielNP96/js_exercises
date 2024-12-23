function multiplicationTable(number) {
    if (typeof(number) !== 'number') {
        console.log('Só são aceitos números');
        return;
    } 

    for(let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
        console.log('--------------');
    }
}

multiplicationTable(-1);
multiplicationTable(8);
multiplicationTable('8');
