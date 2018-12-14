// funcao em JS first class object (citzens)
// High Order Function

// criar de forma literal
function func1() {}

// armazenar em uma variavel
const func2 = function () {}

// armazenar em uma array
const array = [function(a,b) { return a+b}, func1, func2]
console.log(array[0](2,3))

//// armazenar em atributo de objeto
const obj = {}
obj.falar = function(){ return 'Opahh'}
console.log(obj.falar())

// Passar como parametro
function run(fun){
  fun()
}
run(function(){ console.log('Executanto...')})

// uma funcao pode retornar/conter uma funcao
function soma(a,b){
  return function(c){
    console.log(a+b+c)
  }
}
soma(2,3)(4)

const cinco = soma(2,5)
cinco(4)