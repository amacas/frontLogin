import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './compa/Login/login/login.component';
import { RegisterComponent } from './compa/Register/register/register.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IngresoComponent } from './compa/ingreso/ingreso/ingreso.component';
import { UsuarioComponent } from './compa/Usuario/usuario/usuario.component';
import { ArtistaComponent } from './compa/Artista/artista/artista.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IngresoComponent,
    UsuarioComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
