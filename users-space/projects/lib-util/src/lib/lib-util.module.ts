import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomizedComponent } from './customized/customized.component';



@NgModule({
  declarations: [CustomizedComponent],
  imports: [ CommonModule
  ],
  exports: [ CustomizedComponent]
})
export class LibUtilModule { }
