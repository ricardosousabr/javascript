let string = "Spider man"
const vogais = ['a', 'e', 'i', 'o', 'u']

function contarVogais(string, vogais){
  let contador = 0
  for (i = 0; i < string.length; i++){
    for (j = 0; j < vogais.length; j++){
      if (string[i] === vogais[j] ) {
        contador++
      }
    }
  }
  return `Existem ${contador} Vogaís`;
}

console.log(contarVogais(string, vogais));