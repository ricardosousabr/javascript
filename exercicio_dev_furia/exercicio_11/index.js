function valorParImpar(valor) {
 let resultado = valor % 2;
  if (resultado === 0) {
    console.log(valor, "Número par")
    return valor,  "Número par";
  }
  else {
    return valor, "Número e ímpar";
  };
};

console.log(valorParImpar(4))