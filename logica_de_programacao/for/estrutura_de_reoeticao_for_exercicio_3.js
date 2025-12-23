/** @format */

// =======================================================
// EXEMPLO – CÁLCULO DE FATORIAL USANDO LAÇO FOR
// =======================================================

// Definimos a variável 'num'.
// Este valor representa o número do qual
// queremos calcular o fatorial.
// Neste exemplo: 5! (fatorial de 5)
let num = 5;

// Criamos a variável 'fatorial' e iniciamos com 1.
// O valor inicial é 1 porque:
// - O fatorial é uma multiplicação
// - Se começássemos com 0, todo o resultado seria 0
let fatorial = 1;

// Laço for responsável por realizar a multiplicação
// dos números de 1 até o valor armazenado em 'num'
for (
  let i = 1; // 1️⃣ Inicialização:
  // Criamos a variável 'i' começando em 1,
  // pois o fatorial inicia multiplicando por 1.

  i <= num; // 2️⃣ Condição:
  // O loop continuará enquanto 'i'
  // for menor ou igual a 'num'.
  // Neste caso, enquanto i ≤ 5.

  i++ // 3️⃣ Incremento: // A cada repetição, 'i' é incrementado em 1,
) // avançando para o próximo número da sequência.
{
  // 4️⃣ Corpo do loop:
  // Aqui multiplicamos o valor atual de 'fatorial'
  // pelo valor atual de 'i'.
  // Isso é equivalente a: fatorial = fatorial * i
  fatorial *= i;
}

// Após o término do loop, exibimos o resultado final.
// Para num = 5, o cálculo é:
// 5! = 1 × 2 × 3 × 4 × 5 = 120
console.log(`O fatorial de ${num} é ${fatorial}`);
