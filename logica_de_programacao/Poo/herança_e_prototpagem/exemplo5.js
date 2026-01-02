class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  imprimirDatelhes() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
  }
}

class Estudade extends Pessoa {
  constructor(nome, idade, numeroMatricula) {
    super(nome, idade);
    this.numeroMatricula = numeroMatricula;
  }

  imprimirDatelhes() {
    super.imprimirDatelhes();
    console.log(`Matrícula: ${this.numeroMatricula}`);
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, departamento) {
    super(nome, idade);
    this.departamento = departamento;
  }
  imprimirDatelhes() {
    super.imprimirDatelhes();
    console.log(`Departamento: ${this.departamento}`);
  }
}

const Estudade1 = new Estudade("Lucas", 20, 202601);
const Estudade2 = new Estudade("Marta", 20, 202602);
const Estudade3 = new Estudade("Carlos", 20, 202603);

const Professor1 = new Estudade("Joao", 45, 20261);
const Professor2 = new Estudade("santos", 60, 20262);
const Professor3 = new Estudade("maria", 20, 20263);

Estudade1.imprimirDatelhes();
Estudade2.imprimirDatelhes();
Estudade3.imprimirDatelhes();

Professor1.imprimirDatelhes();
Professor2.imprimirDatelhes();
Professor3.imprimirDatelhes();
