import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivrosFormComponent } from './livros-form/livros-form.component';
import { LivrosListComponent } from './livros-list/livros-list.component';

const routes: Routes = [
  { path: 'livrosForm', component: LivrosFormComponent },
  { path: 'livrosList', component: LivrosListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
