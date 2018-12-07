// par nome/valor
const saudacao = 'opah' //contexto lexico 1

function exec(){
  const saudacao = 'falaaaa' //contexto lexico 2
  return saudacao
}


// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Waz',
  idade: 33,
  peso: 70,
  endereco: {
    logradouro: 'rua',
    numero: 999
  }
}

saudacao

console.log(saudacao)
console.log(exec())
console.log(cliente)
