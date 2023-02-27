import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface post{
  userId: number,
  id: number,
  title: string,
  body: string
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  response: any;
  post: post[] =[];
  
 

  constructor( private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10').subscribe(
    (response)=>{this.response=response;
     
      this.post = response
  })
  }
  /*
  open(aid:post){
    this.router.navigate(['/posts/post',aid.id]);

  }
  */
  open(aid:post){
    this.router.navigate(['/posts/post',aid.id], {
      queryParams: {
        title: aid.title,
        body: aid.body,
      },
    });

  }
  
}
