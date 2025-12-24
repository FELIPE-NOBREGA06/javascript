/** @format */

// =======================================
// Função para converter horas em minutos
// =======================================
// Recebe um valor em horas
// Retorna o valor convertido para minutos
function converterHorasEmMinutos(horas) {
  // Cada hora possui 60 minutos
  let minutos = horas * 60;

  // Retorna o total de minutos
  return minutos;
}

// Chamando a função e passando 3 horas como argumento
let minutosDe3Horas = converterHorasEmMinutos(3);

// Exibindo o resultado no console
console.log(`3 horas equivalem a ${minutosDe3Horas} minutos`);
