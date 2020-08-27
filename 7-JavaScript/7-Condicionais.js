console.log(`Trabalhando com Condicionais`)

const lista_destinos = [`São Paulo`, `Rio de Janeiro`, `Belo Horizonte`, `Campinas`]
console.log(lista_destinos)
const idade_comprador = 14
const acompanhente = false

if (idade_comprador >= 18) {

    console.log("Comprador Maior de Idade")
    lista_destinos.splice(0, 1)

} else if (acompanhente) {

    console.log(`Não é maior de idade, pois a idade é igual à ${idade_comprador}`)
    console.log(`PODE VIAJAR, POIS ESTÁ COM ACOMPANHANTE`)
} else {
    console.log(`Não é maior de idade, pois a idade é igual à ${idade_comprador}`)
    console.log(` NÃO PODE VIAJAR, POIS ESTÁ SEM ACOMPANHANTE`)
}

console.log(lista_destinos)
