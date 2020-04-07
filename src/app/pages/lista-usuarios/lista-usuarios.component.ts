import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import swal from 'sweetalert2';
import { HttpRequest } from '@angular/common/http';
import { CrearUsuarioService } from 'src/app/components/crear-usuario/crear-usuario.service';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number;
  totalRegistros: number = 0;
  oculto: string;

  constructor(

    public _usuarioService: UsuarioService,
    public _crearUsuarioService: CrearUsuarioService

  ) { }

  ngOnInit() {

    this.cargarUsuarios();
    this._crearUsuarioService.notificar.subscribe((resp:any) => {

      
      
       if( resp.tipo === 'usuarioNuevo') {
         //this._usuarioService.cargarUsuarios();
         this.usuarios.push( resp.data );
          
          this.totalRegistros += 1;
       }
    })
  }

// ======================================================
// Mostrar lista de usuarios registrados en sistema
// ======================================================
  cargarUsuarios( ) {

    this._usuarioService.cargarUsuarios( this.desde )
    .subscribe( (resp: any) => {
      
      this.totalRegistros = resp.conteo;
      this.usuarios = resp.usuarios;
    }, ( err ) => {
      swal({
        title: 'Error al cargar usuarios',
        text: 'Surgio un problema con la consulta',
        type: 'warning',
        background: 'rgba(0,0,0,0.96)'
      });
    });
  }
// ======================================================
// Busqueda de usuario
// ======================================================
  buscarUsuarios(busqueda: string ) {
    if ( busqueda.length <= 0) {
      this.cargarUsuarios();
      return;
    }
    this._usuarioService.buscarUsuarios( busqueda )
    .subscribe( ( data: any ) => {
      const resp = data.body;
      
      this.usuarios = resp.usuarios;
      var conteo = this.usuarios.length;
      this.totalRegistros = conteo
    }, (error: any) => {
      swal({
        title: 'Error al buscar usuario',
        text: error,
        type: 'warning',
        background: 'rgba(0,0,0,0.96)'
      });
    });
  }
}
