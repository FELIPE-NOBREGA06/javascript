const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const alunos = [];
const numeroAlunos = 3;
let alunoIndex = 0;

function perguntarNome() {
  if (alunoIndex < numeroAlunos) {
    rl.question(`Digite o nome do aluno ${alunoIndex + 1}: `, function (nome) {
      const notas = [];
      alunos.push({ nome: nome, notas: notas });
      perguntarNotas(notas);
    });
  } else {
    imprimirResultados();
  }
}

function perguntarNotas(notas) {
  if (notas.length < 3) {
    rl.question(`Digite a nota ${notas.length + 1}: `, function (nota) {
      notas.push(parseFloat(nota));
      perguntarNotas(notas);
    });
  } else {
    alunoIndex++;
    perguntarNome();
  }
}

function imprimirResultados() {
  console.log("\nResultado");

  for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    let somaNotas = 0;

    for (let j = 0; j < aluno.notas.length; j++) {
      somaNotas += aluno.notas[j];
    }

    let media = somaNotas / aluno.notas.length;
    let situacao = media >= 7 ? "Aprovado" : "Reprovado";

    console.log(
      `Nome: ${aluno.nome}, Média: ${media.toFixed(2)}, Situação: ${situacao}`
    );
  }

  rl.close();
}

perguntarNome();
