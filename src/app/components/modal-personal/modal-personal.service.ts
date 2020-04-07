import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalPersonalService {
  public oculto: string;
  public nmp = new EventEmitter<any>();

  constructor() {
    this.oculto = 'oculto';
   }

   mostarModalPersonal() {
    const aside = document.getElementsByTagName('aside') [0];
    aside.classList.remove('toggled');
    this.oculto = '';
  }

  ocultarModalPersonal() {
    const section = document.getElementsByClassName('sa-backdrop');
    while ( section.length > 0) {
      section[0].parentNode.removeChild(section[0]);
    }
    this.oculto = 'oculto';
    this.nmp.emit('cancelar');
  }
}
