import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaturalPersonComponent } from './natural-person/natural-person.component';
import { EmiEstimateComponent } from './emi-estimate/emi-estimate.component';
import { LegalPersonComponent } from './legal-person/legal-person.component';
import { AccountComponent } from './account/account.component';
import { CreditComponent } from './credit/credit.component';
import { BankTransferComponent } from './bank-transfer/bank-transfer.component';


const routes: Routes = [
  { path: 'natural', component: NaturalPersonComponent },
  { path: 'legal', component: LegalPersonComponent },
  { path: 'account', component: AccountComponent },
  {
    path: 'credit',
    children: [
      { path: '', component: CreditComponent },
      { path: 'emi', component: EmiEstimateComponent },
    ]
  },
  {
    path: 'transfer',
    children: [
      { path: '', component: BankTransferComponent },
      // { path: 'emi', component: EmiEstimateComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
