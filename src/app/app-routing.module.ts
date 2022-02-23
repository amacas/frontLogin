import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './compa/Login/login/login.component';
import { RegisterComponent } from './compa/Register/register/register.component';

const routes: Routes = [

  { path: "", component: LoginComponent }, //login
  { path: "register", component: RegisterComponent }, //reggister


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
