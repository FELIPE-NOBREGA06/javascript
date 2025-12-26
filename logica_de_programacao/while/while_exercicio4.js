/** @format */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

function advinharNumero() {
  readline.question("Adivinhe um número entre 1 e 100: ", (numeroUsuario) => {
    const numero = parseInt(numeroUsuario);

    if (numero === numeroSecreto) {
      console.log("Parabéns! Você acertou o número 🎉");
      readline.close();
    } else {
      if (numero < numeroSecreto) {
        console.log("Mais alto!");
      } else {
        console.log("Mais baixo!");
      }
      advinharNumero();
    }
  });
}

advinharNumero();
