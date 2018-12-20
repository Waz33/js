const pessoa = {
  saudacao: 'bom dia',
  falar(){
    console.log(this.saudacao)
  }
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcionam e OO

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()