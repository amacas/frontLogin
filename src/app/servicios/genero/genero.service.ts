import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Genero } from 'src/app/models/genero.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {


  private url = environment.URL;

  constructor(
    private http: HttpClient
  ) { }

  geGenero() {
    return this.http.get<Genero>(this.url + 'genero');
  }





}
