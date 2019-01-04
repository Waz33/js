// novo recurso do ES2015

const pessoa = {
  nome: 'waz',
  idade: 33,
  endereco: {
    logradouro: 'rua bia',
    numero: 1000
  }
}
console.log(pessoa)

const { nome, idade} = pessoa 
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)


