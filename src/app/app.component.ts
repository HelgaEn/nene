import { Component, ComponentFactoryResolver, ElementRef } from '@angular/core';
import {ComponentRef,
  TemplateRef,
  VERSION,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ArbusComponent } from './arbus/arbus.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  @ViewChild('dynamicComp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<ArbusComponent>;

  
  Load() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(ArbusComponent);
  }
  deleteComp() {
    this.viewRef.clear();
  }


  
}
