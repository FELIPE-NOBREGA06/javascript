/** @format */
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Insira uma nota de 0 a 100", (nota) => {
  const notaNumerica = parseFloat(nota);
  let resultado;

  const categoria = Math.floor(notaNumerica / 10){
});
