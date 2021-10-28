const dadosPesoais = {
  nome: "Ricardo",
  idade: 19,
  cidade: "Teresina",
  estado_Civil: "Solteiro",
  profissão: "Programador",

  cumprimento: function cumprimentaUsuario(){
    return`Ola ${dadosPesoais.nome}`
  }
}

console.log(dadosPesoais.cumprimento())
