/** @format */

// Importa o módulo readline, usado para ler dados do teclado
const readline = require("readline");

// Cria a interface de entrada (teclado) e saída (terminal)
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicita ao usuário um número de 1 a 12 representando um mês
r1.question("Insira um número de 1 a 12 para representar um mês: ", (mes) => {
  // Converte o valor digitado (string) para número inteiro
  const mesNumerico = parseInt(mes);

  // Variável que armazenará a estação do ano correspondente
  let estacao;

  /*
    Estrutura switch:
    Verifica o mês informado e associa à estação do ano
  */
  switch (mesNumerico) {
    case 12:
    case 1:
    case 2:
      // Meses de verão
      estacao = "Verão";
      break;

    case 3:
    case 4:
    case 5:
      // Meses de outono
      estacao = "Outono";
      break;

    case 6:
    case 7:
    case 8:
      // Meses de inverno
      estacao = "Inverno";
      break; // ← correção importante

    case 9:
    case 10:
    case 11:
      // Meses de primavera
      estacao = "Primavera";
      break;

    default:
      // Caso o número informado não esteja entre 1 e 12
      estacao = "Número inválido. Por favor, insira um número válido.";
  }

  // Exibe a estação do ano correspondente ao mês informado
  console.log(`A estação do ano é: ${estacao}`);

  // Encerra a interface readline (boa prática)
  r1.close();
});
