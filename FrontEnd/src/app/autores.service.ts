import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from './autores/autor';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor( private http: HttpClient ) { }

  salvar(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>('http://localhost:8080/api/autores', autor);
  }

  listarAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>('http://localhost:8080/api/autores');
  }

  getAutorPorId(id: number): Observable<Autor> {
    return this.http.get<Autor>(`http://localhost:8080/api/autores/${id}`);
  }

  atualizar(autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(`http://localhost:8080/api/autores/${autor.id}`, autor);
  }

  deletar(autor: Autor): Observable<Autor> {
    return this.http.delete<any>(`http://localhost:8080/api/autores/${autor.id}`);
  }

}
