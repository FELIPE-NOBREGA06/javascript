/** @format */

// =======================================================
// EXEMPLO 1 – FUNÇÃO PARA SOMAR DOIS NÚMEROS
// =======================================================

// Definimos uma função chamada 'somar'.
// Funções servem para agrupar um bloco de código
// que pode ser reutilizado sempre que necessário.
function somar(a, b) {
  // Os parâmetros 'a' e 'b' recebem os valores
  // que são passados quando a função é chamada.
  // Aqui retornamos a soma desses dois valores.
  return a + b;
}

// Chamamos a função 'somar' passando os valores 5 e 3.
// O valor retornado pela função será armazenado
// na variável 'resultado'.
let resultado = somar(5, 3);

// Exibimos no console o resultado da soma.
console.log(resultado);

// =======================================================
// EXEMPLO 2 – FUNÇÃO PARA VERIFICAR SE UM NÚMERO
// É PAR OU ÍMPAR
// =======================================================

// Definimos uma função chamada 'verificarParOuImpar'.
// Essa função recebe um número e verifica se ele é par ou ímpar.
function verificarParOuImpar(numero) {
  // Utilizamos o operador módulo (%),
  // que retorna o resto da divisão.
  // Se o resto da divisão por 2 for igual a 0,
  // o número é considerado par.
  if (numero % 2 === 0) {
    return "Par"; // Retorna "Par" se a condição for verdadeira
  } else {
    return "Ímpar"; // Retorna "Ímpar" caso contrário
  }
}

// Chamamos a função passando o número 4.
// O retorno da função será armazenado na variável 'resultado1'.
let resultado1 = verificarParOuImpar(4);

// Chamamos a função passando o número 7.
// O retorno da função será armazenado na variável 'resultado2'.
let resultado2 = verificarParOuImpar(7);

// Exibimos os resultados no console de forma descritiva.
console.log(`O número 4 é ${resultado1}`);
console.log(`O número 7 é ${resultado2}`);

// =======================================================
// EXEMPLO 3 – FUNÇÃO PARA EXIBIR UMA SAUDAÇÃO PERSONALIZADA
// =======================================================

// Definimos uma função chamada 'saudar'.
// Essa função recebe um nome como parâmetro
// e retorna uma mensagem de saudação personalizada.
function saudar(nome) {
  // O parâmetro 'nome' recebe o valor informado
  // quando a função é chamada.
  // Aqui concatenamos textos com o valor do nome
  // para formar uma frase completa.
  return "Olá " + nome + "! Seja bem-vindo(a)";
}

// Chamamos a função 'saudar' passando o nome "felipe".
// O valor retornado pela função será armazenado
// na variável 'mensagem'.
let mensagem = saudar("felipe");

// Exibimos no console a mensagem retornada pela função.
console.log(mensagem);

let teste = 1;
