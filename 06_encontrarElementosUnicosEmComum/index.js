/*
Crie uma função que receba duas listas de números como parâmetro, 
e retorne uma nova lista contendo os elementos que estão presentes em ambas as listas, mas apenas uma vez. Ou seja, 
se um elemento estiver presente nas duas listas, ele deve aparecer apenas uma vez na lista resultante.
*/

function uniqueCommonElements(arr1, arr2) {
    const uniqueArr = [];
    for (const number of arr1) { 
      if (arr2.includes(number) && !uniqueArr.includes(number)) { 
        uniqueArr.push(number);
      }
    }
    return uniqueArr;
  }
  
  const result = uniqueCommonElements([1, 3, 4, 7, 8, 7, 7], [7, 4, 10, 45]);
  console.log(result); // Saída: [1, 4, 7]