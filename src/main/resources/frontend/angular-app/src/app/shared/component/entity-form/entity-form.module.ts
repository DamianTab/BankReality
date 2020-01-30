import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityFormComponent } from "./entity-form.component";
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ObjectKeysModule } from '../../pipe/object-keys/object-keys.module';



@NgModule({
  declarations: [EntityFormComponent],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    ObjectKeysModule,
    FormsModule
  ],
  exports: [EntityFormComponent]
})
export class EntityFormModule { }
