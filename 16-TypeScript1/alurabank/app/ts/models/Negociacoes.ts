import { Negociacao } from './Negociacao';
import { LogarTempoDeExecucao } from '../helpers/decarators/index';

export class Negociacoes{
    
    private _negociacoes : Array<Negociacao> = [];


    adiciona(negociacao : Negociacao): void{
        this._negociacoes.push(negociacao);

    }

    @LogarTempoDeExecucao()
    paraArray(): Negociacao[]{

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

}