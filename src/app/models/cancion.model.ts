import { Album } from "./album.model";
import { GenerSong } from "./generSong.model";
import { Usuario } from "./usuario.model";
import { Year } from "./year.model";

export class Cancion{
  id:number=0;
  usuario_id:any;
  generSong_id:any;
  album_id:any;
  year_id:any;
  time:string='';
  name_song:string='';
  sizeFile:number=0;
  estado:any;

  //Relaciones Opcionales  (se le agrega ?)
  gener_song?:GenerSong;
  usuario?:Usuario;
  year?:Year;
  album?:Album;
}
