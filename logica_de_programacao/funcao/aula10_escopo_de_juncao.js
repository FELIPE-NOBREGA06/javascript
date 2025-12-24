/** @format */

// Variável global
// Pode ser acessada por qualquer função no código
let nome = "Maria";

// ===============================
// Função de saudação
// ===============================
// Acessa a variável global "nome"
function saudar() {
  // Variável local (só existe dentro da função)
  let mensagem = "Olá, ";

  // Concatena a mensagem com o nome
  return mensagem + nome;
}

// Exibe a saudação no console
console.log(saudar());

// ===============================
// Função que cria um contador (closure)
// ===============================
// Essa função cria uma variável local "contador"
function criarContador() {
  let contador = 0; // variável privada

  // Função interna
  // Mesmo após a execução de criarContador,
  // ela ainda consegue acessar a variável "contador"
  function incrementar() {
    contador++; // incrementa o contador
    console.log(contador); // exibe o valor atual
  }

  // Retorna a função interna
  return incrementar;
}

// Cria um contador
const meuContador = criarContador();

// Cada chamada mantém o estado anterior
meuContador(); // 1
meuContador(); // 2
