import { Injectable,EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/services.index';


@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {
  public oculto: string;
  public notificar = new EventEmitter<any>();
  public id: string;
  public usuario: Usuario;


  constructor(
    public _usuarioService: UsuarioService
  ) { 
    this.oculto = 'oculto';
  }

  mostrarModalCrearUsuario( id?: string ) {
    console.log(id);
    this.oculto = '';
    this.id = id;
  }
  

  ocultarModalCrearUsuario(){
    this.oculto = 'oculto';
    this.id = null;
  }
  
cancelarModalCrearUsuario(){
  this.oculto = 'oculto';
  this.id = null;
  this.notificar.emit('cancelar');
}

ModalUsuarioNuevo( usuario ){
  this.notificar.emit({
    tipo:'usuarioNuevo',
    data: usuario
  })
}

}
