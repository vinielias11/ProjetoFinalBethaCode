import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LivrosModule } from './livros/livros.module';
import { TemplateModule } from './template/template.module';
import { AutoresModule } from './autores/autores.module';

import { LivrosService } from './livros.service';
import { AutoresService } from './autores.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    LivrosModule,
    AutoresModule
  ],
  providers: [
    LivrosService,
    AutoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
