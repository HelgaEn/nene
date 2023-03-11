import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { CabinetComponent } from './cabinet/cabinet.component';
import { MainstrComponent } from './mainstr/mainstr.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemComponent } from './item/item.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import { TovarComponent } from './tovar/tovar.component';
import { EditComponent } from './edit/edit.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    CabinetComponent,
    MainstrComponent,
    CatalogComponent,
    ItemComponent,
    ErrorComponent,
    AdminComponent,
    TovarComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
