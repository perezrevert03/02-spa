import { Component, OnInit } from '@angular/core';
import { DestacadosService } from '../../servicios/destacados.services';

@Component({
  selector: 'app-futbolistas',
  templateUrl: './futbolistas.component.html'
})
export class FutbolistasComponent implements OnInit {

  destacados: any[] = [];

  // tslint:disable-next-line:variable-name
  constructor(private _destacadosService: DestacadosService) {
    console.log('Constructor');
  }

  ngOnInit() {
    this.destacados = this._destacadosService.getDestacados();
    console.log(this.destacados);
  }

}
