import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
   

  { path: '', loadChildren: './component/login/unauth.module#UnAuthModule' },

  {path:'pages', loadChildren: './pages/auth.module#AuthModule',canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
