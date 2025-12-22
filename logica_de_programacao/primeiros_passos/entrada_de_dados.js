// Importa o módulo 'readline' do Node.js
// Esse módulo permite ler dados digitados pelo usuário no terminal
const readline = require("readline");

// Cria uma interface de leitura e escrita no terminal
// 'input' define de onde os dados serão lidos (teclado)
// 'output' define onde as mensagens serão exibidas (terminal)
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Exibe uma pergunta no terminal e aguarda a resposta do usuário
// O texto entre aspas será mostrado para o usuário
r1.question("Qual é o seu nome ? ", (resposta) => {
  // Exibe no console uma mensagem de saudação
  // Usa template string para inserir o nome digitado
  console.log(`Olá, ${resposta}`);

  // Fecha a interface de leitura
  // Encerra a entrada de dados no terminal
  r1.close();
});
