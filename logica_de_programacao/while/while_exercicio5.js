/** @format */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jogadaComputador() {
  const escolhas = ["pedra", "papel", "tesoura"];
  const indice = Math.floor(Math.random() * 3);
  return escolhas[indice];
}

function determinarVencedor(jogadaUsuario, jogadaPc) {
  if (jogadaUsuario === jogadaComputador) {
    return "Empate";
  }

  if (
    (jogadaUsuario === "Pedra" && jogadaPc === "tesoura") ||
    (jogadaUsuario === "tesoura" && jogadaPc === "papel") ||
    (jogadaUsuario === "papel" && jogadaPc === "pedra")
  ) {
    return "VocÊ venceu";
  }
  return "Computador venceu";
}

function jogar() {
  readline.question(
    'Escolha pedra, papel ou tesoura (digite "sair para encerrar"): ',
    (jogadaUsuario) => {
      jogadaUsuario = jogadaUsuario.toLowerCase();

      if (jogadaUsuario === "sair") {
        console.log("jogo encerrado!");
        readline.close();
        return;
      }

      const jogadaPc = jogadaComputador();
      console.log(`computador escolheu: ${jogadaPc} `);

      console.log(determinarVencedor(jogadaUsuario, jogadaPc));

      jogar();
    }
  );
}

jogar();
