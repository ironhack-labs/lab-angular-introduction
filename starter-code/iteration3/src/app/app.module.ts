import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyChampionshipsComponent } from './my-championships/my-championships.component';


@NgModule({
  declarations: [
    AppComponent,
    MyChampionshipsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
