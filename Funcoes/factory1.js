const prod1 = {
  nome: 'pro',
  preco: 45
}

const prod2 = {
  nome: 'pro',
  preco: 45
}

// factory simples
function criarPessoa(){
  return {
    nome: 'ana',
    idade: 11
  }
}

console.log(criarPessoa())