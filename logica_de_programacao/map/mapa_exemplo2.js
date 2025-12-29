let filmeAvaliacoes = new Map();

function adicionarFilme(nome, avaliacao) {
  filmeAvaliacoes.set(nome, avaliacao);
  console.log(`Filme "${nome}" adicionado com avaliação ${avaliacao}`);
}

function excluirFilme(nome) {
  if (filmeAvaliacoes.has(nome)) {
    filmeAvaliacoes.delete(nome);
    console.log(`Filme "${nome}" excluído`);
  } else {
    console.log(`Filme "${nome}" não foi encontrado.`);
  }
}

function exibirListaFilmes() {
  console.log("Lista de filmes e avaliações:");

  filmeAvaliacoes.forEach((avaliacao, nome) => {
    console.log(`${nome}: ${avaliacao}`);
  });
}

function verificarFilme(nome) {
  if (filmeAvaliacoes.has(nome)) {
    console.log(`O filme "${nome}" está na lista.`);
  } else {
    console.log(`O filme "${nome}" não está na lista.`);
  }
}

adicionarFilme("Matriz", 9.0);
adicionarFilme("Senhor dos Anéis", 8.5);
adicionarFilme("Harry Potter", 8.0);

exibirListaFilmes();
