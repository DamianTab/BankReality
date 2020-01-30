import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalPersonComponent } from './legal-person.component';
import { EntityFormModule } from '../shared/component/entity-form/entity-form.module';



@NgModule({
  declarations: [LegalPersonComponent],
  imports: [
    CommonModule,
    EntityFormModule
  ]
})
export class LegalPersonModule { }
