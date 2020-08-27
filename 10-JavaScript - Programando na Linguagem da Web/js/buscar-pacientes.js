var btnBuscarPaciente = document.querySelector("#adicionar-paciente-externo")


btnBuscarPaciente.addEventListener("click", function(event){
    //OBJETO PARA CONSUMIR API
    var xhr = new XMLHttpRequest()

    //ABRINDO CONECXAO
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientess")

    //RECEBENDO DADOS
    xhr.addEventListener("load",function(){

        if(xhr.status == 200){
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            for(var i = 0;i < pacientes.length;i++){
                AdiconaPaciente(pacientes[i])
            }
        }else{
            console.log(xhr.status)
            console.log(xhr.responseText)
        }
    })
    
    //ENVIANDO REQUISICAO GET
    xhr.send()

})