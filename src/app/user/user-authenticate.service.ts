import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(flag,username) {
    if (flag) {
      sessionStorage.setItem('username',username)
      return false;
    } else {
      return true;
    }
  }

  adminauthenticate(flag,username){
    if (flag) {
      sessionStorage.setItem('username',username)
      return false;
    } else {
      return true;
    }
  }

  isUserLoggedIn() {
   
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)

  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}