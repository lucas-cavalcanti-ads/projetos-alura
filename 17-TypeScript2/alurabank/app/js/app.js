const controle = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submit', controle.adiciona.bind(controle));
