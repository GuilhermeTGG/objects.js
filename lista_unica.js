const clientes = [
    {
        nome:"André",
        cpf:"12542145235",
        dependentes: [{
         nome:"Sara",
         parantesco:"filha",
         dataNasc:"20/03/2011"
        },
         {
            nome:"Samia Maria",
            parantesco:"filha",
            dataNasc:"04/01/2014"
         }],
        },
        {  
            nome:"Juliana",
            cpf:"45454454132",
            dependentes: [{
             nome:"Sophia",
             parantesco:"filha",
             dataNasc:"30/08/2020"
        }],
    }
]

const listaDepenentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDepenentes);