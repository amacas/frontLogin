import { Component, OnInit } from '@angular/core';
import { Cancion } from 'src/app/models/cancion.model';
import { Respuesta } from 'src/app/models/respuesta';
import { Year } from 'src/app/models/year.model';
import { GeneralService } from 'src/app/servicios/general/general.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  public cancion:Cancion;
  public years:Array<Year>=[];



  constructor(
    private _cancion_servicio: GeneralService

  ) {
    this.cancion =new Cancion();
    this.cancion.estado = '1';

  }


  ngOnInit(): void {
    this.year();

  }



  clear() {

    this.cancion.name_song = '';
    this.cancion.name_album = '';
    this.cancion.year_id='';

  }

  year(){
    this._cancion_servicio.getYears()
    .subscribe((res)=>{

      if (res.status) {
        this.years=res.data;
      }
    }
    )


  }
}


