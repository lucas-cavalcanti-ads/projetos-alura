import { NegociacaoController } from './controllers/NegociacaoController'

const controller = new NegociacaoController();

$('.form').submit(controller.adiciona.bind(controller));//o bind vai manter o this da função no controller

$('botao-importa').click(controller.importaDados.bind(controller))
