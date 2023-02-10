import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AskhttpService } from './askhttp.service';

@Injectable({
  providedIn: 'root'
})

export class HttpResolverResolver implements Resolve<string> {
  constructor( private Askhttp: AskhttpService){}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return this.Askhttp.getResolve()
  }
}
