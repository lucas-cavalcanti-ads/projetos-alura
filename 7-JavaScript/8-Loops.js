console.log(`Trabalhando com Condicionais`)

const lista_destinos = [`São Paulo`, `Rio de Janeiro`, `Belo Horizonte`, `Campinas`]
const idade_comprador = 14
const acompanhente = false
let passagem_cromprada = false
const destino = `São Paulo`
const qtd_lista_destinos = lista_destinos.length

console.log(`\nDestinos possiveis:`)
console.log(lista_destinos + "\n")

const pode_comprar = idade_comprador >= 18 || acompanhente

let x = 0
let destino_existe = false

while (x < qtd_lista_destinos){
    if(destino == lista_destinos[x]){
        destino_existe = true
        break
    }

    x += 1
}

if(destino_existe){
    console.log(`O destino ${destino}, existe!\n`)
}else{
    console.log(`O destino ${destino}, existe!\n`)
}