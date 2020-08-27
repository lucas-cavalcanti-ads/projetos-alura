function calcularImc(peso,altura){
    var imc = (peso / (altura * altura)).toFixed(2)
    return imc
}