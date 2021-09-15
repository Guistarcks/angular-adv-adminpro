import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//******* */ MODULES/*************
//************************************
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,  
 
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    //RUTAS INTERNTAS PRIVADAS 
    PagesModule,
    SharedModule,
    AuthModule,
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
