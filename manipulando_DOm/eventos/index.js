const classBtn = document.body.querySelector(".btn")
classBtn.addEventListener("click", changeBackground)

function changeBackground() {
  document.body.style.background = document.querySelector(".input_Color").value
}

const titulo = document.body.querySelector(".title")
const btn_Inserir = document.body.querySelector(".btn_Insertr_Text")

function insertText(){
  titulo.innerHTML = document.querySelector(".input_Text").value;
}

function clear(){
  document.querySelector(".input_Text").value = "";
}

btn_Inserir.addEventListener("click", insertText)
btn_Inserir.addEventListener("click", clear)
