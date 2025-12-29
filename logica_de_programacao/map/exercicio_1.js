const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let contatos = new Map();

function adicionarContato(nome, telefone) {
  contatos.set(nome, telefone);
  console.log(`Contato "${nome}" adicionado com sucesso.`);
}

function removerContato(nome) {
  if (contatos.has(nome)) {
    contatos.delete(nome);
    console.log(`Contato "${nome}" removido com sucesso.`);
  } else {
    console.log("Contato não encontrado.");
  }
}

function exibirContato() {
  console.log("\nLista de contatos:");

  if (contatos.size === 0) {
    console.log("Nenhum contato cadastrado.");
    return;
  }

  contatos.forEach((telefone, nome) => {
    console.log(`${nome}: ${telefone}`);
  });
}

function exibirMenu() {
  console.log("\nEscolha uma opção:");
  console.log("1. Adicionar contato");
  console.log("2. Remover contato");
  console.log("3. Exibir contatos");
  console.log("4. Sair");

  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Nome do contato: ", (nome) => {
          rl.question("Telefone: ", (telefone) => {
            adicionarContato(nome, telefone);
            exibirMenu();
          });
        });
        break;

      case "2":
        rl.question("Nome do contato a remover: ", (nome) => {
          removerContato(nome);
          exibirMenu();
        });
        break;

      case "3":
        exibirContato();
        exibirMenu();
        break;

      case "4":
        console.log("Saindo do programa...");
        rl.close();
        break;

      default:
        console.log("Opção inválida!");
        exibirMenu();
        break;
    }
  });
}

// INICIAR O PROGRAMA
exibirMenu();
