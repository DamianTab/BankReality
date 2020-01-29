import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar.component';
import {ButtonModule} from 'primeng/button';
import {MenubarModule as MenubarPrimeNG} from 'primeng/menubar';

@NgModule({
  declarations: [MenubarComponent],
  imports: [
    CommonModule,
    MenubarPrimeNG,
    ButtonModule
  ],
  exports: [MenubarComponent]
})
export class MenubarModule { }
