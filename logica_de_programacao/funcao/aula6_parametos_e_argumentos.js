/** @format */

// ===============================
// Função de saudação personalizada
// ===============================
// Recebe um nome e uma mensagem
// Retorna uma string com a saudação formatada
function saudacaoPersonalizada(nome, mensagem) {
  return `${mensagem}, ${nome}!`;
}

// Chamando a função e armazenando os retornos
let saudacaoParaAlice = saudacaoPersonalizada("Alice", "Bom dia");
let saudacaoParaBob = saudacaoPersonalizada("Bob", "Boa noite");

// Exibindo as saudações no console
console.log(saudacaoParaAlice);
console.log(saudacaoParaBob);

// ===============================
// Função para calcular desconto
// ===============================
// Recebe o valor total da compra e a porcentagem de desconto
// Calcula o valor do desconto e retorna o valor final
function calcularDesconto(valorTotal, porcentagemDesconto) {
  // Calcula quanto será descontado
  let valorDesconto = (valorTotal * porcentagemDesconto) / 100;

  // Subtrai o desconto do valor total
  let valorFinal = valorTotal - valorDesconto;

  // Retorna o valor final da compra
  return valorFinal;
}

// Calculando valores com desconto
let valorCompra1 = calcularDesconto(200, 10);
let valorCompra2 = calcularDesconto(500, 15);

// Exibindo os valores finais
console.log(`Valor da compra 1: R$ ${valorCompra1}`);
console.log(`Valor da compra 2: R$ ${valorCompra2}`);
