export class ContaCorrente{
    agencia;
    num_conta;
    conta_digito;
    _saldo;

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

    deposito(valor){
        if(valor < 0){
            console.log("Valor a depositar incorreto")
            return
        }

        this._saldo += valor
        console.log(`Deposito realizado. Saldo atual: R$ ${this._saldo},00`)
        return this._saldo //Retornando saldo atualizado
    }
}
