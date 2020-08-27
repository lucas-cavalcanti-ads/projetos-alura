import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe ({name : 'filtroPorDescricao'})
export class filtroPorDescricao implements PipeTransform{
    
    transform(photos: Photo[], descricaoQuery: string) {
        descricaoQuery = descricaoQuery.trim().toLowerCase(); //Retirando espaços e colocando como caixa baixa

        if(descricaoQuery){
            return photos.filter(photo => 
                photo.description.toLowerCase().includes(descricaoQuery)
            );
        }else{
            return photos;
        }
    }

}