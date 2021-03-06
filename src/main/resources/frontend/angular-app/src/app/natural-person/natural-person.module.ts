import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalPersonComponent } from './natural-person.component';
import { EntityFormModule } from '../shared/component/entity-form/entity-form.module';

@NgModule({
  declarations: [NaturalPersonComponent],
  imports: [
    CommonModule,
    EntityFormModule,
  ],
  exports: [NaturalPersonComponent],
})
export class NaturalPersonModule { }
