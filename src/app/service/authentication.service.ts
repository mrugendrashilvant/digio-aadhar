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

  constructor() { }

  isUserLoggedIn():boolean{
    return this.user.isLoggedIn;
  }

  clearUserDetails(){
    this.user = {isLoggedIn: false};
  }

}
