import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChampionsLeagueComponent } from './champions-league/champions-league.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsLeagueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
