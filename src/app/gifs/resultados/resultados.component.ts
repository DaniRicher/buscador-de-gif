import { Component } from '@angular/core';
import { GifsService } from '../sevices/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  get resultados(){
    return this.gifService.resultado;
  }

  constructor(private gifService:GifsService) { }

  

}
