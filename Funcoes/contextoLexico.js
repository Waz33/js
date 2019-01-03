const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

// obs:  a funcao vai ser levar consigo o lugar/contexto onde ela foi incluida e carrega com ela