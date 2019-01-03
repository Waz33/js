function Pessoa(nome){
  this.nome = nome;

  this.falar = function(){
    console.log(`Mew nome eh ${this.nome}`)
  }
}

const p1 = new Pessoa('Wazzzz')
p1.falar()