const cliente = {
    nome:"André",
    idade:"36",
    cpf:"12542145235",
    email:"andre@email.com"
}

//console.log(cliente.nome);

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos de idade.`);
console.log(`Três primeiros digitos do meu do cpf: ${cliente.cpf.substring(0,3)}`);