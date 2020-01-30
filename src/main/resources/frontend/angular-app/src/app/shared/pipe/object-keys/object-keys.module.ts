import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectKeysPipe } from './object-keys.pipe';



@NgModule({
  declarations: [ObjectKeysPipe],
  imports: [
    CommonModule
  ],
  exports:[ObjectKeysPipe]
})
export class ObjectKeysModule { }
