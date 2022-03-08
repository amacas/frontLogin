import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import {  Router } from '@angular/router';


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
    private _usuarioService: UsuarioService,
    private router:Router
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
      // console.log(this.listaUsuarios);
    })
  }


  login() {
    if (this.usuario.correo.trim().length > 0 && this.usuario.clave.trim().length > 0) {
      this._usuarioService.login(this.usuario).subscribe(res => {

        if (res.status) {
          this.usuario =res.data;
          alert(" Acceso correcto");
          console.log(res);
          if(res.data.rol_id == 1 ) {//Ingreso por artista
            this.router.navigateByUrl('artista')
          }else if(res.data.rol_id == 2 ) {//Ingreso por usuario
            this.router.navigateByUrl('usuario')
          }
        } else {
          alert(res.message);
        }
      })

    } else {
      alert("Ingrese los datos");
    }

  }



}
