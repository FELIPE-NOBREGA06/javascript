/** @format */

// ===============================
// Objeto que representa o estoque
// ===============================
let estoque = {
  canetas: 10,
  caderno: 5,
  borracha: 7,
};

// =========================================
// Função para ajustar a quantidade em estoque
// =========================================
// nomeDoProduto → nome do item no objeto estoque
// quantidade → valor a ser somado (positivo ou negativo)
function ajustarEstoque(nomeDoProduto, quantidade) {
  // Verifica se o produto existe no estoque
  if (estoque[nomeDoProduto] !== undefined) {
    // Ajusta a quantidade do produto
    estoque[nomeDoProduto] += quantidade;

    // Retorna a nova quantidade
    return estoque[nomeDoProduto];
  } else {
    // Caso o produto não exista
    console.log("Produto não encontrado no estoque");
    return null;
  }
}

// ===============================
// Testes da função
// ===============================

// Exibe o estoque de canetas antes do ajuste
console.log(`Estoque de canetas antes do ajuste: ${estoque.canetas}`);

// Adiciona 5 canetas ao estoque
let estoqueCanetasAtualizado = ajustarEstoque("canetas", 5);

// Exibe o estoque de canetas após o ajuste
console.log(`Estoque de canetas atualizado após o ajuste: ${estoque.canetas}`);

// Remove 3 cadernos do estoque
let estoqueCadernosAtualizado = ajustarEstoque("caderno", -3);

// Exibe o estoque de cadernos após o ajuste
console.log(`Estoque de cadernos após o ajuste: ${estoqueCadernosAtualizado}`);
