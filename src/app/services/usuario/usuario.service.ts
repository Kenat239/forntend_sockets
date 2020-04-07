import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from 'src/app/interfaces/usuario';
import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';
import { ModificarU } from '../../interfaces/modificarPerfil';
import { tap } from 'rxjs/operators';
import { PerfilService } from '../../components/perfil/perfil.service';
import { SubirarchivoService } from '../subirarchivo/subirarchivo.service';
import { WebsocketService } from '../websocket/websocket.service';

declare var jQuery: any;
declare var $: any;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public notUsuario = new EventEmitter<any>();

  usuario: Usuario;
  token: string;
  menu: any[] = [];
<<<<<<< HEAD
  id: string;
=======
  usuarios: Usuario[] = [];

>>>>>>> warsystem

  constructor(
    public http: HttpClient,
    public router: Router,
    public _perfilService: PerfilService,
    public _subirArchivo: SubirarchivoService,
    public _wsService: WebsocketService
  ) {
    this.cargarStorage();
  }

  // Funciones de sesion
  login( usuario: Usuario ) {
    const url = URL_SERVICIOS + '/login';

    return this.http.post<Usuario>( url, usuario, { observe: 'response' } );
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('menu');
    localStorage.removeItem('usuario');

    this._wsService.desconectarSocket();

    this.router.navigate(['/login']);
  }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  guardarStorage(id: string, token: string, usuario: Usuario, menu: any) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('menu', JSON.stringify(menu));

    this.usuario = usuario;
    this.token = token;
    this.menu = menu;
  }

  cargarStorage() {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.id = localStorage.getItem('id');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.menu = JSON.parse(localStorage.getItem('menu'));
    } else {
      this.token = '';
      this.id = '';
      this.usuario = null;
      this.menu = [];
    }
  }

  // CRUD usuario
<<<<<<< HEAD
  crearUsuario() {}
  modificarUsuario( usuario: ModificarU, id?: string ) {
    let url = URL_SERVICIOS + '/usuario/';
    url += this.id;
    return this.http.put<Usuario>(url, usuario, { observe: 'response' } )
              .pipe(
                tap( ( data: any ) => {
                  const datos = data.body;
                  this.usuario = datos.usuario;
                  if ( id === datos.usuario._id ) {
                    const usuarioDB: Usuario = datos.usuario;
                    this.guardarStorage(this.usuario._id, this.token, usuarioDB, 'menu');
                    this.notUsuario.emit(datos);
                  }
                  console.log(data.body);
                  if ( usuario._id === this.usuario._id ) {
                    const usuarioDB: Usuario = datos.usuario;
                    this.guardarStorage( usuarioDB._id, this.token, usuarioDB, this.menu);
                    this.notUsuario.emit(datos);
                  }

                  this._perfilService.ocultarModalPerfil();
                  swal({
                    title: 'Usuario actualizado',
                    text: datos.mensaje,
                    type: 'success',
                    background: 'rgba(0, 0, 0, 0.96)'
                  });
                }, (error: any) => {
                  if ( error.status === 401 ) {
                    this._perfilService.ocultarModalPerfil();
                    return;
                  }

                  if ( error.status === 403 ) {
                    swal({
                      title: 'Error al actualizar usuario',
                      text: 'No tienes permiso para actualizar este usuario',
                      type: 'error',
                      background: 'rgba(0, 0, 0, 0.96)'
                    });
                    this._perfilService.ocultarModalPerfil();
                    return;
                  }

                  swal({
                    title: 'Error al actualizar usuario',
                    text: 'revise los datos proporcionados',
                    type: 'error',
                    background: 'rgba(0, 0, 0, 0.96)'
                  });
                  console.log(error);
                  this._perfilService.ocultarModalPerfil();
                }
                )
              );
  }
  cambiarImagenUsuario( archivo: File, id: string) {
    this._subirArchivo.subirArchivo( archivo, 'usuarios', id )
        .then( (resp: any) => {
          this.usuario.img = resp.usuario.img;

          this.guardarStorage(id, this.token, this.usuario, 'menu');
        })
        .catch( resp => {
          console.log(resp);
        });
  }
  cargarUsuarios() {}
  borrarUsuario() {}
  buscarUsuarios() {}

  cargarPlugins() {
    $('.easy-pie-chart').easyPieChart({
      barColor: 'rgba(255,87,51,255',
      scaleColor: false,
      trackColor: 'black',
      lineWidth: 3,
      lineCap: 'circle',
      size: 80
    });

    $('.peity-bar').peity('bar', {
      fill: ['rgba(255,87,51,255'],
      height: 20,
      width: 65,
      stroke: '#4d89f9'
    });
  }
=======
// ==================================================
// Dar de alta nuevo usuario
// ==================================================
  crearUsuario( usuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario';
    return this.http.post<Usuario>( url, usuario, { observe: 'response' } );
  }


// ==================================================
// Modificar usuario
// ==================================================
  modificarUsuario() {}


// ==================================================
// Cambiar imagen de usuario
// ==================================================
  cambiarImagenUsuario() {}



// ==================================================
// Cargar Listado de usuarios
// ==================================================
  cargarUsuarios( desde: number) {

    const url = URL_SERVICIOS + '/usuario/?desde=' + desde;
     return this.http.get(url);
    // return this.http.post<Usuario>( url, usuario, { observe: 'response' } );
  }


// ==================================================
// Borrar usuarios
// ==================================================
  borrarUsuario() {}


// ==================================================
// Buscar Usuarios
// ==================================================
  buscarUsuarios(busqueda: string) {
    const url = URL_SERVICIOS + '/busqueda/usuarios/' + busqueda;
    return this.http.get<Usuario[]>( url, { observe: 'response'} );
  }

>>>>>>> warsystem
}
