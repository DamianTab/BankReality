import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalPersonComponent } from './natural-person.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [NaturalPersonComponent],
  imports: [
    CommonModule,
    // BrowserModule,
    TableModule,
    DialogModule,
    // DropdownModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  exports: [NaturalPersonComponent]
})
export class NaturalPersonModule { }
