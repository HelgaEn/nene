import { Component, OnInit } from '@angular/core';
import { GetpostdataService } from '../getpostdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(public getpost: GetpostdataService, public router:Router) { }

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
