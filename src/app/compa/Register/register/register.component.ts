import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  public usuario: Usuario;

  constructor() {
    this.usuario=new Usuario( );
    this.usuario.estado='1';
   }

  ngOnInit(): void {



  }
  registro(){
    console.log(this.usuario)
  }

}


