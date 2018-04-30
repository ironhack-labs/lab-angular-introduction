import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NbaChampionsComponent } from './components/nba-champions/nba-champions.component';


@NgModule({
  declarations: [
    AppComponent,
    NbaChampionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
