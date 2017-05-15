import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { ArticleComponent } from './article/article.component';
import { MainComponent } from './article/main/main.component';
import { CommentsComponent } from './article/comments/comments.component';
import { NbaComponent } from './nba/nba.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArticleComponent,
    MainComponent,
    CommentsComponent,
    NbaComponent
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
