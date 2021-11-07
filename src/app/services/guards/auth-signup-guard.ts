import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthSignupGuard implements CanActivate {

  constructor(private as: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise(resolve => {
      this.as.user.subscribe(user => {
        if (user) {
          this.router.navigate(['/'])
          resolve(false)
        }
        else resolve(true)
      })
    })
    throw new Error('Method not implemented.');
  }
}
