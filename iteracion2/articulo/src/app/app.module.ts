import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { CoentariosComponent } from './coentarios/coentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    CoentariosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
