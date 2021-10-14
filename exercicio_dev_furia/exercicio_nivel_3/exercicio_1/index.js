function verificadorPrimo(valor) {
  for (i = 2; i < valor; i++){
    if (valor / i === valor/(valor/2)){
      console.log("true")
    }
    else {
      console.log("false")
    }
  }
};

return verificadorPrimo(14);