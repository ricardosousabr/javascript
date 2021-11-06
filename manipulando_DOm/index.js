const localdohref = window.location.href
const linguagemDoNavegdor = navigator.language
const alturaDaPagina =  window.screen.height
const larguraDaPagina = window.screen.width

const mensagem = "Ola mundo"

function mudarCor(mensagem){
  document.querySelector(".ativo").addEventListener("click", function(h1){
    console.log(mensagem)
  });
}

console.log(mudarCor(mensagem))