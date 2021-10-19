function numeroDivisorMaximo(valor1, valor2) {
  for(i = 0; i < valor1; i++){
    if (valor1 % i === 0 && valor2 % i === 0) {
      console.log(i)
    }
  }
}

return numeroDivisorMaximo(60, 10);