import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditComponent } from './credit.component';
import { EntityFormModule } from '../shared/component/entity-form/entity-form.module';



@NgModule({
  declarations: [CreditComponent],
  imports: [
    CommonModule,
    EntityFormModule
  ], exports: [CreditComponent]
})
export class CreditModule { }
