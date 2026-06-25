import { Component, input, inject, OnInit, signal } from '@angular/core';
import { Categoria } from '../../../../model/categoria';
import { Router } from '@angular/router';
import { CategoriaService } from '../../../../service/categoria-service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categoria-form',
  imports: [FormsModule],
  templateUrl: './categoria-form.html',
  styleUrl: './categoria-form.css',
})
export class CategoriaForm implements OnInit {
  readonly formTitle: string = 'Categorias Form';
  currentCategory = signal<Categoria>(new Categoria());

  routeId = input<number>();
  private router = inject(Router);
  private categoryService = inject(CategoriaService);

  ngOnInit(): void {
    this.loadExistingCategory();
  }

  private loadExistingCategory(): void {
    const categoryId = this.routeId();
    if (categoryId) {
      this.categoryService.getCategoryById(categoryId).subscribe({
        next: (loadedCategory) => this.currentCategory.set(loadedCategory),
        error: (err) => console.error('Error al obtener la categoria', err)
      });
    }
  }

  createCategory(): void {
    this.categoryService.createCategory(this.currentCategory()).subscribe({
      next: (createdCategory) => {
        this.router.navigate(['/listaDeCategoria']);
        Swal.fire({
          title: 'Categoria Registrada!',
          text: `La categoria ${createdCategory.nombreCategoria} ha sido registrada con éxito.`,
          icon: 'success',
        });
      },
      error: (err) => {
        console.error('Error al registrar la categoria', err);
      }
    });
  }

  updateCategory(): void {
    this.categoryService.updateCategory(this.currentCategory()).subscribe({
      next: () => {
        this.router.navigate(['/listaDeCategoria']);
        Swal.fire({
          title: 'Categoria Actualizada!',
          text: `La categoria ${this.currentCategory().nombreCategoria} ha sido actualizada con éxito.`,
          icon: 'success',
        });
      },
      error: (err) => {
        console.error('Error al actualizar la categoria', err);
      }
    });
  }
}
