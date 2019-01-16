// colecao dinamica de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco 
delete produto['marca do produto']
console.log(produto)

const carro = {
  valor: 8900,
  proprietario:{
    nome:'Raul',
    idade: 56,
    endereco:{
      logradouro: 'rua abc',
      numero: 123
    }
  },
  condutores:[{
    nome:'Ana',
    idade: 43
  },
  {nome:'junior',
    idade:19
  }],
  calcularSeguro: function(){
    // ...
  }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'rua biacica'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)