var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table")

tabela.addEventListener("dblclick",function(event){
    var alvoEvento = event.target
    var paiAlvo = alvoEvento.parentNode
    paiAlvo.classList.add("fadeOut")

    setTimeout(function(){
        
        paiAlvo.remove()

    },599)
    
})


// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove()
//         var nome = paciente.querySelector(".info-nome").textContent
//         alert(`O paciente ${nome}, foi removido!`)

//     })

// })

