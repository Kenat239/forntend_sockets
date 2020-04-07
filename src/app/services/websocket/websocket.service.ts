import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { NotifierService } from 'angular-notifier';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  private notifier: NotifierService;

  constructor(
    private socket: Socket,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  checkStatus() {
    this.socket.on('connect', () => {
      this.notifier.notify('success', 'Conectado al servidor de sockets');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      this.notifier.notify('error', 'Desconectado del servidor de sockets');
      this.socketStatus = false;
    });
  }

  listen( evento: string ) {
    return this.socket.fromEvent( evento );
  }

  emit( evento: string, payload?: any, callback?: Function ) {
    this.socket.emit( evento, payload, callback );
  }

  loginWS( usuario: Usuario ) {
    return new Promise((resolve, reject) => {
      this.emit('configurar-usuario', usuario, resp => {
        console.log(resp);
        resolve();
      });
    });
  }

  desconectarSocket() {
    this.socket.disconnect();
  }

  conectarSocket() {
    this.socket.connect();
  }

}
