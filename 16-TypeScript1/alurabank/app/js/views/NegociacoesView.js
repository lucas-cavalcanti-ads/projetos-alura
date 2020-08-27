System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, NegociacoesView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends View_1.View {
                template(model) {
                    return `
        <table class="table table-hover table-bordered">
            <thead class="text-center">
                <tr>
                    <th class="text-center">DATA</th>
                    <th class="text-center">QUANTIDADE</th>
                    <th class="text-center">VALOR</th>
                    <th class="text-center">VOLUME</th>
                </tr>
            </thead>

            <tbody id="corpo-tabela">
            ${model.paraArray().map(negociacao => {
                        return `
                    <tr class="text-center">
                        <td>${negociacao.data.getDate()} / ${negociacao.data.getMonth() + 1} / ${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>    
                    </tr>
                    `;
                    })}

            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        
        `;
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
