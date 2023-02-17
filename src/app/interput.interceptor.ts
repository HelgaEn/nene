import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class InterputInterceptor implements HttpInterceptor {

  constructor() {}
id='1';
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    //request= request.clone({params: new HttpParams().append("","1")})
    //request= request.clone({headers: new HttpHeaders().set("","1")})

    request= request.clone({url: request.url+'/'+this.id})
    console.log(request);
    return next.handle(request)
   
  }
}
