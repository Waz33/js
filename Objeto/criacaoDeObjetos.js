// usando a notacao literal
const obj1 = {}
console.log(obj1)

// Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funcoes construtoras
function Produto(nome, preco, desc){
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * ( 1  - desc)
  }
}

const prod1 = new Produto('Caneta', 7.99, 0.15)
const prod2 = new Produto('notebook', 2998.65, .25)
console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto())


// Funcao factory
function criarFuncionario(nome, salarioBase, faltas){
  return{
    nome, 
    salarioBase,
    faltas,
    getSalario(){
      return (salarioBase/30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('waz', 5000, 3)
const f2 = criarFuncionario('leo', 8000, 10)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma funcao famosa que retorna Objeto...
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)