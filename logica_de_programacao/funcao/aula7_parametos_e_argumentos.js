/** @format */

// ===============================
// Função para formatar endereço
// ===============================
// Recebe os dados do endereço
// Retorna uma string com o endereço completo e formatado
function formatarEndereco(rua, numero, bairro, cidade, estado) {
  // Monta o endereço em um formato legível
  let enderecoCompleto = `${rua}, ${numero} - ${bairro}, ${cidade} - ${estado}`;

  // Retorna o endereço formatado
  return enderecoCompleto;
}

// Chamando a função para formatar o endereço
let enderecoFormatado = formatarEndereco(
  "Av. Brasil",
  "10",
  "Centro",
  "Cuiabá",
  "MT"
);

// Exibindo o endereço no console
console.log(`Endereço: ${enderecoFormatado}`);
