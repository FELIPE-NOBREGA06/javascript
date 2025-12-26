/** @format */

let soma = 0;

let numero = 1;

while (numero <= 100) {
  if (numero % 2 === 0) {
    soma += numero;
  }

  numero++;
}

console.log("A soma dos número pares    de 1 até 100 é: ", soma);
