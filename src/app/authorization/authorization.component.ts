import { Component, OnInit } from '@angular/core';
import { GetuserdataService, userdata } from '../getuserdata.service';
import { RolesService } from '../roles.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';




@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  userss: userdata={
     id: '',
    username: '',
    email:'',
    firstName: '',
    lastName:'',
    image:''
  }

  userid=  {
      login: 'atuny0',
      password: '9uQFF1Lh',
    };
  
  admid=
    {
      login: 'hbingley1',
      password: 'CQutx25i8r',
    };
  
  user = {
    login: null,
    password: null,
  };

  constructor(public rolesService: RolesService, public data: GetuserdataService, public router: Router) { }

  ngOnInit(): void {
  }

  check=0;

  checkError(){
    if(this.check){
      return true;
    }
    else{
      return false;
    }
  }

  checkUser(){
    
    if (this.user.login == this.userid.login && this.user.password == this.userid.password)
    { 
      this.data.getData(this.user.login,this.user.password);
      this.rolesService.role ="user";
    
    }
    else if(this.user.login==this.admid.login && this.user.password == this.admid.password)
    {
      this.data.getData(this.user.login,this.user.password);
      this.rolesService.role="admin";
      
    }
    else 
    { 
      this.check=1;
    }
    return this.router.navigateByUrl('/profile')
  }

}
