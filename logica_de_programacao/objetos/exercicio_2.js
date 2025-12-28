const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let registroProdutos = [];

// ================== ADICIONAR PRODUTO ==================
function adicionarProduto() {
  rl.question("Digite o nome do produto: ", (nome) => {
    rl.question("Digite o preço do produto: ", (preco) => {
      rl.question(
        "Digite a quantidade em estoque do produto: ",
        (quantidade) => {
          preco = parseFloat(preco);
          quantidade = parseInt(quantidade);

          let produto = { nome, preco, quantidade };
          registroProdutos.push(produto);

          console.log(`Produto "${nome}" adicionado ao registro.`);
          menu();
        }
      );
    });
  });
}

// ================== EXIBIR PRODUTOS ==================
function exibirProdutos() {
  console.log("\nProdutos registrados:");
  if (registroProdutos.length === 0) {
    console.log("Nenhum produto cadastrado.");
  } else {
    registroProdutos.forEach((produto) => {
      console.log(
        `Nome: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(
          2
        )} | Quantidade: ${produto.quantidade}`
      );
    });
  }
  menu();
}

// ================== ATUALIZAR PREÇO ==================
function atualizarPreco() {
  rl.question(
    "Digite o nome do produto que deseja atualizar o preço: ",
    (nome) => {
      let produto = registroProdutos.find((item) => item.nome === nome);

      if (produto) {
        rl.question("Digite o novo preço: ", (novoPreco) => {
          produto.preco = parseFloat(novoPreco);
          console.log(
            `Preço do produto "${nome}" atualizado para R$ ${produto.preco.toFixed(
              2
            )}`
          );
          menu();
        });
      } else {
        console.log(`Produto "${nome}" não encontrado.`);
        menu();
      }
    }
  );
}

// ================== ATUALIZAR QUANTIDADE ==================
function atualizarQuantidade() {
  rl.question(
    "Digite o nome do produto que deseja atualizar a quantidade: ",
    (nome) => {
      let produto = registroProdutos.find((item) => item.nome === nome);

      if (produto) {
        rl.question("Digite a nova quantidade: ", (novaQuantidade) => {
          produto.quantidade = parseInt(novaQuantidade);
          console.log(
            `Quantidade do produto "${nome}" atualizada para ${produto.quantidade}`
          );
          menu();
        });
      } else {
        console.log(`Produto "${nome}" não encontrado.`);
        menu();
      }
    }
  );
}

// ================== MENU ==================
function menu() {
  rl.question(
    `
Escolha uma opção:
1. Adicionar Produto
2. Atualizar Preço
3. Atualizar Quantidade
4. Exibir Produtos
5. Sair
> `,
    (escolha) => {
      switch (escolha) {
        case "1":
          adicionarProduto();
          break;
        case "2":
          atualizarPreco();
          break;
        case "3":
          atualizarQuantidade();
          break;
        case "4":
          exibirProdutos();
          break;
        case "5":
          rl.close();
          break;
        default:
          console.log("Opção inválida.");
          menu();
      }
    }
  );
}

// ================== INICIAR ==================
menu();
