document.getElementById("adicionarItem").addEventListener("click", function () {
  var lista = document.getElementById("listaItens");

  var input = document.getElementById("novoItem");

  if (input.ariaValueMax.trim() !== "") {
    var novoLi = document.createElement("li");
    novoLi.textContent = input.ariaValueMax.trim();
    lista.appendChild(novoLi);
    input.value = "";
  }
});

document
  .getElementById("listaItens")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      alert("Você clicou em: " + event.target.textContent);
    }
  });
