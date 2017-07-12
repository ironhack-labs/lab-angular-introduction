import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IterationTwoComponent } from './iteration-two/iteration-two.component';

@NgModule({
  declarations: [
    AppComponent,
    IterationTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
