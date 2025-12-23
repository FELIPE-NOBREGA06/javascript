// Função que calcula o quadrado de um número
const quadrado = function (numero) {
  return numero * numero;
};

let resultado = quadrado(4);
console.log(resultado); // 16

// Função que concatena duas strings
const concatenarString = function (string1, string2) {
  return string1 + " " + string2;
};

// Agora passando os dois parâmetros corretamente
let mensagemCompleta = concatenarString("olá", "mundo");
console.log(mensagemCompleta); // olá mundo

// Função que verifica o sinal do número
const verificarSinal = function (numero) {
  if (numero > 0) {
    return "positivo";
  } else if (numero < 0) {
    return "negativo";
  } else {
    return "zero";
  }
};

// Chamadas feitas APÓS a declaração da função
let resultado1 = verificarSinal(10);
let resultado2 = verificarSinal(-5);
let resultado3 = verificarSinal(0);

// Exibindo os valores corretos
console.log(`10 é ${resultado1}.`);
console.log(`-5 é ${resultado2}.`);
console.log(`0 é ${resultado3}.`);
