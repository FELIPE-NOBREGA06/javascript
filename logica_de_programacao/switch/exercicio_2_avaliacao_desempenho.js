// Importa o módulo readline, que permite ler dados digitados no terminal
const readline = require("readline");

// Cria uma interface de leitura e escrita no terminal
const r1 = readline.createInterface({
  input: process.stdin, // Entrada de dados (teclado)
  output: process.stdout, // Saída de dados (console)
});

// Exibe uma pergunta no terminal e aguarda o usuário digitar a nota
r1.question("Insira uma nota de 0 a 100", (nota) => {
  // Converte a nota digitada (string) para número decimal
  const notaNumerica = parseFloat(nota);

  // Variável que vai armazenar a classificação final (A, B, C, D ou F)
  let resultado;

  // Divide a nota por 10 e arredonda para baixo
  // Exemplo: 85 / 10 = 8.5 → Math.floor = 8
  const categoria = Math.floor(notaNumerica / 10);

  // Estrutura switch para definir a classificação da nota
  switch (categoria) {
    // Notas entre 90 e 100
    case 10:
    case 9:
      resultado = "A";
      break;

    // Notas entre 80 e 89
    case 8:
      resultado = "B";
      break;

    // Notas entre 70 e 79
    case 7:
      resultado = "C";
      break;

    // Notas entre 60 e 69
    case 6:
      resultado = "D";
      break;

    // Notas abaixo de 60
    default:
      resultado = "F";
  }

  // Exibe a classificação final no console
  console.log(`Classificação: ${resultado}`);

  // Fecha a interface readline (encerra o programa)
  r1.close();
});
