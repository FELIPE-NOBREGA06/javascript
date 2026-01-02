class Pai {
  constructor(nome) {
    this.nomePai = nome;
  }
}

class Mae {
  constructor(nome) {
    this.nomeMae = nome;
  }
}

class Escola {
  constructor(nome) {
    this.nomeEscola = nome;
  }
}

class Filho {
  constructor(nome, pai, mae, escola) {
    this.nome = nome;
    this.pai = pai.nomePai;
    this.mae = mae.nomeMae;
    this.escola = escola.nomeEscola;
  }
}

const pai = new Pai("Roberto");
const mae = new Mae("Ana");
const escola = new Escola("ABC");

const filho = new Filho("Lucas", pai, mae, escola);

console.log(
  `Filho: ${filho.nome}, Pai: ${filho.pai}, Mãe: ${filho.mae}, Escola: ${filho.escola}`
);
