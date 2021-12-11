import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorasRoutingModule } from './editoras-routing.module';
import { EditorasFormComponent } from './editoras-form/editoras-form.component';
import { EditorasListComponent } from './editoras-list/editoras-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditorasFormComponent, EditorasListComponent],
  imports: [
    CommonModule,
    EditorasRoutingModule,
    FormsModule
  ], exports: [
    EditorasFormComponent,
    EditorasListComponent
  ]
})
export class EditorasModule { }
