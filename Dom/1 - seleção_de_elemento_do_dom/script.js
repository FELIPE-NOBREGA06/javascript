/** @format */

document.getElementById("btnTitulo").addEventListener("click", function () {
  var titulo = document.getElementById("titulo");

  document.getElementById("inputTitulo").value = titulo.textContent;
});
