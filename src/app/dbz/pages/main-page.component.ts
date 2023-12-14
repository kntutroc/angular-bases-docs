import { Component } from '@angular/core';
import { Personaje } from '../components/interfaces/personajes.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  constructor( public dbzService: DbzService) {}

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  eliminarPersonaje(id: string): void {
    this.dbzService.onEliminarPersonaje(id);
  }

  onNewPersonaje(personaje: Personaje): void {
    this.dbzService.addPersonaje(personaje);
  }
}
