function tipoDeUsuario(){
  if (document.body.offsetWidth <= 576 ) {
    return "Uruário de Celular"
  }
}

console.log(tipoDeUsuario())