import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private httpClient = inject(HttpClient);
  private readonly categoriesBaseUrl = "https://tdaw-proyecto-clase-1ggg.onrender.com/api/v1/categorias/categoria";
  private httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  getCategories(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.categoriesBaseUrl);
  }

  getCategoryById(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(`${this.categoriesBaseUrl}/${id}`)
  }

  createCategory(category: Categoria): Observable<Categoria> {
    return this.httpClient.post<Categoria>(
      this.categoriesBaseUrl, category,
      { headers: this.httpHeaders }
    );
  }

  deleteCategory(id: number): Observable<Categoria> {
    return this.httpClient.delete<Categoria>(
      `${this.categoriesBaseUrl}/${id}`,
      { headers: this.httpHeaders }
    );
  }

  updateCategory(category: Categoria): Observable<Categoria> {
    return this.httpClient.put<Categoria>(
      `${this.categoriesBaseUrl}/${category.idCategoria}`,
      category,
      { headers: this.httpHeaders }
    );
  }
}
