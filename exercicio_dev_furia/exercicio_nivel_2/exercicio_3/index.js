function verificadorDeValores(valor) {
  if (valor > 10) {
    return "Valor maior que 10";
  }
  else if (valor === 10) {
    return "Valor igual a 10";
  }
  else {
    return "Valor menor que 10";
  }
}

console.log(verificadorDeValores(9))