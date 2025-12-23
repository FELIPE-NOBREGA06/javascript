// Cria uma função arrow chamada multiplicar
// Ela recebe dois números (num1 e num2) e retorna o resultado da multiplicação
const multiplicar = (num1, num2) => num1 * num2;

// Chama a função multiplicar passando os valores 5 e 3
// O resultado da multiplicação é armazenado na variável resultado
let resultado = multiplicar(5, 3);

// Exibe o resultado da multiplicação no console
console.log(resultado);

// Cria um array chamado numeros com vários valores numéricos
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

// Usa o método filter para criar um novo array apenas com os números ímpares
// A função arrow recebe cada número do array
// numero % 2 !== 0 verifica se o número NÃO é divisível por 2 (ou seja, é ímpar)
const impares = numeros.filter((numero) => numero % 2 !== 0);

// Exibe no console o array contendo apenas os números ímpares
console.log(impares);

const frutas = ["maça", "banana", "cereja", "damasco"];
const frutasMaiusculas = frutas.map((fruta) => fruta.toUpperCae());

console.log(frutasMaiusculas);
