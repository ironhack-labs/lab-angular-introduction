import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { Iteration2Component } from './iteration2/iteration2.component';
import { Iteration3Component } from './iteration3/iteration3.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    Iteration2Component,
    Iteration3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
