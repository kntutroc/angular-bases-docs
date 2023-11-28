import { Component } from '@angular/core';

interface CentroEducativo {
  nombre: string;
  localidad: string;
  familiasProfesionales: string[];
  centro: string;

}

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent {
  centrosEducativos: CentroEducativo[] = [
    {
      nombre: "IES Playamar",
      localidad: "Torremolinos",
      familiasProfesionales: ["Informática y Comunicaciones", "Transporte y Mantenimiento"],
      centro: "IES Playamar"
    },
    {
      nombre: "IES Jacaranda",
      localidad: "Churriana",
      familiasProfesionales: ["Hostelería", "Turismo"],
      centro: "IES Jacaranda"
    },
    {
      nombre: "IES Campanillas",
      localidad: "Campanillas",
      familiasProfesionales: ["Informática y comunicaciones"],
      centro: "IES Campanillas"
    }
  ];

  centrosEliminados: CentroEducativo[] = [];
  indiceCentroSeleccionado = 0;

  get centroSeleccionado(): CentroEducativo | undefined {
    return this.centrosEducativos[this.indiceCentroSeleccionado];
  }

  get puedeRetroceder(): boolean {
    return this.indiceCentroSeleccionado > 0;
  }

  get puedeAvanzar(): boolean {
    return this.indiceCentroSeleccionado < this.centrosEducativos.length - 1;
  }

  anteriorCentro(): void {
    if (this.puedeRetroceder) {
      this.indiceCentroSeleccionado--;
    }
  }

  eliminarCentro(): void {
    const centroEliminado = this.centrosEducativos.splice(this.indiceCentroSeleccionado, 1)[0];
    this.centrosEliminados.push(centroEliminado);

    if (this.indiceCentroSeleccionado >= this.centrosEducativos.length) {
      this.indiceCentroSeleccionado = this.centrosEducativos.length - 1;
    }
  }

  insertarCentro(): void {
    if (this.centrosEliminados.length > 0) {
      this.centrosEducativos.splice(this.indiceCentroSeleccionado, 0, this.centrosEliminados.pop()!);
    }
  }

  posteriorCentro(): void {
    if (this.puedeAvanzar) {
      this.indiceCentroSeleccionado++;
    }
  }
}
