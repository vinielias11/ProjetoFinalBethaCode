import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivrosService } from 'src/app/livros.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.css']
})
export class LivrosListComponent implements OnInit {

  livros: Livro[] = [];
  livroSelecionado: Livro;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor( private service: LivrosService, private router: Router ) { }

  ngOnInit(): void {

    this.service.listarLivros().subscribe(resp => this.livros = resp);

  }

  onClickNovo() {
    this.router.navigate(['livrosForm']);
  }

  preparaExclusao(livro: Livro) {
    this.livroSelecionado = livro;
  }

  deletaLivro() {
    this.service.deletar(this.livroSelecionado).subscribe(success => {
      this.mensagemSucesso = 'Livro deletado com sucesso!';
      this.mensagemErro = null;
      this.ngOnInit();
    }, error => {
      this.mensagemErro = 'Ocorreu um erro ao deletar o livro!';
      this.mensagemSucesso = null;
    })
  }

}
