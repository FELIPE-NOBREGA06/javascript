/** @format */

document.getElementById("btnTitulo").addEventListener("click", function () {
  const titulo = document.getElementById("titulo");
  document.getElementById("inputTitulo").value = titulo.textContent;
});

document.getElementById("btnItensTag").addEventListener("click", function () {
  const itensLista = document.getElementsByTagName("li");
  let texto = [];

  for (let i = 0; i < itensLista.length; i++) {
    texto.push(itensLista[i].textContent);
  }

  document.getElementById("inputItensTag").value = texto.join(", ");
});

document
  .getElementById("btnMensagemClass")
  .addEventListener("click", function () {
    const mensagens = document.getElementsByClassName("mensagem");
    let texto = [];

    for (let i = 0; i < mensagens.length; i++) {
      texto.push(mensagens[i].textContent);
    }

    document.getElementById("inputMensagensClass").value = texto.join(" | ");
  });

document
  .getElementById("btnPrimeiroItem")
  .addEventListener("click", function () {
    const primeiroItem = document.querySelector("li");
    document.getElementById("inputPrimeiroItem").value =
      primeiroItem.textContent;
  });

document.getElementById("btnTodosItens").addEventListener("click", function () {
  const itens = document.querySelectorAll("li");
  let texto = [];

  itens.forEach(function (item) {
    texto.push(item.textContent);
  });

  document.getElementById("inputTodosItens").value = texto.join(", ");
});
