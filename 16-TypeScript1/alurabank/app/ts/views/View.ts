import { LogarTempoDeExecucao } from '../helpers/decarators/index';


export abstract class View <T> { //o T fala que a classe é generica

    protected _elemento: JQuery;
    private _escapar:boolean;

    constructor(seletor:string, escapar:boolean = false){

        this._elemento = $(seletor);
        this._escapar = escapar;

    }

    @LogarTempoDeExecucao()
    update(model:T):void{

        let template = this.template(model);
        // if(this._escapar){
        //     template = template.replace(/<script>[\s\S]*?<\/script>/g,'');
        //     
        // }
        this._elemento.html(template);
        this._elemento.html(this.template(model));

    }

    abstract template(model:T):string;
}

