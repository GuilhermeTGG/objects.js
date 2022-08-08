const clientes = [
    {
      nome: "Bob",
      cpf: "12312312312",
      dependentes: [{
        nome: "Marlinho",
        parentesco: "filho",
        dataNasc: "20/04/2011"
       },
       {
        nome: "Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
       }],
    },
    {
      nome: "July",
      cpf: "12532512545",
      dependentes: [{
        nome: "Rafael",
        parentesco: "filho",
        dataNasc: "22/05/2005"
       }],
    }
   ]
   const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

   console.table(listaDependentes)