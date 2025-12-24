/** @format */

const produtos = [
  { nome: "caderno", categoria: "papelaria", preco: 10 },
  { nome: "lápis", categoria: "papelaria", preco: 2 },
  { nome: "teclado", categoria: "eletrônicos", preco: 100 },
  { nome: "mouse", categoria: "eletrônicos", preco: 50 },
];

// Filtra produtos com preço maior que o valor mínimo
function filtrarProdutos(produtos, valorMinimo) {
  return produtos.filter((produto) => produto.preco > valorMinimo);
}

// Aumenta o preço dos produtos em uma porcentagem
function aumentarPreco(produtos, porcentagem) {
  return produtos.map((produto) => ({
    ...produto,
    preco: produto.preco * (1 + porcentagem / 100),
  }));
}

const produtosFiltrados = filtrarProdutos(produtos, 20);
const produtosComPrecoAumentado = aumentarPreco(produtosFiltrados, 10);

console.log(produtosComPrecoAumentado);
