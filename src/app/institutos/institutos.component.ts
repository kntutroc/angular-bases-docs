import { Component } from '@angular/core';

@Component({
  selector: 'app-institutos',
  templateUrl: './institutos.component.html'
})

export class InstitutosComponent {


  constructor() { }

  centroEducativo: string = "IES Playamar"
  localidad: string = "Torremolinos"
  familiasProfesionales: string[] = ["Informática y Comunicaciones", "Transporte y Mantenimiento"]
  centro: string = "IES Playamar"
  logo: string = "assets/logoplayamar.png"


  cambiarInstituto(): void {
    this.centroEducativo = "IES Jacaranda"
    this.localidad = "Churriana"
    this.familiasProfesionales = ["Hostelería", "Turismo"]
    this.centro = "IES Jacaranda"
    this.logo = "assets/logojacaranda.png"
  }

}

export interface ICentrosEducativos {
  centroEducativo: string,
  localidad: string,
  familiasProfesionales: string[],
  centro: string
}
