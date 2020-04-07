import { NotifierOptions } from 'angular-notifier';
import { SocketIoConfig } from 'ngx-socket-io';

export const URL_SERVICIOS = 'http://localhost:5000';
export const configSockets: SocketIoConfig = { url: 'http://localhost:5000', options: {} };
export const opcionesNotifier: NotifierOptions = {
    position: {
      horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'bottom',
      distance: 12,
      gap: 10
    }
    },
    theme: 'material',
    behaviour: {
      autoHide: 5000,
      onClick: 'hide',
      onMouseover: 'pauseAutoHide',
      showDismissButton: true,
      stacking: 4
    },
    animations: {
      enabled: true,
      show: {
        preset: 'slide',
        speed: 300,
        easing: 'ease'
      },
      hide: {
        preset: 'slide',
        speed: 300,
        easing: 'ease',
        offset: 50
      },
      shift: {
        speed: 300,
        easing: 'ease'
      },
      overlap: 150
    }
  };
