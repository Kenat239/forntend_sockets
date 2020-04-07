import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Modulos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { opcionesNotifier } from './config/config';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { PipesModule } from './pipes/pipes.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
<<<<<<< HEAD
import { AuthInterceptor } from './clases/interceptor';
import { ModalPersonalComponent } from './components/modal-personal/modal-personal.component';
=======
import { AuthInterceptor } from './interceptor/interceptor';

>>>>>>> warsystem

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    PerfilComponent,
    CrearUsuarioComponent,
    ModalPersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule.withConfig(opcionesNotifier),
    SocketIoModule.forRoot(config),
    NgxMaskModule.forRoot(),
    PipesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
<<<<<<< HEAD
      useClass: AuthInterceptor,
      multi: true
=======
    useClass:  AuthInterceptor,
    multi: true
>>>>>>> warsystem
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
