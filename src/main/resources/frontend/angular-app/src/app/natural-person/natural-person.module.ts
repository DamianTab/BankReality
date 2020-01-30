import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalPersonComponent } from './natural-person.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ObjectKeysModule } from '../shared/pipe/object-keys/object-keys.module';
import { EntityFormModule } from '../shared/component/entity-form/entity-form.module';

@NgModule({
  declarations: [NaturalPersonComponent],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    ObjectKeysModule,
    EntityFormModule,
    FormsModule
  ],
  exports: [NaturalPersonComponent],
})
export class NaturalPersonModule { }
