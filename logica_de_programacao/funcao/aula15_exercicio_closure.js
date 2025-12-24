/** @format */

function criarCarrinho() {
  const itens = [];

  return {
    adicionarItem: function (nome, preco, quantidade) {
      const item = itens.find((item) => item.nome === nome);

      if (item) {
        item.quantidade += quantidade;
      } else {
        itens.push({ nome, preco, quantidade });
      }
    },

    removerItem: function (nome) {
      const index = itens.findIndex((item) => item.nome === nome);

      if (index > -1) {
        itens.splice(index, 1);
      }
    },

    calcularTotal: function () {
      return itens.reduce(
        (total, item) => total + item.preco * item.quantidade,
        0
      );
    },

    listarItems: function () {
      return itens.map(
        (item) =>
          `${item.nome} (preço: R$${item.preco}), Quantidade: ${item.quantidade}`
      );
    },
  };
}

const carrinho = criarCarrinho();

carrinho.adicionarItem("maça", 1.99, 5);
carrinho.adicionarItem("Pão", 0.99, 2);

console.log(carrinho.listarItems());
