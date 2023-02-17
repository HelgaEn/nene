import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetdataService } from './getdata.service';
import { InterputInterceptor } from './interput.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GetdataService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterputInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
