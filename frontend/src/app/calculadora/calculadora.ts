import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  imports: [],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  calculatorTitle: string = "Operaciones Basicas";
  operationResult: number = 0;
  firstNumber: number = 10;
  secondNumber: number = 10;

  sumar(): void {
    this.operationResult = this.firstNumber + this.secondNumber;
  }

  restar(): void {
    this.operationResult = this.firstNumber - this.secondNumber;
  }

  multiplicar(): void {
    this.operationResult = this.firstNumber * this.secondNumber;
  }

  dividir(): void {
    if (this.secondNumber != 0) {
      this.operationResult = this.firstNumber / this.secondNumber;
    } else {
      alert("No se puede dividir entre cero");
    }
  }
}
