import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthentificationInterface, AuthUpdate } from './store/auth.model';
import { AuthState } from './store/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';
  //input: any;
  constructor(private store: Store) {}
  
  addTodo(input: any){
    this.store.dispatch(new AuthUpdate({
      todo:input.value
    }))
  }
  
    

  //currentAuth = this.store.selectSnapshot(AuthState.getAuthObject);
  currentAuth: AuthentificationInterface[]=[];
  ngOnInit(){
    this.store.select(AuthState.getAuthObject).subscribe({
      next: (value) => {
        this.currentAuth.push(value);
      },
    });
  }

  
}
