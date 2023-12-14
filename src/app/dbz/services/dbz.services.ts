import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Personaje } from '../components/interfaces/personajes.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public personajes: Personaje[] = [{
    id: uuid(),
    nombre: 'Krilin',
    fuerza: 500
  }, {
    id: uuid(),
    nombre: 'Goku',
    fuerza: 10000
  },
  {
    id: uuid(),
    nombre: 'Trunks',
    fuerza: 7000
  }];

  public addPersonaje(personaje: Personaje): void {
    const newPersonaje: Personaje = {
      id: uuid(),
      nombre: personaje.nombre,
      fuerza: personaje.fuerza,
    }
    this.personajes.push(newPersonaje)
  }

  public onEliminarPersonaje(id: string): void {
    this.personajes = this.personajes.filter(personaje => personaje.id !== id);
      console.log(`Se ha eliminado el personaje con ID: ${id}.`);
    }
}

