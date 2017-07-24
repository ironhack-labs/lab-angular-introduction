import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';
import { NbaChampionsComponent } from './nba-champions/nba-champions.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    NbaChampionsComponent
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
