class ContaBancaria {
  constructor(titular, saldoInicial) {
    this.titular = titular;

    this.saldo = saldoInicial;
  }

  depositar(valor) {
    this.saldo += valor;

    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log(`Saldo insuficiente para sacar `);
    } else {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
    }
  }

  vericarSaldo() {
    console.log(`Saldo Atual: ${this.saldo}`);
  }
}

const minhaConta = new ContaBancaria("João", 1000);

minhaConta.vericarSaldo();

minhaConta.depositar(500);

minhaConta.sacar(200);
minhaConta.vericarSaldo();
minhaConta.sacar(2000);
