var botao = document.getElementById("botaoClique");

botao.addEventListener("click", function () {
  alert("botão foi clicado!");
});

var areHover = document.getElementById("areHover");

areHover.addEventListener("mouseover", function () {
  areHover.style.backgroundColor = "blue";
});

areHover.addEventListener("mouseout", function () {
  areHover.style.backgroundColor = "ligthgrey";
});

document.addEventListener("DOMContentLoaded", function () {
  alert("O documento foi completamento carregado e analisado");
});

document.body.addEventListener(
  "click",
  function () {
    alert("clique detectado no body");
  },
  false
);
