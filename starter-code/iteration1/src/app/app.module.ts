import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Card1Component } from './components/card1/card1.component';
import { Card2Component } from './components/card2/card2.component';
import { Card3Component } from './components/card3/card3.component';

@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    Card2Component,
    Card3Component
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
