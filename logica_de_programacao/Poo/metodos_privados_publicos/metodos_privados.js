class Funcionario {
  #nome;
  #idade;

  constructor(nome, idade) {
    this.#nome = nome;
    this.#idade = idade;
  }

  #calcularSalario(horasTrabalhadas, taxaHora) {
    return horasTrabalhadas * taxaHora;
  }

  exibirSalario(horasTrabalhadas, taxaHora) {
    const salario = this.#calcularSalario(horasTrabalhadas, taxaHora);

    console.log(`O salário de ${this.#nome} é R$ ${salario}`);
  }

  getNome() {
    return this.#nome;
  }

  getIdade() {
    return this.#idade;
  }
}

const funcionario1 = new Funcionario("João", 30);
const funcionario2 = new Funcionario("Pedro", 24);
const funcionario3 = new Funcionario("Carlos", 25);

funcionario1.exibirSalario(40, 20);

console.log(`Nome: ${funcionario2.getNome()}`);
