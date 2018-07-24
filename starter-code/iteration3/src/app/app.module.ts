import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { nbaDashboard } from './app.component';

@NgModule({
  declarations: [
    nbaDashboard
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [nbaDashboard]
})
export class AppModule { }
