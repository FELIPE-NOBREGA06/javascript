document
  .getElementById("modificarAtributo")
  .addEventListener("click", function () {
    var paragrafo = document.getElementById("meuParagrafo");

    paragrafo.setAttribute("title", "Novo título do paragráfo");

    document.getElementById("resultadoAtributo").textContent =
      "Atributo title modificado";
  });

document
  .getElementById("adicionarAtributo")
  .addEventListener("click", function () {
    var paragrafo = document.getElementById("meuParagrafo");

    paragrafo.setAttribute("Class", "novo-estilo");

    document.getElementById("resultadoAtributo").textContent =
      "Atributo class adicionar";
  });

document
  .getElementById("removerAtributo")
  .addEventListener("click", function () {
    var paragrafo = document.getElementById("meuParagrafo");

    paragrafo.removeAttribute("title");

    document.getElementById("resultadoAtributo").textContent =
      "Atributo title removido";
  });

document
  .getElementById("acessarAtributo")
  .addEventListener("click", function () {
    var paragrafo = document.getElementById("meuParagrafo");
    var tite = paragrafo.getAttribute("title");

    document.getElementById("resultadoAtributo").textContent =
      "O Atribudo title:" + tite;
  });
