const string = "Desenvolvedor"

function inverterString(string){
  let stringInvertido = ""
  for (i = string.length - 1; i >= 0; i--){
   stringInvertido += string[i]
  }
  return stringInvertido;
}

console.log(inverterString(string))