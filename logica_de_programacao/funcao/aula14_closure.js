/** @format */

// ===== CONTADOR COM CLOSURE =====
function criarContador() {
  let count = 0;

  return {
    incrementar: function () {
      count += 1;
      console.log(`Contagem atual: ${count}`);
    },

    mostrar: function () {
      console.log(`Contagem: ${count}`);
    },
  };
}

const meuContador = criarContador();

meuContador.mostrar(); // 0
meuContador.incrementar(); // 1
meuContador.incrementar(); // 2
meuContador.mostrar(); // 2

// ===== APLICADOR DE DESCONTO COM CLOSURE =====
function criarAplicadorDeDesconto(valorDesconto) {
  return function (preco) {
    const desconto = preco * valorDesconto;
    const precoFinal = preco - desconto;
    return precoFinal;
  };
}

const aplicadorDesconto20 = criarAplicadorDeDesconto(0.2); // 20%
const aplicadorDesconto10 = criarAplicadorDeDesconto(0.1); // 10%

console.log(aplicadorDesconto10(100)); // 90
console.log(aplicadorDesconto20(100)); // 80
