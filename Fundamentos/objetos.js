const prod1 = {}
prod1.nome = 'celular ultra mega'
prod1.preco = 4998.65
prod1['desconto legal'] = 0.40 //evitar atributos com espacos
prod1.fun = (xx) => { return xx*2}; //arrow func
console.log(prod1)

//chama arrow func
console.log(prod1.fun(33))