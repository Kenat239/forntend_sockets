import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';
import { PerfilService } from '../../components/perfil/perfil.service';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;
  fullname: string;

  constructor(
    public _usuarioService: UsuarioService,
    public _perfilService: PerfilService,
    public _sidebarService: SidebarService
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
    this._sidebarService.cargarMenu();
    this._usuarioService.notUsuario.subscribe((data: any) => {
      this.usuario = this._usuarioService.usuario;
    });
  }

}
