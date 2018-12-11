const imprimirResultado = function(nota){
  if(nota > 7){
    console.log('Aprovado')
  } else {
    console.log('Reprovado')
  }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado('epah') //Cuidade com o tipo do dado passado //js eh fracamente tipado