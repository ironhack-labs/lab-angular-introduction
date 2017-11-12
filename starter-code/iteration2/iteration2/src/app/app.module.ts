import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyIteration2Component } from './my-iteration2/my-iteration2.component';
import { FormsModule } from '@angular/forms';
import { MyIteration3Component } from './my-iteration3/my-iteration3.component';

@NgModule({
  declarations: [
    AppComponent,
    MyIteration2Component,
    MyIteration3Component,

  ],
  imports: [
    BrowserModule
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
