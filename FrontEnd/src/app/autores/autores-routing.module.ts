import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoresFormComponent } from './autores-form/autores-form.component';
import { AutoresListComponent } from './autores-list/autores-list.component';


const routes: Routes = [
  { path: 'autoresForm', component: AutoresFormComponent },
  { path: 'autoresForm/:id', component: AutoresFormComponent },
  { path: 'autoresList', component: AutoresListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
