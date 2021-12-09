import { Component, OnInit } from '@angular/core';
import { LivrosService } from 'src/app/livros.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.css']
})
export class LivrosFormComponent implements OnInit {

  livro: Livro;

  constructor( private service: LivrosService ) { 
    this.livro = new Livro();
  }

  ngOnInit(): void {

  }

  onClickSalvar() {
    console.log(this.livro);
    this.service
      .salvar(this.livro)
      .subscribe(resp => {
        console.log(resp);
      })
  }

}
