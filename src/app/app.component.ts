import { Component, OnInit } from '@angular/core';
import { GetdataService } from './getdata.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   constructor(private getData: GetdataService){}
   users: object[]=[];

   ngOnInit(){
    this.getData.getData().subscribe({
      next:(resp: any) => {this.users=resp;}
    })
   }
 
}
