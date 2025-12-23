// Define uma função chamada calcularMedia que recebe três números como parâmetros
const calcularMedia = function (num1, num2, num3) {
  // Calcula a média somando os três números e dividindo por 3
  let media = (num1 + num2 + num3) / 3;

  // Retorna o valor da média calculada
  return media;
};

// Chama a função calcularMedia passando os valores 10, 20 e 30
// O resultado é armazenado na variável media1
let media1 = calcularMedia(10, 20, 30);

// Chama a função calcularMedia passando os valores 5, 15 e 25
// O resultado é armazenado na variável media2
let media2 = calcularMedia(5, 15, 25);

// Chama a função calcularMedia passando os valores 1, 2 e 3
// O resultado é armazenado na variável media3
let media3 = calcularMedia(1, 2, 3);

// Exibe no console a média dos números 10, 20 e 30
console.log(`A média dos números 10, 20, 30 é: ${media1}`);

// Exibe no console a média dos números 5, 15 e 25
console.log(`A média dos números 5, 15, 25 é: ${media2}`);

// Exibe no console a média dos números 1, 2, 3
console.log(`A média dos números 1, 2, 3 é: ${media3}`);
