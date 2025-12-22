/**
 * Variável que representa o dia da semana.
 *   Espera um número de 1 a 7:
 *   1 = Domingo
 *   2 = Segunda-feira
 *   ...
 *   7 = Sábado
 *
 * @format
 */

let diDaSemana = 2; // Valor escolhido para teste

/*
  Estrutura switch:
  Serve para comparar o valor da variável
  com vários casos possíveis
*/
switch (diDaSemana) {
  case 1:
    // Se diDaSemana for igual a 1
    console.log("Domingo");
    break; // Encerra o switch

  case 2:
    // Se diDaSemana for igual a 2
    console.log("Segunda-feira");
    break;

  case 3:
    // Se diDaSemana for igual a 3
    console.log("Terça-feira");
    break;

  case 4:
    // Se diDaSemana for igual a 4
    console.log("Quarta-feira");
    break;

  case 5:
    // Se diDaSemana for igual a 5
    console.log("Quinta-feira");
    break;

  case 6:
    // Se diDaSemana for igual a 6
    console.log("Sexta-feira");
    break;

  case 7:
    // Se diDaSemana for igual a 7
    console.log("Sábado");
    break;

  default:
    /*
      Executado quando o valor não é
      nenhum dos casos acima
    */
    console.log("Dia da semana inválido");
}
