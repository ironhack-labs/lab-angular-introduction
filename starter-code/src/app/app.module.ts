import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CommentComponent } from './comment/comment.component';
import { NbaChampionshipsComponent } from './nba-championships/nba-championships.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentComponent,
    NbaChampionshipsComponent
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
