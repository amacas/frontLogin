import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private url = environment.URL;

  constructor(
    private http: HttpClient
    ) { }
  registroAlbum( data:any)
  {
    return this.http.post<Respuesta>(this.url + 'album/create' , data);
  }

  listarAlbum( usuario_id:any, estado:any)
  {
    const link=this.url + 'album/listar/'+ usuario_id + '/' + estado;
    return this.http.get<Respuesta>(link);
  }

}
