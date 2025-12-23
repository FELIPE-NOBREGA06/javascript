/** @format */

// =======================================================
// EXEMPLO 1 – FOR SIMPLES (CONTADOR NUMÉRICO)
// =======================================================

// Este laço for é usado quando sabemos exatamente
// quantas vezes o código deve ser executado.
// Aqui, queremos repetir o loop 10 vezes.
for (
  let i = 0; // Inicializamos o contador 'i' com 0
  i < 10; // O loop continua enquanto 'i' for menor que 10
  i++ // A cada repetição, incrementamos 'i' em 1
) {
  // Exibe o valor atual do contador no console.
  // Os valores exibidos serão de 0 até 9.
  console.log(i);
}

// =======================================================
// EXEMPLO 2 – FOR TRADICIONAL PERCORRENDO UM ARRAY
// =======================================================

// Criamos um array chamado 'frutas'.
// Arrays são estruturas que armazenam vários valores
// em uma única variável.
const frutas = ["maça", "banana", "goiaba"];

// Este loop percorre o array usando índices.
// O tamanho do array é obtido com 'frutas.length'.
for (
  let i = 0; // Começamos no índice 0
  i < frutas.length; // O loop vai até o último índice do array
  i++ // Avançamos para o próximo índice
) {
  // Exibimos a posição da fruta (i + 1)
  // e o valor armazenado naquela posição.
  // frutas[i] acessa o elemento do array pelo índice.
  console.log(`fruta ${i + 1} : ${frutas[i]}`);
}

// =======================================================
// EXEMPLO 3 – FOR...OF (PERCORRENDO VALORES DE UM ARRAY)
// =======================================================

// Criamos um array de cores.
const cores = ["vermelho", " azul", "preto"];

// O for...of é utilizado quando queremos percorrer
// diretamente os VALORES de um array,
// sem precisar usar índices.
for (const cor of cores) {
  // A variável 'cor' recebe automaticamente
  // cada elemento do array, um por vez.
  console.log(cor);
}

// =======================================================
// EXEMPLO 4 – FOR...IN (PERCORRENDO PROPRIEDADES DE UM OBJETO)
// =======================================================

// Criamos um objeto chamado 'pessoa'.
// Objetos armazenam dados no formato chave: valor.
const pessoa = {
  nome: "felipe",
  idade: 18,
  cidade: "cuiaba",
};

// O for...in é utilizado para percorrer
// as PROPRIEDADES (chaves) de um objeto.
for (const propriedade in pessoa) {
  // 'propriedade' recebe o nome da chave (ex: nome, idade, cidade)
  // pessoa[propriedade] acessa o valor correspondente à chave
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}

// =======================================================
// EXEMPLO 5 – USO DO BREAK NO LOOP FOR
// =======================================================

// O break é usado para ENCERRAR o loop imediatamente
// quando uma condição específica é atingida.
for (let i = 0; i < 10; i++) {
  // Quando i for exatamente igual a 5,
  // o comando break é executado.
  if (i === 5) {
    break; // Encerra o loop completamente
  }

  // Este console.log só será executado
  // enquanto i for menor que 5.
  console.log(`Loop For com break ${i}`);
}

// =======================================================
// EXEMPLO 6 – USO DO CONTINUE NO LOOP FOR
// =======================================================

// O continue é usado para PULAR uma iteração específica
// do loop, sem encerrá-lo completamente.
for (let i = 0; i < 10; i++) {
  // Quando i for igual a 5,
  // o continue faz o loop pular essa repetição
  // e ir direto para o próximo valor.
  if (i === 5) {
    continue;
  }

  // Este console.log NÃO será executado quando i === 5
  console.log(i);

  // Exibe uma mensagem indicando a iteração atual
  console.log(`Loop for com continue ${i}`);
}
