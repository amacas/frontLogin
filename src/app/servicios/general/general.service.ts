import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private url = environment.URL;

  constructor(
    private http: HttpClient
  ) { }

  getRoles() {
    return this.http.get<Respuesta>(this.url + 'rol');
  }
  getYears() {
    return this.http.get<Respuesta>(this.url + 'year');
  }
  getGenerSongs() {
    return this.http.get<Respuesta>(this.url + 'generSong');
  }
  getAlbumSongs() {
    return this.http.get<Respuesta>(this.url + 'name_album');
  }


}
