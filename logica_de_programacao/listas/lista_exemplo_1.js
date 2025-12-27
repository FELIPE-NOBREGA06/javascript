/** @format */

let lista = ["maça", "Banana", "Cereja"];

lista.push("laranja");
console.log("lista após adicionar laranja: ", lista);

lista[1] = "uva";
console.log("lista após mudar banana para uva: ", lista);

lista.splice(2, 1);
console.log("Lista após remover cereja: ", lista);

console.log("tamanho da lista: ", lista.length);

const temMaca = lista.includes("maça");
console.log("A lista contém maça: ", temMaca);

let numeros = [1, 2, 3];
numeros.splice(2, 0, 3);
console.log("Número com 3 adicionado:", numeros);

numeros.splice(1, 1);
console.log("Número com 2 removido:", numeros);

let frutas = ["maça", "banana", "cereja"];
frutas.forEach(function (item, index) {
  console.log(index, item);
});

let numeros_2 = [1, 2, 3, 4, 5, 6];
let numerosPares = numeros_2.filter((n) => n % 2 === 0);
console.log("números pares: ", numerosPares);

let numeros_3 = [1, 2, 3, 4];
let quadrados = numeros_3.map((n) => n * n);
console.log("Quadrado: ", quadrados);

let numeros_4 = [1, 2, 3, 4];
let soma = numeros_4.reduce((acc, cur) => acc + cur, 0);
console.log("soma:", soma);

let numeros_5 = [5, 12, 8, 130, 44];
let primeiroMaiorDez = numeros_5.find((n) => n > 10);
console.log("Primeiro número maior que dez:", primeiroMaiorDez);

let frutas_2 = ["banana", "maça", "cereja"];
frutas_2.sort();
console.log("Frutas ordenadas: ", frutas_2);

let frutas_3 = ["banana", "maça", "cereja"];
frutas_3.reverse();
console.log("frutas em ordem reversa: ", frutas_3);

let array1 = ["a", "b", "c"];
let array2 = ["d", "e", "f"];
let arrayConcatenado = array1.concat(array2);
console.log("Array concatenado: ", arrayConcatenado);

let idades = [32, 33, 18, 40];
let todosAdultos = idades.every((idade) => idade >= 18);
console.log("Todos são adultos:", todosAdultos);

let idade_2 = [16, 21, 14, 18];

let algumAdulto = idade_2.some((idade_2) => (idade_2) => 18);

console.log("Algum é adulto: ", algumAdulto);

let frutas_4 = ["banana", "maça", "laranja", "uva", "cereja"];

let algumasFrutas = frutas_4.slice(1, 4);

console.log("algumas frutas: ", algumasFrutas);

let frase = "olá, mundo!";

let palavras = frase.split(" ");

console.log("palavras: ", palavras);

let palavras_2 = ["olá", "mundo!"];

let frase_2 = palavras_2.join(" ");

console.log("frase, ", frase_2);
