const array = [5, 80, 464, 80, 80];

function verificarValores(array) {
  let contador
  for (i = 0; i < array.length; i++){
    contador = 1
    for (j = 0; j < array.length; j++){
      if (array[i] === array[j] && i != j){
        array.splice(j, 1);
        j--
        contador++
      }
    }
    console.log(`${array[i]} se repete ${contador} vezes`)
  }
}

verificarValores(array);

/*

`${array[i]} se repete ${contador} vezes`  => Template string
array[i] + ' se repete ' + contador + ' vezes'  => Concatenção normal
*/