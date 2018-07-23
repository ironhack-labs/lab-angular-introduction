import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NbaChampionshipComponent } from './nba-championship/nba-championship.component';

@NgModule({
  declarations: [
    AppComponent,
    NbaChampionshipComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
