import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NbachampionsComponentComponent } from './nbachampions-component/nbachampions-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NbachampionsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
