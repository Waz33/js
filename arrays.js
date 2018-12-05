const valores = [7,3,8.6,9.4]
console.log(valores)
console.log(valores[0], valores[3])
console.log(valores[777])

valores[4] = 11
console.log(valores)
console.log(valores.length)

//Add
valores.push({id:33}, false, null, 'teste')
console.log(valores)

//remove
console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)