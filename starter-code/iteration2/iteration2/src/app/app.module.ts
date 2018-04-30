import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ComentsComponent } from './components/coments/coments.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ComentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
