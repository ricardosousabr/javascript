function verificadorPrimo(valor) {
  for (i = 2; i < valor; i++){
    if (valor % i === 0 ){
      console.log("Divisivel")
    }
    else {
      console.log(valor)
    }
  }
};

return verificadorPrimo(15);