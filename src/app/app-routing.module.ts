//************MODULOS************** */
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages/pages.routing';

import { RouterModule, Routes} from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';




const routes: Routes=[
 
  //path:'dashboard' PagesRouting
  //path:'progress'  PagesRouting
  //path:'grafica1'  PagesRouting
  //path:'login'     AuthRouting
  //path:'register'  AuthRouting
  //path:'xxx'  xxxxxx
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component:NopagefoundComponent},

];

@NgModule({
  declarations: [],
  imports: [
    
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule

  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }