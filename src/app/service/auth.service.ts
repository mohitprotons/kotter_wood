import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticate(): boolean {
    //method return true or false based on login credential
    // const userData = localStorage.getItem('Credential');
    const userData= localStorage.getItem("cri")
console.log(JSON.stringify(userData))
    if (userData != null) {
      return true;
    }
    else {
      return false;
    }

  }
}
