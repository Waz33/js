let a = 3
global.b = 444
this.a = 222
this.c = 555
this.d = 666
this.e = 777

console.log(a)
console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)


//criando variavel malika
abc = 3 ///nao faca isso
console.log(global.abc)

///module.exports = {e: 888, f: false, g: 'teste'}