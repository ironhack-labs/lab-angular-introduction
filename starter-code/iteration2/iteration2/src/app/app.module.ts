import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyIteration2Component } from './my-iteration2/my-iteration2.component';


@NgModule({
  declarations: [
    AppComponent,
    MyIteration2Component,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
