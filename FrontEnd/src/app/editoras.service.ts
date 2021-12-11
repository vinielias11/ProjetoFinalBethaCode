import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editora } from './editoras/editora';

@Injectable({
  providedIn: 'root'
})
export class EditorasService {

  constructor( private http: HttpClient ) { }

  salvar(editora: Editora): Observable<Editora> {
    return this.http.post<Editora>('http://localhost:8080/api/editoras', editora);
  }

  listarEditoras(): Observable<Editora[]> {
    return this.http.get<Editora[]>('http://localhost:8080/api/editoras');
  }

  getEditoraPorId(id: number): Observable<Editora> {
    return this.http.get<Editora>(`http://localhost:8080/api/editoras/${id}`);
  }

  atualizar(editora: Editora): Observable<Editora> {
    return this.http.put<Editora>(`http://localhost:8080/api/editoras/${editora.id}`, editora);
  }

  deletar(editora: Editora): Observable<Editora> {
    return this.http.delete<any>(`http://localhost:8080/api/editoras/${editora.id}`);
  }

}
