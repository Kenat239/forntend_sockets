import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  public oculto: string;
  public notificacion = new EventEmitter<any>();


  constructor() {
    this.oculto = 'oculto';
   }

  mostarModalPerfil() {
    const aside = document.getElementsByTagName('aside') [0];
    aside.classList.remove('toggled');
    this.oculto = '';
  }

  ocultarModalPerfil() {
    const section = document.getElementsByClassName('sa-backdrop');
    while ( section.length > 0) {
      section[0].parentNode.removeChild(section[0]);
    }
    this.oculto = 'oculto';
    this.notificacion.emit('cancelar');
  }
}
