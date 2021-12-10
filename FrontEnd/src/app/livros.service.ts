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

  listarLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>('http://localhost:8080/api/livros');
  }

  getLivroPorId(id: number): Observable<Livro> {
    return this.http.get<Livro>(`http://localhost:8080/api/livros/${id}`);
  }

  atualizar(livro: Livro): Observable<any> {
    return this.http.put<Livro>(`http://localhost:8080/api/livros/${livro.id}`, livro);
  }

  deletar(livro: Livro): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/livros/${livro.id}`);
  }

}
