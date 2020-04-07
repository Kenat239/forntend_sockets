import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SocketIoModule } from 'ngx-socket-io';
import { configSockets } from '../config/config';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';
<<<<<<< HEAD
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../clases/interceptor';
import { PersonalComponent } from './personal/personal.component';
=======
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

>>>>>>> warsystem

@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
<<<<<<< HEAD
    PersonalComponent
  ],
  providers: [
=======
    ListaUsuariosComponent
>>>>>>> warsystem
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PipesModule,
    SocketIoModule.forRoot(configSockets)
  ]
})
export class PagesModule { }
