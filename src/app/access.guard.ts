import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RolesService } from './roles.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivateChild {
  constructor(
    private roles: RolesService,
    private router: Router
  ){}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.roles.role=="admin"){
      return true;
    }
    else{
      return this.router.navigateByUrl('/error');
    }
  }
  
}
