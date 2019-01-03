function Carro(velocidaMaxima = 200, delta = 5){
    //atributo privato
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidaMaxima){
            velocidadeAtual += delta 
        } else{
            velocidadeAtual = velocidaMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())