import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ItemComponent } from './item/item.component';
import {DetailsComponent} from './item/details/details.component';
import {ListComponent} from './item/list/list.component';

const routes: Routes = [
  /*{
    path: '',
    component: AppComponent
  },*/
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'item/:id',
    component: ItemComponent,
    children: [
      {
        path: "details",
        component: DetailsComponent
      },
      {
        path: "list",
        component: ListComponent
      }

    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
