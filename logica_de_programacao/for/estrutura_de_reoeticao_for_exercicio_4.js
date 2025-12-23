/** @format */

// =======================================================
// EXEMPLO – TABUADA COM ENTRADA DE DADOS PELO TERMINAL
// USANDO O MÓDULO READLINE (NODE.JS)
// =======================================================

// Importamos o módulo 'readline', que permite
// ler dados digitados pelo usuário no terminal.
const readline = require("readline");

// Criamos a interface de leitura.
// Essa interface conecta a entrada (teclado)
// e a saída (console) do programa.
const r1 = readline.createInterface({
  input: process.stdin, // Define o teclado como entrada de dados
  output: process.stdout, // Define o console como saída de dados
});

// Utilizamos o método question para exibir uma pergunta
// no terminal e capturar o valor digitado pelo usuário.
r1.question("Digite o número para a tabuada: ", function (num) {
  // O valor digitado pelo usuário chega como STRING.
  // Aqui convertemos esse valor para número inteiro.
  num = parseInt(num);

  // Verificamos se o valor digitado é realmente um número.
  // A função isNaN retorna true se NÃO for um número.
  if (!isNaN(num)) {
    // Se for um número válido, iniciamos o laço for
    // para gerar a tabuada de 1 até 10.
    for (
      let i = 1; // Começa a multiplicação pelo número 1
      i <= 10; // Vai até o número 10
      i++ // Incrementa i de 1 em 1
    ) {
      // Calculamos o produto da multiplicação
      // entre o número digitado e o valor de i.
      let produto = num * i;

      // Exibimos o resultado da multiplicação no console.
      // Exemplo: 5 x 3 = 15
      console.log(`${num} x ${i} = ${produto}`);
    }
  } else {
    // Caso o valor digitado não seja um número,
    // exibimos uma mensagem de erro.
    console.log("Por favor, digite um número válido");
  }

  // Encerramos a interface readline.
  // Isso é importante para finalizar o programa corretamente.
  r1.close();
});
