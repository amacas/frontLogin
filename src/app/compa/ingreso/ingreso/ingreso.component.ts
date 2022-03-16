import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { Cancion } from 'src/app/models/cancion.model';
import { GenerSong } from 'src/app/models/generSong.model';
import { Respuesta } from 'src/app/models/respuesta';
import { Year } from 'src/app/models/year.model';
import { CancionService } from 'src/app/servicios/cancion/cancion.service';
import { GeneralService } from 'src/app/servicios/general/general.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  public cancion:Cancion;
  public years:Array<Year>=[];
  public geners_songs:Array<GenerSong>=[];
  public albums:Array<Album>=[];

  constructor(
    private _general_servicio: GeneralService,
    private _cancion_servicio: CancionService

  ) {
    this.cancion =new Cancion();
    this.cancion.estado = '1';

  }

  ngOnInit(): void {
    this.year();
    this.generSong();
    this.name_album();

  }

  registerSong() {
    // console.log(this.cancion);

    if (this.cancion.name_song.trim().length == 0) {
      alert('Ingrese el nombre de la cancion: ');
    } else
      if (this.cancion.time.trim().length == 0) {
        alert('Ingrese el tiempo de la cancion: ');
      } else
      if (this.cancion.sizeFile == 0) {
        alert('Ingrese el tamaño de la cancion: ');
      } else {
        this._cancion_servicio.registroSong(this.cancion)
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

    this.cancion.name_song = '';
    this.cancion.year_id='';
    this.cancion.album_id='';
    this.cancion.generSong_id='';
    this.cancion.sizeFile=0;
    this.cancion.time='';

  }

  year(){
    this._general_servicio.getYears()
    .subscribe((res)=>{
      if (res.status) {
        this.years=res.data;
      }
    }
    )
  }

  generSong(){
    this._general_servicio.getGenerSongs()
    .subscribe((res)=>{

      if (res.status) {
        this.geners_songs=res.data;
      }
    }
    )
  }
  name_album(){
    this._general_servicio.getAlbumSongs()
    .subscribe((res)=>{

      if (res.status) {
        this.albums=res.data;
      }
    }
    )
  }


}
