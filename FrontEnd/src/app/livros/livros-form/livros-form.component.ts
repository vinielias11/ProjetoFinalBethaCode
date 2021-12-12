import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutoresService } from 'src/app/autores.service';
import { Autor } from 'src/app/autores/autor';
import { EditorasService } from 'src/app/editoras.service';
import { Editora } from 'src/app/editoras/editora';
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
  id: number;
  autoresCadastrados: Autor[] = [];
  editorasCadastradas: Editora[] = [];

  constructor( private service: LivrosService, private router: Router, private activatedRoute: ActivatedRoute, 
               private serviceAutores: AutoresService, private serviceEditoras: EditorasService ) { 
    this.livro = new Livro();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getLivroPorId(this.id).subscribe(resp => {
          this.livro = resp
          console.log(resp);
        }, erroResp => {
          this.livro = new Livro()
        });
        
      }

    })

    this.metodosForm();

  }

  metodosForm() {
    this.getAutoresParaSelect();
    this.getEditorasParaSelect();
  }

  getAutoresParaSelect() {
    this.serviceAutores.listarAutores().subscribe(resp => {
      resp.forEach(autor => {
        this.autoresCadastrados.push(autor);
      })
    })
  }

  getEditorasParaSelect() {
    this.serviceEditoras.listarEditoras().subscribe(resp => {
      resp.forEach(editora => {
        this.editorasCadastradas.push(editora);
      })
    })
  }

  onClickSalvar() {
    if (this.id) {
      this.service.atualizar(this.livro).subscribe(success => {
        this.sucesso = true;
        this.errosApi = null;
      }, error => {
        this.errosApi = ['Erro ao salvar o livro!'];
      })

    } else {
      this.service.salvar(this.livro).subscribe(resp => {
          this.sucesso = true;
          this.errosApi = null;
          this.livro = resp;
          this.atualizaPagina();
        }, respErro => {
          this.errosApi = respErro.error.erros;
          this.sucesso = false;
        })
    }
  }

  onClickVoltar() {
    this.router.navigate(['/livrosList']);
  }

  atualizaPagina() {
    setTimeout(() => {
      window.location.reload();
      return false;
    }, 1000);
  }

}
