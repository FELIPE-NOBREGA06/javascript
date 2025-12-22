// Importa o módulo 'readline' do Node.js e cria uma interface de leitura
// Essa interface permite entrada (teclado) e saída (terminal)
const readline = require("readline").createInterface({
  input: process.stdin, // Define a entrada como o teclado
  output: process.stdout, // Define a saída como o terminal
});

// Exibe uma pergunta no terminal solicitando o nome do usuário
// O programa fica aguardando o usuário digitar a resposta
readline.question("Por favor, insira seu nome: ", (nome) => {
  // Após o usuário informar o nome, uma segunda pergunta é exibida
  // Solicita a cidade onde o usuário mora
  readline.question("Por favor, insira a cidade onde você mora: ", (cidade) => {
    // Exibe uma mensagem de saudação usando o nome informado
    console.log(`\nOlá, ${nome}!`);

    // Exibe a cidade informada pelo usuário
    console.log(`Você mora na cidade de ${cidade}.`);

    // Fecha a interface do readline
    // Encerra a leitura de dados no terminal
    readline.close();
  });
});
