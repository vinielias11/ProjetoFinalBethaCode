import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresFormComponent } from './autores-form/autores-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AutoresFormComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    FormsModule
  ], exports: [
    AutoresFormComponent
  ]
})
export class AutoresModule { }
