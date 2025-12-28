const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let votos = [0, 0, 0, 0];

function iniciarVotacao() {
  console.log("\nVote nos candidatos digitando:");
  console.log("1 - Candidato 1");
  console.log("2 - Candidato 2");
  console.log("3 - Candidato 3");
  console.log("4 - Voto Nulo");
  console.log("0 - Encerrar votação e mostrar resultados\n");

  coletarVotos();
}

function coletarVotos() {
  rl.question("Digite o número do seu voto: ", function (numero) {
    numero = parseInt(numero);

    if (numero === 0) {
      mostrarResultado();
      determinarVencedor();
    } else if (numero >= 1 && numero <= 4) {
      votos[numero - 1]++;

      console.log(
        numero === 4
          ? "Voto nulo registrado\n"
          : `Voto registrado para o candidato ${numero}\n`
      );

      coletarVotos();
    } else {
      console.log("Opção inválida!\n");
      coletarVotos();
    }
  });
}

function mostrarResultado() {
  console.log("\nResultados da votação:");

  for (let i = 0; i < 3; i++) {
    console.log(`Candidato ${i + 1}: ${votos[i]} votos`);
  }

  console.log(`Votos nulos: ${votos[3]} votos`);

  rl.close();
}

function determinarVencedor() {
  let maxVotos = 0;
  let vencedor = -1;

  for (let i = 0; i < 3; i++) {
    if (votos[i] > maxVotos) {
      maxVotos = votos[i];
      vencedor = i;
    }
  }

  if (vencedor !== -1 && maxVotos > 0) {
    console.log(
      `\nO vencedor é o candidato ${vencedor + 1} com ${maxVotos} votos`
    );
  } else {
    console.log("\nNão houve vencedor");
  }
}

// Inicia o programa
iniciarVotacao();
