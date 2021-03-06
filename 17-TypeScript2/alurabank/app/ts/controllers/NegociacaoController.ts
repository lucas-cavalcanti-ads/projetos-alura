class NegociacaoController{
    
    private _inputData : JQuery;
    private _inputQuantidade : JQuery;
    private _inputValor : JQuery;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView: NegociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView: MensagemView = new MensagemView('#mensagemView');

    constructor(){ //Declarando o construtor e criando os atributos de uma vez
        this._inputData =  $("#data");
        this._inputQuantidade =  $("#quantidade");
        this._inputValor = $("#valor");
    }

    adiciona(event: Event){

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')), //convertendo a string para tipo Date e trocando tudo o que é "-", por virgula(",")
            parseInt(this._inputQuantidade.val()), 
            parseFloat(this._inputValor.val())
            );

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update("Cadastro realizado com sucesso!");

    }
}