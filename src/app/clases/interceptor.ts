import { HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioService } from '../services/usuario/usuario.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _usuarioService: UsuarioService,
    private router: Router
    ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this._usuarioService.token;
    console.log(authToken);

    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    return next.handle(authReq).pipe(
      tap(
        (error: any ) => {
          if ( error.status === 401 ) {
            this._usuarioService.logout();
            this.router.navigate(['/login']);
            swal({
              title: 'Sesión expirada',
              text: 'A expirado su sesión',
              type: 'info',
              background: '0, 0, 0, 0.96'
            });
          }
          console.log(error);
        }
      )
    );
  }
}
