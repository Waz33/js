//funcao sem retorno
function imprimirSoma(a,b){
  console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(5)
imprimirSoma(3,8,4,56,33,98,77) //so usa os 2 primeiros

//funcao com retorno
function soma(a=1, b=1){ //seta valor default
  return a + b
}

console.log(soma(4,9))
console.log(soma(2)) // 
console.log(soma())