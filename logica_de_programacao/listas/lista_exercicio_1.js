/** @format */

let listaDeConvidados = ["cleverson", "felipe", "mayra", "suelem", "berenice"];

// Adicionar convidado
function adicionarConvidado(nome) {
  if (!listaDeConvidados.includes(nome)) {
    listaDeConvidados.push(nome);
    listaDeConvidados.sort();
    console.log(nome + " foi adicionado à lista de convidados.");
  } else {
    console.log(nome + " já está na lista de convidados.");
  }
}

// Remover convidado
function removerConvidado(nome) {
  let indice = listaDeConvidados.indexOf(nome);

  if (indice !== -1) {
    listaDeConvidados.splice(indice, 1);
    console.log(nome + " foi removido da lista de convidados.");
  } else {
    console.log(nome + " não foi encontrado na lista.");
  }
}

// Checar presença
function checarPresenca(nome) {
  if (listaDeConvidados.includes(nome)) {
    console.log(nome + " está na lista de convidados.");
  } else {
    console.log(nome + " não está na lista de convidados.");
  }
}

function listarConvidados() {
  console.log("Lista de convidados: " + listaDeConvidados.join(", "));
}

function numeroDeConvidados() {
  console.log("Total de convidados: " + listaDeConvidados.length);
}

// Alterar nome do convidado
function alterarConvidado(nomeAtual, nomeNovo) {
  let indice = listaDeConvidados.indexOf(nomeAtual);

  if (indice !== -1) {
    if (!listaDeConvidados.includes(nomeNovo)) {
      listaDeConvidados[indice] = nomeNovo;
      listaDeConvidados.sort();
      console.log(
        nomeAtual +
          " foi alterado para " +
          nomeNovo +
          " na lista de convidados."
      );
    } else {
      console.log(
        nomeNovo + " já está na lista de convidados. Escolha outro nome."
      );
    }
  } else {
    console.log(nomeAtual + " não foi encontrado na lista.");
  }
}

listarConvidados();
adicionarConvidado("elza");
alterarConvidado("felipe", "joao");
removerConvidado("mayra");
checarPresenca("joao");
numeroDeConvidados();
listarConvidados();
