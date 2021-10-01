var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function btn () {
  for (i = 0; i < array.length; ++i){
    var result = array[i] % 2;
    if (result === 1) {
      console.log(array[i])
    }
  }
}


var idade = 19;
var pessoa = idade > 18 ? 'maior de idade' : 'menor de idade;'
console.log(pessoa);

var lolRanking = 50;
var lolNivel = "Prata";


var verificaçãoDeRanking = lolRanking >= 50 ? true : false;
var verificaçãoDeNivel = lolNivel === "Prata" ? true : false;
var resultado = verificaçãoDeRanking && verificaçãoDeNivel;
var resultado = verificaçãoDeRanking === verificaçãoDeNivel ? "Aprovado" : "Reprovado"; 

console.log(resultado)
