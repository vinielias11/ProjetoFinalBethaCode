import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorasFormComponent } from './editoras-form/editoras-form.component';
import { EditorasListComponent } from './editoras-list/editoras-list.component';



@NgModule({
  declarations: [
    EditorasFormComponent,
    EditorasListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EditoraModule { }
