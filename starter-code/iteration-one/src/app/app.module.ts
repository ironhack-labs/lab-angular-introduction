import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoGaleryComponent } from './photo-galery/photo-galery.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoGaleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
