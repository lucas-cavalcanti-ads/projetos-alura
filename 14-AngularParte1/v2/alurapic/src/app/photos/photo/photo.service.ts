import { Photo } from './photo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

//URL API
const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root' })
export class PhotoService{

    constructor(private http: HttpClient){}

    listFromUser(userName: string){
        //REQUISIÇÃO HTTP COM VERBO GET
        return this.http
            .get<Photo[]>(API + '/' +  userName + '/photos') //Devolve um observable, e tem que fazer o subscribe para receber os dados            
    }

    listFromUserPaginated(userName: string, pagina : number){
        const params = new HttpParams()
            .append('page', pagina.toString());
        //REQUISIÇÃO HTTP COM VERBO GET
        return this.http
            .get<Photo[]>(API + '/' +  userName + '/photos', { params }); //Devolve um observable, e tem que fazer o subscribe para receber os dados            
    }

}