import { Component } from '@angular/core';
import { RolesService } from './roles.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { GetuserdataService } from './getuserdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public rolesService: RolesService, public router: Router, public getuserdata: GetuserdataService){}
  title = 'Главная';

  resetUser(){
    
    this.rolesService.role="guest";
    //location.reload();//чтобы сбросить данные пользователя, проверь как будет работать на вкладке аккаунта
    setTimeout(
      function(){
        location.reload()
      },1000
    );
    return this.router.navigateByUrl('/')
    
  }
}
