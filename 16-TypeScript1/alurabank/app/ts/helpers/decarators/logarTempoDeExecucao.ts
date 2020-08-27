export function LogarTempoDeExecucao(emSegundo: boolean = false){

    console.log("ENTROU")

    return function(target : any, propertKey : string, descriptor : PropertyDescriptor){
        const metodoOriginal = descriptor.value; //TODA A LÓGICA DO METODO QUE UTILIZARA O DECORATOR VAI SER GUARDADA AQUI

        descriptor.value = function(...args: any[]){ //SOBREESCREVENDO O METODO ORIGINAL ESSE ...args: any[], INDICA QUE PODE SER PASSADO QUALQUER PARAMETRO PARA DENTRO DESSA FUNÇÃO
        
            
            console.log('____________________________________');
            console.log(`Parametros passados para o metodo ${propertKey}: ${JSON.stringify(args)}`);

            const t1 = performance.now();

            //CHAMANDO ESSE METODO NO CONTEXTO DO OBJETO QUE ESTÁ CHAMANDO ELE(O THIS INDICA ISSO  ` )
            const retorno = metodoOriginal(this, args);

            const t2 = performance.now();

            console.log(`O retorno do metodo ${propertKey} é: ${JSON.stringify(retorno)}`);
             
            console.log(`O tempo de execução do metodo ${propertKey} foi de ${t2 - t1}`);

            return retorno;

        }

        return descriptor;

    }
}