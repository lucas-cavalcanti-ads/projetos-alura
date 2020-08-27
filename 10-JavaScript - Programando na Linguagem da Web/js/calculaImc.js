var pacientes = document.querySelectorAll(".paciente")

//INICIO DO CALCULO DO IMC AUTOMATICO
for(var x = 0;x < pacientes.length;x++){

    //Extraindo informações do paciente diretramente do HTML
    var paciente = pacientes[x]
    var paciente_nome = paciente.querySelector(".info-nome").textContent
    var paciente_peso = parseFloat(paciente.querySelector(".info-peso").textContent)
    var paciente_altura = parseFloat(paciente.querySelector(".info-altura").textContent)
    var paciente_gordura = parseFloat(paciente.querySelector(".info-gordura").textContent)
    
    
    if(paciente_peso < 0 || paciente_peso > 300){

        paciente.querySelector(".info-imc").innerHTML = "Peso Inválido"
        console.log("Informções incoerentes")
        paciente.classList.add("campo-invalido") //Adiciona uma classe ao elemento

    }else if(paciente_altura < 0 || paciente_altura > 4){
        paciente.querySelector(".info-imc").innerHTML = "Altura inválida"
        console.log("Informções incoerentes")
        paciente.classList.add("campo-invalido") //Adiciona uma classe ao elemento
        
    } else{
        var paciente_imc = paciente.querySelector(".info-imc").textContent
        paciente_imc = calcularImc(paciente_peso, paciente_altura)
        paciente.querySelector(".info-imc").innerHTML = paciente_imc
    }
}
//TÉRMINO DO CALCULO DO IMC AUTOMATICO


function calcularImc(peso,altura){
    var imc = (peso / (altura * altura)).toFixed(2)
    return imc
}


