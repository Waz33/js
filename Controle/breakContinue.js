const numeros = [1,2,3,4,5,6,7,8,9,10]

for(let x in numeros){
  if(x == 5) {
    break
  }      
  console.log(`${x} = ${numeros[x]}`)
}

  console.log('')


for(let y in numeros){
  if(y ==5) {
    continue
  }
  console.log(`${y} = ${numeros[y]}`)
}

  console.log('')

  externo:
for(let a in numeros){
  for(let b in numeros){
    if(a == 2&& b ==3) break externo
    console.log(`Par = ${a}, ${b}`)
  }
}

  console.log('fimmmmmm')
