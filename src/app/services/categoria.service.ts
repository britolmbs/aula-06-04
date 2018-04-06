import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Categoria } from '../domain/categoria';

@Injectable()
export class CategoriaService {

  constructor(private http : HttpClient) { }
  getCategoria() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`https://tcc-lojavirtual.herokuapp.com/categorias`);
  }

}
