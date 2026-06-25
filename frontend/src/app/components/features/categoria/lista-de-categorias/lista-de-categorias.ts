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
  readonly tituloPagina: string = 'Categorias de Productos';
  categoriasRegistradas = signal<Categoria[]>([]);
  private categoriaService = inject(CategoriaService);

  ngOnInit(): void {
    this.cargarCategorias();
  }

  private cargarCategorias(): void {
    this.categoriaService.obtenerCategorias().subscribe({
      next: (datosRecibidos) => {
        this.categoriasRegistradas.set(datosRecibidos);
        console.log('Categorias cargadas:', datosRecibidos);
      },
      error: (err) => console.error('Error al obtener las categorias', err),
    });
  }

  eliminar(categoria: Categoria): void {
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
        this.categoriaService.eliminarCategoria(categoria.idCategoria).subscribe({
          next: () => {
            this.categoriasRegistradas.set(
              this.categoriasRegistradas().filter((c) => c.idCategoria !== categoria.idCategoria)
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

