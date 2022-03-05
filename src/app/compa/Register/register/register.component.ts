import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/models/provincia.model';
import { Genero } from 'src/app/models/genero.model';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario.model';
import { GeneroService } from 'src/app/servicios/genero/genero.service';
import { ProvinciaService } from 'src/app/servicios/provincia/provincia.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  public usuario: Usuario;
  public provincias:Array<Provincia>=[];
  public generos:Array<Genero>=[];


  constructor(
    //primero inyectamos la dependencia
    private _usuario_servicio: UsuarioService,
    private _provincia_servicio: ProvinciaService,
    private _genero_servicio: GeneroService



  ) {
    this.usuario = new Usuario();
    this.usuario.estado = '1';


  }

  ngOnInit(): void {

    //2 consumir el endponit
    this.provincia();
    this.genero();

  }

  registro() {
    // console.log(this.usuario);

    if (this.usuario.name.trim().length == 0) {
      alert('Ingrese un nombre: ');
    } else
      if (this.usuario.apellido.trim().length == 0) {
        alert('Ingrese un apellido: ');
      } else
      if (this.usuario.usuario.trim().length == 0) {
        alert('Ingrese un usuario: ');
      } else
      if (this.usuario.clave.trim().length == 0) {
        alert('Ingrese un clave: ');
      } else
      if (this.usuario.correo.trim().length == 0) {
        alert('Ingrese un correo: ');
      } else
      if (this.usuario.telefono.trim().length == 0) {
        alert('Ingrese un telefono: ');
      } else
      if (this.usuario.zipCode.trim().length == 0) {
        alert('Ingrese un Codigo de zipCode: ');
      } else
      if (this.usuario.direccion.trim().length == 0) {
        alert('Ingrese una direccion: ');
      } else
      if (this.usuario.ciudad.trim().length == 0) {
        alert('Ingrese un Codigo de ciudad: ');
      }
        else {
        this._usuario_servicio.registro(this.usuario)
          .subscribe((res: Respuesta) => {

            if (res.status) {
              this.clear();
              alert(res.message);
            } else {
              alert(res.message);
            }
          }
          );
      }
  }

  clear() {

    this.usuario.usuario = '';
    this.usuario.correo = '';
    this.usuario.clave = '';
    this.usuario.estado = '';
    this.usuario.name = '';
    this.usuario.apellido = '';
    this.usuario.telefono = '';
    this.usuario.zipCode = '';
    this.usuario.ciudad = '';
    this.usuario.direccion = '';
    this.usuario.provincia_id = '';
    this.usuario.genero_id = '';
  }

  provincia() {
    this._provincia_servicio.getProvincias()
    .subscribe((res) => {

      console.log(res);
      if (res.status) {
        this.provincias=res.data;
        console.log(this.provincias);
      } else {

      }
    }
    );
  }

  genero() {
    this._genero_servicio.getGeneros()
    .subscribe((res) => {

      console.log(res);
      if (res.status) {
        this.generos=res.data;
        console.log(this.generos);
      } else {

      }
    }
    );



  }
}


