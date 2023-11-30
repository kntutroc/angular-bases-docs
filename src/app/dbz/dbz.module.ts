import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddPersonajeComponent } from './components/addPersonaje/addPersonaje.component';
import { ListaComponent } from './components/lista/lista.component';
import { MainPageComponent } from './pages/main-page.component';




@NgModule({
  declarations: [
    MainPageComponent, ListaComponent, AddPersonajeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent, ListaComponent, AddPersonajeComponent
  ]
})
export class DbzModule { }
