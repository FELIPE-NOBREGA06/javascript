let notaDosAluno = new Map();

notaDosAluno.set("Joao", 8.5);
notaDosAluno.set("Maria", 9.5);
notaDosAluno.set("Pedro", 7.5);
notaDosAluno.set("Ana", 6.0);

console.log("Notas dos alunos:");
notaDosAluno.forEach((nota, aluno) => {
  console.log(`${aluno}: ${nota}`);
});

// Atualizando nota da Ana
notaDosAluno.set("Ana", 8.0);

console.log("\nNova nota de Ana:", notaDosAluno.get("Ana"));

let aluno1 = "Pedro";

if (notaDosAluno.has(aluno1)) {
  console.log(`\n${aluno1} está no mapa de notas`);
} else {
  console.log(`\n${aluno1} não está no mapa de notas`);
}

// Removendo João
notaDosAluno.delete("Joao");

console.log("\nNotas dos alunos (após remoção de João):");
notaDosAluno.forEach((nota, aluno) => {
  console.log(`${aluno}: ${nota}`);
});

console.log("\nNúmero de alunos:", notaDosAluno.size);

// Limpando o Map
notaDosAluno.clear();
