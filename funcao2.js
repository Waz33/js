//Armazenando uma funcao dentro de uma variavel
const imprimirSoma = function (a,b) {
  console.log(a+b)
}

imprimirSoma(2,3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
  return a+b
}
console.log(soma(2,7))

//Retorno implicito
const subtracao = (a,b) => a - b
console.log(subtracao(4,1))

const imprimir2 = a => a*a
console.log(imprimir2(7))