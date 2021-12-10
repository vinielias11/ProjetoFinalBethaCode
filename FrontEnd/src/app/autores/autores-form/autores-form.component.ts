import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutoresService } from 'src/app/autores.service';
import { Autor } from '../autor';

@Component({
  selector: 'app-autores-form',
  templateUrl: './autores-form.component.html',
  styleUrls: ['./autores-form.component.css']
})
export class AutoresFormComponent implements OnInit {

  autor: Autor;
  sucesso: boolean = false;
  errosApi: String[];
  id: number;

  constructor( private service: AutoresService, private router: Router, private activatedRoute: ActivatedRoute ) {
    this.autor = new Autor();
   }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(urlParams => {
      this.id = urlParams['id'];

      if (this.id) {
        this.service.getAutorPorId(this.id).subscribe(success => this.autor = success,
                                                      erro => this.autor = new Autor());
      }
    })
  }

  onClickSalvar() {
    if (this.id) {
        this.service.atualizar(this.autor).subscribe(success => {
          this.sucesso = true;
          this.errosApi = null;
        }, erro => {
          this.errosApi = ['Erro ao atualizar autor!'];
        });
    } else {
        this.service.salvar(this.autor).subscribe(respSuccess => {
          this.sucesso = true;
          this.errosApi = null;
          this.autor = respSuccess;
        }, respErro => {
          this.errosApi = respErro.error.erros;
          this.sucesso = false;
        });
      }
    }

  onClickVoltar() {
    this.router.navigate(['/autoresForm']);
  }

}
