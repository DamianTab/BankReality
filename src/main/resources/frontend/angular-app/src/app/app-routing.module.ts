import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaturalPersonComponent } from './natural-person/natural-person.component';
import { EmiEstimateComponent } from './emi-estimate/emi-estimate.component';
import { LegalPersonComponent } from './legal-person/legal-person.component';


const routes: Routes = [
  { path: 'natural', component: NaturalPersonComponent },
  { path: 'legal', component: LegalPersonComponent },
  {
    path: 'credit',
    children: [
      // {path: 'emi', component: EmiEstimateComponent},
      { path: 'emi', component: EmiEstimateComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
