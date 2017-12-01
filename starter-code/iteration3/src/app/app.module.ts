import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChampionshipComponentComponent } from './championship-component/championship-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ChampionshipComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
