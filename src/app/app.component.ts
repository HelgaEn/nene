import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AskhttpService } from './askhttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'FirstEvoApp';
  constructor(
    private AskHttp: AskhttpService
  ){}
  
  getFirstButton(){
    this.AskHttp.getFirst().subscribe( {next: (response)=> console.log(response)})
  }
  getSecButton(){
    this.AskHttp.getSecond().subscribe({next: (response)=> console.log(response)})
  }
  getThirdButton(){
    this.AskHttp.getThird().subscribe({next: (response)=> console.log(response)})
  }
  getFourButton(){
    this.AskHttp.getFour().subscribe({
      next: (response)=> console.log(response),
      error: (err: HttpErrorResponse)=>{ if(err.status==404){console.log('Error 404!')}}
    })
  }
  getFiveButton(){
    this.AskHttp.getFive().subscribe( {next: (response)=> console.log(response)})
  }
  getSixButton(){
    this.AskHttp.getSix().subscribe({next: (response)=> console.log(response)})
  }

  
 
}
