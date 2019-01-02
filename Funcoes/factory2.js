
function criarProduto(nome = 'w', preco = 0){
  return{
    nome: nome,
    idade: preco,
    desconto: 0.1
  }
}

console.log(criarProduto('celular',100))
console.log(criarProduto('pc',100))
console.log(criarProduto('contrabaixo',100))