let listaDeNomes = [
  "Aline",
  "Bruno ",
  "Ana",
  "Alexandre",
  "Carla",
  "Antonio",
  "Amanda",
];

function extrairNomesComA(nomes) {
  let nomesComA = nomes.filter((nome) => {
    return nome.startsWith("A");
  });

  return nomesComA;
}

let nomesFiltrados = extrairNomesComA(listaDeNomes);

console.log("Nomes que começam com A:", nomesFiltrados);
