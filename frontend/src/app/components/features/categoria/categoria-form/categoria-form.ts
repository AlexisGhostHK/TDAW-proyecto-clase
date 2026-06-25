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
export class CategoriaForm implements OnInit{
  readonly tituloFormulario: string = 'Categorias Form';
  categoriaActual = signal<Categoria> (new Categoria());

  idRuta = input<number>();
  private enrutador = inject(Router);
  private categoriaService = inject(CategoriaService);

  ngOnInit(): void {
    this.cargarCategoriaExistente();
  }

  private cargarCategoriaExistente(): void {
    const idCategoria = this.idRuta();
    if (idCategoria){
      this.categoriaService.obtenerCategoriaPorId(idCategoria).subscribe(
        {
        next: (categoriaLeida) => this.categoriaActual.set(categoriaLeida),
        error: (err) => console.error('Error al obtener la categoria', err)
      }
    );
    }
  }



  registrarCategoria():void{
    this.categoriaService.registrarCategoria(this.categoriaActual()).subscribe({
      next : (categoriaCreada) => {
        this.enrutador.navigate(['/listaDeCategoria']);
        Swal.fire({
          title: 'Categoria Registrada!',
          text: `La categoria ${categoriaCreada.nombreCategoria} ha sido registrada con éxito.`,
          icon: 'success',
        });
       },
      error : (err) => {
        console.error('Error al registrar la categoria', err);
      }
    })
  }

  actualizarCategoria(): void{
    this.categoriaService.actualizarCategoria(this.categoriaActual()).subscribe({
      next : () => {
        this.enrutador.navigate(['/listaDeCategoria']);
        Swal.fire({
          title: 'Categoria Actualizada!',
          text: `La categoria ${this.categoriaActual().nombreCategoria} ha sido actualizada con éxito.`,
          icon: 'success',
        });
       },
      error : (err) => {
        console.error('Error al actualizar la categoria', err);
      }
    })
  }

}
