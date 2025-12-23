/** @format */

// =======================================================
// EXEMPLO – SOMA DOS NÚMEROS DE 1 ATÉ 100
// =======================================================

// Criamos a variável 'soma' e iniciamos com o valor 0.
// Essa variável será responsável por armazenar
// o resultado acumulado da soma dos números.
let soma = 0;

// Laço for responsável por percorrer os números de 1 até 100
for (
  let i = 1; // 1️⃣ Inicialização:
  // Criamos a variável 'i' começando em 1,
  // pois a soma deve iniciar no número 1.

  i <= 100; // 2️⃣ Condição:
  // O loop continuará sendo executado
  // enquanto 'i' for menor ou igual a 100.
  // Isso garante exatamente 100 repetições.

  i++ // 3️⃣ Incremento: // A cada repetição, o valor de 'i' é aumentado em 1,
) // permitindo avançar para o próximo número da sequência.
{
  // 4️⃣ Corpo do loop:
  // Aqui adicionamos o valor atual de 'i' à variável 'soma'.
  // O operador '+=' soma e atribui o resultado à própria variável.
  // Isso é o mesmo que escrever: soma = soma + i
  soma += i;
}

// Após o término do loop, exibimos o valor final da soma.
// O resultado correto da soma de 1 até 100 é 5050.
console.log(`A soma dos números de 1 a 100 é: ${soma}`);
