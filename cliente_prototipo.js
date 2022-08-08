function Cliente (nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
     this.depositar = function(valor){
      this.saldo += valor
    }
   }
   const bob = new Cliente("Bob", "20536302215", "bob@email.com", 200)

   function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
   }
   const marley = new ClientePoupanca("Marley", "10011422524", "marley@email.com", 200, 400)

   ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
   }

console.log(bob.hasOwnProperty("saldoPoup"))
console.log(marley.hasOwnProperty("saldoPoup"))
console.log(bob instanceof Cliente)
console.log(typeof bob)
console.log(typeof marley)
console.log(marley instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)