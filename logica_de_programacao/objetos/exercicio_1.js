const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let aluno = {};

function solicitarInformacao(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}

(async () => {
  aluno.nome = await solicitarInformacao("Digite o nome do aluno: ");
  aluno.idade = parseInt(
    await solicitarInformacao("Digite a idade do aluno: ")
  );
  aluno.curso = await solicitarInformacao("Digite o curso do aluno: ");

  aluno.notas = {};

  aluno.notas.matematica = parseFloat(
    await solicitarInformacao("Digite a nota de matemática: ")
  );

  aluno.notas.portugues = parseFloat(
    await solicitarInformacao("Digite a nota de português: ")
  );

  aluno.notas.fisica = parseFloat(
    await solicitarInformacao("Digite a nota de física: ")
  );

  aluno.notas.quimica = parseFloat(
    await solicitarInformacao("Digite a nota de química: ")
  );

  function calcularMedia(aluno) {
    let totalNotas = 0;
    let numNotas = 0;

    for (let materia in aluno.notas) {
      totalNotas += aluno.notas[materia];
      numNotas++;
    }

    return totalNotas / numNotas;
  }

  console.log("\n===== DADOS DO ALUNO =====");
  console.log(`Nome: ${aluno.nome}`);
  console.log(`Idade: ${aluno.idade}`);
  console.log(`Curso: ${aluno.curso}`);
  console.log("Notas:");

  for (let materia in aluno.notas) {
    console.log(`${materia}: ${aluno.notas[materia]}`);
  }

  console.log(`Média: ${calcularMedia(aluno).toFixed(2)}`);

  rl.close();
})();
