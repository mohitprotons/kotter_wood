import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authService:AuthService,
  private router: Router){

}



  canActivate(): boolean{

    if (!this.authService.isAuthenticate()) {
          
        
      this.router.navigate([" "]);
     
         
        

      // return false;
    
  }


  return true
  }
   
  
  
}
