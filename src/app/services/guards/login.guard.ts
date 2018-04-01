import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable()
export class LoginGuard implements CanActivate {


  constructor (
    public _usuarioService: UsuarioService,
   public router: Router) { }
  canActivate( ) {

    if ( this._usuarioService.estaLogueado()) {
      console.log( 'Pasó por el login Guard ');
      return true;
    } else {
      console.log( 'Bloqueado por el Guard ');
      this.router.navigate(['/login']);
      return false;
    }



  }
}
