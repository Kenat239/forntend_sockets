import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
<<<<<<< HEAD
import { PersonalComponent } from './personal/personal.component';
=======
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
>>>>>>> warsystem

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard'} },
  { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios'} },
<<<<<<< HEAD
  { path: 'personal', component: PersonalComponent, data: { titulo: 'Personal'} },
=======
  { path: 'listaUsuarios', component: ListaUsuariosComponent, data: { titulo: 'Lista de Usuarios'}},
>>>>>>> warsystem
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
