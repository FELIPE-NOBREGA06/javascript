// Declara uma variável chamada 'numero' e atribui o valor 25
let numero = 25;

// Verifica se o número é maior que 5
if (numero > 5) {
  // Executa se a condição for verdadeira
  console.log("O número é maior que 5");
} else {
  // Executa se a condição for falsa
  console.log("O número não é maior que 5");
}

// Declara a variável 'idade' com valor 16
let idade = 16;

// Verifica se a idade é menor que 18
if (idade < 18) {
  console.log("Você é menor de idade");
} else {
  console.log("Você é maior de idade");
}

// Declara a variável 'saldo' com valor 100
let saldo = 100;

// Verifica se o saldo é maior ou igual a zero
if (saldo >= 0) {
  console.log("Seu saldo é positivo ou zero");
} else {
  console.log("Seu saldo é negativo");
}

// Declara a variável 'temperatura' com valor 25
let temperatura = 25;

// Verifica se a temperatura é menor ou igual a zero
if (temperatura <= 0) {
  console.log("Está muito frio");
} else {
  console.log("A temperatura está acima de zero");
}

// Declara a variável 'cor' com valor "vermelho"
let cor = "vermelho";

// Verifica se a cor é exatamente "vermelho"
if (cor === "vermelho") {
  console.log("A cor é vermelho");
} else {
  console.log("A cor não é vermelho");
}

// Declara a variável 'diaSemana' com valor "sábado"
let diaSemana = "sábado";

// Verifica se o dia NÃO é domingo
// Obs: há um espaço após "domingo ", o que pode causar erro lógico
if (diaSemana !== "domingo ") {
  console.log("Hoje não é domingo");
} else {
  console.log("Hoje é domingo");
}

// Declara a variável 'idadeE' com valor 25
let idadeE = 25;

// Declara a variável booleana indicando se possui carteira de motorista
let possueCarteiraDeMotorista = true;

// Verifica se a pessoa é maior de idade E possui carteira de motorista
if (idadeE >= 18 && possueCarteiraDeMotorista) {
  console.log("Você é maior de idade e possui carteira de motorista");
} else {
  console.log("Você não é maior de idade ou não possui carteira de motorista");
}

// Declara a variável 'diaDaSemana' com valor "sábado"
let diaDaSemana = "sábado";

// Verifica se é sábado OU domingo
// Obs: "Domingo" começa com letra maiúscula, o que pode causar erro
if (diaDaSemana === "sábado" || diaDaSemana === "Domingo") {
  console.log("É fim de semana");
} else {
  console.log("Não é fim de semana");
}
