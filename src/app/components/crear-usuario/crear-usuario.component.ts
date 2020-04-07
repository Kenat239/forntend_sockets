import { Component, OnInit, EventEmitter } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from '../../interfaces/usuario';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { CrearUsuarioService } from './crear-usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  newUser: FormGroup;
  oculto: string;
usuario: Usuario;

public notifica = new EventEmitter<any>();


  constructor(
    public router: Router,
    public _usuarioService: UsuarioService,
    public _crearUsuarioService: CrearUsuarioService
   
  ) { }


  ngOnInit() {
    this.newUser = new FormGroup({
      nombre: new FormControl(null, [Validators.required,Validators.minLength(3)]),
      apellidoP: new FormControl(null, [Validators.required,Validators.minLength(3)]),
      apellidoM: new FormControl(null, [Validators.required,Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email] ),
      password: new FormControl(null, Validators.required),
      password1: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),

    }, { validators: this.sonIguales( 'password', 'password1')});

  this._crearUsuarioService.notificar.subscribe( ( data: any) => {
    if (data === 'cancelar') {
      this.newUser.reset();
    }
  });
   

  }

  sonIguales( campo1: string, campo2: string) {
    return ( group: FormGroup ) => {

      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }
    return {
        sonIguales: true
      };
    };
    }

  registrar() {

if ( this.newUser.invalid ) {
  return;
}

  const usuario: Usuario = ( this.newUser.value );
  this._usuarioService.crearUsuario( usuario )
  .subscribe( ( data: any ) => {
    const datos = data.body;
    this._crearUsuarioService.ocultarModalCrearUsuario();
    this.newUser.reset();
    swal({
      title: 'Usuario Nuevo',
      text: datos.mensaje,
      type: 'success',
      background: 'rgba(0, 0, 0, 0.96)'
    });
    if( datos.usuario ){
      this._crearUsuarioService.ModalUsuarioNuevo(datos.usuario);
    }

  }, (error: any) => {
    swal({
      title: 'Error al registrar usuario nuevo',
      text: error.error.mensaje,
      type: 'error',
      background: 'rgba(255, 117, 0, 0.96)'
    });
  });
}

}
