import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provincia } from 'src/app/models/provincia.model';
import { Respuesta } from 'src/app/models/respuesta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  private url = environment.URL;

  constructor(
    private http: HttpClient
  ) { }

  getProvincias() {
    return this.http.get<Respuesta>(this.url + 'provincia');
  }




}
