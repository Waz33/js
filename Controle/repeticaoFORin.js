// ForIn pode percorrer array ou objetos  /// Filter//Map/Reduce sao melhores ainda

const notas = [6.7, 8.4, 9.8, 7.7]
for(let i in notas){
  console.log(`nota ${i} = ${notas[i]}`)
}

console.log('')

const pessoa = {
  nome:'Waz',
  idade: 33, 
  peso: 77
}
for(let atributo in pessoa){
  console.log(`atributo ${atributo} = ${pessoa[atributo]}`)
}