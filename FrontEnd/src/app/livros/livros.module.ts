import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { FormsModule } from '@angular/forms';
import { LivrosFormComponent } from './livros-form/livros-form.component';
import { LivrosListComponent } from './livros-list/livros-list.component';


@NgModule({
  declarations: [LivrosFormComponent, LivrosListComponent],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    FormsModule
  ], exports: [
    LivrosFormComponent,
    LivrosListComponent
  ]
})
export class LivrosModule { }
