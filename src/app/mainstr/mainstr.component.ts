import { Component, OnInit } from '@angular/core';
import { GetpostdataService } from '../getpostdata.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mainstr',
  templateUrl: './mainstr.component.html',
  styleUrls: ['./mainstr.component.css']
})
export class MainstrComponent implements OnInit {
  
  
  constructor(public getpost: GetpostdataService, private router: Router) { }
  

  ngOnInit(): void {
    this.getpost.getData() 
  }

  open(id: string){
    this.router.navigate(['/catalog/',id], {
      queryParams: {
        id: id
      },
    });
  }

}
