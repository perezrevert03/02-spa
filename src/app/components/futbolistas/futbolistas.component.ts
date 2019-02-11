import { Component, OnInit } from '@angular/core';
import { DestacadosService, Destacado } from '../../servicios/destacados.services';

@Component({
  selector: 'app-futbolistas',
  templateUrl: './futbolistas.component.html'
})
export class FutbolistasComponent implements OnInit {

  destacados: Destacado[] = [];

  // tslint:disable-next-line:variable-name
  constructor(private _destacadosService: DestacadosService) {

  }

  ngOnInit() {
    this.destacados = this._destacadosService.getDestacados();
    console.log(this.destacados);
  }

}
