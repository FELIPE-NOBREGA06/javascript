/** @format */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let filmesFavoritos = new Set();

function adicionarFilme() {
  rl.question("Digite o nome do filme a ser adicionado: ", (filme) => {
    filmesFavoritos.add(filme);
    console.log(`Filme "${filme}" adicionado aos favoritos.`);
    exibirMenu();
  });
}

function removerFilme() {
  rl.question("Digite o nome do filme a ser removido: ", (filme) => {
    if (filmesFavoritos.has(filme)) {
      filmesFavoritos.delete(filme);
      console.log(`Filme "${filme}" removido dos favoritos.`);
    } else {
      console.log("Filme não encontrado.");
    }
    exibirMenu();
  });
}

function listarFilmes() {
  console.log("\nFilmes favoritos:");

  if (filmesFavoritos.size === 0) {
    console.log("Nenhum filme cadastrado.");
  } else {
    filmesFavoritos.forEach((filme) => {
      console.log("- " + filme);
    });
  }

  exibirMenu();
}

function exibirMenu() {
  console.log("\nEscolha uma opção:");
  console.log("1 - Adicionar Filme Favorito");
  console.log("2 - Remover Filme Favorito");
  console.log("3 - Listar Filmes Favoritos");
  console.log("4 - Sair");

  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        adicionarFilme();
        break;
      case "2":
        removerFilme();
        break;
      case "3":
        listarFilmes();
        break;
      case "4":
        console.log("Saindo...");
        rl.close();
        break;
      default:
        console.log("Opção inválida.");
        exibirMenu();
    }
  });
}

// Inicia o programa
exibirMenu();
