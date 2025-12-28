const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let listaCompra = [];

function exibirMenu() {
  console.log(`
Lista de Compras
===============================
1. Adicionar item
2. Remover item
3. Exibir lista de compras
4. Sair
`);
}

function adicionarItem(item) {
  listaCompra.push(item);
  console.log(`Item "${item}" adicionado à lista.\n`);
}

function removerItem(index) {
  if (index >= 0 && index < listaCompra.length) {
    const itemRemovido = listaCompra.splice(index, 1);
    console.log(`Item "${itemRemovido}" removido da lista.\n`);
  } else {
    console.log("Índice inválido. Tente novamente.\n");
  }
}

function exibirListaDeCompras() {
  if (listaCompra.length === 0) {
    console.log("A lista está vazia.\n");
    return;
  }

  console.log("Lista de compras:");
  listaCompra.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
  console.log();
}

function main() {
  exibirMenu();

  r1.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        r1.question("Digite o item que deseja adicionar: ", (item) => {
          adicionarItem(item);
          main();
        });
        break;

      case "2":
        r1.question("Digite o número do item que deseja remover: ", (index) => {
          removerItem(parseInt(index) - 1);
          main();
        });
        break;

      case "3":
        exibirListaDeCompras();
        main();
        break;

      case "4":
        console.log(
          "Programa encerrado. Obrigado por usar a lista de compras!"
        );
        r1.close();
        break;

      default:
        console.log("Opção inválida. Tente novamente.\n");
        main();
    }
  });
}

main();
