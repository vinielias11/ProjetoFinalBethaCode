import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';

@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.css']
})
export class LivrosFormComponent implements OnInit {

  livro: Livro;

  constructor() { 
    this.livro = new Livro();
    this.livro.id = 1;
    this.livro.titulo = 'Brave New World';
    this.livro.numeroPaginas = 272; 
    this.livro.autor = 'Aldous Huxley';
    this.livro.editora = 'Leya';
    this.livro.anoPublicacao = '1932';
    this.livro.genero = 'Distopia';
    this.livro.idioma = 'Inglês';
  }

  ngOnInit(): void {
  }

}
