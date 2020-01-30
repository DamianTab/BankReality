import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { EntityFormModule } from '../shared/component/entity-form/entity-form.module';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    EntityFormModule
  ],
  exports: [AccountComponent]
})
export class AccountModule { }
