import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { UsuarioService } from '../services/usuario/usuario.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor( private _usuarioService: UsuarioService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this._usuarioService.token;
        const authReq = req.clone( { headers: req.headers.set('Authorization', authToken)} );
        return next.handle(authReq);
    }

}
