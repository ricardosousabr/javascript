var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function btn () {
  for (i = 0; i < array.length; ++i){
    var result = array[i] % 2;
    if (result === 1) {
      console.log(array[i])
    }
  }
}

var lolRanking = 50;
var lolNivel = "Prata";

if (lolRanking >= 50 && lolNivel === "Prata") {
  console.log("Aprovado")
}
else {
  console.log("Reprovado")
};

var multiplesOfThree = 3;
var multiplesOfFive = 5;

  if (multiplesOfThree % 3 === 0 && multiplesOfFive % 5 ===0){
    console.log(multiplesOfThree)
    console.log(multiplesOfFive)
  };