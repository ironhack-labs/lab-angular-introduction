import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyChampionshipComponentsComponent } from './my-championship-components/my-championship-components.component';


@NgModule({
  declarations: [
    AppComponent,
    MyChampionshipComponentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
