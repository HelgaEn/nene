import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpResolverResolver } from './http-resolver.resolver';
import { ResolvecompComponent } from './resolvecomp/resolvecomp.component';

const routes: Routes = [
{
  path: 'resolve',
  component: ResolvecompComponent,
  resolve: [HttpResolverResolver]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
