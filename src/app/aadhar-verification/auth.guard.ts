import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
    providedIn: "root"
})

export class AuthGuard implements CanActivate {
    constructor(
        private auth:AuthenticationService,
        private router: Router,
    ){

    }

    canActivate(){
        if(!this.auth.isUserLoggedIn()){
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}