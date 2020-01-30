import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from './menubar/menubar.module';
import { NaturalPersonModule } from './natural-person/natural-person.module';
import { EmiEstimateModule } from './emi-estimate/emi-estimate.module';
import { LegalPersonModule } from './legal-person/legal-person.module';
import { AccountModule } from './account/account.module';
import { CreditModule } from './credit/credit.module';
import { BankTransferModule } from './bank-transfer/bank-transfer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    EmiEstimateModule,
    HttpClientModule,
    MenubarModule,
    NaturalPersonModule,
    LegalPersonModule,
    AccountModule,
    CreditModule,
    BankTransferModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
