
abstract class View <T> { //o T fala que a classe é generica
    
    protected _elemento: JQuery;

    constructor(seletor:string){

        this._elemento = $(seletor);

    }

    update(model:T):void{

        this._elemento.html(this.template(model));

    }

    abstract template(model:T):string;
}