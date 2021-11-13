const classBtn = document.body.querySelector(".btn")
const titulo = document.body.querySelector(".title")
const btn_Inserir = document.body.querySelector(".btn_Insertr_Text")


classBtn.addEventListener("click", changeBackground)


function changeBackground() {
  document.body.style.background = document.querySelector(".input_Color").value
}


function insertText(){
  titulo.innerHTML = document.querySelector(".input_Text").value;
}

btn_Inserir.addEventListener("click", insertText)


function clear(){
  document.querySelector(".input_Text").value = "";
}

btn_Inserir.addEventListener("click", clear)

function moveBtn(){
  classBtn.classList.add("btn_hover")
}

function backBtn(){
  classBtn.classList.remove("btn_hover")
}


classBtn.addEventListener("mouseover", moveBtn)
classBtn.addEventListener("mouseout", backBtn)