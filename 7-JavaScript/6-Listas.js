console.log(`Trabalhando com Listas`)

const lista_destinos = [`São Paulo`, `Rio de Janeiro`, `Belo Horizonte`, `Campinas`]

const lista_destinos1 = new Array(
    `São Paulo`, 
    `Rio de Janeiro`, 
    `Belo Horizonte`, 
    `Campinas`
)

lista_destinos.push(`Curitiba`) //Adicionando item a Lista

lista_destinos.splice(0,1)//Start(numero de onde começa), Quantidade(quantidade de itens que vai remover a partir dai)Removendo item da lista


console.log(lista_destinos)
console.log(lista_destinos.length) //Exibe a quantidad de elementos da lista
console.log(lista_destinos1)