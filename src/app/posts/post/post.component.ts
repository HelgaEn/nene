import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RolesService } from 'src/app/roles.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title: any;
  body: any;
  
  constructor(private activatedroute: ActivatedRoute, public rolesService: RolesService) { }
 

  
  ngOnInit(): void {

    this.activatedroute.queryParams.subscribe(data=>{
      this.title= data['title'];
    this.body=data['body']}
      );
    }
  }


