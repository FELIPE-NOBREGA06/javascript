/** @format */

// Importa o módulo readline do Node.js,
// usado para ler dados digitados pelo usuário no terminal
const readline = require("readline");

// Cria a interface de leitura (entrada) e escrita (saída)
const r1 = readline.createInterface({
  input: process.stdin, // Entrada via teclado
  output: process.stdout, // Saída no console
});

// Solicita que o usuário digite um número
r1.question("Por favor, insira um número: ", (numero) => {
  // Converte o valor digitado (string) para número decimal
  const num = parseFloat(numero);

  // Verifica se o número é maior que zero
  if (num > 0) {
    console.log("O número é positivo");

    // Verifica se o número é menor que zero
  } else if (num < 0) {
    console.log("O número é negativo");

    // Caso o número seja exatamente zero
  } else {
    console.log("O número é zero");
  }

  // Encerra a interface de leitura
  r1.close();
});
