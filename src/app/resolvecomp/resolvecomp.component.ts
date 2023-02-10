import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AskhttpService } from '../askhttp.service';

@Component({
  selector: 'app-resolvecomp',
  templateUrl: './resolvecomp.component.html',
  styleUrls: ['./resolvecomp.component.css']
})
export class ResolvecompComponent implements OnInit {

  constructor(private AskHttp: AskhttpService) { 
   
  }
  getSeven(){
    this.AskHttp.getResolve().subscribe((value)=>{
      const canvas = document.getElementById('resolv') as HTMLElement;
      canvas.textContent = `${value}`;
    })
  }
  ngOnInit(): void {
    this.getSeven()
  }

}
