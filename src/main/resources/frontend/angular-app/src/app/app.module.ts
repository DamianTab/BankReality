import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule
  ],
  exports: [
    MenubarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
