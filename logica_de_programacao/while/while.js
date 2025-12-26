/** @format */

let contador = 5;

while (contador <= 5) {
  console.log("Contagem atual  " + contador);

  contador++;
}

let contador_2 = 1;

while (true) {
  console.log("While infinito: *** " + contador_2 + "***");

  contador_2++;

  if (contador_2 > 5) {
    break;
  }
}

function condicaoDeParada(valor) {
  return valor <= 5;
}

let contador_4 = 1;

while (condicaoDeParada(contador_4)) {
  console.log("While com uma função de verificação " + contador_4);

  contador_4++;
}

console.log("Contagem finalizada");

let contador_5 = 5;

while (contador_5) {
  console.log("Contador condição Inversa" + contador_5);

  contador_5--;
}

let numero = 0;

let limite = 10;

while (numero < limite && numero % 2 === 0) {
  console.log("While  com múltiplas condições: " + numero);

  numero += 2;
}

console.log("Contagem finalizada:");
