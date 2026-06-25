import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private clienteHttp = inject(HttpClient);
  private readonly urlBaseCategorias = "http://localhost:8080/api/v1/categorias/categoria";
  private cabecerasHttp = new HttpHeaders({
    'Content-Type':'application/json'
  });

  obtenerCategorias(): Observable<Categoria[]> {
    return this.clienteHttp.get<Categoria[]>(this.urlBaseCategorias);
  }

  obtenerCategoriaPorId(id : number):Observable<Categoria>{
    return this.clienteHttp.get<Categoria>(`${this.urlBaseCategorias}/${id}`)
  }

  registrarCategoria(categoria : Categoria) : Observable<Categoria>{
    return this.clienteHttp.post<Categoria>
    (this.urlBaseCategorias, categoria,
      {headers: this.cabecerasHttp})

  }

  eliminarCategoria(id : number) : Observable<Categoria>{
    return this.clienteHttp.delete<Categoria>
    (`${this.urlBaseCategorias}/${id}`,
      {headers: this.cabecerasHttp}
     );
  }

  actualizarCategoria(categoria : Categoria) : Observable<Categoria>{
    return this.clienteHttp.put<Categoria>(
      `${this.urlBaseCategorias}/${categoria.idCategoria}`,
      categoria,
      {headers: this.cabecerasHttp}
    );
  }

}

