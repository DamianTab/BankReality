import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalPersonComponent } from './natural-person.component';



@NgModule({
  declarations: [NaturalPersonComponent],
  imports: [
    CommonModule
  ],
  exports: [NaturalPersonComponent]
})
export class NaturalPersonModule { }
