import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnAuthModule } from './component/login/unauth.module';
import { AuthModule } from './pages/auth.module';







@NgModule({
  declarations: [
    AppComponent,
    
   
   
  
    
  ],
  imports: [
    UnAuthModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
