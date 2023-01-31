import { Component } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import {range, timer, interval} from 'rxjs';
//import {scan, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { __values } from 'tslib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';
  

  intervalSub$!: Subscription;
  intervalTub$!: Subscription;

 constructor(){
  
 }

 OnButtStart(){
  const intervalStream = interval(2000);
  this.intervalSub$=intervalStream.subscribe((value)=>{
    const canvas = document.getElementById('frst1') as HTMLElement;
    canvas.textContent = `${value}`;
  })

  const intervalStream2 = interval(2000);
  this.intervalTub$=intervalStream2.pipe(map
    (value => `Random value:  ${Math.floor(value*Math.random()*100)}`)).subscribe((value)=>{
      const canvas2 = document.getElementById('scnd2') as HTMLElement;
      canvas2.textContent = `${value}`;
  })
 }

 
OnButtStop(){
  this.intervalSub$.unsubscribe();
}
OnButtStop2(){
  this.intervalTub$.unsubscribe();
}
 

}
