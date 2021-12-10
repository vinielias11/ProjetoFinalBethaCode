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
  sucesso: boolean = false;
  errosApi: String[];

  constructor( private service: LivrosService ) { 
    this.livro = new Livro();
  }

  ngOnInit(): void {

  }

  onClickSalvar() {
    this.service.salvar(this.livro)
      .subscribe(resp => {
        this.sucesso = true;
        this.errosApi = null;
        this.livro = resp;
      }, respErro => {
        this.errosApi = respErro.error.erros;
        this.sucesso = false;
      })
  }

}
