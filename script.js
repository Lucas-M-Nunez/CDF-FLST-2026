console.log("Hola desde JS");

let num = 0;
let num2 = 0;
let res;
num = 2;
num2 = 4;

function suma() {
  res = num + num2;
  return res
}

function rest() {
  res = num - num2;
  return res
}
function div() {
  res = num / num2;
  return res
}
function mult() {
  res = num * num2;
  return res
}

console.log(suma());