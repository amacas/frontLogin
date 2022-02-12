import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username: string = "";
  password: string = "";
  usuario: Usuario;
  public listaUsuarios: Usuario[] = [];

  constructor(
    private _usuarioService: UsuarioService
  ) {
    this.usuario = new Usuario();

  }



  ngOnInit(): void {
    this.getUsuarios();
  }



  //metodos
  getUsuarios() {
    this._usuarioService.getUsuarios().subscribe(res => {
      this.listaUsuarios = res;
      console.log(this.listaUsuarios);
    })
  }


  login() {
    if (this.usuario.correo.trim().length > 0 && this.usuario.clave.trim().length > 0) {
      this._usuarioService.login(this.usuario).subscribe(res => {
        console.log(res);

      })

    } else {
      alert("Ingrese los datos");
    }

  }
}
