import { View } from './View'
import { Negociacoes } from '../models/Negociacoes'

export class NegociacoesView extends View<Negociacoes> {

    template(model: Negociacoes): string{

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
                    `
            })}

            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        
        `
    }
}
