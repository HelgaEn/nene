import { Component } from '@angular/core';
import { RolesService } from './roles.service';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})


export class AppComponent {
 
  constructor(
    public role: RolesService,
    private http: HttpClient,
   
  ){}
  title = 'FirstEvoApp';
  onUser(){
    this.role.role="user";
  }
  onAdm(){
    this.role.role="admin";
  }
 
}
