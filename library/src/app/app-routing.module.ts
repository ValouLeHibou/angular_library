import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BookComponent} from "./components/book/book.component";
import {FormComponent} from "./components/form/form.component";

/*mise en place des routes url*/
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'book/:id',
    component:BookComponent
  },
  {
    path: 'form',
    component:FormComponent
  },
  {
    path: 'form/:id',
    component:FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
