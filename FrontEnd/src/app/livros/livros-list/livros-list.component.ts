import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoresService } from 'src/app/autores.service';
import { Autor } from 'src/app/autores/autor';
import { EditorasService } from 'src/app/editoras.service';
import { Editora } from 'src/app/editoras/editora';
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
  autorDoLivro: Autor;
  editoraDoLivro: Editora;

  constructor( private service: LivrosService, private router: Router, private serviceAutor: AutoresService, private serviceEditora: EditorasService ) { }

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

  getInfoParaDetalhar(livro: Livro) {
    this.livroSelecionado = livro;
    const idAutor = livro.autor.id,
      idEditora = livro.editora.id;
    
    this.serviceAutor.getAutorPorId(idAutor).subscribe(resp => {
      this.autorDoLivro = resp;
    });
    
    this.serviceEditora.getEditoraPorId(idEditora).subscribe(resp => {
      this.editoraDoLivro = resp;
    });

  }

}
