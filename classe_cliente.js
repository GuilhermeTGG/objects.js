class Cliente {
    constructor(nome, email, cpf, saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.salo = saldo
    }

 depositar(valor){
    this.saldo += valor
  } 

exibirSaldo(){
    console.log(this.saldo);
  }
}

const andre = new Cliente("Andre", "email@andreemail.com", "5452124122145", 100)

andre.exibirSaldo();
console.log(andre)