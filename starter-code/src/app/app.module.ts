import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Iteration2Component } from './iteration2/iteration2.component';
import { Iteration3Component } from './iteration3/iteration3.component';
import { Iteration1Component } from './iteration1/iteration1.component';

@NgModule({
  declarations: [
    AppComponent,
    Iteration2Component,
    Iteration3Component,
    Iteration1Component
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
