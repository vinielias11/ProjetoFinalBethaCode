import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresFormComponent } from './autores-form/autores-form.component';
import { AutoresListComponent } from './autores-list/autores-list.component';



@NgModule({
  declarations: [
    AutoresFormComponent,
    AutoresListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutoresModule { }
