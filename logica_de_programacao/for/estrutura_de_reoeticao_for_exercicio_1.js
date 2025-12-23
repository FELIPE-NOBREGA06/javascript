/** @format */

// =======================================================
// EXEMPLO – LAÇO FOR COM CONTAGEM DE 1 ATÉ 10
// =======================================================

for (
  let i = 1; // 1️⃣ Inicialização:
  // Criamos a variável 'i' e iniciamos com o valor 1.
  // Essa variável será usada como contador do loop.

  i <= 10; // 2️⃣ Condição:
  // O loop continuará sendo executado enquanto
  // o valor de 'i' for menor ou igual a 10.
  // Quando 'i' passar a valer 11, o loop será encerrado.

  i++ // 3️⃣ Incremento: // Após cada execução do bloco do loop,
) // o valor de 'i' será incrementado em 1.
// Isso garante que o contador avance corretamente.
{
  // 4️⃣ Corpo do loop:
  // Este código será executado repetidamente enquanto
  // a condição (i <= 10) for verdadeira.
  // Aqui exibimos no console o número atual da iteração.
  console.log(`Número atual ${i}`);
}
f;
