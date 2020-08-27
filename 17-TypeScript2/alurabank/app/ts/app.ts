
const controle = new NegociacaoController();

document
    .querySelector('.form')
    .addEventListener('submit', controle.adiciona.bind(controle)); //o bind vai manter o this da função no controller
