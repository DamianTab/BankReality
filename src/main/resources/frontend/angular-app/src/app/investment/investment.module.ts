import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentComponent } from './investment.component';
import { EntityFormModule } from '../shared/component/entity-form/entity-form.module';



@NgModule({
  declarations: [InvestmentComponent],
  imports: [
    CommonModule,
    EntityFormModule
  ], exports: [InvestmentComponent]
})
export class InvestmentModule { }
