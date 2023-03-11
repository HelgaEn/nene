import { Component, OnInit } from '@angular/core';
import { GetuserdataService } from '../getuserdata.service';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent implements OnInit {

  constructor(public getuserdata:GetuserdataService, public rolesService: RolesService) { }

  ngOnInit(): void {
  }

}
