// Importa o módulo readline, que permite interação com o usuário pelo terminal
const readline = require("readline");

// Cria a interface de entrada (teclado) e saída (console)
const r1 = readline.createInterface({
  input: process.stdin, // Entrada de dados do usuário
  output: process.stdout, // Saída de dados no terminal
});

// Exibe o menu de opções para o usuário
console.log("Escolha uma opção do menu ");
console.log("1 para pizza");
console.log("2 para hanbúrguer");
console.log("3 para salada");

// Faz a pergunta ao usuário e espera a resposta
r1.question("digite o número da sua escolha ", (escolha) => {
  // Estrutura switch para verificar qual opção foi escolhida
  switch (escolha) {
    // Caso o usuário digite "1"
    case "1":
      console.log("Você escolheu pizza");
      break;

    // Caso o usuário digite "2"
    case "2":
      console.log("Você escolheu hanbúrguer");
      break;

    // Caso o usuário digite "3"
    case "3":
      console.log("Você escolehu salada");
      break;

    // Caso o usuário digite qualquer outro valor
    default:
      console.log("Escolha inválida, por favor escolha novamente ");
  }

  // Fecha a interface readline e encerra o programa
  r1.close();
});
