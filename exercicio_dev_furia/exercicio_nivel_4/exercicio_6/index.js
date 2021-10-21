const string = "Ricardo342423423432423432423"

function contadorCaracteres(string){
  let resultado = 0
  for (i = 0; i < string.length; i++){
    resultado++
  }
  return `Essa string possui ${resultado} caracteres`
}

console.log(contadorCaracteres(string))