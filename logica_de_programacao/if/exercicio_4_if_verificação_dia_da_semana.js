// Importa o módulo readline, que permite ler dados digitados no terminal
const readline = require("readline");

// Cria a interface de entrada e saída do terminal
const r1 = readline.createInterface({
  input: process.stdin, // Define o teclado como entrada
  output: process.stdout, // Define o console como saída
});

// Exibe uma pergunta no terminal e aguarda a resposta do usuário
r1.question(
  "Insira um número representando um dia da semana (1 = domingo, 2 = segunda, etc): ",
  (numero) => {
    // Converte o valor digitado (string) para um número inteiro
    const dia = parseInt(numero);

    // Verifica qual número foi informado e mostra o dia correspondente
    if (dia === 1) {
      console.log("O dia é domingo");
    } else if (dia === 2) {
      console.log("O dia é segunda-feira");
    } else if (dia === 3) {
      console.log("O dia é terça-feira");
    } else if (dia === 4) {
      console.log("O dia é quarta-feira");
    } else if (dia === 5) {
      console.log("O dia é quinta-feira");
    } else if (dia === 6) {
      console.log("O dia é sexta-feira");
    } else if (dia === 7) {
      console.log("O dia é sábado");
    } else {
      // Caso o número digitado não esteja entre 1 e 7
      console.log("Número inválido. Digite um valor de 1 a 7.");
    }

    // Fecha a interface readline após a execução
    r1.close();
  }
);
