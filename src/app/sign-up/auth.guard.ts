import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.auth)

          this.router.navigate(['/SignIn'])
      return this.authService.auth;
  }

}

@Injectable()
export class ProducerGuard implements CanActivate {

    constructor(private authService:AuthService,private router:Router,
      private AuthorizationService:AuthorizationService){}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const Role = this.authService.getRole();

          if(this.authService.auth && (Role == "Producer" || Role == "Admin"))
           return true;

          else
          this.router.navigate(['/'])
          return false;

    }
}


@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private authService:AuthService,private router:Router,
      private AuthorizationService:AuthorizationService){}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


        const Role = this.authService.getRole();

          if(this.authService.auth && Role == "Admin")
           return true;

          else
          this.router.navigate(['/'])
          return false;

    }
}

@Injectable()
export class isAuthGuard implements CanActivate {

  constructor(private authService:AuthService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.auth)
          this.router.navigate(['**']);

      return !this.authService.auth;
  }



}
