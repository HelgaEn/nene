import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { MainComponent } from './main/main.component';
import { AccessGuard } from './access.guard';
import { PostComponent } from './posts/post/post.component';
import { ErrCompComponent } from './err-comp/err-comp.component';

const routes: Routes = [
  {
    path:'posts',
    component: PostsComponent,
    canActivateChild: [AccessGuard],
    children: [{
      path:'post/:id',
      component: PostComponent
    }]
  },
  {
    path:'',
  component: MainComponent
 },
 {
  path:'error',
  component: ErrCompComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
