// =====================================================
// MATRIZ INICIAL
// =====================================================
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Acessando o elemento da linha 1, coluna 1 (índice começa em 0)
let elemento = matriz[1][1];
console.log(elemento); // 5

// Alterando o valor da posição [0][0]
matriz[0][0] = 10;

// Adicionando uma nova linha à matriz
matriz.push([10, 11, 12]);

// Adicionando o número 13 ao final de cada linha
matriz.forEach((linha) => {
  linha.push(13);
});

// Exibindo a matriz formatada
console.log("Matriz atual:");
matriz.forEach((linha) => console.log(linha.join(" ")));

// =====================================================
// SOMA DOS ELEMENTOS DA MATRIZ
// =====================================================
let matriz1 = [
  [1, 2],
  [3, 4],
];

let soma = 0;

// Percorre linhas e colunas somando os valores
for (let i = 0; i < matriz1.length; i++) {
  for (let j = 0; j < matriz1[i].length; j++) {
    soma += matriz1[i][j];
  }
}

console.log("A soma dos elementos da matriz é:", soma);

// =====================================================
// MATRIZ TRANSPOSTA
// =====================================================
let matriz2 = [
  [1, 2, 3],
  [4, 5, 6],
];

let transposta = [];

// Inverte linhas por colunas
for (let i = 0; i < matriz2[0].length; i++) {
  transposta[i] = [];
  for (let j = 0; j < matriz2.length; j++) {
    transposta[i][j] = matriz2[j][i];
  }
}

console.log("Matriz Transposta:");
transposta.forEach((linha) => console.log(linha.join(" ")));

// =====================================================
// MAIOR ELEMENTO DA MATRIZ
// =====================================================
let matriz3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let max = -Infinity;

// Procura o maior valor da matriz
for (let i = 0; i < matriz3.length; i++) {
  for (let j = 0; j < matriz3[i].length; j++) {
    if (matriz3[i][j] > max) {
      max = matriz3[i][j];
    }
  }
}

console.log("Maior elemento da matriz:", max);

// =====================================================
// ROTACIONAR MATRIZ 90° (sentido horário)
// =====================================================
let matriz5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Criando matriz vazia 3x3
let rotacionada = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// Fórmula da rotação
for (let i = 0; i < matriz5.length; i++) {
  for (let j = 0; j < matriz5.length; j++) {
    rotacionada[j][matriz5.length - 1 - i] = matriz5[i][j];
  }
}

console.log("Matriz rotacionada 90 graus:");
rotacionada.forEach((linha) => console.log(linha.join(" ")));

// =====================================================
// MATRIZ 3x3 PREENCHIDA COM ZERO
// =====================================================
let matriz6 = new Array(3);

for (let i = 0; i < matriz6.length; i++) {
  matriz6[i] = new Array(3).fill(0);
}

console.log("Matriz 3x3 preenchida com zero:");
matriz6.forEach((linha) => console.log(linha.join(" ")));

// =====================================================
// DIAGONAL PRINCIPAL
// =====================================================
let matriz7 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let diagonalPrincipal = [];

// Elementos onde linha === coluna
for (let i = 0; i < matriz7.length; i++) {
  diagonalPrincipal.push(matriz7[i][i]);
}

console.log("Diagonal Principal:", diagonalPrincipal);

// =====================================================
// SOMA DE DUAS MATRIZES
// =====================================================
let C = [
  [1, 2],
  [3, 4],
];

let D = [
  [5, 6],
  [7, 8],
];

let somaMatrizes = [
  [0, 0],
  [0, 0],
];

// Soma elemento por elemento
for (let i = 0; i < C.length; i++) {
  for (let j = 0; j < C[i].length; j++) {
    somaMatrizes[i][j] = C[i][j] + D[i][j];
  }
}

console.log("Soma das matrizes:");
somaMatrizes.forEach((linha) => console.log(linha.join(" ")));

// =====================================================
// MATRIZ BIDIMENSIONAL
// =====================================================
let matrizBidimensional = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrizBidimensional[1][2]); // 6

matrizBidimensional[2][0] = 0;

console.log("Matriz bidimensional modificada:");
matrizBidimensional.forEach((linha) => console.log(linha.join(" ")));

// =====================================================
// MATRIZ TRIDIMENSIONAL
// =====================================================
let matrizTridimensional = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

// Acessando elemento
console.log(matrizTridimensional[1][0][2]); // 9

// Alterando valor
matrizTridimensional[0][0][2] = 20;

console.log("Matriz tridimensional modificada:");
matrizTridimensional.forEach((bloco, index) => {
  console.log(`Bloco ${index}:`);
  bloco.forEach((linha) => console.log(linha.join(" ")));
});
