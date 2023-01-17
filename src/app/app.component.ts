import { Component } from '@angular/core';
import { Resp } from './resp';
import { ResponseService } from './response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public Response: ResponseService){
  }
  title = 'FirstEvoApp';
  
}
