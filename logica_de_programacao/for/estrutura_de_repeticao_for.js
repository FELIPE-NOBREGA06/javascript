/** @format */

// =======================================================
// EXEMPLO 1 – CONTAGEM CRESCENTE DE 1 ATÉ 5
// =======================================================

// Inicialização da variável de controle do loop.
// A variável 'i' será responsável por controlar quantas
// vezes o laço será executado.
// Começamos com i = 1 porque queremos iniciar a contagem
// a partir do número 1.
for (
  let i = 1;
  // Condição de continuação do loop.
  // O laço continuará sendo executado enquanto 'i'
  // for menor ou igual a 5.
  // Quando 'i' se tornar maior que 5, o loop será encerrado.
  i <= 5;
  // Incremento do contador.
  // Após cada execução do bloco do loop,
  // o valor de 'i' será incrementado em 1.
  // Isso permite avançar para o próximo número da sequência.
  i++
) {
  // Corpo do loop.
  // Aqui está o código que será executado repetidamente
  // enquanto a condição (i <= 5) for verdadeira.
  // O console.log exibe o valor atual de 'i' no console.
  console.log("Numero " + i + ":" + i);
}

// =======================================================
// EXEMPLO 2 – CONTAGEM REGRESSIVA DE 5 ATÉ 1
// =======================================================

// Neste loop, a lógica é parecida com o anterior,
// porém agora fazemos uma contagem regressiva.
for (
  let i = 5; // Inicializamos o contador com 5
  // O loop continuará enquanto 'i' for maior ou igual a 1
  i >= 1;
  // A cada repetição, diminuímos 1 do valor de 'i'
  // Isso faz a contagem andar para trás
  i--
) {
  // Exibe no console o valor atual do contador
  console.log("Numero " + i + ":" + i);
}

// =======================================================
// EXEMPLO 3 – SOMA DOS NÚMEROS DE 1 ATÉ 5
// =======================================================

// Criamos a variável 'soma' e inicializamos com 0.
// Isso é essencial porque vamos acumular valores.
// Se não começarmos com 0, o resultado estará incorreto.
let soma = 0;

// Este loop percorre os números de 1 até 5
for (
  let i = 1; // Começa do número 1
  // O loop continua enquanto 'i' for menor ou igual a 5
  i <= 5;
  // Incrementa 'i' em 1 a cada repetição
  i++
) {
  // Dentro do loop, somamos o valor atual de 'i' à variável 'soma'.
  // A expressão "soma += i" é equivalente a:
  // soma = soma + i
  // Isso faz com que 'soma' acumule os valores ao longo das repetições.
  soma += i;
}

// Após o término do loop, exibimos o valor final da soma.
// Nesse caso: 1 + 2 + 3 + 4 + 5 = 15
console.log(`A soma dos números de 1 a 5 é: ${soma}`);

// =======================================================
// EXEMPLO 4 – TABELA DE MULTIPLICAÇÃO (LOOP DENTRO DE LOOP)
// =======================================================

// Definimos o tamanho da tabela.
// Esse valor será usado como limite para os loops.
// Neste caso, a tabela irá de 1 até 9.
const tamanhoTabela = 10;

// Loop externo:
// Este loop controla o número principal da tabuada.
// Cada repetição representa uma nova linha da tabela.
for (
  let i = 1; // Inicializamos i com 1
  i < tamanhoTabela; // O loop executa enquanto i for menor que 10
  i++ // Incrementamos i em 1 a cada repetição
) {
  // Loop interno:
  // Este loop controla o multiplicador.
  // Para cada valor de i, o loop interno percorre
  // todos os valores de j.
  for (
    let j = 1; // Inicializamos j com 1
    j < tamanhoTabela; // j vai de 1 até 9
    j++ // Incrementamos j a cada repetição
  ) {
    // Exibimos no console a multiplicação atual.
    // Exemplo: "2 x 3 = 6"
    // A variável i representa o multiplicando
    // A variável j representa o multiplicador
    console.log(i + " x " + j + " = " + i * j);
  }

  // Linha em branco após cada tabuada
  // Isso melhora a visualização no console,
  // separando uma tabuada da outra.
  console.log("");
}
