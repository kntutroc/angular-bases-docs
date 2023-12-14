import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';


@Component({
  selector: 'app-main-page-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent {
  @Input('miLista')
  public listaPersonajes: Personaje[] = [{
    nombre: 'Trunks',
    fuerza: 70000
  }];

  @Output() onEliminarPersonaje: EventEmitter<string> = new EventEmitter();

  public eliminarPersonaje(id: string | undefined): void {
    this.onEliminarPersonaje.emit(id);
  }

}
