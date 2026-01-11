function acessarParent() {
  var item2 = document.getElementById("item2");
  var parent = item2.parentNode;

  document.getElementById("resultado").textContent =
    'o pai de "item2" é uma tag:' + parent.tagName;
}

function listarChildren() {
  var divPrincipal = document.getElementById("divPrincipal");

  var children = divPrincipal.children;
  var listaFilhos = Array.from(children)
    .map((child) => child.tagName)
    .join(", ");

  document.getElementById("resultado").textContent =
    'Filhos de "divPrincipal": ' + listaFilhos;
}

function irProximo() {
  var item2 = document.getElementById("item2");
  var proximoIrmao = item2.nextSibling;

  while (proximoIrmao && proximoIrmao.nodeType !== 1) {
    proximoIrmao = proximoIrmao.nextSibling;
  }

  Document.getElementById("resultado").textContent = proximoIrmao
    ? 'Proximo irmão  de "item2":  ' + proximoIrmao.textContent
    : "Não há próximo irmão ";
}

function irAnterior() {
  var item2 = document.getElementById("item2");
  var irAnterior = item2.previousSibling;

  while (irAnterior && irAnterior.nodeType !== 1) {
    irAnterior = irAnterior.previousSibling;
  }

  Document.getElementById("resultado").textContent = irAnterior
    ? ' irmão  anterior "item2":  ' + irAnterior.textContent
    : "Não há  irmão anteriror ";
}
