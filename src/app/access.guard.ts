import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RolesService } from './roles.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(
    private roles: RolesService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.roles.role=="admin"||this.roles.role=="user"){
      return true;
      }
      else{
        return this.router.navigateByUrl('/auth');
      }
  }
  
}
