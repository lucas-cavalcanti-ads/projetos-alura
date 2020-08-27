var campoFiltro = document.querySelector("#filtar-tabela") 

campoFiltro.addEventListener("input",function(){
    var textoFiltro = campoFiltro.value
    var pacientes = document.querySelectorAll(".paciente")  
    if(this.value.length > 0){
        for(var i = 0;i < pacientes.length;i++){
        
            var paciente = pacientes[i]
            var nomePaciente = paciente.querySelector(".info-nome").textContent
            var expressaoRegular = new RegExp(this.value, "i")

            if(!expressaoRegular.test(nomePaciente)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
        }
    }else{
        for(var i = 0;i < pacientes.length;i++){
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        }


    }
    
})


