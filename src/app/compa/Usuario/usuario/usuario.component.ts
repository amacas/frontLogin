import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { Cancion } from 'src/app/models/cancion.model';
import { GenerSong } from 'src/app/models/generSong.model';
import { Respuesta } from 'src/app/models/respuesta';
import { Year } from 'src/app/models/year.model';
import { AlbumService } from 'src/app/servicios/album/album.service';
import { CancionService } from 'src/app/servicios/cancion/cancion.service';
import { GeneralService } from 'src/app/servicios/general/general.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public cancion:Cancion;
  public album:Album;
  public years:Array<Year>=[];
  public geners_songs:Array<GenerSong>=[];
  public albums:Array<Album>=[];
  private sesion:any;
  public canciones:Cancion[]=[];
  public id:string='';

  constructor(
    private _general_servicio: GeneralService,
    private _cancion_servicio: CancionService,
    private _album_servicio: AlbumService

  ) {

    this.album =new Album();
    this.album.estado = '1';

    this.cancion =new Cancion();
    this.cancion.estado = '1';

    const u=localStorage.getItem('sesion')
    if(u){
      this.sesion=JSON.parse(u);
    };

    this.getid();
  }

  ngOnInit(): void {

  }

  getid(){
    const data = localStorage.getItem('sesion');
    if(data != null){
      const sesion = JSON.parse(data);
      this.id=sesion.id;
    }
  }

  registerSong() {
    // console.log(this.cancion);

    if (this.cancion.name_song.trim().length == 0) {
      alert('Ingrese del album: ');
    } else
      if (this.cancion.time.trim().length == 0) {
        alert('Ingrese el tiempo de la cancion: ');
      } else
      if (this.cancion.sizeFile == 0) {
        alert('Ingrese el tamaño de la cancion: ');
      } else {
        this.cancion.usuario_id=this.sesion.id;
        //console.log(this.sesion);
        this._cancion_servicio.registroSong(this.cancion)
          .subscribe((res: Respuesta) => {

            if (res.status) {
              this.clear();
              this.listarAlbum();
              alert(res.message);
            } else {
              alert(res.message);
            }
          }
          );
      }
  }

  clear() {

    this.cancion.generSong_id='';
    this.cancion.album_id='';
    this.cancion.year_id='';
    this.cancion.time='';
    this.cancion.name_song = '';
    this.cancion.sizeFile=0;
    this.cancion.usuario_id='';
  }





  listarAlbum(){

  }

  eliminarAlbum(){

  }

}
