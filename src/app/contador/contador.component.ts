import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.html'

})

export class ContadorComponent {
  public title: string = 'Contador';
  public numero: number = 0;


  incrementarPor(numero: number): number {
    return this.numero += numero
  }

  restarPor(numero: number): number {
    return this.numero -= numero

  }

  reset(numero: number): number {
    return this.numero = numero
  }
}
