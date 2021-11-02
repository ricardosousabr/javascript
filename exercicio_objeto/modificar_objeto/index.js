const dadosPessoais = {
  nome: "Ricardo",
  sobrenome: "Sousa",
  idade: 19,
  exibirDados: function(nome, sobrenome){
    console.log(nome + " " + sobrenome)
  }
}

console.log(dadosPessoais.exibirDados(dadosPessoais.nome, dadosPessoais.sobrenome))

const carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
}

carro.preco = 3000
console.log(carro)

const cachorro = {
  raça: "labrador",
  idade: 10,

  latir: (pessoa) =>{
    if (pessoa === "homem") {
      console.log("Latir")
    }
  }
}

console.log(cachorro.latir("homem"))

const preferencias = {
  livro: "O Olho do Mundo",
  jogo: "Horizon Zero Danw",
  estudar: "Programação",
  filme: "Homen-aranha"
}

console.log(preferencias.livro.toLowerCase())
console.log(preferencias.jogo.toUpperCase())
console.log(preferencias.estudar.replace("Programação", "Desenvolvimento"))