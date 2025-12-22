const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Pergunta o primeiro número
r1.question("Insira o primeiro número: ", (primeiroNumero) => {
  // Pergunta o segundo número
  r1.question("Insira o segundo número: ", (segundoNumero) => {
    // Converte as entradas para número
    const num1 = parseFloat(primeiroNumero);
    const num2 = parseFloat(segundoNumero);

    // Verifica se os valores são números válidos
    if (isNaN(num1) || isNaN(num2)) {
      console.log("Por favor, insira apenas números válidos.");
    }
    // Compara os números
    else if (num1 > num2) {
      console.log(`O maior número é: ${num1}`);
    } else if (num2 > num1) {
      console.log(`O maior número é: ${num2}`);
    } else {
      console.log("Os números são iguais.");
    }

    // Fecha a interface
    r1.close();
  });
});
