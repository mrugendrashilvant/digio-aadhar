import { Injectable } from '@angular/core';

export interface User {
  isLoggedIn: boolean,
  email?: string,
  aadharNumber?: number,
  isAadharVerified?: boolean,
  isDocumentSigned?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public user:User = {
    isLoggedIn: false,
  }

  constructor() {
    let defaultUserDetails = localStorage.getItem("userDetails");
    if(defaultUserDetails){
      this.user = {...JSON.parse(defaultUserDetails)};
    }
  }

  getUserDetails(){
    return this.user;
  }

  updateUserDetails(user:User){
    this.user = Object.assign(this.user, user);
    localStorage.setItem("userDetails", JSON.stringify(this.user));
  }

  isUserLoggedIn():boolean{
    return this.user.isLoggedIn;
  }

  clearUserDetails(){
    localStorage.removeItem("userDetails");
    this.user = {isLoggedIn: false};
  }

}
