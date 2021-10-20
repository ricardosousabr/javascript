const array = [10, 2, 3, 40, 5];
const array2 = [15, 20, 45, 4, 12];
const array3 = [];

function maiorEMenorNumero(array) {
  let maior = null, menor = null;
  for (i = 0; i <= array.length; i++){
    if (array[i] > maior || !maior){
      maior = array[i]
    }
    if (array[i] < menor || !menor){
      menor = array[i]
    }
  }
  return {maior, menor}
};

console.log(maiorEMenorNumero(array));
console.log(maiorEMenorNumero(array2));
console.log(maiorEMenorNumero(array3));