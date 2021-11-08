function tipoDeUsuario(pixels){
  if (document.body.offsetWidth <= pixels) {
    return "Uruário de Celular"
  }
}

console.log(tipoDeUsuario(576))