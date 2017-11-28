import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NbaChampsComponentComponent } from './nba-champs-component/nba-champs-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NbaChampsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
