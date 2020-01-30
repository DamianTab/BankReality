import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankTransferComponent } from './bank-transfer.component';
import { EntityFormModule } from '../shared/component/entity-form/entity-form.module';



@NgModule({
  declarations: [BankTransferComponent],
  imports: [
    CommonModule,
    EntityFormModule
  ], exports:[BankTransferComponent]
})
export class BankTransferModule { }
