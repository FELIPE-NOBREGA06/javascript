class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    console.log(`${this.nome} faz um som.`);
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log(`${this.nome} late.`);
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log(`${this.nome} mia.`);
  }
}

const cachorro1 = new Cachorro("Rex");
const gato1 = new Gato("Mingau");

cachorro1.emitirSom();
gato1.emitirSom();
