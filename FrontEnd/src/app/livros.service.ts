import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './livros/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  constructor( private http: HttpClient ) { 

  }

  salvar(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>('http://localhost:8080/api/livros', livro);
  }

}
