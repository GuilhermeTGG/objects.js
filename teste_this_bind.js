const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

   const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())

//UTILIZANDO O BIND

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())