// import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'land', component: LandingPageComponent},



]
@NgModule({
  
  declarations: [LoginComponent, SignUpComponent, InputTextComponent, InputButtonComponent, LandingPageComponent],
  imports: [
    RouterModule.forChild(routes),

    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule

  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  exports: [RouterModule],

})
export class UnAuthModule { }
