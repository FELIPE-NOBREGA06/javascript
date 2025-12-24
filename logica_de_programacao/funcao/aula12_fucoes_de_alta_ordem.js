/** @format */

/**
 * Função que filtra um array com base em uma função de filtro
 * @param {Array} array - Array original que será percorrido
 * @param {Function} funcaoFiltro - Função que define a regra do filtro
 * @returns {Array} - Retorna um novo array com os elementos filtrados
 */
function filtrarArray(array, funcaoFiltro) {
  // Cria um novo array vazio para armazenar os valores filtrados
  let arrayFiltrado = [];

  // Percorre cada elemento do array original
  for (let elemento of array) {
    // Executa a função de filtro para o elemento atual
    // Se retornar true, o elemento é adicionado ao novo array
    if (funcaoFiltro(elemento)) {
      arrayFiltrado.push(elemento);
    }
  }

  // Retorna o array contendo apenas os elementos aprovados no filtro
  return arrayFiltrado;
}

/**
 * Função que verifica se um número é par
 * @param {number} numero - Número a ser verificado
 * @returns {boolean} - Retorna true se for par e false se for ímpar
 */
function ePar(numero) {
  // Um número é par quando o resto da divisão por 2 é zero
  return numero % 2 === 0;
}

/**
 * Função que verifica se um número é maior que 10
 * @param {number} numero - Número a ser avaliado
 * @returns {boolean} - Retorna true se o número for maior que 10
 */
function maiorQueDez(numero) {
  // Retorna true apenas se o número for maior que 10
  return numero > 10;
}

// Cria um array de números para testes
let numeros = [1, 2, 3, 4, 21, 12, 43];

// Usa a função filtrarArray para obter apenas os números pares
let numerosPares = filtrarArray(numeros, ePar);

// Usa a função filtrarArray para obter apenas os números maiores que 10
let numerosMaioresQueDez = filtrarArray(numeros, maiorQueDez);

// Exibe no console os números pares encontrados
console.log(numerosPares);

// Exibe no console os números maiores que 10
console.log(numerosMaioresQueDez);

/**
 * Função que aplica uma operação a cada elemento de um array
 * @param {Array} numeros - Array de números que será transformado
 * @param {Function} operacao - Função que define a transformação
 * @returns {Array} - Retorna um novo array com os valores transformados
 */
function aplicarOperacao(numeros, operacao) {
  // Cria um array vazio para armazenar os resultados
  let resultado = [];

  // Percorre cada número do array recebido
  for (let numero of numeros) {
    // Aplica a operação ao número atual e salva o resultado
    resultado.push(operacao(numero));
  }

  // Retorna o array com os valores após a operação
  return resultado;
}

/**
 * Função que dobra um valor numérico
 * @param {number} valor - Valor a ser dobrado
 * @returns {number} - Retorna o valor multiplicado por 2
 */
function dobrar(valor) {
  // Multiplica o valor por 2
  return valor * 2;
}

/**
 * Função que incrementa um valor numérico em 1
 * @param {number} valor - Valor a ser incrementado
 * @returns {number} - Retorna o valor acrescido de 1
 */
function incrementar(valor) {
  // Soma 1 ao valor recebido
  return valor + 1;
}

// Cria um array de números para aplicar as operações
let array_numeros = [1, 2, 3, 4, 5];

// Aplica a função dobrar a cada elemento do array
let numerosDobrado = aplicarOperacao(array_numeros, dobrar);

// Aplica a função incrementar a cada elemento do array
let numeroIncrementado = aplicarOperacao(array_numeros, incrementar);

// Exibe no console o array com os números dobrados
console.log(numerosDobrado);

// Exibe no console o array com os números incrementados
console.log(numeroIncrementado);
