import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from './menubar/menubar.module';
import { NaturalPersonModule } from './natural-person/natural-person.module';
import { EmiEstimateModule } from './emi-estimate/emi-estimate.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    NaturalPersonModule,
    EmiEstimateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
