const pessoa = {
  nome: "João",
  idade: 30,
};

pessoa.profissao = "Desenvolvedor Web";
console.log(pessoa);

const pessoa2 = {
  nome: "João",
  idade: 29,
  profissao: "Desenvolvedor Web",
};

delete pessoa2.idade;
console.log(pessoa2);

console.log(pessoa2.nome);
console.log(pessoa2["profissoa"]);

const obj1 = { a: 1, b: 2 };

const obj2 = { b: 3, c: 4 };

const combinado = Object.assign({}, obj1, obj2);

console.log(combinado);

const combinadoSpead = { ...obj1, ...obj2 };

console.log(combinadoSpead);

const perfilUsuario = {
  usario: "Ana",
  idade: 25,
  funcao: "professora",
};

for (const propriedade of object.keys(perfilUsuario)) {
  console.log(`${propriedade}: ${perfilUsuario[propriedade]}`);
}
