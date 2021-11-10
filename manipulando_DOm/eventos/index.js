const classBtn = document.body.querySelector(".btn")
classBtn.addEventListener("click", changeBackground)

function changeBackground() {
  document.body.style.background = document.querySelector(".input_Color").value
}

const titulo = document.body.querySelector(".title")
const valor = document.querySelector(".input_Text").value
const btn_Inserir = document.body.querySelector(".btn_Insertr_Text")

function insertText(){
}

btn_Inserir.addEventListener("click", insertText)