/** @format */

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  exibirDetalhes() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
  }

  comprimentar() {
    console.log(`Olá, eu sou ${this.nome}!`);
  }
}

const Pessoa1 = new Pessoa("João", 30);

Pessoa1.exibirDetalhes();

Pessoa1.comprimentar();

const pessoa2 = new Pessoa("Maria", 20);

pessoa2.exibirDetalhes();
pessoa2.comprimentar();

const pessoa3 = new Pessoa("Carlos", 25);

pessoa3.exibirDetalhes();
pessoa3.comprimentar();

const pessoa4 = new Pessoa("Pedro", 20);

pessoa4.exibirDetalhes();
pessoa4.comprimentar();
