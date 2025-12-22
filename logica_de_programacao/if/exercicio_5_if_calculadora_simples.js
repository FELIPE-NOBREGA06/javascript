/** @format */

// Importa o módulo readline do Node.js,
// usado para ler dados digitados no terminal
const readline = require("readline");

// Cria a interface de leitura e escrita no terminal
const r1 = readline.createInterface({
  input: process.stdin, // Entrada de dados (teclado)
  output: process.stdout, // Saída de dados (console)
});

// Solicita ao usuário o primeiro número
r1.question("Insira o primeiro número: ", (num1) => {
  // Solicita ao usuário o segundo número
  r1.question("Insira o segundo número: ", (num2) => {
    // Solicita a operação matemática desejada
    r1.question("Escolha uma operação (+, -, *, /): ", (operacao) => {
      // Converte os valores digitados (string) para número decimal
      const numero1 = parseFloat(num1);
      const numero2 = parseFloat(num2);

      // Variável que armazenará o resultado da operação
      let resultado;

      // Verifica se algum dos valores digitados não é um número válido
      if (isNaN(numero1) || isNaN(numero2)) {
        resultado = "Erro: você deve digitar números válidos.";

        // Verifica se a operação escolhida é soma
      } else if (operacao === "+") {
        resultado = numero1 + numero2;

        // Verifica se a operação escolhida é subtração
      } else if (operacao === "-") {
        resultado = numero1 - numero2;

        // Verifica se a operação escolhida é multiplicação
      } else if (operacao === "*") {
        resultado = numero1 * numero2;

        // Verifica se a operação escolhida é divisão
      } else if (operacao === "/") {
        // Evita divisão por zero
        if (numero2 !== 0) {
          resultado = numero1 / numero2;
        } else {
          resultado = "Erro: divisão por zero não é permitida.";
        }

        // Caso a operação digitada não seja válida
      } else {
        resultado = "Operação inválida.";
      }

      // Exibe o resultado final no console
      console.log(`Resultado: ${resultado}`);

      // Encerra a interface de leitura
      r1.close();
    });
  });
});
