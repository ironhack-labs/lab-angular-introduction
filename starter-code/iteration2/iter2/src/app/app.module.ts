import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Added to every proj, FormsMod-similiar to bodyparser

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- This is what adds ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
