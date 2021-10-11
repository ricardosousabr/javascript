const assert = require('assert');

let a = 999;
let b = 555;
let aux = a;

a = b
b = aux;

try {
  assert.equal(555, a);
  assert.equal(999, b);
  console.log("Tudo ok")
} catch(e) {
  console.log(e);
}
