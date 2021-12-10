import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoresService } from 'src/app/autores.service';
import { Autor } from '../autor';

@Component({
  selector: 'app-autores-list',
  templateUrl: './autores-list.component.html',
  styleUrls: ['./autores-list.component.css']
})
export class AutoresListComponent implements OnInit {

  autores: Autor[] = [];
  autorSelecionado: Autor;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor( private service: AutoresService, private router: Router ) { }

  ngOnInit(): void {
    this.service.listarAutores().subscribe(success => this.autores = success);
  }

  onClickNovo() {
    this.router.navigate(['/autoresForm']);
  }

  preparaExclusao(autor: Autor) {
    this.autorSelecionado = autor;
  }

  deletaAutor() {
    this.service.deletar(this.autorSelecionado).subscribe(success => {
      this.mensagemSucesso = 'Autor deletado com sucesso!';
      this.mensagemErro = null;
      this.ngOnInit();
    }, error => {
      this.mensagemErro = 'Ocorreu um erro ao deletar o autor!';
      this.mensagemSucesso = null;
    })
  }

}
