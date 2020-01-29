import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmiEstimateComponent } from './emi-estimate.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [EmiEstimateComponent],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [EmiEstimateComponent]
})
export class EmiEstimateModule { }
