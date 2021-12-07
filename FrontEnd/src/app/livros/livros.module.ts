import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosFormComponent } from './livros-form/livros-form.component';
import { LivrosListComponent } from './livros-list/livros-list.component';



@NgModule({
  declarations: [
    LivrosFormComponent,
    LivrosListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LivrosModule { }
