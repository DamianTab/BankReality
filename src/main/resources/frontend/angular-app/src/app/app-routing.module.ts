import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaturalPersonComponent } from './natural-person/natural-person.component';


const routes: Routes = [
  { path: 'natural', component: NaturalPersonComponent },
  // { path: 'product/create', component: ProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
