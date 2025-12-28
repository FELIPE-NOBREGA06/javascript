let listaComRepetidos = [
  "Maça",
  "Banana ",
  "Morango ",
  "Banana",
  "Maça",
  "Abacaxi",
];

function renoverRepeditos(lista) {
  let listaSemRepeditos = lista.filter((item, indece) => {
    return lista.indexOf(item) === indece;
  });

  return listaSemRepeditos;
}

let listaLimpa = renoverRepeditos(listaComRepetidos);

console.log("Lista sem repedições: ", listaLimpa);
