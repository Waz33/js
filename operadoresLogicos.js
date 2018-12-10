function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2 // OR
  const comprarTv50 = trabalho1 && trabalho2 //AND
  const comprarTv321 = !!(trabalho1 != trabalho2) // bitwise XOR
  const comprarTv32 = trabalho1 != trabalho2 // XOR
  const manterSaudavel = !comprarSorvete // operador Unario

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
