import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { PerfilService } from './perfil.service';
import { ModificarU } from '../../interfaces/modificarPerfil';
import { Usuario } from 'src/app/interfaces/usuario';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  actualizarPerfil: FormGroup;
  public notPerfil = new EventEmitter<any>();

  usuario: ModificarU;
  usuarioAct: Usuario;
  imagenSubir: File;
  imagenTemp: any;

  oculto: string;
  constructor(
    public _usuarioService: UsuarioService,
    public _perfilService: PerfilService
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
<<<<<<< HEAD
    console.log(this.usuario);
    this.actualizarPerfil = new FormGroup({
      nombre: new FormControl( this.usuario.nombre, Validators.required ),
      apellidoP: new FormControl( this.usuario.apellidoP, Validators.required ),
      apellidoM: new FormControl( this.usuario.apellidoM, Validators.required ),
      email: new FormControl( this.usuario.email, [Validators.required, Validators.email] )
    });

    this._perfilService.notificacion.subscribe( (data) => {
      if ( data === 'cancelar' ) {
        this.imagenTemp = null;
        this.actualizarPerfil.patchValue({
          nombre: this.usuario.nombre,
          apellidoP: this.usuario.apellidoP,
          apellidoM: this.usuario.apellidoM,
          email: this.usuario.email
        });
      }
    });
=======
    this.oculto = 'oculto';
>>>>>>> warsystem
  }

  seleccionarImagen( archivo: File) {
    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      swal({
        title: 'Solo imagenes',
        text: 'El archivo seleccionado no es una imagen',
        type: 'error',
        background: 'rgba(0, 0, 0, 0.96)'
      });
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result;
    console.log(reader.result);
  }

  mostrarFile(  ) {
    const element: HTMLElement = document.getElementById('upload_img') as HTMLElement;
    element.click();
  }

  modificarUsuario() {
    const usuarioActualizado: ModificarU = this.actualizarPerfil.value;
    console.log(usuarioActualizado);
    this._usuarioService.modificarUsuario(usuarioActualizado, this._usuarioService.id)
        .subscribe((resp) => {
          this.usuario = this._usuarioService.usuario;
          this.actualizarPerfil.patchValue({
            nombre: this.usuario.nombre,
            apellidoP: this.usuario.apellidoP,
            apellidoM: this.usuario.apellidoM,
            email: this.usuario.email
          });
      });

      if ( this.imagenSubir ) {
        this._usuarioService.cambiarImagenUsuario( this.imagenSubir, this.usuario._id);
      } else {
        console.log('No hay imagen para subir');
      }
  }
}
