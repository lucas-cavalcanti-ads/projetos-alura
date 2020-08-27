import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from './../photo/photo';



@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  hasMore
  photos: Photo[] = [];
  filtro: string = '';
  debounce: Subject<string> = new Subject<string>();
  
  
  constructor(private activatedRoute: ActivatedRoute){ }
  
  ngOnInit(): void{
    this.photos = this.activatedRoute.snapshot.data['photos'];
    this.debounce //ESPERA 300MS PARA REALIZAR O SUBSCRIBE E CONSEQUENTEMENTE APLICAR O FILTRO
      .pipe(debounceTime(300))
      .subscribe(filtro => this.filtro = filtro);
  }

  ngOnDestroy(): void { //RETIRANDO O DEBOUNCE DA MEMORIA
    this.debounce.unsubscribe();
  }

}
