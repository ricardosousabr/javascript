function delta (a, b, c) {
  return b * b - 4 * a * c
}

function raiz1(a, b, c) {
  return (-b + Math.sqrt(delta(a, b, c))) / 2 * a;
}
function raiz2(a, b, c) {
  return (-b - Math.sqrt(delta(a, b, c))) / 2 * a;
}

console.log(delta(1, 0, -16))
console.log(raiz1(1, 0, -16))
console.log(raiz2(1, 0, -16))