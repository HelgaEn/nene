import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { AccessGuard } from './access.guard';
import { MainstrComponent } from './mainstr/mainstr.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemComponent } from './item/item.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import { AdminaccessGuard } from './adminaccess.guard';
import { TovarComponent } from './tovar/tovar.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  
  {
    path:"",
    title: "Главная страница",
    component: MainstrComponent
  },
  
  {
    path: "auth",
    title:"Вход",
    component: AuthorizationComponent
  },
  {
    path: "admin",
    title:"Администрирование",
    canActivate: [AdminaccessGuard],
    component: AdminComponent
  },
  {
    path: "admin/items",
    title:"Список товаров",
    canActivate: [AdminaccessGuard],
    component: TovarComponent
  },
  {
    path: "admin/items/:id",
    title:"Редактирование",
    canActivate: [AdminaccessGuard],
    component: EditComponent
  },
  {
    path: "profile",
    title:"Личный кабинет",
    canActivate: [AccessGuard],
    component: CabinetComponent
  },
  {
    path: "catalog",
    title:"Каталог товаров",
    component: CatalogComponent    
  },
  {path:'catalog/:id',
  title:"Детали",
  component: ItemComponent},
  {
    path: "**",
    title:"Ошибка",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
