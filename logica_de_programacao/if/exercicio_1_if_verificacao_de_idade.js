// Importa o módulo readline (correto)
const readline = require("readline");

// Cria a interface de leitura do terminal
const r1 = readline.createInterface({
  input: process.stdin, // entrada padrão (teclado)
  output: process.stdout, // saída padrão (console)
});

// Pergunta a idade do usuário
r1.question("Por favor, insira sua idade: ", (idade) => {
  // Converte a idade de string para número inteiro
  const idadeNumerica = parseInt(idade);

  // Verifica se é maior ou menor de idade
  if (idadeNumerica >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Você é menor de idade");
  }

  // Fecha a interface readline
  r1.close();
});
