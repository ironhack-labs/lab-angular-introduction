import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChampionshipsComponentComponent } from './championships-component/championships-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ChampionshipsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
