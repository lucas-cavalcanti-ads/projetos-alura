System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LogarTempoDeExecucao(emSegundo = false) {
        console.log("ENTROU");
        return function (target, propertKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                console.log('____________________________________');
                console.log(`Parametros passados para o metodo ${propertKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOriginal(this, args);
                const t2 = performance.now();
                console.log(`O retorno do metodo ${propertKey} é: ${JSON.stringify(retorno)}`);
                console.log(`O tempo de execução do metodo ${propertKey} foi de ${t2 - t1}`);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("LogarTempoDeExecucao", LogarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
