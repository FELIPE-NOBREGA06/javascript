// Importa o módulo 'readline' do Node.js
const readline = require("readline");

// Cria a interface de leitura do terminal
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função que faz uma pergunta e retorna uma Promise
function fazerPergunta(pergunta) {
  return new Promise((resolve) => {
    r1.question(pergunta, (resposta) => {
      resolve(resposta);
    });
  });
}

// Função assíncrona para coletar as respostas do usuário
async function coletarResposta() {
  const nome = await fazerPergunta("Qual é o seu nome? ");
  const corFavorita = await fazerPergunta("Qual é a sua cor favorita? ");
  const animalFavorito = await fazerPergunta("Qual é o seu animal favorito? ");
  const hobby = await fazerPergunta("Qual é o seu hobby? ");
  const pratoFavorito = await fazerPergunta("Qual é o seu prato favorito? ");

  console.log(`\nAqui estão as suas respostas:
  Nome: ${nome}
  Cor favorita: ${corFavorita}
  Animal favorito: ${animalFavorito}
  Hobby: ${hobby}
  Prato favorito: ${pratoFavorito}
  `);

  // Fecha a interface do readline
  r1.close();
}

// Chama a função para iniciar o programa
coletarResposta();
