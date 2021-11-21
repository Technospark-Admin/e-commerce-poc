import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData:any;
  constructor() { }
  authenticate(userData):boolean{
    if(userData.userName == userData.password){
      this.userData = userData;
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean{
    if(this.userData){
      return true;
    }
    return false;
  }
}
