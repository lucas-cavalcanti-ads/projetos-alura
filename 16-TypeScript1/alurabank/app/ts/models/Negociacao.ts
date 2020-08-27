export class Negociacao{

    //O Readonly subistitui os gets, mas não permite setar os valores, apenas no construtor
    constructor(readonly data : Date, readonly quantidade : number, readonly valor : number){} //Declarando o construtor e criando os atributos de uma vez

    get volume(){
        return this.quantidade * this.valor;
    }
}