const readline = require("readline");

const r1 = readline.Interface({
  input: process.stdin,
  input: process.stdout,
});

r1.question("Insira o primeiro número:", (num1) => {
  r1.question("Insira o segundo número:", (num2) => {
    r1.question("Escolha uma operação (+, -, *, /)", (num2) => {});
  });
});
