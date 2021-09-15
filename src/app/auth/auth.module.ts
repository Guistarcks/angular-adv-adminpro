import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    //HAY QUE AÑADIR SIEMPRE EN DECLARACIÓN Y EXPORTS
    LoginComponent,
    RegisterComponent
  ],
  exports:[
  //EXPORTAR PARA SER UTILIZADO EN OTROS MODULOS EJEMPLO APPMODULES.
  LoginComponent,
  RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
