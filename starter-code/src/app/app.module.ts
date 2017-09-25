import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Iteration1Component } from './iteration1/iteration1.component';
import { Iteration2Component } from './iteration2/iteration2.component';
import { Iteration2CommentsComponent } from './iteration2/iteration-2-comments/iteration-2-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    Iteration1Component,
    Iteration2Component,
    Iteration2CommentsComponent
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
