import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  tituloCalculadora : string = "Operaciones Basicas";
  resultadoOperacion : number = 0;
  primerNumero : number = 10;
  segundoNumero : number = 10;

  sumar(): void{
    this.resultadoOperacion = this.primerNumero + this.segundoNumero;
  }

  restar(): void{
    this.resultadoOperacion = this.primerNumero - this.segundoNumero;
  }

  multiplicar(): void{
    this.resultadoOperacion = this.primerNumero * this.segundoNumero;
  }

  dividir(): void{
    if(this.segundoNumero != 0){
      this.resultadoOperacion = this.primerNumero / this.segundoNumero;
    }else{
      alert("No se puede dividir entre cero");
    }
  }

}
