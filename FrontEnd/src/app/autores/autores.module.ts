import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresFormComponent } from './autores-form/autores-form.component';
import { FormsModule } from '@angular/forms';
import { AutoresListComponent } from './autores-list/autores-list.component';


@NgModule({
  declarations: [AutoresFormComponent, AutoresListComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    FormsModule
  ], exports: [
    AutoresFormComponent,
    AutoresListComponent
  ]
})
export class AutoresModule { }
