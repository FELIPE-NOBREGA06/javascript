/** @format */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite um número para contar até: ", (numeroMaximo) => {
  numeroMaximo = parseInt(numeroMaximo);

  if (Isnan(numeroMaximo)) {
    consele.log("Por favor, digite um número válido ");

    readline.close();

    return;
  }

  let numeroAtual = 1;

  while (numeroAtual <= numeroMaximo) {
    console.log(numeroAtual);

    numeroAtual++;
  }
});
