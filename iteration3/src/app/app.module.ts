import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChampionTeamsComponent } from './champion-teams/champion-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionTeamsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
