/** @format */

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tarefas = ["Comprar pão", "Estudar JavaScript", "Ir ao médico"];

function exibirMenu() {
  console.log("\nEscolha uma opção:");
  console.log("1. Adicionar tarefa");
  console.log("2. Alterar tarefa");
  console.log("3. Excluir tarefa");
  console.log("4. Exibir tarefas");
  console.log("5. Sair");
}

function adicionarTarefa() {
  r1.question("Digite a nova tarefa: ", (novaTarefa) => {
    tarefas.push(novaTarefa);
    console.log("Tarefa adicionada com sucesso!");
    executarPrograma();
  });
}

function alterarTarefa() {
  r1.question(
    "Digite o índice da tarefa para alterar (0, 1, 2...): ",
    (indice) => {
      indice = parseInt(indice);

      if (indice >= 0 && indice < tarefas.length) {
        r1.question("Digite a nova descrição da tarefa: ", (novaTarefa) => {
          tarefas[indice] = novaTarefa;
          console.log("Tarefa alterada com sucesso!");
          executarPrograma();
        });
      } else {
        console.log("Índice inválido!");
        executarPrograma();
      }
    }
  );
}

function excluirTarefa() {
  r1.question(
    "Digite o índice da tarefa para excluir (0, 1, 2...): ",
    (indice) => {
      indice = parseInt(indice);

      if (indice >= 0 && indice < tarefas.length) {
        tarefas.splice(indice, 1);
        console.log("Tarefa excluída com sucesso!");
      } else {
        console.log("Índice inválido!");
      }
      executarPrograma();
    }
  );
}

function exibirTarefas() {
  console.log("\nTarefas:");
  tarefas.forEach((tarefa, index) => {
    console.log(`${index}: ${tarefa}`);
  });
  executarPrograma();
}

function executarPrograma() {
  exibirMenu();

  r1.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        adicionarTarefa();
        break;
      case "2":
        alterarTarefa();
        break;
      case "3":
        excluirTarefa();
        break;
      case "4":
        exibirTarefas();
        break;
      case "5":
        console.log("Saindo do programa...");
        r1.close();
        break;
      default:
        console.log("Opção inválida!");
        executarPrograma();
    }
  });
}

executarPrograma();
