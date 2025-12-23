// Cria um array de objetos, onde cada objeto representa uma pessoa
// com nome e idade
const pessoas = [
  { nome: "Alice", idade: 25 },
  { nome: "bob", idade: 30 },
  { nome: "carlos", idade: 22 },
];

// Cria uma função arrow que calcula a média das idades
const calcularMediaIdades = (pessoas) => {
  // Usa o método reduce para somar todas as idades
  // soma começa em 0
  // pessoa.idade pega a idade de cada objeto
  const somaIdades = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);

  // Divide a soma das idades pela quantidade de pessoas no array
  return somaIdades / pessoas.length;
};

// Chama a função passando o array pessoas
// O resultado é armazenado na variável mediaIdade
const mediaIdade = calcularMediaIdades(pessoas);

// Exibe a média das idades no console
// toFixed(2) limita o resultado a duas casas decimais
console.log(`A média das idades é: ${mediaIdade.toFixed(2)}`);
