import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { Respuesta } from 'src/app/models/respuesta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {


  private url = environment.URL;

  constructor(
    private http: HttpClient
  ) { }

  getGeneros() {
    return this.http.get<Respuesta>(this.url + 'genero');
  }





}
