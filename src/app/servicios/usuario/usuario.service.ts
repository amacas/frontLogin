import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.URL;

  constructor(
    public http: HttpClient
  ) { }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.url + 'usuarios ');
  }

  login( data:any)
  {
    return this.http.post(this.url + 'login', data);
  }
}
