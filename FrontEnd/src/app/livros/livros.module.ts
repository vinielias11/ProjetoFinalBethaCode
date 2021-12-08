import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosFormComponent } from './livros-form/livros-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LivrosFormComponent],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    FormsModule
  ], exports: [
    LivrosFormComponent
  ]
})
export class LivrosModule { }
