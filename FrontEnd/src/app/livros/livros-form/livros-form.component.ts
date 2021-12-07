import { Component, OnInit } from '@angular/core';
import { LivrosService } from 'src/app/livros.service';
import { Livro } from '../livros';

@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.css']
})
export class LivrosFormComponent implements OnInit {

  livro: Livro;
  sucesso: Boolean = false;
  errosApi: String[];
  
  constructor( private service: LivrosService ) {
    this.livro = new Livro();
  }

  ngOnInit(): void {
  }

  gravarLivro(){
    console.log('this.livro');
    this.service
      .salvar(this.livro)
      .subscribe(response => {
        this.sucesso = true;
        this.errosApi = null;
        this.livro = response;
      }, errorResponse => {
        this.errosApi = errorResponse.error.erros;
        this.sucesso = false;
        
      })
  }
}
