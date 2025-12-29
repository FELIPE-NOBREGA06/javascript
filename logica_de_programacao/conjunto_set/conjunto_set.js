/** @format */

let conjunto = new Set();

conjunto.add("A");
conjunto.add("B");
conjunto.add("C");
conjunto.add("D");

console.log("O conjunto tem o valor de 'B'? ", conjunto.has("B"));
console.log("O conjunto tem o valor de 'Z'? ", conjunto.has("Z"));

conjunto.delete("B");

console.log("Tamanho do conjunto após remover 'B':", conjunto.size);

conjunto.clear();

console.log("Tamanho do conjunto após limpar:", conjunto.size);

conjunto.add("x");
conjunto.add("y");
conjunto.add("z");

console.log("Elementos do conjunto:");
conjunto.forEach((valor) => console.log(valor));

let arrayConjunto = [...conjunto];
console.log("Conjunto convertido para array:", arrayConjunto);

let outroConjunto = new Set(["y", "z", "w"]);

let uniao = new Set([...conjunto, ...outroConjunto]);
console.log("União dos conjuntos:", uniao);

let intersecao = new Set();
conjunto.forEach((valor) => {
  if (outroConjunto.has(valor)) {
    intersecao.add(valor);
  }
});
console.log("Interseção dos conjuntos:", intersecao);

let diferenca = new Set(conjunto);
outroConjunto.forEach((valor) => {
  diferenca.delete(valor);
});
console.log("Diferença dos conjuntos:", diferenca);
