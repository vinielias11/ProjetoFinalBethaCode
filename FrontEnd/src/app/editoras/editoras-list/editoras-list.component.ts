import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditorasService } from 'src/app/editoras.service';
import { Editora } from '../editora';

@Component({
  selector: 'app-editoras-list',
  templateUrl: './editoras-list.component.html',
  styleUrls: ['./editoras-list.component.css']
})
export class EditorasListComponent implements OnInit {

  editoras: Editora[] = [];
  editoraSelecionada: Editora;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor( private service: EditorasService, private router: Router ) { }

  ngOnInit(): void {
    this.service.listarEditoras().subscribe(success => this.editoras = success);
  }

  onClickNovo() {
    this.router.navigate(['/editorasForm']);
  }

  preparaExclusao(editora: Editora) {
    this.editoraSelecionada = editora;
  }

  deletaEditora() {
    this.service.deletar(this.editoraSelecionada).subscribe(success => {
      this.mensagemSucesso = 'Autor deletado com sucesso!';
      this.mensagemErro = null;
      this.ngOnInit();
    }, error => {
      this.mensagemErro = 'Ocorreu um erro ao deletar o autor!';
      this.mensagemSucesso = null;
    })
  }
}
