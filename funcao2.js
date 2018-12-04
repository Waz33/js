//armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a+b)
}

imprimirSoma(2,9)

// Armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
  return a+b
}

console.log(soma(3,9))

//retorno implicito
const subtracao = (a,b) => a-b

console.log(subtracao(5,3))

//Unico parametro
const imprimir2 = a => console.log(a)

imprimir2("testannnnnndo...")