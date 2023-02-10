import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AskhttpService {

  constructor( private http: HttpClient) {}
   

   getFirst(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
    
     queryParams = new HttpParams().set("postId", 1)
   getSecond(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments', { params: this.queryParams  })
   }
   getThird(){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',{'body': ''})
   }
   getFour(){
    return this.http.get('https://jsonplaceholder.typicode.com/post')
   }
   getFive(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts',{ headers: {'X-test' :'1', responseType: 'text'}})
   }
   getSix(){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
   }

   getResolve(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1',{responseType: 'text'})
   }
}
