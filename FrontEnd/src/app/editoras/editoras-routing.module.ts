import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorasFormComponent } from './editoras-form/editoras-form.component';
import { EditorasListComponent } from './editoras-list/editoras-list.component';


const routes: Routes = [
  { path: 'editorasForm', component: EditorasFormComponent },
  { path: 'editorasForm/:id', component: EditorasFormComponent },
  { path: 'editorasList', component: EditorasListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorasRoutingModule { }
