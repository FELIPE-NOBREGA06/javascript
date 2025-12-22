const readline = require("readline");
// Importa o módulo readline para permitir entrada de dados pelo terminal
const readline = require("readline");

// Cria a interface de entrada (teclado) e saída (console)
const r1 = readline.createInterface({
  input: process.stdin, // Define o teclado como entrada padrão
  output: process.stdout, // Define o console como saída padrão
});

// Exibe uma pergunta no terminal e aguarda o usuário digitar um valor
r1.question("Por favor, insira um número: ", (numero) => {
  // Converte o valor digitado (string) para número inteiro
  const numeroNumerico = parseInt(numero);

  // Verifica se o número é par usando o operador módulo (%)
  // Se o resto da divisão por 2 for 0, o número é par
  if (numeroNumerico % 2 === 0) {
    console.log("O número " + numeroNumerico + " é par");
  } else {
    // Caso o resto da divisão por 2 não seja 0, o número é ímpar
    console.log("O número " + numeroNumerico + " é ímpar");
  }

  // Fecha a interface readline após o uso
  r1.close();
});
