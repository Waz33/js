function imprimirNome(obj){
  try{
    console.log(obj.name.toUpperCase() + ' !!!')
  } catch(e){
    tratarErroLancar(e)
  } finally {
    console.log('Finallllll')
  }
}

function tratarErroLancar(erro){
  //throw 10
  //throw true
  //throw 'mensagemwwwwwwww'
  throw {
    name: erro.name,
    msg: erro.message,
    date: new Date()
  }
}

const obj = {nome: 'Wazzzzzz'}

imprimirNome(obj)