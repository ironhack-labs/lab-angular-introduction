import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IterationComponent } from './iteration/iteration.component';
import { Iteration1Component } from './iteration-1/iteration-1.component';

@NgModule({
  declarations: [
    AppComponent,
    IterationComponent,
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
