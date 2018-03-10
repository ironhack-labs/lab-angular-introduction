import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { ChampionsComponent } from './components/champions/champions.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ChampionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
