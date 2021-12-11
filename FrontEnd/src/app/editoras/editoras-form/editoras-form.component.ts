import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EditorasService } from 'src/app/editoras.service';
import { Editora } from '../editora';

@Component({
  selector: 'app-editoras-form',
  templateUrl: './editoras-form.component.html',
  styleUrls: ['./editoras-form.component.css']
})
export class EditorasFormComponent implements OnInit {

  editora: Editora;
  sucesso: boolean = false;
  errosApi: String[];
  id: number;

  constructor( private service: EditorasService, private router: Router, private activatedRoute: ActivatedRoute ) {
    this.editora = new Editora();
   }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(urlParams => {
      this.id = urlParams['id'];

      if (this.id) {
        this.service.getEditoraPorId(this.id).subscribe(success => this.editora = success,
                                                      erro => this.editora = new Editora());
      }
    })
  }

  onClickSalvar() {
    if (this.id) {
        this.service.atualizar(this.editora).subscribe(success => {
          this.sucesso = true;
          this.errosApi = null;
        }, erro => {
          this.errosApi = ['Erro ao atualizar editora!'];
        });
    } else {
        this.service.salvar(this.editora).subscribe(respSuccess => {
          this.sucesso = true;
          this.errosApi = null;
          this.editora = respSuccess;
        }, respErro => {
          this.errosApi = respErro.error.erros;
          this.sucesso = false;
        });
      }
    }

  onClickVoltar() {
    this.router.navigate(['/editorasList']);
  }
}
