import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  private url = environment.URL;

  constructor(
    private http: HttpClient
  ) { }


  registroSong( data:any)
  {
    return this.http.post<Respuesta>(this.url + 'musica/create', data);
  }
  listarSong( usuario_id:any, estado:any)
  {
    const link=this.url + 'musica/listar/'+ usuario_id +'/'+estado;
    return this.http.get<Respuesta>(link);
  }



}
