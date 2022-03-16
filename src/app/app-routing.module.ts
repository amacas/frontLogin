import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './compa/Artista/artista/artista.component';
import { IngresoComponent } from './compa/ingreso/ingreso/ingreso.component';
import { LoginComponent } from './compa/Login/login/login.component';
import { RegisterComponent } from './compa/Register/register/register.component';
import { UsuarioComponent } from './compa/Usuario/usuario/usuario.component';

const routes: Routes = [

  //aqui se agrega las instancias

  { path: "", component: LoginComponent }, //login
  { path: "register", component: RegisterComponent }, //register
  { path: "ingreso", component: IngresoComponent }, //ingreso
  { path: "usuario", component: UsuarioComponent },//ingreso usuario
  { path: "artista", component: ArtistaComponent }//ingreso usuario

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
