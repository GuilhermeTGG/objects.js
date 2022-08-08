const cliente = {
    nome:"André",
    idade:"36",
    cpf:"12542145235",
    email:"andre@email.com",
    fones: ["32252255","98857457"],
    dependentes: [
    {
     nome:"Sara",
     parantesco:"filha",
     dataNasc:"20/03/2011" },
     {
        nome:"Samia Maria",
        parantesco:"filha",
        dataNasc:"04/01/2014"
     }
    ],
    saldo:100,

    depositar: function(valor){
    this.saldo += valor
      }
    }

    console.log(cliente.saldo);

    cliente.depositar(30);

    console.log(cliente.saldo);