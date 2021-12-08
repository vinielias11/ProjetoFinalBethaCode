import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivrosFormComponent } from './livros-form/livros-form.component';

const routes: Routes = [
  { path: 'livrosForm', component: LivrosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
