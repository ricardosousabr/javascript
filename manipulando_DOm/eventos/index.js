const classBtn = document.body.querySelector(".btn")
classBtn.addEventListener("click", changeBackground)

function changeBackground() {
  document.body.style.background = document.querySelector(".input_Text").value
}
