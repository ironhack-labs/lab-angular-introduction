import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChampionsNbaComponent } from './champions-nba/champions-nba.component';


@NgModule({
  declarations: [
    AppComponent,
    ChampionsNbaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
