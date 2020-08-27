//INICIO DO BOTAO DE ADICIONAR
var btnAdicionarPaciente = document.querySelector("#adicionar-paciente")


btnAdicionarPaciente.addEventListener("click", function(event){
    event.preventDefault() //Faz com que o formulario nao limpe e que a pagina nao se atualize
    
    

    //EXTRAINDO INFORMACOES DO PACIENTE DIRETAMENTE DO FORM
    var form = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteForm(form)

    AdiconaPaciente(paciente)

    form.reset()

})
//TÉRMINO DO BOTAO DE ADICIONAR

function AdiconaPaciente(paciente){
    var pacienteTr =  montaTr(paciente)
    var tabelaPacientes = document.querySelector("#tabela-pacientes")
    colocaFilhoNoPai (pacienteTr,tabelaPacientes)
}

function obtemPacienteForm(form){
    //CRIANDO OBJETO PACIENTE
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente){
    //CRIANDO A TR E A TD DO PACIENTE
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    //COLOCANDO OS FILHOS DENTRO DOS PAIS
    colocaFilhoNoPai(montaTd(paciente.nome, "info-nome"),pacienteTr)
    colocaFilhoNoPai(montaTd(paciente.peso, "info-peso"),pacienteTr)
    colocaFilhoNoPai(montaTd(paciente.altura, "info-altura"),pacienteTr)
    colocaFilhoNoPai(montaTd(paciente.gordura, "info-gordura"),pacienteTr)
    colocaFilhoNoPai(montaTd(paciente.imc, "info-imc"),pacienteTr)

    return pacienteTr
}

function colocaFilhoNoPai(filho, pai){
    pai.appendChild(filho)
}

function montaTd(dado,classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente){
    if(paciente.peso < 0 || paciente.peso > 300){

        paciente.imc = "Peso Inválido"
        console.log("Informções incoerentes")
        paciente.classList.add("campo-invalido") //Adiciona uma classe ao elemento

    }else if(paciente_altura < 0 || paciente_altura > 4){
        paciente.imc = "Altura"
        console.log("Informções incoerentes")
        paciente.classList.add("campo-invalido") //Adiciona uma classe ao elemento
        
    } else{
        var paciente_imc = paciente.querySelector(".info-imc").textContent
        paciente_imc = calcularImc(paciente_peso, paciente_altura)
        paciente.querySelector(".info-imc").innerHTML = paciente_imc
    }
}