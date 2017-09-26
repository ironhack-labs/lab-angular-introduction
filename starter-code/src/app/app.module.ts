import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { MainComponent } from './main/main.component';
import { ChampionshipComponent } from './championship/championship.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    MainComponent,
    ChampionshipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
