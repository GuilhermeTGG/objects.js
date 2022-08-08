class Cliente {
    constructor(nome, email, cpf, saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
    }

 depositar(valor){
    this.saldo += valor
  } 

exibirSaldo(){
    console.log(this.saldo);
  }
}

class clientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor){
     this.saldoPoupanca += valor
    }
}

const andre = new clientePoupanca("Andre", "emaliodencos", "aqui vem o cpf", 100, 250)

console.log(andre);

andre.depositar(10)

andre.depositarPoupanca(500)

console.log(andre);

