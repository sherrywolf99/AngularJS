import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home'
    component:  HomeComponent
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m =>m.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m =>m.AboutModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
