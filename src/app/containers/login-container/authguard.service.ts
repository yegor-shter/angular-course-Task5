import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    let user = localStorage.getItem('user');
    if(user) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
