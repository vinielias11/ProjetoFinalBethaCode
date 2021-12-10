import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoresFormComponent } from './autores-form/autores-form.component';


const routes: Routes = [
  { path: 'autoresForm', component: AutoresFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoresRoutingModule { }
