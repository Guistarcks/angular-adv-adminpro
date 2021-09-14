import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './Pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './Pages/progress/progress.component';

//Rutas personalizadas 
const routes: Routes=[
 //Rutas Hijas//
 {path: '', 
 component:PagesComponent,
 children:[
 {path:'dashboard', component:DashboardComponent},
 {path:'progress', component:ProgressComponent},
 {path:'grafica1', component:Grafica1Component},
 {path:'', redirectTo:'/dashboard', pathMatch:'full'},
 ]

},

 {path:'login',  component:LoginComponent},
 {path:'register', component:RegisterComponent},


 
 {path:'**', component:NopagefoundComponent},

];



@NgModule({
  declarations: [],
  imports: [
    //Rutas principales
    RouterModule.forRoot(routes)

  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }