import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';
import { InstitutosComponent } from './institutos/institutos.component';

@NgModule({
  declarations: [
    AppComponent, ContadorComponent, InstitutosComponent
  ],
  imports: [
    BrowserModule, HeroesModule, DbzModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/bases/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
