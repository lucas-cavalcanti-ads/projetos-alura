const informacoesCliente = [
    {
        cpf : 11122233345,
        nome : "Lucas"
    },

    {
        cpf : 11122233345,
        nome : "Bianca"
    }
]

const corpoTabela = document.querySelector("[data-corpo-tabela]")

const exibeCliente = (cpf,nome) => {
    const linha = document.createElement("tr")
    const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
    `
    linha.innerHTML = conteudoLinha

    return linha
}

informacoesCliente.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
})