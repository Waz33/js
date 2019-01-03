class Pessoa {
  constructor(nome){
    this.nome = nome
  }

  falar(){
    console.log(`Meu nome eh ${this.nome}`)
  }
}

const p1 = new Pessoa('Joauuummm')
p1.falar()

const pessoa = nome => {
  return {
    falar: () => console.log(`Mew nome eh ${nome}`)
  }
}

const p2 = new Pessoa('Jozzze')
p2.falar()
