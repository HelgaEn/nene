import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetpostdataService } from '../getpostdata.service';


@Component({
  selector: 'app-tovar',
  templateUrl: './tovar.component.html',
  styleUrls: ['./tovar.component.css']
})
export class TovarComponent implements OnInit {

  constructor(public getpost: GetpostdataService, private router: Router) { }

  ngOnInit(): void {
    this.getpost.getData() 
  }
  open(id: string){
    this.router.navigate(['/admin/items/',id], {
      queryParams: {
        id: id
      },
    });
  }

}
