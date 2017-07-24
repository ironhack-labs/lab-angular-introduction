import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Iteration1Component } from './iteration-1/iteration-1.component';
import { Iteration2Component } from './iteration-2/iteration-2.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './comments/comments.component';
import { Iteration3Component } from './iteration-3/iteration-3.component';

@NgModule({
  declarations: [
    AppComponent,
    Iteration1Component,
    Iteration2Component,
    MainComponent,
    CommentsComponent,
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
