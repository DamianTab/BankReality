import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaturalPersonComponent } from './natural-person/natural-person.component';
import { EmiEstimateComponent } from './emi-estimate/emi-estimate.component';


const routes: Routes = [
  { path: 'natural', component: NaturalPersonComponent },
  { path: 'credit' ,
    children: [
      // {path: 'emi', component: EmiEstimateComponent},
      {path: 'emi', component: EmiEstimateComponent},
    ]},
  // { path: '**', component: ProductFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
