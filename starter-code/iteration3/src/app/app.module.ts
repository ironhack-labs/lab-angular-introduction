import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NBAComponentComponent } from './nbacomponent/nbacomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NBAComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
