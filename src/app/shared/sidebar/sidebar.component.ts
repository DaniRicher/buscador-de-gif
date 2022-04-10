import { Component } from '@angular/core';
import { GifsService } from '../../gifs/sevices/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial
  }

  constructor(private gifsService:GifsService) {}

  buscar(termino:string){
    return this.gifsService.buscarGifs(termino);
  }
}
