import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  applicationTitle: string = 'Entrega final del proyecto de Angular';
  authorName: string = 'Mateo Medina Alexis Antonio';
}
