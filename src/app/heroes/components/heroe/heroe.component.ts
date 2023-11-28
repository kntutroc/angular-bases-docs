import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public nombre: String = "Goku"
  public edad: number = 10


  get nombreCapitalizado(): String {
    return this.nombre.toUpperCase()
  }

  get nombreEdad(): String {
    return this.nombre + " " + this.edad
  }

  cambiarNombre(): void {
    this.nombre = "Luffy"

  }

  cambiarEdad(): void {
    this.edad = 16
  }

}
