import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChampionschampionsComponent } from './components/championschampions/championschampions.component';


@NgModule({
  declarations: [
    AppComponent,
    ChampionschampionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
