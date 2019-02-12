import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destacado, DestacadosService} from '../../servicios/destacados.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  destacados: Destacado[] = [];
  param: string;

  // tslint:disable-next-line:variable-name
  constructor(private activatedRoute: ActivatedRoute, private _destacadosService: DestacadosService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.param = params.jugador;
      this.destacados = this._destacadosService.buscarDestacado(params.jugador);
    });
  }

}
