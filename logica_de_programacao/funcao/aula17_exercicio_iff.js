// =========================
// Sistema de notificações usando IIFE
// =========================
const sistemaDeNotificacoes = (function () {
  // Array privado para armazenar notificações
  let notificacoes = [];

  // Função para registrar uma notificação
  function registrar(mensagem) {
    notificacoes.push(mensagem); // Adiciona a mensagem
    console.log(`Notificação registrada: ${mensagem}`);
  }

  // Função para exibir todas as notificações
  function exibir() {
    // Verifica se não há notificações
    if (notificacoes.length === 0) {
      console.log("NÃO HÁ NOTIFICAÇÕES");
      return;
    }

    // Exibe cada notificação com índice
    notificacoes.forEach((mensagem, index) => {
      console.log(`${index + 1}: ${mensagem}`);
    });
  }

  // Expõe apenas os métodos públicos
  return {
    registrar,
    exibir,
  };
})();

// Uso do sistema de notificações
sistemaDeNotificacoes.registrar("Bem-vindo ao sistema");
sistemaDeNotificacoes.registrar("Você tem uma nova mensagem");
sistemaDeNotificacoes.exibir();
