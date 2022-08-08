const cliente = {
    nome:"André",
    idade:"36",
    cpf:"12542145235",
    email:"andre@email.com",
    fones: ["955821254", "32251254"],
    dependentes: [{
    nome:"Sara Silva",
    parantesco:"filha",
    dataNasc:"20/03/2011"
  }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014");

console.log(filhaMaisNova[0].nome);