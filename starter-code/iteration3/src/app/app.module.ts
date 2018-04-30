import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NbachampsComponent } from './nbachamps/nbachamps.component';


@NgModule({
  declarations: [
    AppComponent,
    NbachampsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
