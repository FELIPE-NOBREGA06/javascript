function contaBancaria(titular, saldoInicial) {
  this.titular = titular;

  this.saldo = saldoInicial;

  this.depositar = function (valor) {
    if (valor > 0) {
      this.saldo += valor;

      console.log(
        `Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`
      );
    } else {
      console.log("O valor de depósito deve ser positivo.");
    }
  };

  this.sacar = function (valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(
        `Saque de R${valor} realizado com sucesso. saldo atual: R$${this.saldo}`
      );
    } else {
      console.log(
        "Sague não realizado. Verifique se o valor e postivos e se há saldo suficiente "
      );
    }
  };

  this.consultarSaldo = function () {
    console.log(`Saldo atual: R$${this.saldo}`);
  };
}

var minhaConta = new contaBancaria("Felipe Nobrega", 1000);

minhaConta.depositar(500);

minhaConta.sacar(200);

minhaConta.consultarSaldo();

function Carro(marca, modelo, quilometragemIncial) {
  this.marca = marca;

  this.modelo = modelo;

  this.quilometragemIncial = quilometragemIncial;

  this.dirigir = function (quilometros) {
    if (quilometros > 0) {
      this.quilometragem += quilometros;

      console.log(
        `Você dirigiu ${quilometros} km. Quilometragem atual: ${this.quilometragem} km.`
      );
    } else {
      console.log("Por favor, Insira uma disntância válida para digitar ");
    }
  };

  this.exbirInformarcoes = function () {
    console.log(
      `Carro: ${this.marca} ${this.modelo}. Quilometragem: ${this.quilometragem} km. `
    );
  };

  var meuCarro = new Carro("Toyota", "Carolla", 50000);

  meuCarro.dirigir(150);

  meuCarro.exbirInformarcoes();
}
