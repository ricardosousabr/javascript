const string = ["Ola Mundo", "Ola", "Hello world","Ola Mundo", "Ola Mundo"]

function compararStringsIguais(string){
  let contador = 0;
  for (i = 0; i < string.length; i++){
    for (j = 0; j < string.length; j++){
      if (string[i] === string[j] && i != j){
        contador++
        string.splice(j, 1);
        j--
      }
    }
  }
  return `A string repete ${contador} vezes`
}

console.log(compararStringsIguais(string));