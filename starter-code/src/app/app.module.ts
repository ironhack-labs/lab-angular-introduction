import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Iti1Component } from './iti1/iti1.component';
import { Iti2Component } from './iti2/iti2.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    Iti1Component,
    Iti2Component,
    MainComponent,
    CommentsComponent,
    Iti2Component
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
