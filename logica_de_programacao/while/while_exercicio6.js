/** @format */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const palavras = [
  "javascript",
  "nodejs",
  "programacao",
  "computador",
  "internet",
];

const palavraScreta = palavras[Math.floor(Math.random() * palavras.length)];

let palavraDisplay = "_".repeat(palavraScreta.length);

const maxTentativas = 6;

let tentativasErradas = 0;

function solicitarLetra() {
  console.log(`palavra: ${palavraDisplay}`);

  if (tentativasErradas < maxTentativas) {
    readline.question("adivinhe uma lebra: ", (letra) => {
      processarJogada(letra.toLowerCase());
    });
  } else {
    console.log("Você exedeu o número máximo de tentativas. game Over!!");

    console.log(`A palavra era: ${palavraScreta}`);

    readline.close();
  }
}

function processarJogada(letra) {
  if (palavraScreta.includes(letra)) {
    atualizarPalavraDisplay(letra);
  } else {
    tentativasErradas++;
    console.log(
      `Letra incorreta . você tem ${maxTentativas - tentativasErradas}`
    );
  }

  if (palavraDisplay === palavraScreta) {
    console.log("Parabéns você adivinhou a palavra  ");
    readline.close();
  } else {
    solicitarLetra();
  }
}

function atualizarPalavraDisplay(letra) {
  let resultado = "";
  let i = 0;

  while (i < palavraScreta.length) {
    if (palavraScreta[i] === letra) {
      resultado += letra;
    } else {
      resultado += palavraDisplay[i];
    }
    i++;
  }
  palavraDisplay = resultado;
}

solicitarLetra();
