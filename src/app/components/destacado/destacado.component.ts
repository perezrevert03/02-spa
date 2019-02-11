import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DestacadosService } from '../../servicios/destacados.services';

@Component({
  selector: 'app-destacado',
  templateUrl: './destacado.component.html'
})
export class DestacadoComponent {

  destacado: any = { };

  // tslint:disable-next-line:variable-name
  constructor(private activatedRoute: ActivatedRoute, private _destacadosService: DestacadosService) {
    this.activatedRoute.params.subscribe( params => {
      this.destacado = this._destacadosService.getDestacado(params.id);
    });
  }

}
