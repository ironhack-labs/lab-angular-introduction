import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChampionshipsComponent } from './championships/championships.component';
import { BestPlayersComponent } from './best-players/best-players.component';


@NgModule({
  declarations: [
    AppComponent,
    ChampionshipsComponent,
    BestPlayersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
