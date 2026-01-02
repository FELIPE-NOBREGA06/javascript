class AlunoEscolaPai {
  constructor(codigo, nome, sexo, idade) {
    this.codigo = codigo;
    this.nome = nome;
    this.sexo = sexo;
    this.idade = idade;
  }

  imprimirNatela() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Sexo: ${this.sexo}`);
    console.log(`Idade: ${this.idade}`);
    console.log("");
  }
}

class AlunoEscolaFilho extends AlunoEscolaPai {
  constructor() {
    super(1, "Cleonice", "femnino", 19);
  }
}

class AlunoEscolaNeto extends AlunoEscolaPai {
  constructor() {
    super(2, "Alan", "Masculino", 28);
  }
}

const dadosEscolaFilho = new AlunoEscolaFilho();
dadosEscolaFilho.imprimirNatela();

const dadosNetos = new AlunoEscolaNeto();

dadosNetos.nome = "Alfredo Neto";
dadosNetos.idade = 38;

dadosNetos.imprimirNatela();
