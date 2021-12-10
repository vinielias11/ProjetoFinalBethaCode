import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor( private service: LivrosService, private router: Router, private activatedRoute: ActivatedRoute ) { 
    this.livro = new Livro();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(urlParams => {
      this.id = urlParams['id'];

      if (this.id) {
        this.service.getLivroPorId(this.id).subscribe(resp => this.livro = resp,
                                                      erroResp => this.livro = new Livro());
      }

    })

  }

  onClickSalvar() {
    if (this.id) {
      this.service.atualizar(this.livro).subscribe(success => {
        this.sucesso = true;
        this.errosApi = null;
      }, error => {
        this.errosApi = ['Erro ao atualizar o livro!'];
      })

    } else {
      this.service.salvar(this.livro).subscribe(resp => {
          this.sucesso = true;
          this.errosApi = null;
          this.livro = resp;
        }, respErro => {
          this.errosApi = respErro.error.erros;
          this.sucesso = false;
        })
    }
  }

  onClickVoltar() {
    this.router.navigate(['/livrosList']);
  }

}
