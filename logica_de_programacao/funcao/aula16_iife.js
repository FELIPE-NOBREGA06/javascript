/** @format */

// =========================
// IIFE (Immediately Invoked Function Expression)
// =========================
// Essa função é criada e executada imediatamente
// Serve para criar um escopo privado
(function () {
  // Variável privada (não pode ser acessada fora da função)
  let contador = 0;

  // Função que incrementa o contador
  function incrementar() {
    contador += 1; // Soma 1 ao contador
    console.log(contador); // Exibe o valor atual
  }

  // Função que reseta o contador
  function resetar() {
    contador = 0; // Zera o contador
    console.log(`contador resetado.`); // Mensagem de confirmação
  }

  // Chamadas das funções
  incrementar(); // contador = 1
  incrementar(); // contador = 2
  resetar(); // contador = 0
})();

// =========================
// Gerenciador de tarefas usando IIFE
// =========================
const gerenciadorDeTarefas = (function () {
  // Array privado para armazenar as tarefas
  let tarefas = [];

  // Função para adicionar uma nova tarefa
  function adicionar(tarefa) {
    tarefas.push(tarefa); // Adiciona a tarefa no array
    console.log(`tarefa "${tarefa}" adicionada`);
  }

  // Função para listar todas as tarefas
  function listar() {
    // Verifica se não há tarefas
    if (tarefas.length === 0) {
      console.log("Não há tarefa");
      return; // Encerra a função
    }

    console.log("tarefas:");
    // Percorre o array e mostra cada tarefa
    tarefas.forEach((tarefa, index) => {
      console.log(`${index + 1}: ${tarefa}`);
    });
  }

  // Retorna apenas as funções que poderão ser usadas fora
  return {
    adicionar,
    listar,
  };
})();

// Uso do gerenciador de tarefas
gerenciadorDeTarefas.adicionar("comprar leite");
gerenciadorDeTarefas.adicionar("pagar as contas");
gerenciadorDeTarefas.listar();
