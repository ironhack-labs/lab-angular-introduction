import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComponentEquipoComponent } from './component-equipo/component-equipo.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentEquipoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
