//import {Cliente} from "./Cliente.js"
//import {ContaCorrente} from "./ContaCorrente.js"

//INICIO CLIENTE
class Cliente{
    static qtd_cliente = 0
    nome;
    _cpf;

    //CONSTRUTORES
    constructor(cpf,nome){
        Cliente.qtd_cliente += 1 //VERIFICA QUANTAS VEZES ESSE CONSTRUTOR FOI CRIADO
        this._cpf = cpf
        this.nome = nome
    }


    //GETTER E SETTERS
    get cpf (){
        return this.cpf
    }

}
//TERMINO CLIENTE

//INICIO CONTA CORRENTE
class ContaCorrente{
    agencia;
    num_conta;
    conta_digito;
    _cliente;
    _saldo = 0;

    //GETTER E SETTER
    set cliente (cliente){
        if(cliente instanceof Cliente){
            this._cliente = cliente
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo    
    }
    //METODO SACAR
    sacar(valor){
        if(this._saldo < valor){
            console.log("Valor Indisponivel para saque")
            return
            
        }else{
            this._saldo -= valor
            console.log(`Saque realizado. Saldo atual: R$ ${this._saldo},00`)
            return this._saldo //Retornando saldo atualizado
        }
    }

    //METODO DEPOSITAR
    deposito(valor){
        if(valor < 0){
            console.log("Valor a depositar incorreto")
            return
        }

        this._saldo += valor
        console.log(`Deposito realizado. Saldo atual: R$ ${this._saldo},00`)
        return this._saldo //Retornando saldo atualizado
    }

    //METODO TRANSFERIR
    transfeir(valor, conta_debitada){
        const valor_sacado = this.sacar(valor)
        conta_debitada.deposito(valor)
    }
}

//TÉRMINO CONTA CORRENTE

const cliente1 = new Cliente(33344455566, 'Cidinha'); 
const conta_corrente_cliente1 = new ContaCorrente();
const cliente2 = new Cliente(33344455566, 'Lucas'); 
const conta_corrente_cliente2 = new ContaCorrente();

conta_corrente_cliente1.cliente = cliente1

console.log(Cliente.qtd_cliente)


