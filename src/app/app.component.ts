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
  /*
 // @ViewChild('dynamicComp',{read: ViewContainerRef}) viev?: ViewContainerRef;
 //@ViewChild('dynamicComp', { read: ViewContainerRef }) private viev?: ViewContainerRef;
 //@ViewChild('dynamicComp') viev: ElementRef;
  
constructor(private cfr: ComponentFactoryResolver){}

  async Load(){
    const{ArbusComponent}=await import('./arbus/arbus.component');
    const ArbusComponentFactory=this.cfr.resolveComponentFactory(ArbusComponent);
    this.viev.clear();
    //this.viev.createComponent(ArbusComponentFactory);
    this.viev.createComponent(ArbusComponentFactory)
    
  }
  deleteComp(){
    this.viev.clear()
  }
  */
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
