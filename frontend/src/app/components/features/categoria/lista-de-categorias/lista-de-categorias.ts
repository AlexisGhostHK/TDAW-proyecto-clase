import { Component, inject, OnInit, signal } from '@angular/core';
import { Categoria } from '../../../../model/categoria';
import { CategoriaService } from '../../../../service/categoria-service';
import Swal from 'sweetalert2';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-lista-de-categorias',
  imports: [RouterLink],
  templateUrl: './lista-de-categorias.html',
  styleUrl: './lista-de-categorias.css',
})
export class ListaDeCategorias implements OnInit {
  readonly pageTitle: string = 'Categorias de Productos';
  registeredCategories = signal<Categoria[]>([]);
  private categoryService = inject(CategoriaService);

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (receivedData) => {
        this.registeredCategories.set(receivedData);
        console.log('Categorias cargadas:', receivedData);
      },
      error: (err) => console.error('Error al obtener las categorias', err),
    });
  }

  deleteCategory(category: Categoria): void {
    Swal.fire({
      title: '¿Estas seguro de eliminar esta categoria?',
      text: "No será posible revertir la eliminación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminalo!',
    }).then((result) => {
      if (result.isConfirmed)
        this.categoryService.deleteCategory(category.idCategoria).subscribe({
          next: () => {
            this.registeredCategories.set(
              this.registeredCategories().filter((c) => c.idCategoria !== category.idCategoria)
            );
            Swal.fire({
              title: 'Eliminar Categoria!',
              text: 'La categoria seleccionada ha sido eliminada.',
              icon: 'success',
            });
          },
        });

    });
  }
}
