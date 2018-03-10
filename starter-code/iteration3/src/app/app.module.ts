import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChampionShipsComponent } from './components/champion-ships/champion-ships.component';


@NgModule({
  declarations: [
    AppComponent,
    ChampionShipsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
