import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {
    const url = URL_SERVICIOS + '/img';

    if ( !img ) {
      return url + '/usuarios/xxx';
    }

    switch ( tipo ) {
      case 'usuario':
      return url + '/usuarios/' + img;
      break;

      case 'evidencia':
      return url + '/evidencia/' + img;
      break;

      case 'otracosa':
      break;

      default:
      return console.log('Tipo de imagen no existe');
    }
  }

}
