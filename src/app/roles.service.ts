import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  role: "guest" |"user"| "admin" ="guest";
  constructor() { }
}
