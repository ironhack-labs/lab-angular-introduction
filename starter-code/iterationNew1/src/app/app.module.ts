import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import {AppComponent} from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- This is what adds ngModel
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }