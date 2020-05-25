import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';

  constructor(private _usuarioService: UsuariosService) {
    this.obtenerUsuarios()
  }

  obtenerUsuarios() {
    this._usuarioService.obtenerUsuarios()
      .subscribe(resp => {
        console.log(resp);
      }), (err: any) => {
        console.log("Error");

      }
  }
}
