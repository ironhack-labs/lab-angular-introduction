import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Photo1Component } from './photo1/photo1.component';
import { Photo2Component } from './photo2/photo2.component';
import { Photo3Component } from './photo3/photo3.component';

@NgModule({
  declarations: [
    AppComponent,
    Photo1Component,
    Photo2Component,
    Photo3Component
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
