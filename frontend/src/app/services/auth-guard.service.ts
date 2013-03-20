import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    if(this.auth.isUserLoggedIn()){

      if(typeof route.data.roles !== 'undefined' && route.data.roles !== null) {
        const allowedRoles = route.data.roles as Array<string>;

        let allowed = false;

        this.auth.getLoggedInUser().roles.forEach((role: string) => {

          if(allowedRoles.indexOf(role) !== -1){
            allowed = true;
          }

        });

        if(!allowed){
          this.router.navigateByUrl('/');
          return false;
        }

        return true;

      }

      return true;
    }



    this.router.navigateByUrl('/login');
    return false;

  }
}
